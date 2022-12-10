function toggleGroupOnManualSelection() {
    let checkbox = this.parentNode.parentNode.firstElementChild;
    checkbox.checked = Array.from(this.parentNode.children).every(el => el.classList.contains('enabled'));

}

function generateOverlaysControl() {
    let outputEl = document.getElementById("layer_selector");
    const ulMain = document.createElement('ul');

    Object.keys(overlaysGrouped).forEach(group => {

        let dividerHr = document.createElement('hr');
        dividerHr.classList.add("catDivider");
        ulMain.appendChild(dividerHr);

        const liGroup = document.createElement('li');
        liGroup.classList.add('overlayGroup');
        liGroup.classList.add('form-check');
        liGroup.classList.add('form-switch');
        liGroup.classList.add('bg-transparent');
        liGroup.classList.add('mb-3');
        // liGroup.innerHTML = group;

        const checkbox = document.createElement('input');
        checkbox.classList.add("form-check-input")
        checkbox.type = "checkbox";
        checkbox.name = group;
        checkbox.id = "chb_" + group.replace(" ", "_");

        // label for the checkbox
        const groupLabel = document.createElement('label');
        groupLabel.classList.add('form-check-label');
        groupLabel.classList.add('ms-2');
        groupLabel.classList.add('text-uppercase');
        groupLabel.classList.add('text-light');
        groupLabel.classList.add('mb-2');
        groupLabel.htmlFor = "chb_" + group.replace(" ", "_");

        // label tag
        groupLabel.appendChild(document.createTextNode(group));

        liGroup.appendChild(checkbox);
        liGroup.appendChild(groupLabel)


        checkbox.addEventListener("change", function () {
            const trigger = new Event("change");
            const groupItems = this.parentElement.getElementsByTagName('li');
            for (const item of groupItems) {
                if (this.checked){
                    if (!item.classList.contains("enabled"))
                        item.dispatchEvent(trigger);
                } else {
                    if (item.classList.contains("enabled")){
                        item.dispatchEvent(trigger);
                    }
                }
            }
        })



        ulMain.appendChild(liGroup)
        const ulNestedGroup = document.createElement('ul');
        ulNestedGroup.classList.add('ps-1');
        liGroup.appendChild(ulNestedGroup);
        Object.keys(overlaysGrouped[group]).forEach((layerName, index) => {
            const liLayer = document.createElement('li');
            liLayer.classList.add('overlayLayer');
            liLayer.classList.add('mb-2');
            liLayer.classList.add('ps-2');
            liLayer.classList.add('pe-5');
            liLayer.classList.add('layer-item');
            liLayer.classList.add('position-relative');
            liLayer.innerHTML = layerName;
            let colorBadge = document.createElement("span");
            colorBadge.classList.add("badge");
            colorBadge.classList.add("position-absolute");
            colorBadge.classList.add("top-50");
            colorBadge.classList.add("end-0");
            colorBadge.classList.add("translate-middle");
            colorBadge.classList.add("align-top");
            colorBadge.classList.add("fs-6");
            colorBadge.innerHTML = "";
            liLayer.appendChild(colorBadge);
            ["click", "change"].forEach(event => liLayer.addEventListener(event, function() {
                    if (layerName.toString().includes("Traffic accidents")) {
                        toggleTrafficAccidents(this);
                        if (this.classList.contains("enabled")) {
                            colorBadge.innerHTML = "<i class='fa-solid fa-circle'></i>"
                            colorBadge.classList.add("color_cat_0");
                        } else {
                            colorBadge.innerHTML = "";
                        }
                        return;
                    } else if (layerName.toString().includes("Bike accidents")){
                        toggleBikeAccidents(this);
                        if (this.classList.contains("enabled")) {
                            colorBadge.innerHTML = "<i class='fa-solid fa-circle'></i>"
                            colorBadge.classList.add("color_cat_1");
                        } else {
                            colorBadge.innerHTML = "";
                        }
                        return;
                    } else if (layerName.toString().includes("Pedestrian accidents")) {
                        togglePedestrianAccidents(this);
                        if (this.classList.contains("enabled")) {
                            colorBadge.innerHTML = "<i class='fa-solid fa-circle'></i>"
                            colorBadge.classList.add("color_cat_2");
                        } else {
                            colorBadge.innerHTML = "";
                        }
                        return;
                    }
                    if (!this.classList.contains("enabled")) {
                        this.classList.add("enabled");
                        if (layerName.toString().includes("Street Lights")) {
                            colorBadge.innerHTML = "<i class='fa-solid fa-circle'></i>";
                            colorBadge.style.color = "#ffac00";
                        }
                        if (layerName.toString().includes("Public Transport Stops")) {
                            colorBadge.innerHTML = "<i class='fa-regular fa-circle'></i>";
                            colorBadge.style.color = "black";
                        }
                        if (layerName.toString().includes("Pedestrian Crossings")) {
                            colorBadge.innerHTML ="<i class='fa-solid fa-square'></i>";
                            colorBadge.style.color = "black";
                        }
                        if (group.toString().includes("Cycling")) {
                            colorBadge.innerHTML = "<i class='fa-solid fa-square'></i>"
                            colorBadge.style.color = cyclingInfraColors[index];
                        }
                        if (group.toString().includes("slopes")) {
                            colorBadge.innerHTML = "<i class='fa-solid fa-square'></i>"
                            colorBadge.style.color = streetSlopesColors[3 - index];
                        }
                        map.addLayer(overlaysGrouped[group][layerName]);
                    } else if (this.classList.contains("enabled")) {
                        this.classList.remove("enabled")
                        colorBadge.innerHTML = "";
                        map.removeLayer(overlaysGrouped[group][layerName]);
                    }
                })
            );
            liLayer.addEventListener("click", toggleGroupOnManualSelection);
            ulNestedGroup.appendChild(liLayer);
        })
    })
    outputEl.appendChild(ulMain);
}