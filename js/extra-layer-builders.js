function addPublicTransStops(value) {
    L.circle([value.split(",")[0], value.split(",")[1]], {
        stroke: false,
        fillColor: '#000000',
        fillOpacity: 0.7,
        radius: 2,
    }).addTo(publicTransportStopsLayer).bindPopup(value.split(",")[2]);
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
    let colors = ['red', 'orange', 'blue', 'green']
    for (let [pathname, layer_obj] of Object.entries(streetSlopeSourceFiles)){
        let shp = new L.Shapefile('sources/shapefiles/street_slopes/' + pathname, {
            onEachFeature: function(feature, layer) {
                layer.bindPopup("Slope: " + Math.round(feature.properties['slope']) + "%");
            },
            style: function (feature) {
                let selectedColor = colors[Object.keys(streetSlopeSourceFiles).indexOf(pathname)];
                return {color: selectedColor, fillColor: selectedColor}
            }
        }).addTo(layer_obj);
        shp.once("data:loaded", function() {
            console.log("Finished loading " + pathname)
        });
    }
}

function addPedestrianCrossings() {
    let shp = new L.Shapefile('sources/shapefiles/pedestrian_crossings/Pedestrian_crossings.zip', {
        onEachFeature: function(feature, layer) {
            layer.bindPopup(Object.keys(feature.properties).map(function(k) {
                return k + ": " + feature.properties[k];
            }).join("<br />"), {
                maxHeight: 200
            });
        },
        style: function (feature) {
            return {color: 'black', fillColor: 'black'}
        }
    }).addTo(pedestrianCrossingsLayer);
    shp.once("data:loaded", function() {
        console.log("Finished loading sources/shapefiles/pedestrian_crossings/Pedestrian_crossings.zip")
    });
}


function addBikeInfrastructure() {
    for (let [pathname, layer_obj] of Object.entries(cyclingInfraSourceFiles)){
        let shp = new L.Shapefile('sources/shapefiles/cycling_measures/' + pathname, {
            onEachFeature: function(feature, layer) {
                layer.bindPopup(Object.keys(feature.properties).map(function(k) {
                    return k + ": " + feature.properties[k];
                }).join("<br />"), {
                    maxHeight: 200
                });
            }
        }).addTo(layer_obj);
        shp.once("data:loaded", function() {
            console.log("Finished loading "+pathname)
        });
    }
}
