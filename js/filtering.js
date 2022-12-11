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
        'speed adjustment',
        'violation of traffic signs or rules - red light',
        'violation of traffic signs or rules - sign Give Way or STOP',
        'violation of traffic signs or rules - others',
        'safe distance',
        'giving way - others',
        'giving way - turning tram',
        'giving way - pedestrian',
        'giving way - when turning or backing',
        'giving way - others',
        'giving way - turning left',
        'giving way - queueing',
        'overtaking',
        'technical defects',
        'others'
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
    '<i class="fa fa-person-walking fa-fw me-2"></i> Pedestrian circumstances': [
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
    '<i class="fa-solid fa-coins fa-fw me-2"></i> Material Damage Price': [0, 220637300],
    '<i class="fa-solid fa-user-injured fa-fw me-2"></i> Minor Injuries': [0, 29],
    '<i class="fa-solid fa-truck-medical fa-fw me-2"></i> Major Injuries': [0, 14],
    '<i class="fa-solid fa-skull-crossbones fa-fw me-2"></i> Casualties': [0, 3]
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

            let clearBadge = document.createElement('span');
            clearBadge.classList.add("badge");
            clearBadge.classList.add("badge-danger");
            clearBadge.classList.add("position-absolute");
            clearBadge.classList.add("top-50");
            clearBadge.classList.add("end-0");
            clearBadge.classList.add("me-4");
            clearBadge.classList.add("translate-middle");
            clearBadge.classList.add("rounded-pill");
            clearBadge.innerText = "";

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

            buttonCategory.appendChild(clearBadge);

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
                clearBadge.addEventListener('click', function (event) {
                    event.stopImmediatePropagation();
                    let catOptions = this.parentElement.nextElementSibling.getElementsByTagName("button");
                    Array.from(catOptions).forEach(option => {
                        if (option.classList.contains("active")) {
                            option.classList.remove("active");
                        }
                    })
                    // trigger special handler
                    pruneFilter.handleTagSelection('_reset', this.parentElement.getAttribute('data-name'));
                    this.innerText = "";
                })
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
                        this.parentNode.parentNode.parentNode.firstElementChild.getElementsByTagName("span")[0].innerText = "Reset";
                        pruneFilter.handleTagSelection(this.innerText, this.parentNode.parentNode.parentNode.firstElementChild.getAttribute('data-name'));
                    },false);
                    buttonOption.appendChild(document.createTextNode(value));
                    accordionBodyWrapper.appendChild(buttonOption);
                })
            } else if (index === 17) { // material damage price
                let damagePriceForm = document.createElement("form");
                damagePriceForm.noValidate = true;
                damagePriceForm.classList.add("needs-validation");

                buttonCategory.appendChild(clearBadge);

                let inputRowDivFrom = document.createElement("div");
                inputRowDivFrom.classList.add("input-group");
                inputRowDivFrom.classList.add("mt-2");
                let inputRowDivTo = document.createElement("div");
                inputRowDivTo.classList.add("input-group");
                inputRowDivTo.classList.add("mt-2");

                let fromLabel = document.createElement("span");
                fromLabel.classList.add("input-group-text");
                fromLabel.classList.add("col-2");
                fromLabel.classList.add("fs-7");
                fromLabel.innerText = "From";

                let toLabel = document.createElement("span");
                toLabel.classList.add("input-group-text");
                toLabel.classList.add("col-2");
                toLabel.classList.add("fs-7");
                toLabel.innerText = "To";

                let currencySpan = document.createElement("span");
                currencySpan.classList.add("input-group-text");
                currencySpan.classList.add("fs-7");
                currencySpan.innerText = "CZK";

                let inputIntFrom = document.createElement("input");
                inputIntFrom.classList.add("form-control");
                inputIntFrom.classList.add("fs-7");
                inputIntFrom.ariaLabel = "Material Damage Price in CZK - min value";
                inputIntFrom.type = "number";
                inputIntFrom.id = "materialDamageFrom";
                inputIntFrom.name = "materialDamageFrom";
                let min = filterCategories[cat][0];
                let max = filterCategories[cat][1];
                inputIntFrom.min = min;
                inputIntFrom.max = max;
                inputIntFrom.step = "1";
                inputIntFrom.value = "0";

                let inputIntTo = document.createElement("input");
                inputIntTo.classList.add("form-control");
                inputIntTo.classList.add("fs-7");
                inputIntTo.ariaLabel = "Material Damage Price in CZK - max value";
                inputIntTo.type = "number";
                inputIntTo.id = "materialDamageTo";
                inputIntTo.name = "materialDamageTo";
                inputIntTo.min = min;
                inputIntTo.max = max;
                inputIntTo.step = "1";
                inputIntTo.value = max;

                let divInvalidFeedbackFrom = document.createElement("div");
                divInvalidFeedbackFrom.classList.add("invalid-feedback");

                let divInvalidFeedbackTo = document.createElement("div");
                divInvalidFeedbackTo.classList.add("invalid-feedback");

                inputRowDivFrom.appendChild(fromLabel);
                inputRowDivFrom.appendChild(currencySpan);
                inputRowDivFrom.appendChild(inputIntFrom);
                inputRowDivFrom.appendChild(divInvalidFeedbackFrom);
                damagePriceForm.appendChild(inputRowDivFrom)

                inputRowDivTo.appendChild(toLabel);
                inputRowDivTo.appendChild(currencySpan.cloneNode(true));
                inputRowDivTo.appendChild(inputIntTo);
                inputRowDivTo.appendChild(divInvalidFeedbackTo);
                damagePriceForm.appendChild(inputRowDivTo);

                let submitButton = document.createElement("button");
                submitButton.type = "button";
                submitButton.classList.add("btn");
                submitButton.classList.add("btn-primary");
                submitButton.classList.add("text-light");
                submitButton.classList.add("mt-2");
                submitButton.classList.add("fs-7");

                submitButton.innerText = "Filter";

                submitButton.addEventListener("click", function (event) {
                    let damagePriceInputFrom = document.getElementById("materialDamageFrom");
                    let damagePriceInputTo = document.getElementById("materialDamageTo");
                    damagePriceInputFrom.max = damagePriceInputTo.value;
                    damagePriceInputTo.min = damagePriceInputFrom.value;
                    if (damagePriceInputFrom.checkValidity() && damagePriceInputTo.checkValidity()) {
                        inputIntFrom.classList.remove("is-invalid");
                        inputIntFrom.classList.add("is-valid");
                        inputIntTo.classList.remove("is-invalid");
                        inputIntTo.classList.add("is-valid");

                        pruneFilter.handleTagSelection([damagePriceInputFrom.value, damagePriceInputTo.value], "cat_17");
                    } else {
                        event.preventDefault();

                        let czkCzechLocale = Intl.NumberFormat('cs');
                        if (!damagePriceInputFrom.checkValidity()) {
                            inputIntFrom.classList.remove("is-valid");
                            inputIntFrom.classList.add("is-invalid");
                            divInvalidFeedbackFrom.innerText = "A value in range " + czkCzechLocale.format(min) + " and " + czkCzechLocale.format(damagePriceInputTo.value) + " is required.";
                        }
                        if (!damagePriceInputTo.checkValidity()) {
                            inputIntTo.classList.remove("is-valid");
                            inputIntTo.classList.add("is-invalid");
                            divInvalidFeedbackTo.innerText = "A value in range " + czkCzechLocale.format(damagePriceInputFrom.value) + " and " + czkCzechLocale.format(max) + " is required.";
                        }

                    }
                })

                inputIntFrom.addEventListener("change", function () {
                    clearBadge.innerText = "Reset";
                })

                inputIntTo.addEventListener("change", function () {
                    clearBadge.innerText = "Reset";
                })

                clearBadge.addEventListener("click", function (event) {
                    event.stopImmediatePropagation();
                    inputIntFrom.value = min;
                    inputIntTo.value = max;
                    this.innerText = "";
                    pruneFilter.handleTagSelection("_reset", "cat_17");
                })

                damagePriceForm.appendChild(submitButton);
                accordionBodyWrapper.appendChild(damagePriceForm);




            } else { // sliders
                let minVal = filterCategories[cat][0];
                let maxVal = filterCategories[cat][1];

                let minValText = document.createElement("span");
                minValText.classList.add("me-4");
                minValText.classList.add("fs-7");
                minValText.classList.add("text-light");
                minValText.innerText = minVal;
                let maxValText = document.createElement("span");
                maxValText.classList.add("ms-4");
                maxValText.classList.add("fs-7");
                maxValText.classList.add("text-light");
                maxValText.innerText = maxVal;

                buttonCategory.appendChild(clearBadge.cloneNode(true));

                let inputSlider = document.createElement("input");
                inputSlider.type = "text";
                inputSlider.id = "slider_" + index;
                inputSlider.name = "inputSlider";
                inputSlider.dataset.sliderMin = minVal.toString();
                inputSlider.dataset.sliderMax = maxVal.toString();
                inputSlider.dataset.sliderStep = "1";
                inputSlider.dataset.sliderValue = "[" + minVal + "," + maxVal + "]";

                accordionBodyWrapper.classList.add("pt-3");

                accordionBodyWrapper.appendChild(minValText);
                accordionBodyWrapper.appendChild(inputSlider);
                accordionBodyWrapper.appendChild(maxValText);
            }
            divCategoryOptions.appendChild(accordionBodyWrapper);
            accordionItemWrapper.appendChild(divCategoryOptions);

        }
    )
    outputEl.appendChild(divMain);
    let resetCat18 = document.getElementById("divCategory_18").previousElementSibling.getElementsByTagName("span")[0];
    let sliderCat18 = new Slider("#slider_18", {});
    sliderCat18.on('slideStop', function (sliderValue) {
        resetCat18.innerText = "Reset";
        pruneFilter.handleTagSelection(sliderValue, "cat_18");
    });
    resetCat18.addEventListener('click', function (event) {
        event.stopImmediatePropagation();
        sliderCat18.refresh();
        // trigger special handler
        pruneFilter.handleTagSelection('_reset', "cat_18");
        this.innerText = "";
    })

    let resetCat19 = document.getElementById("divCategory_19").previousElementSibling.getElementsByTagName("span")[0];
    let sliderCat19 = new Slider("#slider_19", {});
    sliderCat19.on('slideStop', function (sliderValue) {
        resetCat19.innerText = "Reset";
        pruneFilter.handleTagSelection(sliderValue, "cat_19");
    });
    resetCat19.addEventListener('click', function (event) {
        event.stopImmediatePropagation();
        sliderCat19.refresh();
        // trigger special handler
        pruneFilter.handleTagSelection('_reset', "cat_19");
        this.innerText = "";
    })

    let resetCat20 = document.getElementById("divCategory_20").previousElementSibling.getElementsByTagName("span")[0];
    let sliderCat20 = new Slider("#slider_20", {});
    sliderCat20.on('slideStop', function (sliderValue) {
        resetCat20.innerText = "Reset";
        pruneFilter.handleTagSelection(sliderValue, "cat_20");
    });
    resetCat20.addEventListener('click', function (event) {
        event.stopImmediatePropagation();
        sliderCat20.refresh();
        // trigger special handler
        pruneFilter.handleTagSelection('_reset', "cat_20");
        this.innerText = "";
    })

}


