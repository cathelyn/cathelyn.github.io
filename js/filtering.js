class PruneClusterFilter {
    constructor(pruneClusterLayer) {
        this.layer = pruneClusterLayer;
        this._filterTags = [];
        this.hiddenMarkers = [];
    }

    filter() {
        let toBeRemovedFromHiddenMarkers = [] ;
        console.log(this._filterTags);
        console.log("Hidden markers: " + this.hiddenMarkers.length);
        // first check if already hidden markers match
        if (this._filterTags.length === 0) {
            this.layer.RegisterMarkers(this.hiddenMarkers);
            this.hiddenMarkers = [];
        } else {
            this.hiddenMarkers.forEach((marker, index) => {
                for (let tag of this._filterTags) {
                    if (marker.data.tags.includes(tag)) {
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
            this.hiddenMarkers.splice(toBeRemovedFromHiddenMarkers.pop(), 1);
        }

        let toRemoveMarkers = [];

        if (this._filterTags.length > 0) {
            let markers = this.layer.Cluster.GetMarkers();

            markers.forEach(marker => {
                let matched = false;
                for (let tag of this._filterTags){
                    matched = marker.data.tags.includes(tag)
                    if (matched) {
                        break;
                    }
                }
                if (!matched) {
                    toRemoveMarkers.push(marker);
                }
            })

            toRemoveMarkers.forEach(marker => {
                this.hiddenMarkers.push(marker);
            })

            this.layer.RemoveMarkers(toRemoveMarkers);
        }

        this.layer.ProcessView();

        return  toRemoveMarkers.length;
    }

    handleTagSelection(tag) {
        let tagIndex = this._filterTags.indexOf(tag)
        if (tagIndex !== -1) {
            this._filterTags.splice(tagIndex, 1);
        } else {
            this._filterTags.push(tag);
        }
        return this.filter(tag)
    }

}