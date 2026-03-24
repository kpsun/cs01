  document.addEventListener("DOMContentLoaded", function() {
    const overlay = document.getElementById("overlay-box");
    const closeBtn = document.querySelector(".close-btn");

    closeBtn.addEventListener("click", function() {
      overlay.style.display = "none";
    });
  });
