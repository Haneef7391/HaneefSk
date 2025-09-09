// ==========================
// Grid background mouse movement effect
// ==========================
const hero = document.querySelector(".hero");

document.addEventListener("mousemove", (e) => {
  const { innerWidth, innerHeight } = window;
  const x = (e.clientX / innerWidth - 0.5) * 20;
  const y = (e.clientY / innerHeight - 0.5) * 40;
  hero.style.backgroundPosition = `${20 + x}px ${20 + y}px, ${20 + x}px ${40 + y}px`;
});

const magnifier = document.querySelector(".magnifier");

hero.addEventListener("mousemove", (e) => {
  const { left, top } = hero.getBoundingClientRect();
  const x = e.clientX - left;
  const y = e.clientY - top;

  magnifier.style.display = "block";
  magnifier.style.left = `${x}px`;
  magnifier.style.top = `${y}px`;

  magnifier.style.backgroundPosition = `-${x / 2}px -${y / 2}px`;
});

hero.addEventListener("mouseleave", () => {
  magnifier.style.display = "none";
});

// ==========================
// Hide / Show Nav on Scroll
// ==========================
let lastScrollY = window.scrollY;
const nav = document.querySelector('.center-nav');

window.addEventListener('scroll', () => {
  const currentScrollY = window.scrollY;

  if (currentScrollY <= 50) {
    nav.style.top = '10px';
  } else {
    if (currentScrollY < lastScrollY) {
      nav.style.top = '10px';
    } else {
      nav.style.top = '-70px';
    }
  }

  lastScrollY = currentScrollY;
});
//testimonial
const track = document.querySelector('.carousel-track');
const cards = document.querySelectorAll('.testimonial-card');
const dots = document.querySelectorAll('.carousel-dots .dot');

let index = 0;

function getCardWidth() {
  return cards[0].getBoundingClientRect().width;
}

function showSlide(i) {
  index = i;
  const cardWidth = getCardWidth();
  const offset = -i * cardWidth;
  track.style.transform = `translateX(${offset}px)`;
  track.style.transition = "transform 0.6s ease-in-out";

  dots.forEach((dot, idx) => {
    dot.classList.toggle('active', idx === i);
  });
}

dots.forEach((dot, i) => {
  dot.addEventListener('click', () => {
    showSlide(i);
  });
});

setInterval(() => {
  index = (index + 1) % cards.length;
  showSlide(index);
}, 5000);

window.addEventListener("resize", () => {
  showSlide(index);
});
