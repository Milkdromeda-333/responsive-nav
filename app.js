const toggleBars = document.getElementsByClassName("toggle-bars")[0];
const navBarLinks = document.getElementsByClassName("navbar-links")[0];

toggleBars.addEventListener("click", function(){
navBarLinks.classList.toggle("active");
//   This makes the nav links have the class of active, and in the css file that class makes it appear again and flexed.
})
