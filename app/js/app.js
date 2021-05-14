// // Import jQuery module (npm i jquery)
// import $ from 'jquery'
// window.jQuery = $
// window.$ = $

// // Import vendor jQuery plugin example (not module)
// require('~/app/libs/mmenu/dist/mmenu.js')

document.addEventListener('DOMContentLoaded', () => {

	// Custom JS
	
	// Progress Bar
	function progressBarScroll() {
		let winScroll = document.body.scrollTop || document.documentElement.scrollTop,
				height = document.documentElement.scrollHeight - document.documentElement.clientHeight,
				scrolled = (winScroll / height) * 100;
		document.getElementById("progressBar").style.width = scrolled + "%";
	}
	
	window.onscroll = function () {
		progressBarScroll();
	};

})
