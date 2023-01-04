import { getJson } from "./get_json.js"
import { setInfo } from "./set_info.js"

var rootUrl = null;
var mapName = null;

var getMapInfo = (url, name) => {
    rootUrl = url;
    mapName = name;
    getJson(rootUrl + "/" + mapName + "/info.json", getMapInfo2);
}

var getMapInfo2 = (mapInfo) => {
    //console.log(mapInfo);
    var mapUrl = rootUrl + "/" + mapName + "/" + mapInfo[mapInfo.length - 1].dir
    document.getElementById("map-img").src = mapUrl + "/" + mapName + ".jpg";
    document.getElementById("download-button").style.visibility = "visible";
    document.getElementById("download-button").src = mapUrl + "/" + mapName + ".jpg";
    getJson(mapUrl + "/info.json", setInfo);
}

export { getMapInfo }