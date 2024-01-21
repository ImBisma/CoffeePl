// var machines = document.querySelector(".display-machines");
// var beans = document.querySelector(".display-beans");
// var accosories = document.querySelector(".display-accosories");
// var machinesBtn = document.querySelector(".machines-Btn");
// var beansBtn = document.querySelector(".beans-Btn");
// var accosoriesBtn = document.querySelector(".accosories-Btn");

// beansBtn.addEventListener("click", function () {
//   beans.style.display = "inline";
//   machines.style.display = "none";
//   accosories.style.display = "none";
// });

// machinesBtn.addEventListener("click", function () {
//   beans.style.display = "none";
//   machines.style.display = "inline";
//   accosories.style.display = "none";
// });

// accosoriesBtn.addEventListener("click", function () {
//   beans.style.display = "none";
//   machines.style.display = "none";
//   accosories.style.display = "inline";
// });

document.addEventListener("DOMContentLoaded", function() {
  // Hide the preloader when the content is fully loaded
  setTimeout(function() {
      document.querySelector(".preloader").style.top = "-100%";
  }, 3500);
});
console.log("haha");

var machines = document.querySelector(".display-machines");
var beans = document.querySelector(".display-beans");
var accosories = document.querySelector(".display-accosories");
var machinesBtn = document.querySelector(".machines-Btn");
var beansBtn = document.querySelector(".beans-Btn");
var accosoriesBtn = document.querySelector(".accosories-Btn");

beansBtn.addEventListener("click", function () {
  beans.style.display = "inline";
  machines.style.display = "none";
  accosories.style.display = "none";
});

machinesBtn.addEventListener("click", function () {
  beans.style.display = "none";
  machines.style.display = "inline";
  accosories.style.display = "none";
});

accosoriesBtn.addEventListener("click", function () {
  beans.style.display = "none";
  machines.style.display = "none";
  accosories.style.display = "inline";
});


// mouse animated
//   document.addEventListener("DOMContentLoaded", function () {
//     var Btn = document.querySelector(".btn--gsap");

//     var section1 = document.querySelector(".section-1");

//     section1.addEventListener("mousemove", function (event) {
//       console.log("ok");

//       gsap.to(Btn, {
//         x: event.x,
//         y: event.y
//       });
//     });
//   });

// var Btn = document.querySelector(".btn--gsap");
// var section1 = document.querySelector(".section-1");

// section1.addEventListener("mouseenter", function (event) {

//   gsap.to(Btn, {
//     scale: 1,
//     opacity: 1
//   });
// });
// section1.addEventListener("mouseleave", function (event) {

//   gsap.to(Btn, {
//     scale: 0,
//     opacity: 0
//   });
// });

// })
