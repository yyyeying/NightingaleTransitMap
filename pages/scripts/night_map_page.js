import {getJson} from "./get_json.js"

var url = "../maps/BeijingNightBusMap";
var latest = null;
var info = null;

//console.log("map_page.js");

getJson(url + "/20220115/info.json");

