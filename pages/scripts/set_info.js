var setInfo = (info) => {
    document.getElementById("version").innerHTML = info.version;
    document.getElementById("year").innerHTML = info.time.year;
    document.getElementById("month").innerHTML = info.time.month;
    document.getElementById("day").innerHTML = info.time.day;
}

export {setInfo}