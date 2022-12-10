const cyclingInfraColors = [
    '#a662a8', '#664972', '#463c57', '#6e8da9', '#91bcdd', '#567d99', '#395e77', '#305662', '#264d4d', '#315c45', '#8a9a65', '#b6b975', '#b65d54', '#b60033', '#98062d', '#800022'
]

const streetSlopesColors = ['#fd151b', '#ffb30f', '#849324', '#437f97']


function addPublicTransStops(value) {
    L.circle([value.split(",")[0], value.split(",")[1]], {
        stroke: true,
        color: '#000000',
        fill: false,
        radius: 2,
    }).addTo(publicTransportStopsLayer).bindPopup(((value.split(",")).slice(2)).toString().replaceAll('"', ''));
}



function addStreetLights(value) {
    // TODO: Make this faster (probably run in the bg on startup or use CircleMarker)
    L.circle([value.split(",")[0], value.split(",")[1]], {
        stroke: false,
        fillColor: '#ffac00',
        fillOpacity: 0.5,
        radius: 1.5,
    }).addTo(streetLightsLayer);
}

function addStreetSlopes() {
    for (let [pathname, layer_obj] of Object.entries(streetSlopeSourceFiles)){
        let shp = new L.Shapefile('sources/shapefiles/street_slopes/' + pathname, {
            onEachFeature: function(feature, layer) {
                layer.bindPopup("Slope: " + Math.round(feature.properties['slope']) + "%");
            },
            style: function (feature) {
                let selectedColor = streetSlopesColors[Object.keys(streetSlopeSourceFiles).indexOf(pathname)];
                return {color: selectedColor, fillColor: selectedColor}
            }
        }).addTo(layer_obj);
        // shp.once("data:loaded", function() {
        //     console.log("Finished loading " + pathname)
        // });
    }
}

function addPedestrianCrossings() {
    let shp = new L.Shapefile('sources/shapefiles/pedestrian_crossings/Pedestrian_crossings.zip', {
        style: function (feature) {
            return {color: 'black', fillColor: 'black'}
        }
    }).addTo(pedestrianCrossingsLayer);
    // shp.once("data:loaded", function() {
    //     console.log("Finished loading sources/shapefiles/pedestrian_crossings/Pedestrian_crossings.zip")
    // });
}


function addBikeInfrastructure() {

    for (let [index, [pathname, layer_obj]] of Object.entries(cyclingInfraSourceFiles).entries()){
        let shp = new L.Shapefile('sources/shapefiles/cycling_measures/' + pathname, {
            onEachFeature: function(feature, layer) {
                layer.bindPopup("Type: " + feature.properties['type'] + "<br>Length: " + Math.round(feature.properties['length']) + "m");
            },
            style: function (feature) {
                return {color: cyclingInfraColors[index], fillColor: cyclingInfraColors[index]}
            }
        }).addTo(layer_obj);
        // shp.once("data:loaded", function() {
        //     console.log("Finished loading "+pathname)
        // });
    }
}
