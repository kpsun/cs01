function loadHTML(id, file) {

fetch(file)
.then(response => response.text())
.then(data => {
document.getElementById(id).innerHTML = data;
});

}

document.addEventListener("DOMContentLoaded", function () {

loadHTML("header", "header.html");
loadHTML("hero", "hero.html");
loadHTML("footer", "footer.html");

});

