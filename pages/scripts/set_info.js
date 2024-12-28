var setInfo = (info) => {
    const versionElement = document.getElementById("version");
    const yearElement = document.getElementById("year");
    const monthElement = document.getElementById("month");
    const dayElement = document.getElementById("day");
    const commentElement = document.getElementById("comment");
    const commentTitleElement = document.getElementById("comment-title");

    versionElement.innerHTML = info.version;
    yearElement.innerHTML = info.time.year;
    monthElement.innerHTML = info.time.month;
    dayElement.innerHTML = info.time.day;

    if (info.comment) {
        let commentsList = [];
        for (let index = 0; index < info.comment.length; index++) {
            const comment = info.comment[index];
            commentsList.push(`<li><span class="text">${comment}</span></li>`);
        }
        const commentHTML = `<ul>${commentsList.join('')}</ul>`;
        commentElement.innerHTML = commentHTML;
    } else {
        commentElement.style.display = "none";
        commentTitleElement.style.display = "none";
    }
}

export { setInfo }