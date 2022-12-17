// function init(){

// }

// window.addEventListener('load', function(){
//     init();
// });

// A $( document ).ready() block.

gsap.registerPlugin(ScrollTrigger);

$(document).ready(function () {
  console.log("ready!");

  // gsap.to("#intro img", {

  //     opacity:0,
  //     scrollTrigger: {
  //         trigger: '#intro h1',
  //         start:'center 300px',
  //         end:'bottom 200px',
  //         scrub: true,
  //         markers:true
  //     }
  //     })

  // gsap.set("#project02", {
  //     scrollTrigger: {

  //         trigger:'#project02 img',
  //         start:'0% 80%',
  //         end: '100% 50%',
  //         markers: true,
  //         toggleClass: {
  //             targets: "#project02",
  //             className: "active" }

  //     }})

  // LE FLOU QUAND ON SCROLLTRIGGER
  // const tl = gsap.timeline({
  //     defaults:{
  //         ease: 'none'
  //     },
  //     scrollTrigger: {
  //         trigger: '.bcg-parallax',
  //         start: 'top 80%',
  //         end: 'bottom 50%',
  //         scrub: true,
  //         markers: {
  //             visible: true,
  //             startColor: 'red',
  //             endColor: 'pink',
  //             label: 'eden'
  //         }
  //     }
  // })

  // tl

  // .from('.content-wrapper', {
  //     duration: 0.4,
  //     autoAlpha: 0
  // }, 0.4)
  // .from('.bcg', {
  //     duration: 2,
  //     y: '-30%'
  // }, 0)

  // LE PIN EFFECT
  gsap.to([".home-features-kanban-content"], {
    autoAlpha: 100,
    ease: "none",
    scrollTrigger: {
      pinSpacing: false,
      trigger: ".kanban-board",
      start: "top top+=10%",
      // end: () => innerWidth,
      end: 'bottom+=100 top',
      pin: true,
      scrub: true,
      markers: {
        visible: true,
        startColor: "red",
        endColor: "pink",
        label: "eden",
      },
    },
  });
}); //ready
