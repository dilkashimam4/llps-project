// Toggle Mobile Menu
function toggleMenu() {
  const navLinks = document.getElementById('nav-links');
  const hamburger = document.querySelector('.hamburger-menu');
  const crossIcon = document.querySelector('.cross-icon');

  if (navLinks.classList.contains('show')) {
    navLinks.classList.remove('show');
    hamburger.style.display = 'block';
    crossIcon.style.display = 'none';
  } else {
    navLinks.classList.add('show');
    hamburger.style.display = 'none';
    crossIcon.style.display = 'block';
  }
}

// Ensure Proper Menu Display on Resize
function updateMenuDisplay() {
  const navLinks = document.getElementById('nav-links');
  const hamburger = document.querySelector('.hamburger-menu');
  const crossIcon = document.querySelector('.cross-icon');

  if (window.innerWidth > 600) {
    navLinks.classList.remove('show'); // Always show menu on desktop
    hamburger.style.display = 'none';
    crossIcon.style.display = 'none';
  } else {
    hamburger.style.display = 'block';
  }
}

// Optimize Resize Event
let resizeTimeout;
window.addEventListener('resize', () => {
  clearTimeout(resizeTimeout);
  resizeTimeout = setTimeout(updateMenuDisplay, 100);
});

// Ensure Correct Menu State on Page Load
window.addEventListener('DOMContentLoaded', updateMenuDisplay);

// Contact Form Alert
document.querySelector('form').addEventListener('submit', function (event) {
  alert('Thank you for contacting us!');
  event.preventDefault();
});

// Image Slider
let currentSlide = 0;

function changeSlide(direction) {
  const slides = document.querySelector('.slides');
  const totalSlides = slides.children.length;

  currentSlide = (currentSlide + direction + totalSlides) % totalSlides;
  slides.style.transform = `translateX(-${currentSlide * 100}%)`;
}

// Automatic Slide Change Every 5 Seconds
setInterval(() => {
  changeSlide(1);
}, 5000);

$(function() {
  $( "#button" ).click(function() {
    $( "#button" ).addClass( "onclic", 250, validate);
  });

  function validate() {
    setTimeout(function() {
      $( "#button" ).removeClass( "onclic" );
      $( "#button" ).addClass( "validate", 450, callback );
    }, 2250 );
  }
    function callback() {
      setTimeout(function() {
        $( "#button" ).removeClass( "validate" );
      }, 1250 );
    }
  });


  const productSlide = document.querySelector('.product-slide');

productSlide.addEventListener('mouseover', () => {
  productSlide.style.animationPlayState = 'paused';  // Pause animation on hover
});

productSlide.addEventListener('mouseout', () => {
  productSlide.style.animationPlayState = 'running'; // Resume animation when mouse out
});



document.getElementById('contactForm').addEventListener('submit', function(event) {
  event.preventDefault();

  let statusMessage = document.getElementById('statusMessage');
  statusMessage.textContent = "Sending...";
  statusMessage.style.color = "yellow";

  setTimeout(() => {
      statusMessage.textContent = "Message Sent Successfully!";
      statusMessage.style.color = "lightgreen";
      this.reset();
  }, 2000);
});