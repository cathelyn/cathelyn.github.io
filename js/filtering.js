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