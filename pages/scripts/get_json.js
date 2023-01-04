var getJson = (url, furtherWork) => {
    var request = new XMLHttpRequest();
    request.onreadystatechange = (e) => {
        if (request.status == 200 && request.readyState == 4) {
            var jsonObj = JSON.parse(request.responseText);
            console.log(jsonObj);
            furtherWork(jsonObj);
        }
    }
    request.open("GET", url, true);
    request.send(null);
}

export {getJson}