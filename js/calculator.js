// add this html code in the required place in the html file
//<h1 id="counter">0</h1>



document.addEventListener("DOMContentLoaded", function() {	
	
	const counter = document.getElementById("counter");
	if (!counter) return;

	const target = 54;
	const duration = 2000+5000; // 2 seconds
	
	let startTime = null;
	
	function animateCounter(timestamp) {
	counter.innerText = 111;
	  if (!startTime) startTime = timestamp;

	  const progress = timestamp - startTime;

	  const value = Math.min(
	    Math.floor((progress / duration) * target),
	    target
	  );

	  counter.innerText = value;

	  if (progress < duration) {
	    requestAnimationFrame(animateCounter);
	  }
	}

	// ? THIS WAS MISSING
	requestAnimationFrame(animateCounter);
});