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
            liLayer.classList.add('px-2');
            liLayer.classList.add('layer-item');
            liLayer.innerHTML = layerName;
            let colorBadge = document.createElement("span");
            colorBadge.classList.add("badge");
            colorBadge.classList.add("float-end");
            colorBadge.innerHTML = "";
            liLayer.appendChild(colorBadge);
            ["click", "change"].forEach(event => liLayer.addEventListener(event, function() {
                    if (layerName.toString().includes("Traffic accidents")) {
                        toggleTrafficAccidents(this);
                        return;
                    } else if (layerName.toString().includes("Bike accidents")){
                        toggleBikeAccidents(this);
                        return;
                    } else if (layerName.toString().includes("Pedestrian accidents")) {
                        togglePedestrianAccidents(this);
                        return;
                    }
                    if (!this.classList.contains("enabled")) {
                        this.classList.add("enabled");
                        if (group.toString().includes("Cycling")) {
                            colorBadge.innerText = "■";
                            colorBadge.style.color = cyclingInfraColors[index];
                        }
                        if (group.toString().includes("slopes")) {
                            colorBadge.innerText = "■";
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