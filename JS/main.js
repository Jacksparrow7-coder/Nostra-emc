//crossbtn function

let crossbtn = document.getElementById("x");

crossbtn.addEventListener("click", function() {
    document.querySelector("header").style.display = "none";
});

//menu icon function

let menuicon = document.getElementById("icon");
let sidenav = document.querySelector(".sidenav");

menuicon.addEventListener("click", function() {
  if (sidenav.style.display === "block") {
    sidenav.style.display = "none";    // hide if open
  } else {
    sidenav.style.display = "block";  // show if hidden
  }
});