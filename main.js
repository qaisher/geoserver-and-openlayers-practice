//import * as ol from "./resources/v6.15.1/build/ol";

window.onload = init;
function init() {

  // const shaft = new ol.style.RegularShape({
  //   points: 2,
  //   radius: 5,
  //   stroke: new ol.style.Stroke({
  //     width: 2,
  //     color: 'black',
  //   }),
  //   rotateWithView: true,
  // });

  // const head = new ol.style.RegularShape({
  //   points: 3,
  //   radius: 5,
  //   fill: new ol.style.Fill({
  //     color: 'black',
  //   }),
  //   rotateWithView: true,
  // });

  // const styles = [new ol.style.Style({ image: shaft }), new ol.style.Style({ image: head })];

  // const VectorSource = new ol.source.Vector({
  //   attributions:
  //     'Weather data by <a href="https://openweathermap.org/current">OpenWeather</a>',
  // });


 // var OSMsource = new ol.source.OSM();
  var map = new ol.Map({
    target: 'map',
    layers: [
      // new ol.layer.Tile({
      //   source: OSMsource
      // }),

      // new ol.layer.Tile({
      //   source: new ol.source.TileWMS({
      //     url: 'http://localhost:8080/geoserver/wind/wms',
      //     params: {'LAYERS': 'wind:ne_110m_geography_regions_polys', 'TILED': true},
      //     serverType: 'geoserver',
      //     transition: 0
      //   })
      // }),

      new ol.layer.Tile({
        source: new ol.source.TileWMS({
          url: 'http://localhost:8080/geoserver/wind/wms',
          params: {'LAYERS': 'wind:HYP_50M_SR_W', 'TILED': true},
          serverType: 'geoserver',
          transition: 0
        })
      }),
      // new ol.layer.Tile({
      //   source: new ol.source.TileWMS({
      //     url: 'http://localhost:8080/geoserver/wind/wms',
      //     params: {'LAYERS': 'wind:ne_50m_admin_0_boundary_lines_land', 'TILED': true},
      //     serverType: 'geoserver',
      //     transition: 0
      //   })
      // }),

      // new ol.layer.Vector({
      //   source: VectorSource,
        
      //   style: function (feature) {
      //     const wind = feature.get('wind');
      //     // rotate arrow away from wind origin
      //     const angle = ((wind.deg - 180) * Math.PI) / 180;
      //     const scale = wind.speed / 10;
      //     shaft.setScale([1, scale]);
      //     shaft.setRotation(angle);
      //     head.setDisplacement([
      //       0,
      //       head.getRadius() / 2 + shaft.getRadius() * scale,
      //     ]);
      //     head.setRotation(angle);
      //     return styles;
      //   },
      // })

    ],
    view: new ol.View({
      center: [8756625.960349793, 2631879.757915189],
      zoom: 1,
      maxZoom: 10,
      minZoom: 1
    })

  });


  // fetch('./resources/v6.15.1/examples/data/openweather/weather.json')
  // .then(function (response) {
  //   return response.json();
  // })
  // .then(function (data) {
  //   //console.log(data);
  //   const features = [];
  //   data.list.forEach(function (report) {
  //     const feature = new ol.Feature(
  //       new ol.geom.Point(ol.proj.fromLonLat([report.coord.lon, report.coord.lat]))
  //     );
  //     //console.log(feature);
  //     feature.setProperties(report);
  //     features.push(feature);
  //   });
  //   VectorSource.addFeatures(features);
  //   map.getView().fit(VectorSource.getExtent());
  // });


  map.on('click', (e) => console.log(e.coordinate));
}

  // OSMsource.getTileGrid().forEachTileCoord(osmextent, parseInt(osmzoom), function (tileCoord) {
  //   var img = document.createElement('canvas');
  //   img.onload = function () {
  //     canvas.width = OSMsource.getTileGrid().getTileSize(currentzoom);
  //     canvas.heigth = OSMsource.getTileGrid().getTileSize(currentzoom);
  //     var ctx = canvas.getContext("2d");
  //     ctx.drawImage(img, 0, 0);
  //     localStorage.setItem('OSM_' + tileCoord[0] + '_' + tileCoord[1] + '_' + (-tileCoord[2] - 1), canvas.toDataURL());
  //     img.remove();
  //     canvas.remove();
  //   };
  //   img.crossOrigin = "Anonymous";
  //   img.src = OSMsource.getTileUrlFunction()(tileCoord);
  // });