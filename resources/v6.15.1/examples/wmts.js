"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7017],{4002:function(e,t,a){var r=a(1376),n=a(9847),s=a(2010),o=a(4354),i=a(1327),u=a(4016),c=a(2810),l=a(6923);const w=(0,c.U2)("EPSG:3857"),g=w.getExtent(),p=(0,l.dz)(g)/256,m=new Array(19),f=new Array(19);for(let e=0;e<19;++e)m[e]=p/Math.pow(2,e),f[e]=e;new r.Z({layers:[new s.Z({source:new n.Z}),new s.Z({opacity:.7,source:new i.Z({attributions:'Tiles © <a href="https://mrdata.usgs.gov/geology/state/" target="_blank">USGS</a>',url:"https://mrdata.usgs.gov/mapcache/wmts",layer:"sgmc2",matrixSet:"GoogleMapsCompatible",format:"image/png",projection:w,tileGrid:new u.Z({origin:(0,l.rL)(g),resolutions:m,matrixIds:f}),style:"default",wrapX:!0})})],target:"map",view:new o.ZP({center:[-11158582,4813697],zoom:4})})}},function(e){var t=function(t){return e(e.s=t)};t(9877),t(4002)}]);
//# sourceMappingURL=wmts.js.map