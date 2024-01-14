import ScrollReveal from "scrollreveal";
import mixitup from "mixitup";
import Swiper from "swiper";

window.onload = function () {
  const header = document.querySelector("header");

  const first_skill = document.querySelector(".skill:first-child");
  const sk_counter = document.querySelectorAll(".counter span");
  const progress_bars = document.querySelectorAll(".skills svg circle");

  const ml_section = document.querySelector(".milestones");
  const ml_counters = document.querySelectorAll(".number span");

  const prt_section = document.querySelector(".portfolio");
  const zoom_icons = document.querySelectorAll(".zoom-icon");
  const modal_overlay = document.querySelector(".modal-overlay");
  const images = document.querySelectorAll(".images img");
  const prev_btn = document.querySelector(".prev-btn");
  const next_btn = document.querySelector(".next-btn");

  const links = document.querySelectorAll(".nav-link");

  const toggle_btn = document.querySelector(".toggle-btn");

  const hamburger = document.querySelector(".hamburger");

  window.addEventListener("scroll", () => {
    //activeLink();
    //if (!skillPlayed) skillsCounter();
    //if (!mlPlayed) mlCounter();
  });

  function updateCount(num, maxNum) {
    let currentNum = +num.innerText;

    if (currentNum < maxNum) {
      num.innerText = currentNum + 1;
      setTimeout(() => {
        updateCount(num, maxNum);
      }, 12);
    }
  }

  /* =========== STICKY NAVBAR ==================*/

  function stickyNavbar() {
    header.classList.toggle("scrolled", window.pageYOffset > 0);
  }

  window.addEventListener("scroll", stickyNavbar);

  /* =========== REVEAL ANIMATION ==================*/

  let sr = ScrollReveal({
    duration: 2500,
    distance: "60px",
  });

  sr.reveal(".showcase-info", { delay: 400 });
  sr.reveal(".showcase-image", { origin: "top", delay: 500 });

  sr.reveal(".container", { delay: 300 });
  sr.reveal(".aboutHeading", { delay: 400 });

  /* =========== SKILLS Progress Bar ANIMATION ==================*/

  function hasReached(el) {
    let topPosition = el.getBoundingClientRect().top;

    if (window.innerHeight >= topPosition + el.offsetHeight) return true;
    return false;
  }

  let skillPlayed = false;

  function skillsCounter() {
    if (!hasReached(first_skill)) return;

    skillPlayed = true;

    sk_counter.forEach((counter, i) => {
      let target = +counter.dataset.target;
      let strokeValue = 427 - 427 * (target / 100);
      progress_bars[i].style.setProperty("--target", strokeValue);
      setTimeout(() => {
        updateCount(counter, target);
      }, 400);
    });

    progress_bars.forEach(
      (p) => (p.style.animation = "progress 2s ease-in-out forwards")
    );
  }
};
