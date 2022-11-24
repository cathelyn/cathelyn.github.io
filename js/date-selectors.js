// create date filter
function DateRangeFilter(startDate, endDate) {
    trafficAccidentMarkers.map(marker => marker.filtered = true);
    let traffic_matching = trafficAccidentMarkers.filter(marker => marker.date >= startDate && marker.date <= endDate)
    console.log("Found " + traffic_matching.length + " matching entries in pedestrian_accidents")
    traffic_matching.map(marker => marker.filtered = false);

    bikeAccidentMarkers.map(marker => marker.filtered = true);
    let bike_matching = bikeAccidentMarkers.filter(marker => marker.date >= startDate && marker.date <= endDate)
    console.log("Found " + bike_matching.length + " matching entries in pedestrian_accidents")
    bike_matching.map(marker => marker.filtered = false);

    pedestrianAccidentMarkers.map(marker => marker.filtered = true);
    let ped_matching = pedestrianAccidentMarkers.filter(marker => marker.date >= startDate && marker.date <= endDate)
    console.log("Found " + ped_matching.length + " matching entries in pedestrian_accidents")
    ped_matching.map(marker => marker.filtered = false);

    accidentsCluster.ProcessView();
}

function DateCustomSelect() {
    let year_el = document.getElementById('year');
    let year_sel = year_el.parentNode.firstElementChild.firstElementChild.checked;

    let month_el =  document.getElementById('month');
    let month_sel = month_el.parentNode.firstElementChild.firstElementChild.checked;

    let day_el = document.getElementById('day')
    let day_sel = day_el.parentNode.firstElementChild.firstElementChild.checked;

    let weekday_el = document.getElementById('weekday')
    let weekday_sel = weekday_el.parentNode.firstElementChild.firstElementChild.checked;

    let all_markers = [trafficAccidentMarkers, bikeAccidentMarkers, pedestrianAccidentMarkers]

    // disable all markers
    all_markers.forEach(removeMarkerSet);

    let filtered_set = trafficAccidentMarkers.concat(bikeAccidentMarkers).concat(pedestrianAccidentMarkers);

    if (year_sel){
        filtered_set = filtered_set.filter(value => value.date.getFullYear().toString() === year_el.selectedOptions[0].value
        )
    }
    if (month_sel) {
        filtered_set = filtered_set.filter(value => value.date.getMonth().toString() === month_el.selectedOptions[0].value
        )
    }
    if (day_sel) {
        filtered_set =filtered_set.filter(value => value.date.getDate().toString() === day_el.selectedOptions[0].value
        )
    }
    if (weekday_sel) {
        filtered_set = filtered_set.filter(value => value.date.getDay().toString() === weekday_el.selectedOptions[0].value
        )
    }
    console.log(filtered_set.length + " markers selected");
    filtered_set.map(marker => marker.filtered = false);
    accidentsCluster.ProcessView();
}