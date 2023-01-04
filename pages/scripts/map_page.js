import { getMapInfo } from "./get_latest_map.js"
import { getParams } from "./get_params.js"
import { rootUrl, mapDirs, mapNames } from "./config.js"



var getMapDir = () => {
    var params = getParams();
    return mapDirs[params.name];
}

var getMapName = () => {
    var params = getParams();
    return mapNames[params.name];
}

document.getElementById("map-name").innerHTML = getMapName();
getMapInfo(rootUrl, getMapDir());



