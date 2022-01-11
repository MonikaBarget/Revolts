var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_sermonsperplace_1 = new ol.format.GeoJSON();
var features_sermonsperplace_1 = format_sermonsperplace_1.readFeatures(json_sermonsperplace_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_sermonsperplace_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_sermonsperplace_1.addFeatures(features_sermonsperplace_1);
var lyr_sermonsperplace_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_sermonsperplace_1, 
                style: style_sermonsperplace_1,
                interactive: true,
    title: 'sermons-per-place<br />\
    <img src="styles/legend/sermonsperplace_1_0.png" /> 1 - 1<br />\
    <img src="styles/legend/sermonsperplace_1_1.png" /> 1 - 1<br />\
    <img src="styles/legend/sermonsperplace_1_2.png" /> 1 - 2<br />\
    <img src="styles/legend/sermonsperplace_1_3.png" /> 2 - 8<br />\
    <img src="styles/legend/sermonsperplace_1_4.png" /> 8 - 480<br />'
        });

lyr_OSMStandard_0.setVisible(true);lyr_sermonsperplace_1.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_sermonsperplace_1];
lyr_sermonsperplace_1.set('fieldAliases', {'Place': 'Place', 'Region (modern)': 'Region (modern)', 'Continent': 'Continent', 'Full Address': 'Full Address', 'Number': 'Number', });
lyr_sermonsperplace_1.set('fieldImages', {'Place': 'TextEdit', 'Region (modern)': 'TextEdit', 'Continent': 'TextEdit', 'Full Address': 'TextEdit', 'Number': 'Range', });
lyr_sermonsperplace_1.set('fieldLabels', {'Place': 'no label', 'Region (modern)': 'no label', 'Continent': 'no label', 'Full Address': 'no label', 'Number': 'inline label', });
lyr_sermonsperplace_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});