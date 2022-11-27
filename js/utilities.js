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

function generateFilterControl() {
    const pruneFilter = new PruneClusterFilter(accidentsCluster);
    let outputEl = document.getElementById('filters');
    let divMain = document.createElement('div');
    divMain.classList.add('accordion');
    // divMain.classList.add('list-group')

    //replace with one dict with all categories
    Object.keys(filterCategories).forEach((cat, index) => {
        let accordionItemWrapper = document.createElement('div');
        accordionItemWrapper.classList.add('accordion-item');

        // category switcher button
        let buttonCategory = document.createElement('button');
        buttonCategory.type = 'button';
        buttonCategory.dataset.bsToggle = 'collapse';
        buttonCategory.dataset.bsTarget = '#divCategory_' + index.toString();
        buttonCategory.ariaExpanded = 'false';
        // buttonCategory.classList.add('list-group-item');
        // buttonCategory.classList.add('list-group-item-action');
        // buttonCategory.classList.add('btn-outline-primary');
        buttonCategory.classList.add('accordion-button');
        buttonCategory.classList.add('collapsed');
        buttonCategory.innerHTML = cat;
        accordionItemWrapper.appendChild(buttonCategory);
        divMain.appendChild(accordionItemWrapper);

        // inner div for possible selections
        let divCategoryOptions = document.createElement('div');
        divCategoryOptions.classList.add('list-group');
        divCategoryOptions.classList.add('accordion-collapse');
        divCategoryOptions.classList.add('collapse');
        divCategoryOptions.id = "divCategory_" + index.toString();

        let accordionBodyWrapper = document.createElement('div');
        accordionBodyWrapper.classList.add('accordion-body');

        filterCategories[cat].forEach(value => {
            let buttonOption = document.createElement('button');
            buttonOption.type = 'button';
            buttonOption.dataset.bsToggle = 'button';
            buttonOption.classList.add('btn');
            buttonOption.classList.add('btn-outline-secondary');
            buttonOption.classList.add('list-group-item');
            buttonOption.classList.add('list-group-item-action');
            buttonOption.addEventListener('click', function() {
                pruneFilter.handleTagSelection(this.innerText);
            },false);
            buttonOption.appendChild(document.createTextNode(value));
            accordionBodyWrapper.appendChild(buttonOption);
        })
        divCategoryOptions.appendChild(accordionBodyWrapper);
        accordionItemWrapper.appendChild(divCategoryOptions);
    })
    outputEl.appendChild(divMain);
}