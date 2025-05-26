// typewriter effect
const text = "Easily sell games, consoles and gaming accessories.";
let index = 0;
let speed = 100;

const typeWriter = () => {
    if (index < text.length) {
        document.querySelector(".typewriter-effect").innerHTML += text.charAt(index);
        index += 1;
        setTimeout(typeWriter, speed);
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
const cartNotification = document.querySelector(".cart-notif");

function addToCart() {
addToCartBtns.forEach((btn, index) => {
    btn.addEventListener("click", () => {
        const name = gameNames[index].textContent;
        const cartItem = document.createElement("h3");
        cartItem.textContent = name;
        cartContent.appendChild(cartItem);
        cartNotification.style.display = "flex";
    });
});
}

addToCart();