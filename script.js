mapboxgl.accessToken = "pk.eyJ1IjoiZmFpemExMzIiLCJhIjoiY201d3E1Y2JwMDByYzJrb290MWltMTN1dyJ9.JsEiKVuT3vMCT8JQDlDA4g";
const map = new mapboxgl.Map({
    container: "my-map",
    style: 'mapbox://styles/faiza132/cm72f283a007a01quayc2g04v',
    center: [-79.3878583, 43.7205208],
    zoom: 12
});

map.on("load", () => {
    map.addSource('EarlyOn', {
        type: 'geojson',
        data: "https://raw.githubusercontent.com/faizachwd/GGR472-Lab-2/main/EarlyON Child and Family Centres Locations - geometry - 4326.geojson"
    });
    map.addLayer({
        id: "EarlyOn_pts",
        type: "circle",
        source: 'EarlyOn',
        paint: {
            'circle-radius': 4,
            'circle-color': 'hotpink'
        }
    })
    map.addSource('Schools_tile', {
        type: "vector",
        url: 'mapbox://faiza132.262ld0bt',
    });
    map.addLayer({
        id: 'School-pts',
        type: 'circle',
        source: 'Schools_tile',
        paint: {
            'circle-radius': 6,
            'circle-color': 'blue',
            'circle-opacity': 0.4
        },
        'source-layer': "School_locations-all_types_da-0fuese"
    });
}, "School-pts"
)
