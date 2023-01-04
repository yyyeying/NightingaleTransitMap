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

var loadingText = () => {
    var loading = document.getElementById("loading-text");
    var i = 0;
    var interval= 2000;
    var textList = ["正在铺平画纸...",
        "正在调颜料...",
        "正在绘制线路图...",
        "正在装裱线路图...",
        "正在悬挂线路图..."]
    var changeText = () => {
        //console.log("tiemout");
        if (loading.style.display == "block") {
            loading.innerHTML = textList[i];
            i++;
            if (i == textList.length) {
                i = 0;
            }
        }
        setTimeout(changeText, interval);
    }
    setTimeout(changeText, interval);
}

loadingText();
document.getElementById("map-name").innerHTML = getMapName();
getMapInfo(rootUrl, getMapDir());



