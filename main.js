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

//slideimages
const slideWrapper = document.querySelector(".slide__wrapper");
const slides = document.querySelectorAll(".slide__wrapper img");
const nextBtn = document.querySelector(".slide__btn.right");
const prevBtn = document.querySelector(".slide__btn.left");

let index = 0;

function showSlide() {
  slideWrapper.style.transform = `translateX(-${index * 100}%)`;
}

// Next slide
nextBtn.addEventListener("click", () => {
  index = (index + 1) % slides.length;
  showSlide();
});

// Previous slide
prevBtn.addEventListener("click", () => {
  index = (index - 1 + slides.length) % slides.length;
  showSlide();
});

// Scroll with mouse wheel
slideWrapper.addEventListener("wheel", (e) => {
  if (e.deltaY > 0) {
    index = (index + 1) % slides.length;
  } else {
    index = (index - 1 + slides.length) % slides.length;
  }
  showSlide();
});

// Optional: Auto-slide every few seconds
setInterval(() => {
  index = (index + 1) % slides.length;
  showSlide();
}, 5000);
