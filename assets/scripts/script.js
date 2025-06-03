// typewriter effect
const text = "Easily sell games, consoles and gaming accessories.";
let index = 0;

const typeWriter = () => {
    if (index < text.length) {
        document.querySelector(".typewriter-effect").innerHTML += text.charAt(index);
        index++;
        setTimeout(typeWriter, 100);
    }
}

typeWriter();

// cart functionality
// opening cart
const cartBtn = document.querySelector(".cart-btn");
const cartOverlay = document.querySelector(".cart-overlay");
const cartClose = document.querySelector(".cart-close");

cartBtn.addEventListener("click", () => {
    cartOverlay.classList.add("active");
});

cartClose.addEventListener("click", () => {
    cartOverlay.classList.remove("active");
});

// adding to cart
const gameNames = document.querySelectorAll(".game-name");
const addToCartBtns = document.querySelectorAll(".add-to-cart-btn");
const cartContent = document.querySelector(".cart-popup-content");
const cartNotif = document.querySelector(".cart-notif");

// sidebar functionality
const sidebar = document.querySelector(".nav-sidebar");

document.querySelector(".nav-open-sidebar").addEventListener("click", () => {
    sidebar.style.display = "flex";
});

document.querySelector(".nav-hide-sidebar").addEventListener("click", () => {
    sidebar.style.display = "none";
});