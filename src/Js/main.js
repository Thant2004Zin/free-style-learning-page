import '../Css/style.scss';
import 'bootstrap'

import lottie from 'lottie-web';
import ScrollMagic from 'scrollmagic';
import 'scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators.js';

const animations = [
  { id: 'lottie1', path: './src/Json/pencil.json' },
  { id: 'lottie2', path: './src/Json/book.json' },
  { id: 'lottie3', path: './src/Json/academic.json' },
  { id: 'lottie4', path: './src/Json/light-bulb.json' },
];

const lottieInstances = {};

animations.forEach(anim => {
  lottieInstances[anim.id] = lottie.loadAnimation({
    container: document.getElementById(anim.id),
    renderer: 'svg',
    loop: true,
    autoplay: true,
    path: anim.path
  });
});


// At the VERY TOP of your main.js
document.body.classList.add('is-loading');

// Loader initialization should happen immediately
const loader = document.getElementById('loader');
const lottieLoader = document.getElementById('lottie-loader');

// First show simple loader
loader.style.display = 'flex';

// Initialize Lottie loader immediately
const loaderAnim = lottie.loadAnimation({
  container: lottieLoader,
  renderer: 'svg',
  loop: true,
  autoplay: true,
  path: './src/Json/loader.json', // Verify this path is correct!
  rendererSettings: {
    progressiveLoad: true
  }
});

// Wait for both DOM content AND Lottie to load
Promise.all([
  new Promise(resolve => {
    if (document.readyState === 'complete') {
      resolve();
    } else {
      window.addEventListener('DOMContentLoaded', resolve);
    }
  }),
  new Promise(resolve => loaderAnim.addEventListener('DOMLoaded', resolve))
]).then(() => {
  const minDisplayTime = 1000; // Show for at least 1 second
  const startTime = Date.now();
  
  // Wait for all other resources
  window.addEventListener('load', () => {
    const elapsed = Date.now() - startTime;
    const remainingTime = Math.max(minDisplayTime - elapsed, 0);
    
    setTimeout(() => {
      loader.classList.add('hidden');
      document.body.classList.remove('is-loading');
      setTimeout(() => loader.remove(), 500);
    }, remainingTime);
  });
});;

  const controller = new ScrollMagic.Controller();

  const navBarScene = new ScrollMagic.Scene({
    triggerElement: "#waves",
    triggerHook: 0,
    reverse: true,
  })
//   .addIndicators({ name: "Navbar Trigger" })
  .addTo(controller);
  
  let navbar = document.getElementById("navbar");
  
  navBarScene.on("enter", function () {
    // navbar.classList.remove("fade-up");
    navbar.classList.add("navbar-fixed", "fade-down");
    console.log("Enter trigger point");
  });
  
  navBarScene.on("leave", function () {
    navbar.classList.remove("fade-down");
    navbar.classList.add("fade-up");

    setTimeout(() => {
      navbar.classList.remove("navbar-fixed");
    }, 500);
    console.log("Left trigger point");
  });


  document.getElementById('popup-circle-icon').addEventListener('click', function () {
    const popupCircle = document.getElementById('popup-circle');
    const isShowing = popupCircle.classList.contains('show');
  
    popupCircle.classList.toggle('show', !isShowing);
    popupCircle.classList.toggle('hide', isShowing);
  
    if (isShowing) {
      setTimeout(() => {
        this.classList.add('to-show');
        console.log('hide the popup circle icon');
      }, 1000);
    } else {
      this.classList.remove('to-show');
      console.log('show the popup circle icon');
    }
  
    console.log('popup circle icon clicked');
  });

  document.getElementById("language-btn").addEventListener("click", function () {
      const langSpan = document.querySelector(".change-language");
      langSpan.classList.toggle("show");
  });

const applyBtn = document.getElementById('Apply');
const text = applyBtn.textContent;
applyBtn.innerHTML = [...text].map((char, i) =>
  `<span style="--i:${i}">${char === ' ' ? '&nbsp;' : char}</span>`
).join('');
