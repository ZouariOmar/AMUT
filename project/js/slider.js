/** @format */

document.addEventListener("DOMContentLoaded", function () {
	const slidesContainer = document.querySelector(".slides");
	const images = document.querySelectorAll(".slides img");
	const totalImages = images.length;
	let index = 0;

	// Clone first and last images for seamless loop
	const firstImage = images[0].cloneNode(true);
	const lastImage = images[totalImages - 1].cloneNode(true);

	slidesContainer.appendChild(firstImage); // Clone first image at end
	slidesContainer.insertBefore(lastImage, images[0]); // Clone last image at start

	const allImages = document.querySelectorAll(".slides img");
	const totalImagesWithClones = allImages.length;

	function showNextSlide() {
		index++;
		if (index >= totalImagesWithClones - 1) {
			// Last cloned image
			slidesContainer.style.transition = "none"; // Disable transition
			index = -1; // Go to the first real image
			slidesContainer.style.transform = `translateX(${-index * 100}%)`;
			setTimeout(() => {
				slidesContainer.style.transition = "transform 0.5s ease-in-out"; // Re-enable transition
				showNextSlide(); // Continue to the next slide
			}, 20);
		} else {
			updateSlidePosition();
		}
	}

	function showPreviousSlide() {
		index--;
		if (index < 0) {
			// Before first cloned image
			slidesContainer.style.transition = "none"; // Disable transition
			index = totalImages - 1; // Go to the last real image
			slidesContainer.style.transform = `translateX(${-index * 100}%)`;
			setTimeout(() => {
				slidesContainer.style.transition = "transform 0.5s ease-in-out"; // Re-enable transition
				showPreviousSlide(); // Continue to the previous slide
			}, 20);
		} else {
			updateSlidePosition();
		}
	}

	function updateSlidePosition() {
		const offset = index * 50;
		slidesContainer.style.transform = `translateX(${offset}%)`;
	}

	document.querySelector(".prev").addEventListener("click", showPreviousSlide);
	document.querySelector(".next").addEventListener("click", showNextSlide);

	// Optional: Auto-slide functionality
	setInterval(showNextSlide, 3000); // Change slide every 3 seconds
});
