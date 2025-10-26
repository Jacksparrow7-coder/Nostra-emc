//crossbtn function

let crossbtn = document.getElementById("x");

crossbtn.addEventListener("click", function() {
    document.querySelector("header").style.display = "none";
});

// Open sidenav on menu icon click
let menuicon = document.getElementById("icon");
let sidenav = document.querySelector(".sidenav");

menuicon.addEventListener("click", function() {
    sidenav.classList.add("active");  // only add class to open
});

// Close sidenav on close icon click
let closebtn = document.getElementById("close");

closebtn.addEventListener("click", function() {
    sidenav.classList.remove("active"); // remove class to close
});

// Scroll Animation
window.addEventListener('scroll', revealSections);

function revealSections() {
  const reveals = document.querySelectorAll('.reveal');
  reveals.forEach((section) => {
    const windowHeight = window.innerHeight;
    const revealTop = section.getBoundingClientRect().top;
    const revealPoint = 100; // adjust for earlier/later animation

    if (revealTop < windowHeight - revealPoint) {
      section.classList.add('active');
    } else {
      section.classList.remove('active');
    }
  });
}
