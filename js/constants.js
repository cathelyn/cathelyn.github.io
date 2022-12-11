const OSM = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: 'Katarína Bulková<br>&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
});

const CartoDB_Positron = L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
    attribution: 'Katarína Bulková<br>&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
    subdomains: 'abcd',
    maxZoom: 20
});
const CyclOSM = L.tileLayer('https://{s}.tile-cyclosm.openstreetmap.fr/cyclosm/{z}/{x}/{y}.png', {
    maxZoom: 20,
    attribution: 'Katarína Bulková<br>&copy;<a href="https://github.com/cyclosm/cyclosm-cartocss-style/releases" title="CyclOSM - Open Bicycle render">CyclOSM</a> | Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
});

const Stamen_TonerLite = L.tileLayer('https://stamen-tiles-{s}.a.ssl.fastly.net/toner-lite/{z}/{x}/{y}{r}.{ext}', {
    attribution: 'Katarína Bulková<br>Map tiles by <a href="https://stamen.com">Stamen Design</a>, <a href="https://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    subdomains: 'abcd',
    minZoom: 0,
    maxZoom: 20,
    ext: 'png',
});

const Esri_WorldImagery = L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
    attribution: 'Katarína Bulková<br>Tiles &copy; Esri &mdash; Source: Esri, i-cubed, USDA, USGS, AEX, GeoEye, Getmapping, Aerogrid, IGN, IGP, UPR-EGP, and the GIS User Community'
});

const categoriesColors = [
    getComputedStyle(document.documentElement).getPropertyValue('--violet'),
    getComputedStyle(document.documentElement).getPropertyValue('--green'),
    getComputedStyle(document.documentElement).getPropertyValue('--blue')
];
const pi2 = Math.PI * 2;

// categories configuration
const trafficCategory = 0
const bikeCategory = 1
const pedestrianCategory = 2


// cycling infrastructure
const cyclingInfraSourceFiles = {
    'BicycleCrossing.shp.zip': L.layerGroup(),
    'BikePath.shp.zip': L.layerGroup(),
    'BikePathInTheOppositeDirection(Lane).shp.zip': L.layerGroup(),
    'CyclistsRidingInTheOppositeDirection.shp.zip': L.layerGroup(),
    'DedicatedBicycleLane.shp.zip': L.layerGroup(),
    'EntryAllowedForCyclists.shp.zip': L.layerGroup(),
    'MarkedCorridorForCyclists.shp.zip': L.layerGroup(),
    'NoEntryForAllMotorVehicles.shp.zip': L.layerGroup(),
    'Others.shp.zip': L.layerGroup(),
    'PathForPedestriansAndCyclists(Separated).shp.zip': L.layerGroup(),
    'PathForPedestriansAndCyclists(Unseparated).shp.zip': L.layerGroup(),
    'PedestrianPathWithCyclistsAllowed.shp.zip': L.layerGroup(),
    'ProhibitedEntryForCyclists.shp.zip': L.layerGroup(),
    'ProtectiveLaneForCyclists.shp.zip': L.layerGroup(),
    'ReservedLaneForTaxi_Bicycle_Bus.shp.zip': L.layerGroup(),
    'TheSectionWasCanceled.shp.zip': L.layerGroup()
}

// street slopes
const streetSlopeSourceFiles = {
    'Extreme.shp.zip': L.layerGroup(),
    'Dangerous.shp.zip': L.layerGroup(),
    'Medium.shp.zip': L.layerGroup(),
    'Min.shp.zip': L.layerGroup()
}