var wms_layers = [];


        var lyr_OpenTopoMap_0 = new ol.layer.Tile({
            'title': 'OpenTopoMap',
            'type': 'base',
            'opacity': 0.516000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.opentopomap.org/{z}/{x}/{y}.png'
            })
        });
var format_coord_GAM_qgis_1 = new ol.format.GeoJSON();
var features_coord_GAM_qgis_1 = format_coord_GAM_qgis_1.readFeatures(json_coord_GAM_qgis_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_coord_GAM_qgis_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_coord_GAM_qgis_1.addFeatures(features_coord_GAM_qgis_1);
var lyr_coord_GAM_qgis_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_coord_GAM_qgis_1, 
                style: style_coord_GAM_qgis_1,
                interactive: true,
                title: '<img src="styles/legend/coord_GAM_qgis_1.png" /> coord_GAM_qgis'
            });

lyr_OpenTopoMap_0.setVisible(true);lyr_coord_GAM_qgis_1.setVisible(true);
var layersList = [lyr_OpenTopoMap_0,lyr_coord_GAM_qgis_1];
lyr_coord_GAM_qgis_1.set('fieldAliases', {'id': 'id', 'si_isit': 'si_isit', 'sid_coordx': 'sid_coordx', 'sid_coordy': 'sid_coordy', });
lyr_coord_GAM_qgis_1.set('fieldImages', {'id': 'TextEdit', 'si_isit': 'TextEdit', 'sid_coordx': 'TextEdit', 'sid_coordy': 'TextEdit', });
lyr_coord_GAM_qgis_1.set('fieldLabels', {'id': 'no label', 'si_isit': 'inline label', 'sid_coordx': 'no label', 'sid_coordy': 'no label', });
lyr_coord_GAM_qgis_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});