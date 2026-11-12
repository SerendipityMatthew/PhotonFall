/* Route pure functions — no dependencies, no imports */

/**
 * Parse a URL hash into a Route object.
 * Valid forms:
 *   #/step/<n>   where 0 <= n <= maxStep (integer)
 *   #/timeline
 *   #/timeline/<id>
 * Everything else falls back to {view:'step', n:0}.
 */
function parseRoute(hash, maxStep) {
  if (typeof hash === 'string') {
    var stepMatch = hash.match(/^#\/step\/(\d+)$/);
    if (stepMatch) {
      var n = Number(stepMatch[1]);
      if (Number.isInteger(n) && n >= 0 && n <= maxStep) {
        return { view: 'step', n: n };
      }
      return { view: 'step', n: 0 };
    }

    var timelineMatch = hash.match(/^#\/timeline(?:\/([^/]+))?$/);
    if (timelineMatch) {
      return { view: 'timeline', id: timelineMatch[1] !== undefined ? timelineMatch[1] : null };
    }
  }

  return { view: 'step', n: 0 };
}

/**
 * Serialise a Route back to a hash string.
 *   {view:'step', n:5}              -> '#/step/5'
 *   {view:'timeline', id:null}      -> '#/timeline'
 *   {view:'timeline', id:'bsi'}     -> '#/timeline/bsi'
 */
function routeHash(r) {
  if (r.view === 'step') {
    return '#/step/' + r.n;
  }
  if (r.view === 'timeline') {
    return r.id ? '#/timeline/' + r.id : '#/timeline';
  }
  return '#/step/0';
}

/**
 * Decide whether navigating from→to should push a new history entry or
 * replace the current one.
 *
 * Returns 'replace' when:
 *   - from is null  (initial page load)
 *   - both routes are steps in the same chapter (chOf returns the same value)
 * Returns 'push' in all other cases.
 */
function historyMode(from, to, chOf) {
  if (from === null) return 'replace';

  if (from.view === 'step' && to.view === 'step') {
    if (chOf(from.n) === chOf(to.n)) return 'replace';
  }

  return 'push';
}
