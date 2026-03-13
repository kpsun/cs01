function loadHTML(id, file) {

fetch(file)
.then(response => response.text())
.then(data => {
document.getElementById(id).innerHTML = data;
});

}

document.addEventListener("DOMContentLoaded", function () {

//loadHTML("test_area", "test.html");
loadHTML("header_section", "header.html");
loadHTML("hero_section", "hero.html");
loadHTML("services_section", "services.html");
loadHTML("customer-trust_section", "customer-trust.html");
loadHTML("about_section", "about.html");
loadHTML("contact_section", "contact.html");
loadHTML("footer", "footer.html");

});

