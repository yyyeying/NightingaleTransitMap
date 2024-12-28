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
    getMapInfo(rootUrl, getMapDir());
} catch (error) {
    console.error("An error occurred:", error.message);
}



