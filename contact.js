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
