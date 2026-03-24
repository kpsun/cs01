  document.addEventListener("DOMContentLoaded", function() {
    const overlay = document.getElementById("overlay-box");
    const closeBtn = document.querySelector(".close-btn");
	console.log(closeBtn);
    closeBtn.addEventListener("click", function() {
      overlay.style.display = "none";
    });
  });





document.addEventListener("click", function(e) {
  if (e.target.matches(".close-btn")) {
    const overlay = document.getElementById("overlay-box");
    if (overlay) overlay.style.display = "none";
  }
});