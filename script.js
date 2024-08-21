
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
      scroller:"#main",
      start: "top top",
      end:"",

      scrub: 2,
      // markers: true
    }
  });
}

// gsap.registerPlugin(ScrollTrigger);

// // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

// const locoScroll = new LocomotiveScroll({
//   el: document.querySelector("#main"),
//   smooth: true
// });
// // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
// locoScroll.on("scroll", ScrollTrigger.update);

// // tell ScrollTrigger to use these proxy methods for the ".smooth-scroll" element since Locomotive Scroll is hijacking things
// ScrollTrigger.scrollerProxy("#main", {
//   scrollTop(value) {
//     return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
//   }, // we don't have to define a scrollLeft because we're only scrolling vertically.
//   getBoundingClientRect() {
//     return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
//   },
//   // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
//   pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
// });



// // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
// ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

// after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
ScrollTrigger.refresh();

page1() 
loder()