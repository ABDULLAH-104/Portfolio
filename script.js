// Respect reduced-motion preference
const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/* ---------- Typewriter in the hero terminal ---------- */
const roles = ['Data Analyst', 'Python & SQL', 'Power BI Developer', 'ML Enthusiast'];
const el = document.getElementById('typewriter');

function typeLoop(){
  if(!el) return;
  if(prefersReduced){ el.textContent = roles[0]; return; }

  let roleIndex = 0;
  let charIndex = 0;
  let deleting = false;

  function tick(){
    const current = roles[roleIndex];

    if(!deleting){
      charIndex++;
      el.textContent = current.slice(0, charIndex);
      if(charIndex === current.length){
        deleting = true;
        setTimeout(tick, 1400);
        return;
      }
    } else {
      charIndex--;
      el.textContent = current.slice(0, charIndex);
      if(charIndex === 0){
        deleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
      }
    }
    setTimeout(tick, deleting ? 35 : 65);
  }
  tick();
}
typeLoop();

/* ---------- Scroll reveal ---------- */
const revealTargets = document.querySelectorAll('.project, .cert, .cap__item, .about__text, .about__photo-wrap, .contact__card');
revealTargets.forEach(t => t.classList.add('reveal'));

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add('is-visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

revealTargets.forEach(t => revealObserver.observe(t));
