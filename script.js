document.addEventListener("DOMContentLoaded", () => {
  console.log("JS Loaded"); // Debugging line

  // Carousel Functionality
  const track = document.querySelector(".carousel-track");
  const slides = document.querySelectorAll(".carousel-slide");
  const nextButton = document.querySelector(".next");
  const prevButton = document.querySelector(".prev");

  if (track && slides.length > 0) {
    let currentIndex = 0;

    function updateCarousel() {
      const slideWidth = slides[0].offsetWidth;
      track.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
    }

    nextButton.addEventListener("click", () => {
      if (currentIndex < slides.length - 1) {
        currentIndex++;
        updateCarousel();
      }
    });

    prevButton.addEventListener("click", () => {
      if (currentIndex > 0) {
        currentIndex--;
        updateCarousel();
      }
    });
  }

  // macOS Toolbar Button Behavior
  const macWindow = document.querySelector(".mac-window");
  const trafficDots = document.querySelectorAll(".mac-dots .dot");

  trafficDots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      if (index === 0) {
        macWindow.style.display = "none"; // Close window
      } else if (index === 2) {
        macWindow.classList.toggle("fullscreen");
      }
    });
  });

  // Fade-in animations
  document.querySelectorAll(".mac-window, .about-content, .carousel-slide").forEach((element) => {
    element.style.opacity = "0";
    element.style.transform = "translateY(20px)";
    setTimeout(() => {
      element.style.transition = "opacity 1s ease-out, transform 1s ease-out";
      element.style.opacity = "1";
      element.style.transform = "translateY(0)";
    }, 200);
  });

});
