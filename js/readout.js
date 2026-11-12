/* 噪声与信噪比、单斜率 ADC、卷帘与全局快门 */
/* ---------- 噪声与信噪比 ---------- */
function drawSnr(){const p=+$('np').value,rn=+$('nr').value,dk=+$('nd').value,FW=3500*p*p,c=cx2('snr'),Wc=330,Hc=200,L=40,B=26,X=v=>L+Math.log10(v)/6*(Wc-L-8),Y=v=>Hc-B-(Math.log10(v)+1)/4*(Hc-B-42);
  $('npo').value=p.toFixed(1)+' µm';$('nro').value=rn.toFixed(1)+' e⁻';$('ndo').value=dk+' e⁻';
  c.clearRect(0,0,Wc,Hc);c.font=FONT;c.strokeStyle='rgba(147,160,184,.25)';c.fillStyle='#93a0b8';c.lineWidth=1;
  for(let e=0;e<=6;e++){c.beginPath();c.moveTo(X(10**e),42);c.lineTo(X(10**e),Hc-B);c.stroke();c.fillText(e?'10'+'⁰¹²³⁴⁵⁶'[e]:'1',X(10**e)-7,Hc-B+13);}
  for(let e=-1;e<=3;e++){c.beginPath();c.moveTo(L,Y(10**e));c.lineTo(Wc-8,Y(10**e));c.stroke();c.fillText(String(10**e),4,Y(10**e)+4);}
  c.fillText('收到的电子数 →',Wc-110,Hc-2);c.fillText('信噪比',4,Y(1000)-6);
  const line=(f,col,dash)=>{c.strokeStyle=col;c.setLineDash(dash||[]);c.lineWidth=2;c.beginPath();for(let i=0;i<=240;i++){const S=10**(i/240*6);if(S>FW)break;const v=f(S);if(v<.1)continue;c.lineTo(X(S),Y(Math.min(1000,v)));}c.stroke();c.setLineDash([]);};
  line(S=>Math.sqrt(S),'#93a0b8',[4,4]);line(S=>S/Math.sqrt(S+rn*rn+dk),'#ffc45c');
  c.strokeStyle='#ef5a5f';c.lineWidth=1;c.beginPath();c.moveTo(X(FW),42);c.lineTo(X(FW),Hc-B);c.stroke();c.fillStyle='#ef5a5f';c.fillText('满阱',X(FW)-28,54);
  const dr=FW/Math.sqrt(rn*rn+dk);c.fillStyle='#e6ebf4';c.fillText(`满阱 ${Math.round(FW).toLocaleString()} e⁻　动态范围 ${(20*Math.log10(dr)).toFixed(0)} dB ≈ ${Math.log2(dr).toFixed(1)} 档`,4,13);
  c.fillStyle='#ffc45c';c.fillText('实线：实际信噪比',4,28);c.fillStyle='#93a0b8';c.fillText('虚线：只有散粒噪声的理想情况',120,28);
  const pc=cx2('npatch'),Pw=110,Ph=70;pc.font=FONT;[5,50,500].forEach((ph,k)=>{const S=ph*p*p*.7,n=Math.sqrt(S+rn*rn+dk),id=pc.createImageData(Pw,Ph);
    for(let i=0;i<Pw*Ph;i++){const v=Math.max(0,Math.min(255,128*(S+n*gauss())/S));id.data[i*4]=id.data[i*4+1]=id.data[i*4+2]=v;id.data[i*4+3]=255;}pc.putImageData(id,k*Pw,0);
    pc.fillStyle='rgba(13,20,32,.78)';pc.fillRect(k*Pw,Ph-30,Pw,30);pc.fillStyle='#e6ebf4';pc.fillText(`${Math.round(S).toLocaleString()} e⁻`,k*Pw+5,Ph-17);pc.fillText(`信噪比 ${(S/n).toFixed(1)}`,k*Pw+5,Ph-4);});}
