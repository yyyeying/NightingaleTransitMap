const getParams = () => {
    const params = {}
    const paramsList = location.search.substring(1).split('&');
    //console.log(paramsList);
    paramsList.forEach(param => {
        const paramPairs = param.split('=');
        if (paramPairs.length === 2) {
            params[paramPairs[0]] = decodeURIComponent(paramPairs[1]);
        } else {
            console.error(`Invalid URL parameter format: ${param}`);
        }
    })
    //console.log(params);
    return params;
}

export { getParams }