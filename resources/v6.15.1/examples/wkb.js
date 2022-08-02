"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7970],{814:function(t,e,i){var r=i(1376),n=i(4354),s=i(2739),o=i(2025),a=i(8675),h=i(5691),l=i(5265),u=i(8460),d=i(3077),c=i(1988),w=i(5469),y=i(5528),_=i(2810),g=i(6877),f=i(2275);const b=1,m=2,p=3,P=4,Z=5,k=6,C=7,E=15,M=16,L=17;class U{constructor(t){this.view_=t,this.pos_=0,this.initialized_=!1,this.isLittleEndian_=!1,this.hasZ_=!1,this.hasM_=!1,this.srid_=null,this.layout_=h.Z.XY}readUint8(){return this.view_.getUint8(this.pos_++)}readUint32(t){return this.view_.getUint32((this.pos_+=4)-4,void 0!==t?t:this.isLittleEndian_)}readDouble(t){return this.view_.getFloat64((this.pos_+=8)-8,void 0!==t?t:this.isLittleEndian_)}readPoint(){const t=[];return t.push(this.readDouble()),t.push(this.readDouble()),this.hasZ_&&t.push(this.readDouble()),this.hasM_&&t.push(this.readDouble()),t}readLineString(){const t=this.readUint32(),e=[];for(let i=0;i<t;i++)e.push(this.readPoint());return e}readPolygon(){const t=this.readUint32(),e=[];for(let i=0;i<t;i++)e.push(this.readLineString());return e}readWkbHeader(t){const e=this.readUint8()>0,i=this.readUint32(e),r=Math.floor((268435455&i)/1e3),n=Boolean(2147483648&i)||1===r||3===r,s=Boolean(1073741824&i)||2===r||3===r,o=Boolean(536870912&i),a=(268435455&i)%1e3,h=["XY",n?"Z":"",s?"M":""].join(""),l=o?this.readUint32(e):null;if(void 0!==t&&t!==a)throw new Error("Unexpected WKB geometry type "+a);if(this.initialized_){if(this.isLittleEndian_!==e)throw new Error("Inconsistent endian");if(this.layout_!==h)throw new Error("Inconsistent geometry layout");if(l&&this.srid_!==l)throw new Error("Inconsistent coordinate system (SRID)")}else this.isLittleEndian_=e,this.hasZ_=n,this.hasM_=s,this.layout_=h,this.srid_=l,this.initialized_=!0;return a}readWkbPayload(t){switch(t){case b:return this.readPoint();case m:return this.readLineString();case p:case L:return this.readPolygon();case P:return this.readMultiPoint();case Z:return this.readMultiLineString();case k:case E:case M:return this.readMultiPolygon();case C:return this.readGeometryCollection();default:throw new Error("Unsupported WKB geometry type "+t+" is found")}}readWkbBlock(t){return this.readWkbPayload(this.readWkbHeader(t))}readWkbCollection(t,e){const i=this.readUint32(),r=[];for(let n=0;n<i;n++){const i=t.call(this,e);i&&r.push(i)}return r}readMultiPoint(){return this.readWkbCollection(this.readWkbBlock,b)}readMultiLineString(){return this.readWkbCollection(this.readWkbBlock,m)}readMultiPolygon(){return this.readWkbCollection(this.readWkbBlock,p)}readGeometryCollection(){return this.readWkbCollection(this.readGeometry)}readGeometry(){const t=this.readWkbHeader(),e=this.readWkbPayload(t);switch(t){case b:return new w.Z(e,this.layout_);case m:return new l.Z(e,this.layout_);case p:case L:return new y.ZP(e,this.layout_);case P:return new d.Z(e,this.layout_);case Z:return new u.Z(e,this.layout_);case k:case E:case M:return new c.Z(e,this.layout_);case C:return new a.Z(e);default:return null}}getSrid(){return this.srid_}}class B{constructor(t){t=t||{},this.layout_=t.layout,this.isLittleEndian_=!1!==t.littleEndian,this.isEWKB_=!1!==t.ewkb,this.writeQueue_=[],this.nodata_=(0,f.f0)({X:0,Y:0,Z:0,M:0},t.nodata)}writeUint8(t){this.writeQueue_.push([1,t])}writeUint32(t){this.writeQueue_.push([4,t])}writeDouble(t){this.writeQueue_.push([8,t])}writePoint(t,e){const i=f.f0.apply(null,e.split("").map(((e,i)=>({[e]:t[i]}))));for(const t of this.layout_)this.writeDouble(t in i?i[t]:this.nodata_[t])}writeLineString(t,e){this.writeUint32(t.length);for(let i=0;i<t.length;i++)this.writePoint(t[i],e)}writePolygon(t,e){this.writeUint32(t.length);for(let i=0;i<t.length;i++)this.writeLineString(t[i],e)}writeWkbHeader(t,e){t%=1e3,this.layout_.indexOf("Z")>=0&&(t+=this.isEWKB_?2147483648:1e3),this.layout_.indexOf("M")>=0&&(t+=this.isEWKB_?1073741824:2e3),this.isEWKB_&&Number.isInteger(e)&&(t|=536870912),this.writeUint8(this.isLittleEndian_?1:0),this.writeUint32(t),this.isEWKB_&&Number.isInteger(e)&&this.writeUint32(e)}writeMultiPoint(t,e){this.writeUint32(t.length);for(let i=0;i<t.length;i++)this.writeWkbHeader(1),this.writePoint(t[i],e)}writeMultiLineString(t,e){this.writeUint32(t.length);for(let i=0;i<t.length;i++)this.writeWkbHeader(2),this.writeLineString(t[i],e)}writeMultiPolygon(t,e){this.writeUint32(t.length);for(let i=0;i<t.length;i++)this.writeWkbHeader(3),this.writePolygon(t[i],e)}writeGeometryCollection(t){this.writeUint32(t.length);for(let e=0;e<t.length;e++)this.writeGeometry(t[e])}findMinimumLayout(t){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:h.Z.XYZM;if(t instanceof g.ZP)return(i=t.getLayout())===(r=e)?i:i===h.Z.XYZM?r:r===h.Z.XYZM?i:h.Z.XY;var i,r;if(t instanceof a.Z){const i=t.getGeometriesArray();for(let t=0;t<i.length&&e!==h.Z.XY;t++)e=this.findMinimumLayout(i[t],e)}return e}writeGeometry(t,e){const i={Point:b,LineString:m,Polygon:p,MultiPoint:P,MultiLineString:Z,MultiPolygon:k,GeometryCollection:C},r=t.getType(),n=i[r];if(!n)throw new Error("GeometryType "+r+" is not supported");if(this.layout_||(this.layout_=this.findMinimumLayout(t)),this.writeWkbHeader(n,e),t instanceof g.ZP){({Point:this.writePoint,LineString:this.writeLineString,Polygon:this.writePolygon,MultiPoint:this.writeMultiPoint,MultiLineString:this.writeMultiLineString,MultiPolygon:this.writeMultiPolygon})[r].call(this,t.getCoordinates(),t.getLayout())}else t instanceof a.Z&&this.writeGeometryCollection(t.getGeometriesArray())}getBuffer(){const t=this.writeQueue_.reduce(((t,e)=>t+e[0]),0),e=new ArrayBuffer(t),i=new DataView(e);let r=0;return this.writeQueue_.forEach((t=>{switch(t[0]){case 1:i.setUint8(r,t[1]);break;case 4:i.setUint32(r,t[1],this.isLittleEndian_);break;case 8:i.setFloat64(r,t[1],this.isLittleEndian_)}r+=t[0]})),e}}class W extends o.ZP{constructor(t){super();const e=t||{};this.splitCollection=Boolean(e.splitCollection),this.viewCache_=null,this.hex_=!1!==e.hex,this.littleEndian_=!1!==e.littleEndian,this.ewkb_=!1!==e.ewkb,this.layout_=e.geometryLayout,this.nodataZ_=e.nodataZ||0,this.nodataM_=e.nodataM||0,this.srid_=e.srid}getType(){return this.hex_?"text":"arraybuffer"}readFeature(t,e){return new s.Z({geometry:this.readGeometry(t,e)})}readFeatures(t,e){let i=[];const r=this.readGeometry(t,e);return i=this.splitCollection&&r instanceof a.Z?r.getGeometriesArray():[r],i.map((t=>new s.Z({geometry:t})))}readGeometry(t,e){const i=G(t);if(!i)return null;const r=new U(i).readGeometry();this.viewCache_=i;const n=this.getReadOptions(t,e);return this.viewCache_=null,(0,o.fI)(r,!1,n)}readProjection(t){const e=this.viewCache_||G(t);if(!e)return;const i=new U(e);return i.readWkbHeader(),i.getSrid()&&(0,_.U2)("EPSG:"+i.getSrid())||void 0}writeFeature(t,e){return this.writeGeometry(t.getGeometry(),e)}writeFeatures(t,e){return this.writeGeometry(new a.Z(t.map((t=>t.getGeometry()))),e)}writeGeometry(t,e){const i=this.adaptOptions(e),r=new B({layout:this.layout_,littleEndian:this.littleEndian_,ewkb:this.ewkb_,nodata:{Z:this.nodataZ_,M:this.nodataM_}});let n=Number.isInteger(this.srid_)?Number(this.srid_):null;if(!1!==this.srid_&&!Number.isInteger(this.srid_)){const t=i.dataProjection&&(0,_.U2)(i.dataProjection);if(t){const e=t.getCode();0===e.indexOf("EPSG:")&&(n=Number(e.substring(5)))}}r.writeGeometry((0,o.fI)(t,!0,i),n);const s=r.getBuffer();return this.hex_?function(t){const e=new Uint8Array(t);return Array.from(e.values()).map((t=>(t<16?"0":"")+Number(t).toString(16).toUpperCase())).join("")}(s):s}}function G(t){return"string"==typeof t?function(t){const e=new Uint8Array(t.length/2);for(let i=0;i<t.length/2;i++)e[i]=parseInt(t.substr(2*i,2),16);return new DataView(e.buffer)}(t):ArrayBuffer.isView(t)?t instanceof DataView?t:new DataView(t.buffer,t.byteOffset,t.byteLength):t instanceof ArrayBuffer?new DataView(t):null}var S=W,D=i(9847),v=i(5783),F=i(2010),A=i(1372);const I=new F.Z({source:new D.Z}),x=(new S).readFeature("0103000000010000000500000054E3A59BC4602540643BDF4F8D1739C05C8FC2F5284C4140EC51B81E852B34C0D578E926316843406F1283C0CAD141C01B2FDD2406012B40A4703D0AD79343C054E3A59BC4602540643BDF4F8D1739C0",{dataProjection:"EPSG:4326",featureProjection:"EPSG:3857"}),H=new A.Z({source:new v.Z({features:[x]})});new r.Z({layers:[I,H],target:"map",view:new n.ZP({center:[2952104.0199,-3277504.823],zoom:4})})}},function(t){var e=function(e){return t(t.s=e)};e(9877),e(814)}]);
//# sourceMappingURL=wkb.js.map