/** @format */

document.addEventListener("DOMContentLoaded", function () {
	let currentSlide = 0;
	const slides = document.querySelectorAll(".mn_slide");

	function showSlide(index) {
		slides[currentSlide].classList.remove("mn_active");
		currentSlide = (index + slides.length) % slides.length;
		slides[currentSlide].classList.add("mn_active");
	}

	window.moveSlide = function (direction) {
		showSlide(currentSlide + direction);
	};
});
