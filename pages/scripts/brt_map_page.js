import { getJson } from "./get_json.js"

var url = "../maps/BeijingBRTMap";
var latest = null;
var info = null;

//console.log("map_page.js");

getJson(url + "/20200528/info.json");

