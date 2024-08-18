
function cursor() {
  let cur = document.getElementById("cursor");
  let main = document.getElementById("main");


  main.addEventListener("mousemove", function (del) {
    gsap.to(cur, {
      x: del.x,
      y: del.y,
      duration: 0.5,
      ease: "power1.out"
    });
  });


}
cursor()


function loder() {
  var tl = gsap.timeline();
  tl.to(".slide", {
    y: "-100%",
    stagger: 0.25,
    duration: 0.5,
    delay: 0.5,
  });

  tl.to("#loader", {
    opacity: 0,
    duration: 0.2,
    delay: 0.6,
  });
  tl.to("#loader", {
    display: "none",
  });
}

function page1() {
  gsap.to(".elem h1", {
    duration: 2,
    opacity: 0,
    scrollTrigger: {
      trigger: ".parent",
      scroller:"body",
      start: "top top",
      end:"",

      scrub: 2,
      markers: true
    }
  });



}
page1() 
loder()