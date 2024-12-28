const getJson = (url, furtherWork) => {
    const request = new XMLHttpRequest();
    request.onreadystatechange = (e) => {
        if (request.status === 200 && request.readyState === 4) {
            try {
                const jsonObj = JSON.parse(request.responseText);
                console.log(jsonObj);
                if (typeof furtherWork === 'function') {
                    furtherWork(jsonObj);
                } else {
                    console.error('The provided callback is not a function.');
                }
            } catch (error) {
                console.error('Error parsing JSON:', error);
            }
        }
    }
    request.open("GET", url, true);
    request.send(null);
}

export { getJson };