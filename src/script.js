const navToggleStore = document.querySelector(".nav-toggle-store");
const navDropdownStore = document.querySelector(".nav-dropdown-store");
const navLinks = document.querySelectorAll(".nav-a")

navToggleStore.addEventListener("click", function () {
    navDropdownStore.classList.toggle("visible");
});

navLinks.forEach(function(link){
    link.addEventListener("click", function(){
        navDropdownStore.classList.remove("visible");
    })
});