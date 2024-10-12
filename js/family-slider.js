const slides = document.querySelectorAll('.family-slide');
let currentSlide = 0;
showSlide(currentSlide);

// function that show the specific slide
function showSlide(index) {
    //  this hie other slides
    slides.forEach(slide => {
        slide.classList.remove('active');
    });

    // show the current slide
    slides[index].classList.add('active');
}

// btn for nextBtn
document.getElementById('nextBtn').addEventListener('click', () => {
    currentSlide = (currentSlide + 1) % slides.length; // Go to the next slide
    showSlide(currentSlide);
});


// btn for nextBtn
document.getElementById('prevBtn').addEventListener('click', () => {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length; // Go to the previous slide
    showSlide(currentSlide);
});
