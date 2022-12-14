# Brno Accident Data Visualization

Map visualizes various kinds of accidents that happened in Brno between 2010 and 2021.
It is possible to turn on and off traffic, pedestrian, and bike accidents in the layers section.
Except of that, it is possible to select various architectural surroundings of the traffic lanes, cycling infrastructure and street slopes.
In the date section it is possible to select accidents based on date, date range or just choose custom date, and in the filter section it is possible to select accidents based on various criteria.
The markers are aggregated into the clusters if there are more accidents in the same locations.


## How to run:
Start a local web server and load `index.html`

alternatively, you can just open the `index.html` file in your browser, however, CORS may prevent some layers from loading (since they are local files).
To circumvent, you may disable CORS check for file URI:

**Firefox**
- navigate to `about:config`
- find `security.fileuri.strict_origin_policy`
- set it to `false`
- refresh the page

**Chrome**

For Chrome, follow this thread on [stackoverflow](https://stackoverflow.com/questions/6060786/file-url-cross-domain-issue-in-chrome-unexpected)