['np','nr','nd'].forEach(id=>$(id).oninput=drawSnr);

/* ---------- 单斜率 ADC ---------- */
PANIM.adcwrap=t=>{const c=cx2('adcc'),Wc=330,Hc=210,ph=(t%6)/6,rp=Math.min(1,Math.max(0,(ph-.08)/.8)),V4=[.22,.58,.83,.41],cols=['#ef5a5f','#48c26a','#48c26a','#5a95ff'],pw=190,L=30,top=26,bot=Hc-34,Yv=v=>bot-v*(bot-top);
  c.clearRect(0,0,Wc,Hc);c.font=FONT;c.lineWidth=1;c.strokeStyle='rgba(147,160,184,.35)';c.strokeRect(L,top,pw,bot-top);c.fillStyle='#93a0b8';c.fillText('电压',2,top+8);c.fillText('时间（时钟数）→',L+pw-96,bot+14);
  V4.forEach((v,k)=>{c.strokeStyle=cols[k];c.setLineDash([3,3]);c.beginPath();c.moveTo(L,Yv(v));c.lineTo(L+pw,Yv(v));c.stroke();c.setLineDash([]);});
  c.strokeStyle='#e6ebf4';c.lineWidth=2;c.beginPath();c.moveTo(L,Yv(0));c.lineTo(L+rp*pw,Yv(rp));c.stroke();c.lineWidth=1;
  const cnt=Math.round(rp*1023);c.fillStyle='#e6ebf4';c.fillText(`斜坡电压 · 计数器 = ${cnt}`,L,14);c.fillStyle='#93a0b8';c.fillText('列  比较器  锁存值',L+pw+8,top+8);
  V4.forEach((v,k)=>{const fl=rp>=v,y=top+34+k*30;if(fl){c.fillStyle=cols[k];c.beginPath();c.arc(L+v*pw,Yv(v),4,0,7);c.fill();}
    c.fillStyle=cols[k];c.fillText(String(k+1),L+pw+12,y);c.fillStyle=fl?'#ffc45c':'#56657e';c.fillRect(L+pw+34,y-10,16,12);c.fillStyle=fl?'#e6ebf4':'#93a0b8';c.fillText(fl?String(Math.round(v*1023)):String(cnt),L+pw+66,y);});
  c.fillStyle='#93a0b8';c.fillText('虚线 = 各列像素电压；黄格 = 比较器已翻转，计数锁住',2,Hc-4);};

/* ---------- 卷帘快门 vs 全局快门 ---------- */
PANIM.shutwrap=t=>{const c=cx2('shc'),Wc=330,Hc=180,pw=155,ph=120,top=24,T=3,cyc=Math.floor(t/T),u=(t%T)/T,rd=Math.min(1,u/.8),Tr=1.2,bar=tt=>((tt*260)%(pw+40))-20;
  c.clearRect(0,0,Wc,Hc);c.font='12px ui-monospace,Menlo,monospace';
  [0,1].forEach(m=>{const x0=m*(pw+20),rows=Math.floor(rd*ph),t0=cyc*T;c.save();c.fillStyle='#0a0f18';c.fillRect(x0,top,pw,ph);c.fillStyle='#e6ebf4';c.fillText(m?'全局快门':'卷帘快门（逐行）',x0,16);
    c.beginPath();c.rect(x0,top,pw,ph);c.clip();c.fillStyle='#ffc45c';for(let y=0;y<(m?ph:rows);y++)c.fillRect(x0+bar(m?t0:t0+y/ph*Tr),top+y,14,1);
    if(!m&&rd<1){c.fillStyle='#4fd8e8';c.fillRect(x0,top+rows,pw,2);}c.restore();});
  c.fillStyle='#93a0b8';c.font=FONT;c.fillText('一根竖着的黄条在快速右移；青线是正在读出的那一行',0,Hc-8);};
