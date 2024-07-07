document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

let tl = gsap.timeline()
function pageOne() {
    tl.from("#page1 .first", {
        y: 100,
        opacity: 0,
        delay: 0.5
    })
    .from("#page1 .left", {
        x: -200,
        opacity: 0
    })
    .from("#page1 .right", {
        x: -200,
        opacity: 0
    })
    .from("#page1 .x", {
        x: -200,
        opacity: 0,
        fontSize: 100
    })
    .from("#page1 .present", {
        y: 100,
        opacity: 0,
        delay: 0.5
    })
    .from("#page1 .third", {
        y: -100,
        opacity: 0,
        delay: 0.5
    });
}

pageOne();

gsap.registerPlugin(ScrollTrigger);

let container = document.querySelector(".slides"),
    slides = gsap.utils.toArray(".slide"),
    getRatio = (el) => window.innerHeight / (window.innerHeight + el.offsetHeight);

slides.forEach((slide, i) => {
  let bg = slide.querySelector(".background"),
      content = slide.querySelector(".content"),
      tl = gsap.timeline({
            scrollTrigger: {
              trigger: slide,
              start: () => i ? "top bottom" : "top top",
              end: "bottom top",
              scrub: true,
              invalidateOnRefresh: true
            }
          });

  tl.fromTo(bg, {
      y: () => i ? -window.innerHeight * getRatio(slide) : 0
    }, {
      y: () => window.innerHeight * (1 - getRatio(slide)),
      ease: "none"
    });
  tl.fromTo(content, {
      y: () => i ? window.innerHeight * -getRatio(slide) * 2 : 0
    }, {
      y: () => window.innerHeight * getRatio(slide) * 2,
      ease: "none"
    }, 0);
});
