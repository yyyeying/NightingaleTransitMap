import { getJson } from "./get_json.js"

const baseUrl = "../maps/BeijingNightBusMap";
var latest = null;
var info = null;

//console.log("map_page.js");

getJson(`${baseUrl}/20220115/info.json`);

