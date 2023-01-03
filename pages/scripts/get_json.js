var getJson = (url, info) => {
    var request = new XMLHttpRequest();
    request.onreadystatechange = (e) => {
        if (request.status == 200 && request.readyState == 4) {
            info = JSON.parse(request.responseText);
            console.log(info);
            document.getElementById("version").innerHTML = info.version;
            document.getElementById("year").innerHTML = info.time.year;
            document.getElementById("month").innerHTML = info.time.month;
            document.getElementById("day").innerHTML = info.time.day;
        }
    }
    request.open("GET", url, true);
    request.send(null);
}

export {getJson}