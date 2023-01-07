var setInfo = (info) => {
    document.getElementById("version").innerHTML = info.version;
    document.getElementById("year").innerHTML = info.time.year;
    document.getElementById("month").innerHTML = info.time.month;
    document.getElementById("day").innerHTML = info.time.day;
    if (info.comment) {
        var commentHTML = "<ul>";
        for (let index = 0; index < info.comment.length; index++) {
            var comment = info.comment[index];
            commentHTML += "<li><span class=\"text\">" + comment + "</span></li>";
        }
        commentHTML += "</ul>";
        document.getElementById("comment").innerHTML = commentHTML;
    } else {
        document.getElementById("comment").style.display = "none";
        document.getElementById("comment-title").style.display = "none";
    }
}

export {setInfo}