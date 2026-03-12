function loadHTML(id, file) {

fetch(file)
.then(response => response.text())
.then(data => {
document.getElementById(id).innerHTML = data;
});

}

document.addEventListener("DOMContentLoaded", function () {

loadHTML("test_area"), "test.html");
loadHTML("header", "header.html");
loadHTML("hero_section", "hero.html");
loadHTML("footer", "footer.html");

});

