// EVENT HANDLERS
function toggleTrafficAccidents(el) {
    if (!el.classList.contains("enabled")) {
        el.classList.add("enabled");
        addTrafficAccidents();
    } else {
        el.classList.remove("enabled")
        removeMarkerSet(trafficAccidentMarkers);
    }
}

function toggleBikeAccidents(el) {
    if (!el.classList.contains("enabled")) {
        el.classList.add("enabled");

        addBikeAccidents();
    } else {
        el.classList.remove("enabled")
        removeMarkerSet(bikeAccidentMarkers);
    }}

function togglePedestrianAccidents(el) {
    if (!el.classList.contains("enabled")) {
        el.classList.add("enabled");
        addPedestrianAccidents();
    } else {
        el.classList.remove("enabled")
        removeMarkerSet(pedestrianAccidentMarkers);
    }}