function addAccident(dataset, markersArray, category)
/**
 * Create and add markers for the accidents based on the date in @param dataset. Created markers are also stored
 * in @param markers_array for further manipulation and filtering. Each marker is assigned a respective category.
 * @param dataset input data in js array format consisting of comma-separated lat,lon,YYYY,MM,DD values
 * @param markersArray js array for storing created markers
 * @param category representation of category for filtering/icon composition purposes
 */
{
    if (markersArray.length > 0){
        console.log("Registering " + markersArray.length + " markers");
        markersArray.map(marker => {marker.filtered = false})
    } else {

        let color = "black";
        if (category === 0) {
            color = "red";
        }
        else if (category === 1) {
            color = "violet";
        }
        else if (category === 2) {
            color = "blue";
        }


        console.log("Building markers anew - category " + category);
        dataset.forEach(value => {
            let marker = new PruneCluster.Marker(
                value.point_y,
                value.point_x
            );
            marker.date = new Date(value.datetime);
            marker.filtered = true;
            marker.category = category;


            marker.data.tags = [
                value.collision_with,
                value.cause,
                value.alcohol,
                value.caused_by,
                value.road_condition,
                value.weather,
                value.visibility,
                value.view_condition,
                value.accident_place,
                value.road_type
            ]

            marker.data.icon = fontAwesomeMapMarkerIcon();
            marker.data.icon.options.className = "MapMarkerIcon " + color;
            let keys = Object.keys(value);
            let info = "";
            for (let i = 0; i < keys.length; i++) {
                info += keys[i] + ": " + value[keys[i]] + "<br>"
            }

            marker.data.popup = info; // TODO: make popup
            marker.data.tooltip = "Number of people in the accident: " // TODO: Make tooltip
            markersArray.push(marker);
            accidentsCluster.RegisterMarker(marker)}
        );
    }
    accidentsCluster.ProcessView();
}

function addTrafficAccidents() {
    addAccident(traffic_accidents_json, trafficAccidentMarkers, trafficCategory);
}

function addBikeAccidents() {
    addAccident(bike_accidents_json, bikeAccidentMarkers, bikeCategory);
}

function addPedestrianAccidents() {
    addAccident(pedestrian_accidents_json, pedestrianAccidentMarkers, pedestrianCategory);
}

function removeMarkerSet(marker_set) {
    marker_set.map(marker => {marker.filtered = true})
    accidentsCluster.ProcessView();
}