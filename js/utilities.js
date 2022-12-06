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
        // accordionItemWrapper.classList.add('accordion-item');

        // category switcher button
        let buttonCategory = document.createElement('button');
        buttonCategory.type = 'button';
        buttonCategory.dataset.bsToggle = 'collapse';
        buttonCategory.dataset.bsTarget = '#divCategory_' + index.toString();
        buttonCategory.dataset.name = 'cat_' + index.toString();
        buttonCategory.ariaExpanded = 'false';
        // buttonCategory.classList.add('list-group-item');
        // buttonCategory.classList.add('list-group-item-action');
        buttonCategory.classList.add('btn');
        buttonCategory.classList.add('btn-dark');
        buttonCategory.classList.add('accordion-button');
        buttonCategory.classList.add('filter-button');
        buttonCategory.classList.add('collapsed');
        buttonCategory.classList.add('fw-normal');
        buttonCategory.classList.add('fs-7');
        buttonCategory.classList.add('text-uppercase');
        buttonCategory.innerHTML = cat;
        accordionItemWrapper.appendChild(buttonCategory);

        let dividerHr = document.createElement('hr');
        dividerHr.classList.add("catDivider");
        divMain.appendChild(dividerHr);
        divMain.appendChild(accordionItemWrapper);


        // inner div for possible selections
        let divCategoryOptions = document.createElement('div');
        divCategoryOptions.classList.add('list-group');
        divCategoryOptions.classList.add('accordion-collapse');
        divCategoryOptions.classList.add('collapse');
        divCategoryOptions.id = "divCategory_" + index.toString();

        let accordionBodyWrapper = document.createElement('div');
        // accordionBodyWrapper.classList.add('accordion-body');
        // accordionBodyWrapper.classList.add('bg-light');

        // only non-slider selections
        if (index < 17) {
            filterCategories[cat].forEach(value => {
                let buttonOption = document.createElement('button');
                buttonOption.type = 'button';
                buttonOption.dataset.bsToggle = 'button';
                // buttonOption.classList.add('list-group-item');
                buttonOption.classList.add('list-group-item-action');
                buttonOption.classList.add('mt-2');
                buttonOption.classList.add('btn');
                buttonOption.classList.add('btn-secondary');
                buttonOption.classList.add('fs-7');
                buttonOption.addEventListener('click', function() {
                    pruneFilter.handleTagSelection(this.innerText, this.parentNode.parentNode.parentNode.firstElementChild.getAttribute('data-name'));
                },false);
                buttonOption.appendChild(document.createTextNode(value));
                accordionBodyWrapper.appendChild(buttonOption);
            })
        } else if (index === 17) {
            // material damage
        } else {
            let minVal = filterCategories[cat][0];
            let maxVal = filterCategories[cat][1];
            let inputSlider = document.createElement('input');
            inputSlider.type = "text";
            inputSlider.id = "slider_" + index;
            inputSlider.name = "inputSlider";
            inputSlider.dataset.sliderMin = minVal.toString();
            inputSlider.dataset.sliderMax = maxVal.toString();
            inputSlider.dataset.sliderStep = "1";
            inputSlider.dataset.sliderValue = "[" + minVal + "," + maxVal + "]";
            accordionBodyWrapper.appendChild(inputSlider);
        }
        divCategoryOptions.appendChild(accordionBodyWrapper);
        accordionItemWrapper.appendChild(divCategoryOptions);

    }
    )
    outputEl.appendChild(divMain);

    let sliderCat17 = new Slider("#slider_18", {});
    sliderCat17.on('slideStop', function (sliderValue) {
        console.log(sliderValue);
        pruneFilter.handleTagSelection(sliderValue, "cat_17");
    });

    let sliderCat18 = new Slider("#slider_19", {});
    sliderCat18.on('slideStop', function (sliderValue) {
        console.log(sliderValue);
        pruneFilter.handleTagSelection(sliderValue, "cat_18");
    });
    let sliderCat19 = new Slider("#slider_20", {});
    sliderCat19.on('slideStop', function (sliderValue) {
        console.log(sliderValue);
        pruneFilter.handleTagSelection(sliderValue, "cat_19");
    });


}

