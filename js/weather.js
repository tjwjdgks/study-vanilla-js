
function onGeoOk(positon){
    const lat = positon.coords.latitude;
    const lng = positon.coords.longitude;
    console.log(positon)
}
function onGeoError(){
    alert("can't find you. no weather for you")
}

navigator.geolocation.getCurrentPosition(onGeoOk,onGeoError);