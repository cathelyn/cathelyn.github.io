// Add filter to the sidebar
function moveFilterIconToSidebar() {
    console.log("Moving filter to the sidebar");
    let filter_buttons = document.getElementsByClassName("leaflet-bar easy-button-container leaflet-control");
    let button_container = filter_buttons[0].parentNode;
    button_container.classList.remove('leaflet-top');
    let sidebar_container = document.getElementById('filters');
    sidebar_container.append(button_container);
}

function fontAwesomeMapMarkerIcon()	{
    return new L.divIcon({
            html: '<i class="fa fa-map-marker fa-2x"></i>',
            iconSize: [40, 40],
            className: "MapMarkerIcon",
        }
    )
}