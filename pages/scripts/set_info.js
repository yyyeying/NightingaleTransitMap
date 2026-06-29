var setInfo = (info) => {
    const versionElement = document.getElementById("version");
    const yearElement = document.getElementById("year");
    const monthElement = document.getElementById("month");
    const dayElement = document.getElementById("day");
    const commentElement = document.getElementById("comment");
    const commentTitleElement = document.getElementById("comment-title");

    versionElement.textContent = info.version;
    yearElement.textContent = info.time.year;
    monthElement.textContent = info.time.month;
    dayElement.textContent = info.time.day;

    if (info.comment && info.comment.length) {
        const ul = document.createElement("ul");
        for (const comment of info.comment) {
            const li = document.createElement("li");
            const span = document.createElement("span");
            span.className = "text";
            span.textContent = comment;
            li.appendChild(span);
            ul.appendChild(li);
        }
        commentElement.replaceChildren(ul);
    } else {
        commentElement.style.display = "none";
        commentTitleElement.style.display = "none";
    }
}

export { setInfo }