class PruneClusterFilter {
    constructor(pruneClusterLayer) {
        this.layer = pruneClusterLayer;
        this._filtersPerCat = {};
        this._hiddenPerCat = {};
        this._rangeCats = ['cat_17', 'cat_18', 'cat_19', 'cat_20'];
        this._listCats = ['cat_3', 'cat_4', 'cat_8', 'cat_2', 'cat_7', 'cat_15'];
    }

    filter() {
        console.log(this._filtersPerCat);
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
                        if (this._rangeCats.includes(category)) {
                            if (marker.data.tags[category] >= tag[0] && marker.data.tags[category] <= tag[1]){
                                this.layer.RegisterMarker(marker);
                                toBeRemovedFromHiddenMarkers.push(index);
                                break;
                            }
                        } else if (this._listCats.includes(category)) {
                            marker.data.tags[category].includes(tag)
                            this.layer.RegisterMarker(marker);
                            toBeRemovedFromHiddenMarkers.push(index);
                            break;
                        }
                        else {
                            if (marker.data.tags[category] === tag) {
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
                        if (this._rangeCats.includes(category)) {
                            matched = marker.data.tags[category] >= tag[0] && marker.data.tags[category] <= tag[1];
                        } else if (this._listCats.includes(category)) {
                            matched = marker.data.tags[category].includes(tag);
                        }
                        else {
                            matched = marker.data.tags[category]  === tag;

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

        // clear whole category if reset was triggered
        if (tag === "_reset") {
            delete this._filtersPerCat[category];
            return this.filter()
        }

        if (this._rangeCats.includes(category)){
            this._filtersPerCat[category] = [tag];
        }else {
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
        }
        return this.filter();
    }
}