"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[694],{5369:function(i,e,t){var s=t(1376),r=t(4354),n=t(6566),a=t(9010),o=t(9060),h=t(2514),g=t(776),u=t(2275),c=t(6923);class l extends a.ZP{constructor(i){const e=i||{};let t=void 0===e.imageSmoothing||e.imageSmoothing;void 0!==e.interpolate&&(t=e.interpolate),super({attributions:e.attributions,interpolate:t,projection:e.projection,resolutions:e.resolutions}),this.crossOrigin_=void 0!==e.crossOrigin?e.crossOrigin:null,this.hidpi_=void 0===e.hidpi||e.hidpi,this.url_=e.url,this.imageLoadFunction_=void 0!==e.imageLoadFunction?e.imageLoadFunction:a.r6,this.params_=e.params||{},this.image_=null,this.imageSize_=[0,0],this.renderedRevision_=0,this.ratio_=void 0!==e.ratio?e.ratio:1.5}getParams(){return this.params_}getImageInternal(i,e,t,s){if(void 0===this.url_)return null;e=this.findNearestResolution(e),t=this.hidpi_?t:1;const r=this.image_;if(r&&this.renderedRevision_==this.getRevision()&&r.getResolution()==e&&r.getPixelRatio()==t&&(0,c.r4)(r.getExtent(),i))return r;const a={F:"image",FORMAT:"PNG32",TRANSPARENT:!0};(0,u.f0)(a,this.params_);const h=((i=i.slice())[0]+i[2])/2,g=(i[1]+i[3])/2;if(1!=this.ratio_){const e=this.ratio_*(0,c.dz)(i)/2,t=this.ratio_*(0,c.Cr)(i)/2;i[0]=h-e,i[1]=g-t,i[2]=h+e,i[3]=g+t}const l=e/t,m=Math.ceil((0,c.dz)(i)/l),_=Math.ceil((0,c.Cr)(i)/l);i[0]=h-l*m/2,i[2]=h+l*m/2,i[1]=g-l*_/2,i[3]=g+l*_/2,this.imageSize_[0]=m,this.imageSize_[1]=_;const d=this.getRequestUrl_(i,this.imageSize_,t,s,a);return this.image_=new o.Z(i,e,t,d,this.crossOrigin_,this.imageLoadFunction_),this.renderedRevision_=this.getRevision(),this.image_.addEventListener(n.Z.CHANGE,this.handleImageChange.bind(this)),this.image_}getImageLoadFunction(){return this.imageLoadFunction_}getRequestUrl_(i,e,t,s,r){const n=s.getCode().split(/:(?=\d+$)/).pop();r.SIZE=e[0]+","+e[1],r.BBOX=i.join(","),r.BBOXSR=n,r.IMAGESR=n,r.DPI=Math.round(90*t);const a=this.url_,o=a.replace(/MapServer\/?$/,"MapServer/export").replace(/ImageServer\/?$/,"ImageServer/exportImage");return o==a&&(0,g.h)(!1,50),(0,h.B)(o,r)}getUrl(){return this.url_}setImageLoadFunction(i){this.image_=null,this.imageLoadFunction_=i,this.changed()}setUrl(i){i!=this.url_&&(this.url_=i,this.image_=null,this.changed())}updateParams(i){(0,u.f0)(this.params_,i),this.image_=null,this.changed()}}var m=l,_=t(9847),d=t(2010),p=t(6291);const v=[new d.Z({source:new _.Z}),new p.Z({source:new m({ratio:1,params:{},url:"https://sampleserver1.arcgisonline.com/ArcGIS/rest/services/Specialty/ESRI_StateCityHighway_USA/MapServer"})})];new s.Z({layers:v,target:"map",view:new r.ZP({center:[-10997148,4569099],zoom:4})})}},function(i){var e=function(e){return i(i.s=e)};e(9877),e(5369)}]);
//# sourceMappingURL=arcgis-image.js.map