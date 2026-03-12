/*
fetch("header.html")
.then(response => response.text())
.then(data => {
document.getElementById("header").innerHTML = data;
});

fetch("footer.html")
.then(response => response.text())
.then(data => {
document.getElementById("footer").innerHTML = data;
});
*/

function loadHTML(id, file) {

fetch(file)
.then(response => response.text())
.then(data => {
document.getElementById(id).innerHTML = data;
});

}

document.addEventListener("DOMContentLoaded", function () {

loadHTML("header", "header.html");
loadHTML("footer", "footer.html");

});