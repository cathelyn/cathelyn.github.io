class PruneClusterFilter {
    constructor(pruneClusterLayer) {
        this.layer = pruneClusterLayer;
        this._filtersPerCat = {};
        this._hiddenPerCat = {};
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
            console.log(this._filtersPerCat);

            if (Object.keys(this._hiddenPerCat).includes(category)) {
                this._hiddenPerCat[category].forEach((marker, index) => {
                    for (let tag of this._filtersPerCat[category]) {
                        if (marker.data.tags[category].includes(tag)) {
                            // register the matching marker back to the layer
                            this.layer.RegisterMarker(marker);
                            toBeRemovedFromHiddenMarkers.push(index);
                            break;
                        }
                    }
                })
            }
            console.log(toBeRemovedFromHiddenMarkers.length + " to be re-added from hidden")
            while (toBeRemovedFromHiddenMarkers.length > 0) {
                this._hiddenPerCat[category].splice(toBeRemovedFromHiddenMarkers.pop(), 1);
            }

            let toRemoveMarkers = [];


            if (this._filtersPerCat[category].length > 0) {
                let markers = this.layer.Cluster.GetMarkers();

                markers.forEach(marker => {
                    let matched = false;
                    for (let tag of this._filtersPerCat[category]) {
                        console.log(category);
                        matched = marker.data.tags[category].includes(tag);
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
        console.log(category);
        let matched_cat = this._filtersPerCat[category];
        if (matched_cat){  // the category already has some tag active
            if (!matched_cat.includes(tag)) {
                console.log("Saving tag " + tag);
                matched_cat.push(tag); // if it isn't activated, save it as active
            } else {
                console.log("Removing tag " + tag + "from category " + category);
                matched_cat.splice(matched_cat.indexOf(tag), 1); // otherwise remove it
                // if this was the last tag, remove whole category
                if (matched_cat.length === 0){
                    console.log("Removing whole category " + category);
                    delete this._filtersPerCat[category];
                }
            }
        } else { // new category has been activated
            console.log("Saving new category " + category + " with tag " + tag);
            this._filtersPerCat[category] = [tag];
        }
        return this.filter();
    }
}