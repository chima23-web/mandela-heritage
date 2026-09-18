const menuButton =
document.getElementById("menu-toggle");
const navMenu =
document.getElementById("nav-menu");
menuButton.addEventListener("click",() => {
 navMenu.classList.toggle("active");
}); 
const home =
document.getElementById("home");
const exploreButton =
document.getElementById("explore-btn");
if (exploreButton) {
exploreButton.addEventListener("click", function() {
 document.getElementById("about").scrollIntoView();
});
}