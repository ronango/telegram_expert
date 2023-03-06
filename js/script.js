/*Tabsx initialization*/
const tabs = new ItcTabs('.tabs');


/**
 * Burger menu
 */
let menuBtn = document.querySelector('.header__burger');
let menu = document.querySelector('.header__menu');
menuBtn.addEventListener('click', function(){
	menu.classList.toggle('active');
  menuBtn.classList.toggle('active');
  document.querySelector('body').classList.toggle('menu-active')
})


/**
 * Lazy Load
 */
document.addEventListener("DOMContentLoaded", function() {
  var lazyloadImages;    

  if ("IntersectionObserver" in window) {
    lazyloadImages = document.querySelectorAll(".lazy");
    var imageObserver = new IntersectionObserver(function(entries, observer) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          var image = entry.target;
          image.src = image.dataset.src;
          image.classList.remove("lazy");
          imageObserver.unobserve(image);
        }
      });
    });

    lazyloadImages.forEach(function(image) {
      imageObserver.observe(image);
    });
  } else {  
    var lazyloadThrottleTimeout;
    lazyloadImages = document.querySelectorAll(".lazy");
    
    function lazyload () {
      if(lazyloadThrottleTimeout) {
        clearTimeout(lazyloadThrottleTimeout);
      }    

      lazyloadThrottleTimeout = setTimeout(function() {
        var scrollTop = window.pageYOffset;
        lazyloadImages.forEach(function(img) {
            if(img.offsetTop < (window.innerHeight + scrollTop)) {
              img.src = img.dataset.src;
              img.classList.remove('lazy');
            }
        });
        if(lazyloadImages.length == 0) { 
          document.removeEventListener("scroll", lazyload);
          window.removeEventListener("resize", lazyload);
          window.removeEventListener("orientationChange", lazyload);
        }
      }, 20);
    }

    document.addEventListener("scroll", lazyload);
    window.addEventListener("resize", lazyload);
    window.addEventListener("orientationChange", lazyload);
  }
})

/**
 * ANIMATIONS
 */
const trainingImages = document.querySelectorAll('.training__stage .stage__pre img')
/**
 * 1) Fade-right
 */

const observerFadeRight = new IntersectionObserver(entries => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-right');
            if (entry.target.tagName == 'IMG'){
                document.querySelector('.app').classList.add('app--active');
            }
        }
    });
});

observerFadeRight.observe(document.querySelector('.app img'));
observerFadeRight.observe(document.querySelector('.app .btn'));


/**
 * 2) Fade-left
 */

const observerFadeLeft = new IntersectionObserver(entries => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-left');
        }
    });
});

observerFadeLeft.observe(document.querySelector('.our_community h3'));
observerFadeLeft.observe(document.querySelector('.our_community__tabs'));


/**
 * 3) Incoming Image
 */

const observerIncomingImage = new IntersectionObserver(entries => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('incoming-image');
        }
    });

});

if (document.documentElement.clientWidth > 680){
  observerIncomingImage.observe(document.querySelector('.important__container .image-block--first'));
  observerIncomingImage.observe(document.querySelector('.important__container .image-block--second'));  
}

/**
 * 4) Translate image
 */

 const observerTranslatingRightImage = new IntersectionObserver(entries => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('translate-rightImage');
        }
    });

});
const observerTranslatingLeftImage = new IntersectionObserver(entries => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('translate-leftImage');
        }
    });

});

if (document.documentElement.clientWidth > 767){
  trainingImages.forEach((el, index) =>{
    if (index % 2 == 0) {
        observerTranslatingRightImage.observe(el);
    }else {
        observerTranslatingLeftImage.observe(el);
    }
  });
}


/**
 * 5) Particles
 */

 particlesJS('particles-js',
  
 {
   "particles": {
     "number": {
       "value": 80,
       "density": {
         "enable": true,
         "value_area": 800
       }
     },
     "color": {
       "value": "#ffffff"
     },
     "shape": {
       "type": "circle",
       "stroke": {
         "width": 0,
         "color": "#000000"
       },
       "polygon": {
         "nb_sides": 5
       },
       "image": {
         "src": "img/github.svg",
         "width": 100,
         "height": 100
       }
     },
     "opacity": {
       "value": 0.5,
       "random": false,
       "anim": {
         "enable": false,
         "speed": 1,
         "opacity_min": 0.1,
         "sync": false
       }
     },
     "size": {
       "value": 5,
       "random": true,
       "anim": {
         "enable": false,
         "speed": 40,
         "size_min": 0.1,
         "sync": false
       }
     },
     "line_linked": {
       "enable": true,
       "distance": 150,
       "color": "#ffffff",
       "opacity": 0.4,
       "width": 1
     },
     "move": {
       "enable": true,
       "speed": 2,
       "direction": "none",
       "random": false,
       "straight": false,
       "out_mode": "out",
       "attract": {
         "enable": false,
         "rotateX": 600,
         "rotateY": 1200
       }
     }
   },
   "interactivity": {
     "detect_on": "canvas",
     "events": {
       "onhover": {
         "enable": true,
         "mode": "repulse"
       },
       "onclick": {
         "enable": true,
         "mode": "push"
       },
       "resize": true
     },
     "modes": {
       "grab": {
         "distance": 400,
         "line_linked": {
           "opacity": 1
         }
       },
       "bubble": {
         "distance": 400,
         "size": 40,
         "duration": 2,
         "opacity": 8,
         "speed": 3
       },
       "repulse": {
         "distance": 200
       },
       "push": {
         "particles_nb": 4
       },
       "remove": {
         "particles_nb": 2
       }
     }
   },
   "retina_detect": true,
   "config_demo": {
     "hide_card": false,
     "background_color": "#b61924",
     "background_image": "",
     "background_position": "50% 50%",
     "background_repeat": "no-repeat",
     "background_size": "cover"
   }
 }

);