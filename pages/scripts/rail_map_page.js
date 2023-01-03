import {getJson} from "./get_json.js"

var url = "../maps/BeijingRailTransitMap";
var latest = null;
var info = null;

//console.log("map_page.js");

getJson(url + "/20221231/info.json");

