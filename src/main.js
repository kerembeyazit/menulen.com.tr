import './style.css'

// Carousel functionality
class Carousel {
  constructor() {
    this.images = document.querySelectorAll('.screen-image');
    this.currentIndex = 0;
    this.totalImages = this.images.length;
    this.autoPlayInterval = null;
    this.init();
  }

  init() {
    this.startAutoPlay();
  }

  goToSlide(index) {
    // Remove active class from current image
    this.images[this.currentIndex].classList.remove('active');
    
    // Update current index
    this.currentIndex = index;
    
    // Add active class to new image
    this.images[this.currentIndex].classList.add('active');
  }

  nextSlide() {
    const nextIndex = (this.currentIndex + 1) % this.totalImages;
    this.goToSlide(nextIndex);
  }

  prevSlide() {
    const prevIndex = (this.currentIndex - 1 + this.totalImages) % this.totalImages;
    this.goToSlide(prevIndex);
  }

  startAutoPlay() {
    this.autoPlayInterval = setInterval(() => {
      this.nextSlide();
    }, 3000); // Change slide every 3 seconds
  }

  stopAutoPlay() {
    if (this.autoPlayInterval) {
      clearInterval(this.autoPlayInterval);
      this.autoPlayInterval = null;
    }
  }
}

// Mobile Menu Toggle
class MobileMenu {
  constructor() {
    this.menuToggle = document.querySelector('.mobile-menu-toggle');
    this.navMenu = document.querySelector('.nav-menu');
    this.navLinks = document.querySelectorAll('.nav-menu a');
    this.init();
  }

  init() {
    this.menuToggle.addEventListener('click', () => this.toggleMenu());
    this.navLinks.forEach(link => {
      link.addEventListener('click', () => this.closeMenu());
    });
  }

  toggleMenu() {
    this.navMenu.classList.toggle('active');
    this.menuToggle.classList.toggle('active');
  }

  closeMenu() {
    this.navMenu.classList.remove('active');
    this.menuToggle.classList.remove('active');
  }
}

// Scroll behavior for navigation links
class SmoothScroll {
  constructor() {
    this.init();
  }

  init() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', (e) => {
        const href = anchor.getAttribute('href');
        if (href !== '#' && href !== '') {
          e.preventDefault();
          const target = document.querySelector(href);
          if (target) {
            const offsetTop = target.offsetTop - 80; // Account for fixed navbar
            window.scrollTo({
              top: offsetTop,
              behavior: 'auto'
            });
          }
        }
      });
    });
  }
}

// Scroll animations removed

// Navbar scroll effect
class NavbarScroll {
  constructor() {
    this.navbar = document.querySelector('.navbar');
    this.init();
  }

  init() {
    window.addEventListener('scroll', () => {
      const currentScroll = window.pageYOffset;
      
      if (currentScroll > 50) {
        this.navbar.classList.add('scrolled');
      } else {
        this.navbar.classList.remove('scrolled');
      }
    });
  }
}

// Hide preloader and show content
function hidePreloader() {
  const preloader = document.getElementById('preloader');
  if (preloader) {
    preloader.classList.add('hidden');
    // Remove from DOM after animation completes
    setTimeout(() => {
      preloader.remove();
    }, 500);
  }
}

// Initialize all components when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  new Carousel();
  new MobileMenu();
  new SmoothScroll();
  new NavbarScroll();
  
  // Initialize Lucide icons
  if (typeof lucide !== 'undefined') {
    lucide.createIcons();
  }
});

// Hide preloader when page is fully loaded
window.addEventListener('load', () => {
  // Small delay for better UX
  setTimeout(hidePreloader, 500);
  
  // Initialize Lucide icons again after load
  if (typeof lucide !== 'undefined') {
    lucide.createIcons();
  }
});
