document.getElementById('menuToggle').addEventListener('click', function() {
    const navLinks = document.getElementById('navLinks');
    navLinks.classList.toggle('hidden');
});

document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.slide');
    const indicators = document.querySelectorAll('.indicator');
    const prevButton = document.getElementById('prev-slide');
    const nextButton = document.getElementById('next-slide');
    let currentSlide = 0;
    const totalSlides = slides.length;
    
    // Function to update slide visibility
    function showSlide(index) {
      // Hide all slides
      slides.forEach(slide => {
        slide.classList.remove('opacity-100');
        slide.classList.add('opacity-0');
      });
      
      // Show current slide
      slides[index].classList.remove('opacity-0');
      slides[index].classList.add('opacity-100');
      
      // Update indicators
      indicators.forEach((indicator, i) => {
        if (i === index) {
          indicator.classList.remove('bg-opacity-50');
        } else {
          indicator.classList.add('bg-opacity-50');
        }
      });
      
      // Update current slide index
      currentSlide = index;
    }
    
    // Next slide function
    function nextSlide() {
      let nextIndex = (currentSlide + 1) % totalSlides;
      showSlide(nextIndex);
    }
    
    // Previous slide function
    function prevSlide() {
      let prevIndex = (currentSlide - 1 + totalSlides) % totalSlides;
      showSlide(prevIndex);
    }
    
    // Event listeners for navigation
    nextButton.addEventListener('click', nextSlide);
    prevButton.addEventListener('click', prevSlide);
    
    // Event listeners for indicators
    indicators.forEach(indicator => {
      indicator.addEventListener('click', function() {
        const slideIndex = parseInt(this.getAttribute('data-index'));
        showSlide(slideIndex);
      });
    });
    
    // Auto slide (optional)
    let slideInterval = setInterval(nextSlide, 5000);
    
    // Pause auto slide on hover (optional)
    const heroSlider = document.getElementById('hero-slider');
    heroSlider.addEventListener('mouseenter', function() {
      clearInterval(slideInterval);
    });
    
    heroSlider.addEventListener('mouseleave', function() {
      slideInterval = setInterval(nextSlide, 5000);
    });
  });



  