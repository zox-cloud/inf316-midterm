// JavaScript to control the family member slider
const slides = document.querySelectorAll('.family-slide');
let currentSlide = 0;

// Show the first slide initially
showSlide(currentSlide);

// Function to show a specific slide
function showSlide(index) {
    // Hide all slides
    slides.forEach(slide => {
        slide.classList.remove('active');
    });

    // Show the current slide
    slides[index].classList.add('active');
}

// Event listeners for next and previous buttons
document.getElementById('nextBtn').addEventListener('click', () => {
    currentSlide = (currentSlide + 1) % slides.length; // Go to the next slide
    showSlide(currentSlide);
});

document.getElementById('prevBtn').addEventListener('click', () => {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length; // Go to the previous slide
    showSlide(currentSlide);
});
