var getParams = () => {
    var params = {}
    var paramsList = location.search.substring(1).split('&');
    //console.log(paramsList);
    for (var p in paramsList) {
        let paramPairs = paramsList[p].split('=');
        params[paramPairs[0]] = paramPairs[1];
    }
    //console.log(params);
    return params;
}

export { getParams }