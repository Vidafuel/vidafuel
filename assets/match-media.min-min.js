window.matchMedia||(window.matchMedia=function(e){var t,i=(u=e.document).documentElement,n=[],s=0,l="",r={},a=/\s*(only|not)?\s*(screen|print|[a-z\-]+)\s*(and)?\s*/i,d=/^\s*\(\s*(-[a-z]+-)?(min-|max-)?([a-z\-]+)\s*(:?\s*([0-9]+(\.[0-9]+)?|portrait|landscape)(px|em|dppx|dpcm|rem|%|in|cm|mm|ex|pt|pc|\/([0-9]+(\.[0-9]+)?))?)?\s*\)\s*$/,c=0,o=function(e){var t=-1!==e.indexOf(",")&&e.split(",")||[e],i=t.length-1,n=i,s=null,c=null,o="",m=0,h=!1,p="",u="",f=(s=null,c=0,u=null,""),x="",v="",g="",w="";f=!1;if(""===e)return!0;do{if(h=!1,(c=(s=t[n-i]).match(a))&&(o=c[0],m=c.index),!c||-1===s.substring(0,m).indexOf("(")&&(m||!c[3]&&o!==c.input))f=!1;else{if(u=s,h="not"===c[1],m||(p=c[2],u=s.substring(o.length)),f=p===l||"all"===p||""===p,c=(s=-1!==u.indexOf(" and ")&&u.split(" and ")||[u]).length-1,f&&0<=c&&""!==u)do{if(!(u=s[c].match(d))||!r[u[3]]){f=!1;break}if(f=u[2],g=x=u[5],v=u[7],w=r[u[3]],v&&(g="px"===v?Number(x):"em"===v||"rem"===v?16*x:u[8]?(x/u[8]).toFixed(2):"dppx"===v?96*x:"dpcm"===v?.3937*x:Number(x)),!(f="min-"===f&&g?w>=g:"max-"===f&&g?w<=g:g?w===g:!!w))break}while(c--);if(f)break}}while(i--);return h?!f:f},m=function(){var t=e.innerWidth||i.clientWidth,n=e.innerHeight||i.clientHeight,s=e.screen.width,l=e.screen.height,a=e.screen.colorDepth,d=e.devicePixelRatio;r.width=t,r.height=n,r["aspect-ratio"]=(t/n).toFixed(2),r["device-width"]=s,r["device-height"]=l,r["device-aspect-ratio"]=(s/l).toFixed(2),r.color=a,r["color-index"]=Math.pow(2,a),r.orientation=n>=t?"portrait":"landscape",r.resolution=d&&96*d||e.screen.deviceXDPI||96,r["device-pixel-ratio"]=d||1},h=function(){clearTimeout(c),c=setTimeout((function(){var t=null,i=s-1,l=i,r=!1;if(0<=i){m();do{if((t=n[l-i])&&((r=o(t.mql.media))&&!t.mql.matches||!r&&t.mql.matches)&&(t.mql.matches=r,t.listeners)){r=0;for(var a=t.listeners.length;r<a;r++)t.listeners[r]&&t.listeners[r].call(e,t.mql)}}while(i--)}}),10)},p=u.getElementsByTagName("head")[0],u=u.createElement("style"),f="screen print speech projection handheld tv braille embossed tty".split(" "),x=0,v=f.length,g="#mediamatchjs { position: relative; z-index: 0; }",w="",y=e.addEventListener||(w="on")&&e.attachEvent;for(u.type="text/css",u.id="mediamatchjs",p.appendChild(u),t=e.getComputedStyle&&e.getComputedStyle(u)||u.currentStyle;x<v;x++)g+="@media "+f[x]+" { #mediamatchjs { position: relative; z-index: "+x+" } }";return u.styleSheet?u.styleSheet.cssText=g:u.textContent=g,l=f[1*t.zIndex||0],p.removeChild(u),m(),y(w+"resize",h),y(w+"orientationchange",h),function(e){var t=s,i={matches:!1,media:e,addListener:function(e){n[t].listeners||(n[t].listeners=[]),e&&n[t].listeners.push(e)},removeListener:function(e){var i=n[t],s=0,l=0;if(i)for(l=i.listeners.length;s<l;s++)i.listeners[s]===e&&i.listeners.splice(s,1)}};return""===e?(i.matches=!0,i):(i.matches=o(e),s=n.push({mql:i,listeners:null}),i)}}(window));