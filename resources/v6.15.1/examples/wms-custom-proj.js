"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8944],{7844:function(e,t,n){var o=n(1376),r=n(2314),a=n(2010),s=n(5673),c=n(4354),p=n(5830),i=n(1769),u=n(2810);const h=new r.Z({code:"EPSG:21781",extent:[485869.5728,76443.1884,837076.5648,299941.7864],units:"m"});(0,u.Sx)(h),(0,u.zY)("EPSG:4326",h,(function(e){return[m(e[1],e[0]),f(e[1],e[0])]}),(function(e){return[g(e[0],e[1]),d(e[0],e[1])]}));const w=[42e4,3e4,9e5,35e4],l=[new a.Z({extent:w,source:new s.Z({url:"https://wms.geo.admin.ch/",crossOrigin:"anonymous",attributions:'© <a href="https://shop.swisstopo.admin.ch/en/products/maps/national/lk1000"target="_blank">Pixelmap 1:1000000 / geo.admin.ch</a>',params:{LAYERS:"ch.swisstopo.pixelkarte-farbe-pk1000.noscale",FORMAT:"image/jpeg"},serverType:"mapserver"})}),new a.Z({extent:w,source:new s.Z({url:"https://wms.geo.admin.ch/",crossOrigin:"anonymous",attributions:'© <a href="https://www.hydrodaten.admin.ch/en/notes-on-the-flood-alert-maps.html"target="_blank">Flood Alert / geo.admin.ch</a>',params:{LAYERS:"ch.bafu.hydroweb-warnkarte_national"},serverType:"mapserver"})})];new o.Z({controls:(0,p.ce)().extend([new i.Z({units:"metric"})]),layers:l,target:"map",view:new c.ZP({projection:h,center:(0,u.vs)([8.23,46.86],"EPSG:4326","EPSG:21781"),extent:w,zoom:2})});function m(e,t){e=M(e),t=M(t);const n=((e=b(e))-169028.66)/1e4,o=((t=b(t))-26782.5)/1e4;return 600072.37+211455.93*o-10938.51*o*n-.36*o*Math.pow(n,2)-44.54*Math.pow(o,3)}function f(e,t){e=M(e),t=M(t);const n=((e=b(e))-169028.66)/1e4,o=((t=b(t))-26782.5)/1e4;return 200147.07+308807.95*n+3745.25*Math.pow(o,2)+76.63*Math.pow(n,2)-194.56*Math.pow(o,2)*n+119.79*Math.pow(n,3)}function d(e,t){const n=(e-6e5)/1e6,o=(t-2e5)/1e6;let r=16.9023892+3.238272*o-.270978*Math.pow(n,2)-.002528*Math.pow(o,2)-.0447*Math.pow(n,2)*o-.014*Math.pow(o,3);return r=100*r/36,r}function g(e,t){const n=(e-6e5)/1e6,o=(t-2e5)/1e6;let r=2.6779094+4.728982*n+.791484*n*o+.1306*n*Math.pow(o,2)-.0436*Math.pow(n,3);return r=100*r/36,r}function M(e){const t=parseInt(e,10),n=parseInt(60*(e-t),10);return t+n/100+60*(60*(e-t)-n)/1e4}function b(e){const t=parseInt(e,10);let n=parseInt(100*(e-t),10),o=100*(100*(e-t)-n);const r=String(e).split(".");return 2==r.length&&2==r[1].length&&(n=Number(r[1]),o=0),o+60*n+3600*t}}},function(e){var t=function(t){return e(e.s=t)};t(9877),t(7844)}]);
//# sourceMappingURL=wms-custom-proj.js.map