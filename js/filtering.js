const filterCategories =  {
    '<i class="fa-solid fa-car fa-fw me-2"></i> Collision With': [
        'crash',
        'collision with a pedestrian',
        'collision with an animal',
        'collision with a moving non-rail vehicle',
        'collision with a fixed obstacle',
        'collision with tram',
        'collision with train',
        'collision with parked vehicle',
        'other'
    ],
    '<i class="fa-solid fa-circle-question fa-fw me-2"></i> Cause': [
        'improper driving style',
        'others',
        'speed adjustment',
        'violation of traffic signs or rules',
        'giving way',
        'overtaking',
        'technical defects'
    ],
    '<i class="fa-solid fa-person fa-fw me-2"></i> Person': [
        'pedestrian',
        'other passengers (even in the sidecar of the motorcycle)',
        'a passenger in the front seat next to the driver or a passenger (passenger) on a motorcycle, bicycle',
        'passenger in the back seat',
        'unknown',
        'driver'
    ],
    '<i class="fa-solid fa-person-half-dress fa-fw me-2"></i> Sex': [
        'man',
        'woman',
        'boy (up to 15 yo)',
        'girl (up to 15 yo)',
        'unknown'
    ],
    '<i class="fa-solid fa-image-portrait fa-fw me-2"></i> Age Group': [
        '0-6',
        '7-11',
        '12-15',
        '16-18',
        '19-24',
        '25-32',
        '33-44',
        '45-60',
        '61-70',
        '71+',
        'unknown'
    ],
    '<i class="fa fa-beer fa-fw me-2"></i> Alcohol': [
        'DUI - blood alcohol content < 0,24‰',
        'DUI - blood alcohol content < 0,5‰ & >= 0,24‰',
        'DUI - blood alcohol content < 0,8‰ & >= 0,5‰',
        'DUI - blood alcohol content < 1,0‰ & >= 0,8‰',
        'DUI - blood alcohol content < 1,5‰ & >= 1,0‰',
        'DUI - blood alcohol content >= 1,5‰ ',
        'No',
        'not tested',
        'DUI - alcohol and drugs',
        'DUI - drugs'
    ],
    '<i class="fa-solid fa-person-circle-question fa-fw me-2"></i> Caused By': [
        'pedestrian',
        'other',
        'another road user',
        'forest or domestic animal',
        'vehicle technical defect',
        'communication obstacle',
        'motor vehicle driver',
        'driver of a non-motor vehicle'
    ],
    '<i class="fa-solid fa-person-cane fa-fw me-2"></i> Person Condition': [
        'good - no adverse circumstances were detected',
        'physical indisposition (illness, nausea, reduced mobility, etc.)',
        'invalid',
        'others',
        'illness, injury, etc.',
        'inattention, distractibility',
        'unknown',
        'under the influence of alcohol, blood alcohol content of 1 ‰ or more',
        'under the influence of alcohol, blood alcohol content up to 0.99 ‰',
        'under the influence of drugs, narcotics',
        'suicide attempt, suicide',
        'tired, fell asleep, sudden physical indisposition',
        'the driver died while driving (heart attack, etc.)',
    ],
    '<i class="fa-solid fa-person-falling-burst fa-fw me-2"></i> Consequence': [
        'without injury',
        'minor injury',
        'major injury',
        'death',
        'unknown'
    ],
    '<i class="fa-solid fa-road-circle-exclamation fa-fw me-2"></i> Road Condition': [
        'different state of the road surface at the time of accidents',
        'mud on the road',
        'ice on the road - untreated',
        'ice on the road - treated',
        'sudden change in road conditions (frost on the bridge, local frost)',
        'wet surface',
        'dry surface, clean',
        'dry surface, dirty (sand, dust, leaves, gravel etc.)',
        'continuous snow layer, slush'
    ],
    '<i class="fa-solid fa-cloud fa-fw me-2"></i> Weather Condition': [
        'rain',
        'different difficult weather conditions',
        'fog',
        'beginning of the rain, light rain, drizzling etc.',
        'normal weather conditions',
        'gusting wind (side wind, whirlwind etc.)',
        'snowfall',
        'frost, icicles are formed'
    ],
    '<i class="fa-solid fa-smog fa-fw me-2"></i> Visibility': [
        'at night - without public lighting, visibility unimpaired due to weather conditions',
        'at night - without public lighting, visibility impaired due to weather conditions (fog, rain, snowfall etc.)',
        'at night - with public lighting, visibility unimpaired due to weather conditions',
        'at night - with public lighting, visibility impaired due to weather conditions (fog, rain, snowfall etc.)',
        'during the day, visibility not impaired  weather conditions',
        'during the day, reduced visibility (dawn, dusk)',
        'during the day, poor visibility due to weather conditions (fog, snow, rain, etc.)'
    ],
    '<i class="fa-solid fa-eye fa-fw me-2"></i> View Condition': [
        'good view',
        'bad view - other reason',
        'view blocked by a stationary vehicle',
        'bad view - due to surrounding construction (buildings, full railings, etc.)',
        'bad view - due to the course of the road, or the longitudinal profile or routing (unclear top of the climb, road cut, etc.)',
        'bad view - due to vegetation - temporary (grass, grain etc.)',
        'bad view - due to vegetation - permanent (trees, bushes, etc.)'
    ],
    '<i class="fa-solid fa-location-pin fa-fw me-2"></i> Location': [
        'bridge, overpass, underpass, tunnel',
        'parking lot adjacent to the road',
        'pedestrain crossing',
        'near a pedestrian crossing (within 20 m)',
        'exit from the parking lot, forest path, etc.',
        'tram, bus, trolleybus stop with a boarding island',
        'tram, bus, trolleybus stop without a boarding island',
        'fuel pump',
        'railway crossing not secured by barriers or light warning devices',
        'railway crossing secured',
        'none of the above'
    ],
    '<i class="fa fa-road fa-fw me-2"></i> Road Type': [
        'highway',
        'local road',
        'controlled road (in specific areas)',
        'specific-purpose road - others(parking, rest areas, etc.)',
        'specific-purpose road - field and forest roads, etc.',
        '1st class roads',
        '2nd class roads',
        '3rd class roads',
        'road junction (crossroad controlled in specific areas)'
    ],
    '<i class="fa fa-truck-plane fa-fw me-2"></i> Vehicle Type': [
        'bus',
        'pedestrian',
        'other motor vehicle (agricultural, forestry, construction machinery, etc.)',
        'other non-motor vehicle',
        'other vehicle type',
        'bicycle',
        'small motorcycle (up to 50 cc)',
        'moped',
        'motorcycle (including sidecars, scooters, etc.)',
        'unknown, driver left the scene',
        'truck (including multicar, truck crane, tanker, etc.)',
        'truck with semi-trailer',
        'truck with trailer',
        'car without trailer',
        'car with trailer',
        'carriage, horse riding',
        'tractor (also with trailer)',
        'tram',
        'trolley',
        'train'
    ],
    '<i class="fa fa-road fa-fw me-2"></i> Pedestrian circumstances': [
        'jaywalking (20 meters or more from the crossing)',
        'walking, standing on the pavement',
        'crossing at a designated crossing point',
        'red light violation',
        'jaywalking (up to 20 meters from the crossing)',
        'green light entry',
        'crossing just in front of or behind a vehicle standing at a stop',
        'crossing just in front of or behind a parked vehicle',
        'walking on the correct side',
        'walking on the incorrect side',
        'other situation',
        'unknown'
    ],
    '<i class="fa-solid fa-coins fa-fw me-2"></i> Material Damage Price': [0, 5360000],
    '<i class="fa-solid fa-user-injured fa-fw me-2"></i> Number of Minor Injuries': [0, 29],
    '<i class="fa-solid fa-truck-medical fa-fw me-2"></i> Number of Major Injuries': [0, 14],
    '<i class="fa-solid fa-skull-crossbones fa-fw me-2"></i> Number of Casualties': [0, 3]
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


class PruneClusterFilter {
    constructor(pruneClusterLayer) {
        this.layer = pruneClusterLayer;
        this._filtersPerCat = {};
        this._hiddenPerCat = {};
    }

    _isArray(checkedObject) {
        return checkedObject.constructor === Array;
    }

    filter() {
        Object.keys(this._hiddenPerCat).forEach(key => {
            if (!Object.keys(this._filtersPerCat).includes(key)) {
                this.layer.RegisterMarkers(this._hiddenPerCat[key]);
                this._hiddenPerCat[key] = [];
            }
        })

        for (let category of Object.keys(this._filtersPerCat)) {
            let toBeRemovedFromHiddenMarkers = [];

            if (Object.keys(this._hiddenPerCat).includes(category)) {
                this._hiddenPerCat[category].forEach((marker, index) => {
                    for (let tag of this._filtersPerCat[category]) {
                        if (this._isArray(tag)) {
                            if (marker.data.tags[category] >= tag[0] && marker.data.tags[category] <= tag[1]){
                                this.layer.RegisterMarker(marker);
                                toBeRemovedFromHiddenMarkers.push(index);
                                break;
                            }
                        } else {
                            if (marker.data.tags[category].includes(tag)) { // maybe matches substrings?
                                // register the matching marker back to the layer
                                this.layer.RegisterMarker(marker);
                                toBeRemovedFromHiddenMarkers.push(index);
                                break;
                            }
                        }
                    }
                })
            }
            while (toBeRemovedFromHiddenMarkers.length > 0) {
                this._hiddenPerCat[category].splice(toBeRemovedFromHiddenMarkers.pop(), 1);
            }

            let toRemoveMarkers = [];


            if (this._filtersPerCat[category].length > 0) {
                let markers = this.layer.Cluster.GetMarkers();

                markers.forEach(marker => {
                    let matched = false;
                    for (let tag of this._filtersPerCat[category]) {
                        if (this._isArray(tag)) {
                            matched = marker.data.tags[category] >= tag[0] && marker.data.tags[category] <= tag[1];
                        } else {
                            matched = marker.data.tags[category].includes(tag);

                        }
                        if (matched) {
                            break;
                        }
                    }
                    if (!matched) {
                        toRemoveMarkers.push(marker);
                    }
                })

                toRemoveMarkers.forEach(marker => {
                    if (!Object.keys(this._hiddenPerCat).includes(category)) {
                        this._hiddenPerCat[category] = [];
                    }
                    this._hiddenPerCat[category].push(marker);
                })

                this.layer.RemoveMarkers(toRemoveMarkers);
            }
        }
        this.layer.ProcessView();
    }


    handleTagSelection(tag, category) {
        let matched_cat = this._filtersPerCat[category];
        if (matched_cat){  // the category already has some tag active
            if (!matched_cat.includes(tag)) {
                matched_cat.push(tag); // if it isn't activated, save it as active
            } else {
                matched_cat.splice(matched_cat.indexOf(tag), 1); // otherwise remove it
                // if this was the last tag, remove whole category
                if (matched_cat.length === 0){
                    delete this._filtersPerCat[category];
                }
            }
        } else { // new category has been activated
            this._filtersPerCat[category] = [tag];
        }
        return this.filter();
    }
}