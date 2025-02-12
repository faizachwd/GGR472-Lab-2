mapboxgl.accessToken = "pk.eyJ1IjoiZmFpemExMzIiLCJhIjoiY201d3E1Y2JwMDByYzJrb290MWltMTN1dyJ9.JsEiKVuT3vMCT8JQDlDA4g";
const map = new mapboxgl.Map ({
container: "my-map",
style:'mapbox://styles/faiza132/cm72f283a007a01quayc2g04v',
center:[-79.3878583,43.7205208],
zoom: 12
});

map.on("load", ()=>{
    map.addSource('EarlyOn', {
        type: 'geojson',
        data: "School locations-all types data - 4326.geojson"
    });
    map.addLayer({
    id: "EarlyOn_pts",
    type: "circle",
    source:'EarlyOn'   
    })
})

// questions:
// do we add our data onto the style? 
// do we need to add one dataset as a geojson and one as a tileset? 