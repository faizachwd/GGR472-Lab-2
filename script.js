mapboxgl.accessToken = "pk.eyJ1IjoiZmFpemExMzIiLCJhIjoiY201d3E1Y2JwMDByYzJrb290MWltMTN1dyJ9.JsEiKVuT3vMCT8JQDlDA4g";
// intializing instance of map object
const map = new mapboxgl.Map({
    container: "my-map",
    style: 'mapbox://styles/faiza132/cm72f283a007a01quayc2g04v', // basemap, monochrome style to make data points pop
    center: [-79.3878583, 43.7205208], //Toronto's centre lat and lon
    zoom: 12
});

// calling load event on map object
map.on("load", () => {
    //adding geojson data on EarlyOn centres in Toronto
    map.addSource('EarlyOn', {
        type: 'geojson',
        data: "https://raw.githubusercontent.com/faizachwd/GGR472-Lab-2/main/EarlyON Child and Family Centres Locations - geometry - 4326.geojson"
    });
    //mapping geojson data to base map
    map.addLayer({
        id: "EarlyOn_pts",
        type: "circle",
        source: 'EarlyOn',
        paint: {
            'circle-radius': 4,
            'circle-color': 'hotpink'
        }
    })
    //adding tileset data from mapbox
    map.addSource('Schools_tile', {
        type: "vector",
        url: 'mapbox://faiza132.262ld0bt',
    });
    // mapping tileset data to base map
    map.addLayer({
        id: 'School-pts',
        type: 'circle',
        source: 'Schools_tile',
        paint: {
            'circle-radius': 6,
            'circle-color': 'blue',
            'circle-opacity': 0.4 //school pts have transparency and are larger points because some earlyON centres are in schools
        },
        'source-layer': "School_locations-all_types_da-0fuese"
    });
}, "School-pts" //want school locations to map first so the earlyON points are more visible
)
