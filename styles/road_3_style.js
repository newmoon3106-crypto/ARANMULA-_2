var size = 0;
var placement = 'point';
function categories_road_3(feature, value, size, resolution, labelText,
                       labelFont, labelFill, bufferColor, bufferWidth,
                       placement) {
                var valueStr = (value !== null && value !== undefined) ? value.toString() : 'default';
                switch(valueStr) {case 'Aranmula - Kidangannur road':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(190,214,31,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 0.988}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Aranmula - Kulanada Road':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(146,118,237,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 0.988}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Aranmula Maramon road':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(120,152,202,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 0.988}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Arattupuzha Bridge':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(155,28,223,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 0.988}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Arattupuzha Koippuram Road':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(145,73,239,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 0.988}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Chengannur - Kidangannoor Road':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(112,234,183,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 0.988}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Cherupuzhakkattu Bridge':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(214,87,125,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 0.988}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Erumakkadu-vallana Road':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(45,204,170,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 0.988}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Ezhikkad Bridge':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(77,213,32,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 0.988}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Karakkad - Kozhippalam Road':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(112,174,215,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 0.988}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'KIdangannur - Alakodu Road':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(54,81,200,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 0.988}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'kotta - kidangannur road':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(219,47,208,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 0.988}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Kotta - Kidangannur Road':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(63,215,215,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 0.988}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'kotta-kidangannur':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(200,56,226,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 0.988}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Kozhippalam':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(227,219,104,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 0.988}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Kozhippalam- Poovathur Bridge':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(231,175,23,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 0.988}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Laka - Vilakkumadam Road':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(54,201,238,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 0.988}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Mavelikkara - Kozhencherry Road':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(221,146,65,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 0.988}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Path To Pampa River':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(41,35,215,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 0.988}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Puthencavu Bridge':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(179,209,124,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 0.988}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Puthuenkavu - Kidangannoor Road':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(236,67,48,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 0.988}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Road to Aranmula Temple':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(203,65,164,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 0.988}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Road to pallimukkam devi temple':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(66,211,122,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 0.988}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Sathra Kadavu Road':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(150,234,82,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 0.988}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Temple Road':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(134,224,149,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 0.988}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'unknown road':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(80,219,76,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 0.988}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Vallakadavu Road':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(228,92,29,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 0.988}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Vilakkumadam Kadavu':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(237,46,144,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 0.988}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
default:
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(207,122,130,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 0.988}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;}};

var style_road_3 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    
    var labelText = ""; 
    var value = feature.get("name");
    var labelFont = "13.0px \'Open Sans\', sans-serif";
    var labelFill = "#323232";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = "left";
    var offsetX = 0;
    var offsetY = 0;
    var placement = 'line';
    if (feature.get("name") !== null) {
        labelText = String(feature.get("name"));
    }
    
    var style = categories_road_3(feature, value, size, resolution, labelText,
                            labelFont, labelFill, bufferColor,
                            bufferWidth, placement);

    return style;
};
