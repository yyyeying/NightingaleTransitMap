import { getJson } from "./get_json.js"
import { setInfo } from "./set_info.js"

const loadingText = ["正在铺平画纸...",
    "正在准备画笔...",
    "正在调颜料...",
    "正在奋笔疾书...",
    "正在绘制线路图...",
    "正在装裱线路图...",
    "正在悬挂线路图..."]

const getMapInfo = (url, name, callback) => {
    document.getElementById("loading-text").textContent = loadingText[Math.floor(Math.random() * loadingText.length)];
    // 仅拉取最新版本信息，避免下载全部历史版本数据
    getJson(`${url}/${name}/latest.json`, (latest) => {
        let mapUrl = `${url}/${name}/${latest.dir}`;
        let mapImg = document.getElementById("map-img");
        let downloadBtn = document.getElementById("download-button")

        mapImg.src = `${mapUrl}/${name}.webp`;
        downloadBtn.href = `${mapUrl}/${name}.jpg`;

        mapImg.onload = () => {
            // 图片真正加载完成后才隐藏加载动画，避免下载期间无加载指示
            document.getElementById("loading-anim").style.display = "none";
            document.getElementById("loading-text").style.display = "none";
            mapImg.style.display = "block";
            // 提供兜底链接：当缩放不可用时用户可查看原图
            downloadBtn.style.display = "block";

            if (callback) {
                callback(mapImg);
            }
        }

        // 图片加载失败时也提供兜底下载链接
        mapImg.onerror = () => {
            document.getElementById("loading-anim").style.display = "none";
            document.getElementById("loading-text").style.display = "none";
            downloadBtn.style.display = "block";
        }

        getJson(`${mapUrl}/info.json`, setInfo);
    });
}

export { getMapInfo }
