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
    var mapImg = document.getElementById("map-img");
    var downloadBtn = document.getElementById("download-button")
    mapImg.src = mapUrl + "/" + mapName + ".webp";
    mapImg.style.display = "block";
    downloadBtn.href = mapUrl + "/" + mapName + ".jpg";
    document.getElementById("loading-anim").style.display = "none";
    mapImg.onload = () => {
        downloadBtn.style.display = "block";
        //mapImg.style.display = "block";
        document.getElementById("loading-text").style.display = "none";
    }
    getJson(mapUrl + "/info.json", setInfo);
}

export { getMapInfo }