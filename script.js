

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });

let tl = gsap.timeline();

function pageOne(){
    tl.from("#page1 .first",{
        y:100,
        opacity:0,
        delay:0.5,
    })
    tl.from("#page1 .left",{
        x: -200,
        opacity:0
    })
    tl.from("#page1 .right",{
        x: -200,
        opacity:0
    })
    
    tl.from("#page1 .x",{
        x: -200,
        opacity:0,
        fontSize:100,
    })
    tl.from("#page1 .present",{
        y:100,
        opacity:0,
        delay:0.5,
    })
    tl.from("#page1 .third",{
        y:-100,
        opacity:0,
        delay:0.5,
    })   

}
pageOne()

