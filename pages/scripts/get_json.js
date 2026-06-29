const getJson = async (url, furtherWork) => {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`HTTP ${response.status} for ${url}`);
        }
        const jsonObj = await response.json();
        if (typeof furtherWork === 'function') {
            furtherWork(jsonObj);
        }
    } catch (error) {
        console.error(`Failed to fetch ${url}:`, error);
    }
}

export { getJson };
