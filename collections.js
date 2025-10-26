import { products } from "./product.js";

//crossbtn function

let crossbtn = document.getElementById("x");

crossbtn.addEventListener("click", function () {
  document.querySelector("header").style.display = "none";
});

// Open sidenav on menu icon click
let menuicon = document.getElementById("icon");
let sidenav = document.querySelector(".sidenav");

menuicon.addEventListener("click", function () {
  sidenav.classList.add("active"); // only add class to open
});

// Close sidenav on close icon click
let closebtn = document.getElementById("close");

closebtn.addEventListener("click", function () {
  sidenav.classList.remove("active"); // remove class to close
});

var container = document.querySelector(".products");
products.forEach((product) => {
  var createItem = document.createElement("div");
  createItem.classList.add("product");
  createItem.innerHTML = ` <img style="width: 20vw;" src="products/${product.src}">
    <h1>${product.name}</h1>
    <p>₹${product.price}</p>
    <tags style="visibility:hidden;">${product.tags}</tags>`;

  container.append(createItem);
});

var filterList = [];
var tags = document.getElementsByName("tags");
console.log(tags);

tags.forEach((tag) => {
  tag.addEventListener("change", (e) => {
    if (e.target.checked) {
      filterList.push(e.target.value);
      console.log(filterList);
      update();
    } else {
      filterList = filterList.filter((item) => item !== e.target.value);
      update();
    }
  });
});

// var searchInput = document.getElementById("searchInput")
// searchInput.addEventListener("keyup",function(){
//     update()
// })

function update() {
  var productList = document.querySelectorAll(".product");
  for (var i = 0; i < productList.length; i++) {
    var check = false;
    var product = productList[i];
    console.log(product);
    var temp = product.querySelector("tags").innerHTML;

    console.log("elemen" + temp);

    const tempFilterArray = temp.split(",");

    console.log("tempfilterarray" + tempFilterArray);
    console.log("filterlist" + filterList);

    filterList.forEach((j) => {
      tempFilterArray.forEach((i) => {
        if (j == i) {
          check = true;
        }
      });
    });

    if (!check && filterList.length > 0) {
      product.style.display = "none";
    } else {
      product.style.display = "block";
    }
  }
}
