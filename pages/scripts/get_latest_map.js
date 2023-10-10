import { getJson } from "./get_json.js"
import { setInfo } from "./set_info.js"

var rootUrl = null;
var mapName = null;

var loadingText = ["正在铺平画纸...",
    "正在准备画笔...",
    "正在调颜料...",
    "正在奋笔疾书...",
    "正在绘制线路图...",
    "正在装裱线路图...",
    "正在悬挂线路图..."]

var getMapInfo = (url, name) => {
    rootUrl = url;
    mapName = name;
    getJson(rootUrl + "/" + mapName + "/info.json", getMapInfo2);
}

var getMapInfo2 = (mapInfo) => {
    //console.log(mapInfo);
    document.getElementById("loading-text").innerHTML = loadingText[Math.floor(Math.random() * loadingText.length)];
    var mapUrl = rootUrl + "/" + mapName + "/" + mapInfo[mapInfo.length - 1].dir
    var mapImg = document.getElementById("map-img");
    var downloadBtn = document.getElementById("download-button")
    mapImg.src = mapUrl + "/" + mapName + ".webp";
    mapImg.style.display = "block";
    downloadBtn.href = mapUrl + "/" + mapName + ".jpg";
    document.getElementById("loading-anim").style.display = "none";
    mapImg.onload = () => {
        // 加载完成后展示下载按钮
        downloadBtn.style.display = "block";
        //mapImg.style.display = "block";
        document.getElementById("loading-text").style.display = "none";
    }
    getJson(mapUrl + "/info.json", setInfo);
}

export { getMapInfo }