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

        let color = categoriesColors[category];

        console.log("Building markers anew - category " + category);
        dataset.forEach(value => {
            let marker = new PruneCluster.Marker(
                value.point_y,
                value.point_x
            );
            marker.date = new Date(value.datetime);
            marker.filtered = true;
            marker.category = category;

            marker.data.tags = {
                'cat_0': value.collision_with,
                'cat_1': value.cause,
                'cat_2': value.person,
                'cat_3': value.sex,
                'cat_4': value.age_group,
                'cat_5': value.alcohol,
                'cat_6': value.caused_by,
                'cat_7': value.person_condition,
                'cat_8': value.consequence,
                'cat_9': value.road_condition,
                'cat_10': value.weather,
                'cat_11': value.visibility,
                'cat_12': value.view_condition,
                'cat_13': value.accident_place,
                'cat_14': value.road_type,
                'cat_15': value.vehicle_type
            }

            marker.data.icon = fontAwesomeMapMarkerIcon();
            marker.data.icon.options.className = "MapMarkerIcon color_cat_" + category;
            let keys = Object.keys(value);
            let info = "";
            for (let i = 0; i < keys.length; i++) {
                info += keys[i] + ": " + value[keys[i]] + "<br>"
            }

            marker.data.popup = info;

            let short_info = "";
            for (let i = 0; i < keys.length; i++) {
                // add something like total no of crashes
                 if (keys[i] === 'no_parties') {
                     short_info += "Total number of parties: " + value[keys[i]]  + "<br>"
                 }
                if (keys[i] === 'no_injured_minor') {
                    short_info += "Minor injuries: " + value[keys[i]] + "<br>"
                }
                if (keys[i] === 'no_injured_major') {
                    short_info += "Major injuries: " + value[keys[i]] + "<br>"
                }
                if (keys[i] === 'no_casualties') {
                    short_info += "Casualties: " + value[keys[i]] + "<br>"
                }

            }
            marker.data.tooltip = short_info;
            markersArray.push(marker);
            accidentsCluster.RegisterMarker(marker);

        }
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