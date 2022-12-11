// create date filter
function DateRangeFilter(startDate, endDate, reset=false) {
    let enabled = document.getElementById('traffic_accidents').parentElement.classList.contains("enabled");
    if (reset && enabled) {
        addTrafficAccidents();
    }
    if (enabled && !reset) {
        trafficAccidentMarkers.map(marker => marker.filtered = true);
        let traffic_matching = trafficAccidentMarkers.filter(
            marker => marker.date >= startDate && marker.date <= endDate
        )
        traffic_matching.map(marker => marker.filtered = false);
    }

    enabled = document.getElementById('bike_accidents').parentElement.classList.contains("enabled");
    if (reset && enabled) {
        addBikeAccidents();
    }
    if (enabled && !reset) {
        bikeAccidentMarkers.map(marker => marker.filtered = true);
        let bike_matching = bikeAccidentMarkers.filter(marker => marker.date >= startDate && marker.date <= endDate)
        bike_matching.map(marker => marker.filtered = false);
    }

    enabled = document.getElementById('pedestrian_accidents').parentElement.classList.contains("enabled");
    if (reset && enabled) {
        addPedestrianAccidents();
    }
    if (enabled && !reset) {
        pedestrianAccidentMarkers.map(marker => marker.filtered = true);
        let ped_matching = pedestrianAccidentMarkers.filter(marker => marker.date >= startDate && marker.date <= endDate)
        ped_matching.map(marker => marker.filtered = false);
    }
    accidentsCluster.ProcessView();
}

function DateCustomSelect(reset=false) {
    let year_el = document.getElementById('year');
    let year_sel = year_el.parentNode.firstElementChild.firstElementChild.checked;

    let month_el =  document.getElementById('month');
    let month_sel = month_el.parentNode.firstElementChild.firstElementChild.checked;

    let day_el = document.getElementById('day')
    let day_sel = day_el.parentNode.firstElementChild.firstElementChild.checked;

    let weekday_el = document.getElementById('weekday')
    let weekday_sel = weekday_el.parentNode.firstElementChild.firstElementChild.checked;

    let day_night_el = document.getElementById("daynight");
    let day_night_sel = day_night_el.parentNode.firstElementChild.firstElementChild.checked;

    let all_markers = [trafficAccidentMarkers, bikeAccidentMarkers, pedestrianAccidentMarkers]

    if (!reset){
        // disable all markers
        all_markers.forEach(removeMarkerSet);
    }

    let filtered_set = []
    let trafficEnabled = document.getElementById('traffic_accidents').parentElement.classList.contains("enabled");
    let bikeEnabled = document.getElementById('bike_accidents').parentElement.classList.contains("enabled");
    let pedestrianEnabled = document.getElementById('pedestrian_accidents').parentElement.classList.contains("enabled");

    if (reset) {
        if (trafficEnabled){
            addTrafficAccidents();
        }
        if (bikeEnabled){
            addBikeAccidents();
        }
        if (pedestrianEnabled){
            addPedestrianAccidents();
        }
        accidentsCluster.ProcessView();
        return
    }

    if (trafficEnabled) {
        filtered_set.push(...trafficAccidentMarkers);
    }
    if (bikeEnabled) {
        filtered_set.push(...bikeAccidentMarkers);
    }
    if (pedestrianEnabled) {
        filtered_set.push(...pedestrianAccidentMarkers);
    }

    if (year_sel){
        filtered_set = filtered_set.filter(value =>  Array.from(year_el.selectedOptions).some(x => x.value === value.date.getFullYear().toString()));
    }
    if (month_sel) {
        filtered_set = filtered_set.filter(value =>  Array.from(month_el.selectedOptions).some(x => x.value === value.date.getMonth().toString()));
    }
    if (day_sel) {
        filtered_set = filtered_set.filter(value =>  Array.from(day_el.selectedOptions).some(x => x.value === value.date.getDate().toString()));
    }
    if (weekday_sel) {
        filtered_set = filtered_set.filter(value =>  Array.from(weekday_el.selectedOptions).some(x => x.value === value.date.getDay().toString()));
    }
    if (day_night_sel) {
        filtered_set = filtered_set.filter(value =>  Array.from(day_night_el.selectedOptions).some(x => x.value === value.day_night));
    }
    filtered_set.map(marker => marker.filtered = false);
    accidentsCluster.ProcessView();
}