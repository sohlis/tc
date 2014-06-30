!function(e,t,r){"use strict";function n(r){if(s=t.documentElement,c=t.body,K(),Tt=this,r=r||{},At=r.constants||{},r.easing)for(var n in r.easing)U[n]=r.easing[n];$t=r.edgeStrategy||"set",kt={beforerender:r.beforerender,render:r.render,keyframe:r.keyframe},wt=r.forceHeight!==!1,wt&&(Et=r.scale||1),Ft=r.mobileDeceleration||x,Vt=r.smoothScrolling!==!1,zt=r.smoothScrollingDuration||E,qt={targetTop:Tt.getScrollTop()},_t=(r.mobileCheck||function(){return/Android|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent||navigator.vendor||e.opera)})(),_t?(St=t.getElementById("skrollr-body"),St&&at(),X(),dt(s,[y,S],[T])):dt(s,[y,b],[T]),Tt.refresh(),it(e,"resize orientationchange",function(){var e=s.clientWidth,t=s.clientHeight;(t!==Pt||e!==It)&&(Pt=t,It=e,Nt=!0)});var o=Y();return function a(){Z(),Yt=o(a)}(),Tt}var o={get:function(){return Tt},init:function(e){return Tt||new n(e)},VERSION:"0.6.25"},a=Object.prototype.hasOwnProperty,i=e.Math,l=e.getComputedStyle,s,c,f="touchstart",u="touchmove",m="touchcancel",p="touchend",d="skrollable",g=d+"-before",v=d+"-between",h=d+"-after",y="skrollr",T="no-"+y,b=y+"-desktop",S=y+"-mobile",k="linear",w=1e3,x=.004,E=200,A="start",F="end",C="center",D="bottom",H="___skrollable_id",I=/^(?:input|textarea|button|select)$/i,P=/^\s+|\s+$/g,N=/^data(?:-(_\w+))?(?:-?(-?\d*\.?\d+p?))?(?:-?(start|end|top|center|bottom))?(?:-?(top|center|bottom))?$/,O=/\s*(@?[\w\-\[\]]+)\s*:\s*(.+?)\s*(?:;|$)/gi,V=/^([a-z\-]+)\[(\w+)\]$/,z=/-([a-z0-9_])/g,q=function(e,t){return t.toUpperCase()},L=/[\-+]?[\d]*\.?[\d]+/g,M=/\{\?\}/g,$=/rgba?\(\s*-?\d+\s*,\s*-?\d+\s*,\s*-?\d+/g,_=/[a-z\-]+-gradient/g,B="",G="",K=function(){var e=/^(?:O|Moz|webkit|ms)|(?:-(?:o|moz|webkit|ms)-)/;if(l){var t=l(c,null);for(var r in t)if(B=r.match(e)||+r==r&&t[r].match(e))break;if(!B)return void(B=G="");B=B[0],"-"===B.slice(0,1)?(G=B,B={"-webkit-":"webkit","-moz-":"Moz","-ms-":"ms","-o-":"O"}[B]):G="-"+B.toLowerCase()+"-"}},Y=function(){var t=e.requestAnimationFrame||e[B.toLowerCase()+"RequestAnimationFrame"],r=ht();return(_t||!t)&&(t=function(t){var n=ht()-r,o=i.max(0,1e3/60-n);return e.setTimeout(function(){r=ht(),t()},o)}),t},R=function(){var t=e.cancelAnimationFrame||e[B.toLowerCase()+"CancelAnimationFrame"];return(_t||!t)&&(t=function(t){return e.clearTimeout(t)}),t},U={begin:function(){return 0},end:function(){return 1},linear:function(e){return e},quadratic:function(e){return e*e},cubic:function(e){return e*e*e},swing:function(e){return-i.cos(e*i.PI)/2+.5},sqrt:function(e){return i.sqrt(e)},outCubic:function(e){return i.pow(e-1,3)+1},bounce:function(e){var t;if(.5083>=e)t=3;else if(.8489>=e)t=9;else if(.96208>=e)t=27;else{if(!(.99981>=e))return 1;t=91}return 1-i.abs(3*i.cos(e*t*1.028)/t)}};n.prototype.refresh=function(e){var n,o,a=!1;for(e===r?(a=!0,bt=[],Mt=0,e=t.getElementsByTagName("*")):e.length===r&&(e=[e]),n=0,o=e.length;o>n;n++){var i=e[n],l=i,s=[],c=Vt,f=$t,u=!1;if(a&&H in i&&delete i[H],i.attributes){for(var m=0,p=i.attributes.length;p>m;m++){var g=i.attributes[m];if("data-anchor-target"!==g.name)if("data-smooth-scrolling"!==g.name)if("data-edge-strategy"!==g.name)if("data-emit-events"!==g.name){var v=g.name.match(N);if(null!==v){var h={props:g.value,element:i,eventType:g.name.replace(z,q)};s.push(h);var y=v[1];y&&(h.constant=y.substr(1));var T=v[2];/p$/.test(T)?(h.isPercentage=!0,h.offset=(0|T.slice(0,-1))/100):h.offset=0|T;var b=v[3],S=v[4]||b;b&&b!==A&&b!==F?(h.mode="relative",h.anchors=[b,S]):(h.mode="absolute",b===F?h.isEnd=!0:h.isPercentage||(h.offset=h.offset*Et))}}else u=!0;else f=g.value;else c="off"!==g.value;else if(l=t.querySelector(g.value),null===l)throw'Unable to find anchor target "'+g.value+'"'}if(s.length){var k,w,x;!a&&H in i?(x=i[H],k=bt[x].styleAttr,w=bt[x].classAttr):(x=i[H]=Mt++,k=i.style.cssText,w=pt(i)),bt[x]={element:i,styleAttr:k,classAttr:w,anchorTarget:l,keyFrames:s,smoothScrolling:c,edgeStrategy:f,emitEvents:u,lastFrameIndex:-1},dt(i,[d],[])}}}for(ft(),n=0,o=e.length;o>n;n++){var E=bt[e[n][H]];E!==r&&(J(E),et(E))}return Tt},n.prototype.relativeToAbsolute=function(e,t,r){var n=s.clientHeight,o=e.getBoundingClientRect(),a=o.top,i=o.bottom-o.top;return t===D?a-=n:t===C&&(a-=n/2),r===D?a+=i:r===C&&(a+=i/2),a+=Tt.getScrollTop(),a+.5|0},n.prototype.animateTo=function(e,t){t=t||{};var n=ht(),o=Tt.getScrollTop();return Ot={startTop:o,topDiff:e-o,targetTop:e,duration:t.duration||w,startTime:n,endTime:n+(t.duration||w),easing:U[t.easing||k],done:t.done},Ot.topDiff||(Ot.done&&Ot.done.call(Tt,!1),Ot=r),Tt},n.prototype.stopAnimateTo=function(){Ot&&Ot.done&&Ot.done.call(Tt,!0),Ot=r},n.prototype.isAnimatingTo=function(){return!!Ot},n.prototype.isMobile=function(){return _t},n.prototype.setScrollTop=function(t,r){return Lt=r===!0,_t?Bt=i.min(i.max(t,0),xt):e.scrollTo(0,t),Tt},n.prototype.getScrollTop=function(){return _t?Bt:e.pageYOffset||s.scrollTop||c.scrollTop||0},n.prototype.getMaxScrollTop=function(){return xt},n.prototype.on=function(e,t){return kt[e]=t,Tt},n.prototype.off=function(e){return delete kt[e],Tt},n.prototype.destroy=function(){var e=R();e(Yt),st(),dt(s,[T],[y,b,S]);for(var t=0,n=bt.length;n>t;t++)ot(bt[t].element);s.style.overflow=c.style.overflow="",s.style.height=c.style.height="",St&&o.setStyle(St,"transform","none"),Tt=r,St=r,kt=r,wt=r,xt=0,Et=1,At=r,Ft=r,Ct="down",Dt=-1,It=0,Pt=0,Nt=!1,Ot=r,Vt=r,zt=r,qt=r,Lt=r,Mt=0,$t=r,_t=!1,Bt=0,Gt=r};var X=function(){var n,o,a,l,d,g,v,h,y,T,b,S;it(s,[f,u,m,p].join(" "),function(e){var s=e.changedTouches[0];for(l=e.target;3===l.nodeType;)l=l.parentNode;switch(d=s.clientY,g=s.clientX,T=e.timeStamp,I.test(l.tagName)||e.preventDefault(),e.type){case f:n&&n.blur(),Tt.stopAnimateTo(),n=l,o=v=d,a=g,y=T;break;case u:I.test(l.tagName)&&t.activeElement!==l&&e.preventDefault(),h=d-v,S=T-b,Tt.setScrollTop(Bt-h,!0),v=d,b=T;break;default:case m:case p:var c=o-d,k=a-g,w=k*k+c*c;if(49>w){if(!I.test(n.tagName)){n.focus();var x=t.createEvent("MouseEvents");x.initMouseEvent("click",!0,!0,e.view,1,s.screenX,s.screenY,s.clientX,s.clientY,e.ctrlKey,e.altKey,e.shiftKey,e.metaKey,0,null),n.dispatchEvent(x)}return}n=r;var E=h/S;E=i.max(i.min(E,3),-3);var A=i.abs(E/Ft),F=E*A+.5*Ft*A*A,C=Tt.getScrollTop()-F,D=0;C>xt?(D=(xt-C)/F,C=xt):0>C&&(D=-C/F,C=0),A*=1-D,Tt.animateTo(C+.5|0,{easing:"outCubic",duration:A})}}),e.scrollTo(0,0),s.style.overflow=c.style.overflow="hidden"},j=function(){var e=s.clientHeight,t=ut(),r,n,o,a,l,c,f,u,m,p,d;for(u=0,m=bt.length;m>u;u++)for(r=bt[u],n=r.element,o=r.anchorTarget,a=r.keyFrames,l=0,c=a.length;c>l;l++)f=a[l],p=f.offset,d=t[f.constant]||0,f.frame=p,f.isPercentage&&(p*=e,f.frame=p),"relative"===f.mode&&(ot(n),f.frame=Tt.relativeToAbsolute(o,f.anchors[0],f.anchors[1])-p,ot(n,!0)),f.frame+=d,wt&&!f.isEnd&&f.frame>xt&&(xt=f.frame);for(xt=i.max(xt,mt()),u=0,m=bt.length;m>u;u++){for(r=bt[u],a=r.keyFrames,l=0,c=a.length;c>l;l++)f=a[l],d=t[f.constant]||0,f.isEnd&&(f.frame=xt-f.offset+d);r.keyFrames.sort(yt)}},W=function(e,t){for(var r=0,n=bt.length;n>r;r++){var i=bt[r],l=i.element,s=i.smoothScrolling?e:t,c=i.keyFrames,f=c.length,u=c[0],m=c[c.length-1],p=s<u.frame,y=s>m.frame,T=p?u:m,b=i.emitEvents,S=i.lastFrameIndex,k,w;if(p||y){if(p&&-1===i.edge||y&&1===i.edge)continue;switch(p?(dt(l,[g],[h,v]),b&&S>-1&&(ct(l,u.eventType,Ct),i.lastFrameIndex=-1)):(dt(l,[h],[g,v]),b&&f>S&&(ct(l,m.eventType,Ct),i.lastFrameIndex=f)),i.edge=p?-1:1,i.edgeStrategy){case"reset":ot(l);continue;case"ease":s=T.frame;break;default:case"set":var x=T.props;for(k in x)a.call(x,k)&&(w=nt(x[k].value),0===k.indexOf("@")?l.setAttribute(k.substr(1),w):o.setStyle(l,k,w));continue}}else 0!==i.edge&&(dt(l,[d,v],[g,h]),i.edge=0);for(var E=0;f-1>E;E++)if(s>=c[E].frame&&s<=c[E+1].frame){var A=c[E],F=c[E+1];for(k in A.props)if(a.call(A.props,k)){var C=(s-A.frame)/(F.frame-A.frame);C=A.props[k].easing(C),w=rt(A.props[k].value,F.props[k].value,C),w=nt(w),0===k.indexOf("@")?l.setAttribute(k.substr(1),w):o.setStyle(l,k,w)}b&&S!==E&&("down"===Ct?ct(l,A.eventType,Ct):ct(l,F.eventType,Ct),i.lastFrameIndex=E);break}}},Z=function(){Nt&&(Nt=!1,ft());var e=Tt.getScrollTop(),t,n=ht(),a;if(Ot)n>=Ot.endTime?(e=Ot.targetTop,t=Ot.done,Ot=r):(a=Ot.easing((n-Ot.startTime)/Ot.duration),e=Ot.startTop+a*Ot.topDiff|0),Tt.setScrollTop(e,!0);else if(!Lt){var i=qt.targetTop-e;i&&(qt={startTop:Dt,topDiff:e-Dt,targetTop:e,startTime:Ht,endTime:Ht+zt}),n<=qt.endTime&&(a=U.sqrt((n-qt.startTime)/zt),e=qt.startTop+a*qt.topDiff|0)}if(_t&&St&&o.setStyle(St,"transform","translate(0, "+-Bt+"px) "+Gt),Lt||Dt!==e){Ct=e>Dt?"down":Dt>e?"up":Ct,Lt=!1;var l={curTop:e,lastTop:Dt,maxTop:xt,direction:Ct},s=kt.beforerender&&kt.beforerender.call(Tt,l);s!==!1&&(W(e,Tt.getScrollTop()),Dt=e,kt.render&&kt.render.call(Tt,l)),t&&t.call(Tt,!1)}Ht=n},J=function(e){for(var t=0,r=e.keyFrames.length;r>t;t++){for(var n=e.keyFrames[t],o,a,i,l={},s;null!==(s=O.exec(n.props));)i=s[1],a=s[2],o=i.match(V),null!==o?(i=o[1],o=o[2]):o=k,a=a.indexOf("!")?Q(a):[a.slice(1)],l[i]={value:a,easing:U[o]};n.props=l}},Q=function(e){var t=[];return $.lastIndex=0,e=e.replace($,function(e){return e.replace(L,function(e){return e/255*100+"%"})}),G&&(_.lastIndex=0,e=e.replace(_,function(e){return G+e})),e=e.replace(L,function(e){return t.push(+e),"{?}"}),t.unshift(e),t},et=function(e){var t={},r,n;for(r=0,n=e.keyFrames.length;n>r;r++)tt(e.keyFrames[r],t);for(t={},r=e.keyFrames.length-1;r>=0;r--)tt(e.keyFrames[r],t)},tt=function(e,t){var r;for(r in t)a.call(e.props,r)||(e.props[r]=t[r]);for(r in e.props)t[r]=e.props[r]},rt=function(e,t,r){var n,o=e.length;if(o!==t.length)throw"Can't interpolate between \""+e[0]+'" and "'+t[0]+'"';var a=[e[0]];for(n=1;o>n;n++)a[n]=e[n]+(t[n]-e[n])*r;return a},nt=function(e){var t=1;return M.lastIndex=0,e[0].replace(M,function(){return e[t++]})},ot=function(e,t){e=[].concat(e);for(var r,n,o=0,a=e.length;a>o;o++)n=e[o],r=bt[n[H]],r&&(t?(n.style.cssText=r.dirtyStyleAttr,dt(n,r.dirtyClassAttr)):(r.dirtyStyleAttr=n.style.cssText,r.dirtyClassAttr=pt(n),n.style.cssText=r.styleAttr,dt(n,r.classAttr)))},at=function(){Gt="translateZ(0)",o.setStyle(St,"transform",Gt);var e=l(St),t=e.getPropertyValue("transform"),r=e.getPropertyValue(G+"transform"),n=t&&"none"!==t||r&&"none"!==r;n||(Gt="")};o.setStyle=function(e,t,r){var n=e.style;if(t=t.replace(z,q).replace("-",""),"zIndex"===t)n[t]=isNaN(r)?r:""+(0|r);else if("float"===t)n.styleFloat=n.cssFloat=r;else try{B&&(n[B+t.slice(0,1).toUpperCase()+t.slice(1)]=r),n[t]=r}catch(o){}};var it=o.addEvent=function(t,r,n){var o=function(t){return t=t||e.event,t.target||(t.target=t.srcElement),t.preventDefault||(t.preventDefault=function(){t.returnValue=!1,t.defaultPrevented=!0}),n.call(this,t)};r=r.split(" ");for(var a,i=0,l=r.length;l>i;i++)a=r[i],t.addEventListener?t.addEventListener(a,n,!1):t.attachEvent("on"+a,o),Kt.push({element:t,name:a,listener:n})},lt=o.removeEvent=function(e,t,r){t=t.split(" ");for(var n=0,o=t.length;o>n;n++)e.removeEventListener?e.removeEventListener(t[n],r,!1):e.detachEvent("on"+t[n],r)},st=function(){for(var e,t=0,r=Kt.length;r>t;t++)e=Kt[t],lt(e.element,e.name,e.listener);Kt=[]},ct=function(e,t,r){kt.keyframe&&kt.keyframe.call(Tt,e,t,r)},ft=function(){var e=Tt.getScrollTop();xt=0,wt&&!_t&&(c.style.height=""),j(),wt&&!_t&&(c.style.height=xt+s.clientHeight+"px"),_t?Tt.setScrollTop(i.min(Tt.getScrollTop(),xt)):Tt.setScrollTop(e,!0),Lt=!0},ut=function(){var e=s.clientHeight,t={},r,n;for(r in At)n=At[r],"function"==typeof n?n=n.call(Tt):/p$/.test(n)&&(n=n.slice(0,-1)/100*e),t[r]=n;return t},mt=function(){var e=St&&St.offsetHeight||0,t=i.max(e,c.scrollHeight,c.offsetHeight,s.scrollHeight,s.offsetHeight,s.clientHeight);return t-s.clientHeight},pt=function(t){var r="className";return e.SVGElement&&t instanceof e.SVGElement&&(t=t[r],r="baseVal"),t[r]},dt=function(t,n,o){var a="className";if(e.SVGElement&&t instanceof e.SVGElement&&(t=t[a],a="baseVal"),o===r)return void(t[a]=n);for(var i=t[a],l=0,s=o.length;s>l;l++)i=vt(i).replace(vt(o[l])," ");i=gt(i);for(var c=0,f=n.length;f>c;c++)-1===vt(i).indexOf(vt(n[c]))&&(i+=" "+n[c]);t[a]=gt(i)},gt=function(e){return e.replace(P,"")},vt=function(e){return" "+e+" "},ht=Date.now||function(){return+new Date},yt=function(e,t){return e.frame-t.frame},Tt,bt,St,kt,wt,xt=0,Et=1,At,Ft,Ct="down",Dt=-1,Ht=ht(),It=0,Pt=0,Nt=!1,Ot,Vt,zt,qt,Lt,Mt=0,$t,_t=!1,Bt=0,Gt,Kt=[],Yt;"function"==typeof define&&define.amd?define("skrollr",function(){return o}):"undefined"!=typeof module&&module.exports?module.exports=o:e.skrollr=o}(window,document);