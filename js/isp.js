/* ISP 九步处理 */
/* ---------- ISP 九步，用同一幅景物真实计算 ---------- */
{const Wi=96,Hi=64,N=Wi*Hi,cv=mkCanvas(Wi,Hi),g=cv.getContext('2d');drawScene(g,Wi,Hi);const d=g.getImageData(0,0,Wi,Hi).data,ch=(x,y)=>y%2?(x%2?2:1):(x%2?1:0);
 const MX=[[.78,.17,.05],[.12,.76,.12],[.04,.2,.76]],ILL=[.55,1,.7],BLK=64,FS=750,fall=(x,y)=>{const u=(x-Wi/2)/(Wi/2),v=(y-Hi/2)/(Wi/2);return 1-.38*(u*u+v*v);};
 const inv3=m=>{const[a,b,c]=m[0],[d2,e,f]=m[1],[g2,h,i]=m[2],A=e*i-f*h,B=-(d2*i-f*g2),C=d2*h-e*g2,D=a*A+b*B+c*C;return [[A/D,-(b*i-c*h)/D,(b*f-c*e)/D],[B/D,(a*i-c*g2)/D,-(a*f-c*d2)/D],[C/D,-(a*h-b*g2)/D,(a*e-b*d2)/D]];};
 const raw=new Float32Array(N);
 for(let y=0;y<Hi;y++)for(let x=0;x<Wi;x++){const o=(y*Wi+x)*4,k=ch(x,y),lin=[0,1,2].map(c=>Math.pow(d[o+c]/255,2.2)),e=(MX[k][0]*lin[0]+MX[k][1]*lin[1]+MX[k][2]*lin[2])*ILL[k]*fall(x,y)*3000;
   raw[y*Wi+x]=Math.max(0,Math.min(1023,Math.round(BLK+.25*(e+Math.sqrt(e)*gauss())+2*gauss())));}
 const mos=f=>{const a=new Float32Array(N);for(let n=0;n<N;n++)a[n]=f(n);return a;}, s1=mos(n=>Math.max(0,raw[n]-BLK)/FS), s2=mos(n=>s1[n]/fall(n%Wi,n/Wi|0));
 const rgb=f=>{const a=new Float32Array(N*3);for(let y=0;y<Hi;y++)for(let x=0;x<Wi;x++)f(x,y,a,(y*Wi+x)*3);return a;}, at=(a,x,y,c)=>a[(Math.min(Hi-1,Math.max(0,y))*Wi+Math.min(Wi-1,Math.max(0,x)))*3+c];
 const s3=rgb((x,y,a,o)=>{const s=[0,0,0],n=[0,0,0];for(let dy=-1;dy<=1;dy++)for(let dx=-1;dx<=1;dx++){const X=x+dx,Y=y+dy;if(X<0||Y<0||X>=Wi||Y>=Hi)continue;const k=ch(X,Y);s[k]+=s2[Y*Wi+X];n[k]++;}for(let c=0;c<3;c++)a[o+c]=s[c]/n[c];});
 const s4=rgb((x,y,a,o)=>{for(let c=0;c<3;c++)a[o+c]=s3[o+c]/ILL[c];}), IM=inv3(MX);
 const s5=rgb((x,y,a,o)=>{for(let c=0;c<3;c++)a[o+c]=Math.max(0,IM[c][0]*s4[o]+IM[c][1]*s4[o+1]+IM[c][2]*s4[o+2]);});
 const s6=rgb((x,y,a,o)=>{for(let c=0;c<3;c++){const v=Math.pow(Math.min(1,s5[o+c]),1/2.2);a[o+c]=.7*v+.3*v*v*(3-2*v);}});
 const s7=rgb((x,y,a,o)=>{for(let c=0;c<3;c++){let s=0,w=0;const v0=s6[o+c];for(let dy=-1;dy<=1;dy++)for(let dx=-1;dx<=1;dx++){const v=at(s6,x+dx,y+dy,c),q=Math.exp(-((v-v0)**2)/.008);s+=v*q;w+=q;}a[o+c]=s/w;}});
 const s8=rgb((x,y,a,o)=>{for(let c=0;c<3;c++){let b=0;for(let dy=-1;dy<=1;dy++)for(let dx=-1;dx<=1;dx++)b+=at(s7,x+dx,y+dy,c);a[o+c]=s7[o+c]+.8*(s7[o+c]-b/9);}});
 const show=(id,f)=>{const c=cx2(id),im=c.createImageData(Wi,Hi);for(let n=0;n<N;n++){const v=f(n);for(let k=0;k<3;k++)im.data[n*4+k]=255*Math.max(0,Math.min(1,v[k]));im.data[n*4+3]=255;}c.putImageData(im,0,0);};
 const tint=(a,n)=>{const k=ch(n%Wi,n/Wi|0),v=[0,0,0];v[k]=a[n]*1.3;return v;}, three=a=>n=>[a[n*3],a[n*3+1],a[n*3+2]];
 show('i0',n=>{const v=raw[n]/1023*1.25;return [v,v,v];});show('i1',n=>tint(s1,n));show('i2',n=>tint(s2,n));
 show('i3',three(s3));show('i4',three(s4));show('i5',three(s5));show('i6',three(s6));show('i7',three(s7));show('i8',three(s8));}
