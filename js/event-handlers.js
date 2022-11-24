// EVENT HANDLERS
function toggleTrafficAccidents(el) {
    if (!el.classList.contains("enabled")) {
        console.log("Adding traffic accidents");
        el.classList.add("enabled");
        addTrafficAccidents();
    } else {
        console.log("Removing traffic accidents");
        el.classList.remove("enabled")
        removeMarkerSet(trafficAccidentMarkers);
    }
}

function toggleBikeAccidents(el) {
    if (!el.classList.contains("enabled")) {
        console.log("Adding bike accidents");
        el.classList.add("enabled");

        addBikeAccidents();
    } else {
        console.log("Removing bike accidents");
        el.classList.remove("enabled")
        removeMarkerSet(bikeAccidentMarkers);
    }}

function togglePedestrianAccidents(el) {
    if (!el.classList.contains("enabled")) {
        console.log("Adding pedestrian accidents");
        el.classList.add("enabled");
        addPedestrianAccidents();
    } else {
        console.log("Removing pedestrian accidents");
        el.classList.remove("enabled")
        removeMarkerSet(pedestrianAccidentMarkers);
    }}