let currentSlide = 0;

function showSlide(index) {
	const slides = document.querySelector(".slides");
	const totalSlides = document.querySelectorAll(".slide").length;

	if (index >= totalSlides) {
		currentSlide = 0;
	} else {
		currentSlide = index;
	}

	const offset = -currentSlide * 100; // 100% width for each slide
	slides.style.transform = `translateX(${offset}%)`;
}

function autoSlide() {
	currentSlide++;
	showSlide(currentSlide);
}

// Start automatic sliding
setInterval(autoSlide, 3000);

// Start with the first slide
showSlide(currentSlide);
