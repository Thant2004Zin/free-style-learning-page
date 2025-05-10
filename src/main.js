import './style.scss'
import '../node_modules/bootstrap/dist/js/bootstrap'

import lottie from 'lottie-web';
import ScrollMagic from 'scrollmagic';
import 'scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators.js';

const animations = [
  { id: 'lottie-loader', path: './src/loader.json' },
  { id: 'lottie1', path: './src/pencil.json' },
  { id: 'lottie2', path: './src/book.json' },
  { id: 'lottie3', path: './src/academic.json' },
  { id: 'lottie4', path: './src/light-bulb.json' },
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


window.addEventListener('load', () => {
    const startTime = Date.now();
    const elapsed = Date.now() - startTime;
    const minDuration = 700;
    const wait = Math.max(minDuration - elapsed, 0);
    window.scrollTo(0, 0);
  
    setTimeout(() => {
      loader.classList.add('hidden');
  
      document.body.classList.remove('is-loading');
      document.body.style.display = 'block';

      document.getElementById('navbar').classList.add('visible');

      setTimeout(() => loader.remove(), 500);
    }, wait);
});

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
