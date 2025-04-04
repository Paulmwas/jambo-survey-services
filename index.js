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



  // Add JavaScript to initialize animations and interactions for services section

document.addEventListener('DOMContentLoaded', function() {
  // Add scroll observer for entrance animations (fallback if AOS doesn't load)
  const serviceItems = document.querySelectorAll('.service-item');
  
  if ('IntersectionObserver' in window) {
      const observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
              if (entry.isIntersecting) {
                  entry.target.classList.add('visible');
                  observer.unobserve(entry.target);
              }
          });
      }, {
          threshold: 0.2
      });

      serviceItems.forEach(item => {
          observer.observe(item);
          // Add default class for non-AOS fallback
          item.classList.add('opacity-0');
      });
  }

  // Add hover effects manually for better performance
  serviceItems.forEach(item => {
      item.addEventListener('mouseenter', function() {
          this.classList.add('active');
      });
      
      item.addEventListener('mouseleave', function() {
          this.classList.remove('active');
      });
  });

  // Add smooth scrolling for service section links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
          e.preventDefault();
          const targetId = this.getAttribute('href');
          
          if (targetId === '#') return;
          
          const target = document.querySelector(targetId);
          if (target) {
              window.scrollTo({
                  top: target.offsetTop - 100,
                  behavior: 'smooth'
              });
          }
      });
  });

  // Add mobile menu toggle functionality
  const menuToggle = document.getElementById('menuToggle');
  const navLinks = document.getElementById('navLinks');
  
  if (menuToggle && navLinks) {
      menuToggle.addEventListener('click', function() {
          navLinks.classList.toggle('hidden');
          const icon = menuToggle.querySelector('i');
          if (icon) {
              icon.classList.toggle('fa-bars');
              icon.classList.toggle('fa-times');
          }
      });
  }
});

// Additional CSS styles added via JavaScript for better animations
const style = document.createElement('style');
style.textContent = `
  .service-item {
      transition: all 0.5s ease;
  }
  
  .service-item:not(.visible) {
      opacity: 0;
      transform: translateY(30px);
  }
  
  .service-item.visible {
      opacity: 1;
      transform: translateY(0);
  }
  
  .service-item.active .service-content {
      transform: translateY(-8px);
  }
  
  @media (max-width: 768px) {
      .service-item [data-aos] {
          opacity: 1 !important;
          transform: none !important;
      }
  }
`;
document.head.appendChild(style);