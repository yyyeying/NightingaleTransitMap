import { getMapInfo } from "./get_latest_map.js"
import { getParams } from "./get_params.js"
import { rootUrl, mapDirs, mapNames } from "./config.js"

const params = getParams();
const mapNameParam = params.name;

const getMapDir = () => {
    const dir = mapDirs[mapNameParam];
    if (!dir) {
        throw new Error(`Map directory for '${mapNameParam}' not found.`);
    }
    return dir;
}

const getMapName = () => {
    const name = mapNames[mapNameParam];
    if (!name) {
        throw new Error(`Map name for '${mapNameParam}' not found.`);
    }
    return name;
}

try {
    document.getElementById("map-name").innerHTML = getMapName();
    getMapInfo(rootUrl, getMapDir(), (mapImg) => {
        // 初始化panzoom
        const pz = window.panzoom(mapImg, {
            maxScale: 5,
            minScale: 0.5,
            contain: 'outside',
            startScale: 1,
            cursor: 'grab'
        });
        
        // 添加滚轮缩放支持
        document.getElementById('map-container').addEventListener('wheel', pz.zoomWithWheel);
    });
} catch (error) {
    console.error("An error occurred:", error.message);
}



