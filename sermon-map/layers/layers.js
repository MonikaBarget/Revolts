var wms_layers = [];


        var lyr_ESRIPhysical_0 = new ol.layer.Tile({
            'title': 'ESRI Physical',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Physical_Map/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_Sermons_Oct2022_1 = new ol.format.GeoJSON();
var features_Sermons_Oct2022_1 = format_Sermons_Oct2022_1.readFeatures(json_Sermons_Oct2022_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Sermons_Oct2022_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sermons_Oct2022_1.addFeatures(features_Sermons_Oct2022_1);
var lyr_Sermons_Oct2022_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Sermons_Oct2022_1, 
                style: style_Sermons_Oct2022_1,
                interactive: true,
    title: 'Sermons_Oct2022<br />\
    <img src="styles/legend/Sermons_Oct2022_1_0.png" /> 1<br />\
    <img src="styles/legend/Sermons_Oct2022_1_1.png" /> 2<br />\
    <img src="styles/legend/Sermons_Oct2022_1_2.png" /> 3<br />\
    <img src="styles/legend/Sermons_Oct2022_1_3.png" /> 4<br />\
    <img src="styles/legend/Sermons_Oct2022_1_4.png" /> 6<br />\
    <img src="styles/legend/Sermons_Oct2022_1_5.png" /> 7<br />\
    <img src="styles/legend/Sermons_Oct2022_1_6.png" /> 12<br />\
    <img src="styles/legend/Sermons_Oct2022_1_7.png" /> 14<br />\
    <img src="styles/legend/Sermons_Oct2022_1_8.png" /> 20<br />\
    <img src="styles/legend/Sermons_Oct2022_1_9.png" /> 59<br />\
    <img src="styles/legend/Sermons_Oct2022_1_10.png" /> 229<br />\
    <img src="styles/legend/Sermons_Oct2022_1_11.png" /> <br />'
        });

lyr_ESRIPhysical_0.setVisible(true);lyr_Sermons_Oct2022_1.setVisible(true);
var layersList = [lyr_ESRIPhysical_0,lyr_Sermons_Oct2022_1];
lyr_Sermons_Oct2022_1.set('fieldAliases', {'Place': 'Place', 'Country': 'Country', 'Full Address': 'Full Address', 'Count': 'Count', });
lyr_Sermons_Oct2022_1.set('fieldImages', {'Place': 'TextEdit', 'Country': 'TextEdit', 'Full Address': 'TextEdit', 'Count': 'Range', });
lyr_Sermons_Oct2022_1.set('fieldLabels', {'Place': 'header label', 'Country': 'inline label', 'Full Address': 'inline label', 'Count': 'inline label', });
lyr_Sermons_Oct2022_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});