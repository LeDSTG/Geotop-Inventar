var wms_layers = [];

var lyr_TrueOrthofoto2023Maiab17600_0 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "https://wms.geo.bs.ch/",
    attributions: ' ',
                              params: {
                                "LAYERS": "OF_TrueOrthofoto2023Mai_ueber7600",
                                "TILED": "true",
                                "VERSION": "1.3.0"},
                            })),
                            title: "True Orthofoto 2023 Mai (ab 1:7600)",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_TrueOrthofoto2023Maiab17600_0, 0]);
var format_geotope_a_luethi_1 = new ol.format.GeoJSON();
var features_geotope_a_luethi_1 = format_geotope_a_luethi_1.readFeatures(json_geotope_a_luethi_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_geotope_a_luethi_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_geotope_a_luethi_1.addFeatures(features_geotope_a_luethi_1);
var lyr_geotope_a_luethi_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_geotope_a_luethi_1, 
                style: style_geotope_a_luethi_1,
                popuplayertitle: "geotope_a_luethi",
                interactive: true,
                title: '<img src="styles/legend/geotope_a_luethi_1.png" /> geotope_a_luethi'
            });

lyr_TrueOrthofoto2023Maiab17600_0.setVisible(true);lyr_geotope_a_luethi_1.setVisible(true);
var layersList = [lyr_TrueOrthofoto2023Maiab17600_0,lyr_geotope_a_luethi_1];
lyr_geotope_a_luethi_1.set('fieldAliases', {'fid': 'fid', 'typ': 'typ', 'art_zahl': 'art_zahl', 'ort_adresse': 'ort_adresse', 'code': 'code', });
lyr_geotope_a_luethi_1.set('fieldImages', {'fid': 'TextEdit', 'typ': 'TextEdit', 'art_zahl': 'TextEdit', 'ort_adresse': 'TextEdit', 'code': 'TextEdit', });
lyr_geotope_a_luethi_1.set('fieldLabels', {'fid': 'no label', 'typ': 'no label', 'art_zahl': 'no label', 'ort_adresse': 'no label', 'code': 'inline label - always visible', });
lyr_geotope_a_luethi_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});