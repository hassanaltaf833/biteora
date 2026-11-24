
/* ========================================
   BITEORA | Navigation Controller
======================================== */

document.addEventListener("DOMContentLoaded", function () {

    const menuToggle = document.querySelector(".menu-toggle");
    const navMenu = document.querySelector(".nav-menu");
    const navLinks = document.querySelectorAll(".nav-menu a");

    // Mobile Navigation Toggle
    menuToggle.addEventListener("click", function () {

        navMenu.classList.toggle("active");

        const isOpen = navMenu.classList.contains("active");

        menuToggle.innerHTML = isOpen
            ? '<i class="fa-solid fa-xmark"></i>'
            : '<i class="fa-solid fa-bars"></i>';

    });

    // Close Navigation After Selecting a Link
    navLinks.forEach(function (link) {

        link.addEventListener("click", function () {

            navMenu.classList.remove("active");

            menuToggle.innerHTML =
                '<i class="fa-solid fa-bars"></i>';

        });

    });

    // Update Active Navigation Link
    navLinks.forEach(function (link) {

        link.addEventListener("click", function () {

            navLinks.forEach(function (item) {
                item.classList.remove("active");
            });

            link.classList.add("active");

        });

    });

});
document.addEventListener("DOMContentLoaded", function () {
    const favoriteButtons = document.querySelectorAll(".favorite-add");
    const cartCount = document.getElementById("cart-count");

    let cart = JSON.parse(localStorage.getItem("biteoraCart")) || [];

    function updateCartCount() {
        if (!cartCount) return;

        const totalItems = cart.reduce(function (total, item) {
            return total + item.quantity;
        }, 0);

        cartCount.textContent = totalItems;
    }

    favoriteButtons.forEach(function (button) {
        button.addEventListener("click", function () {
            const card = button.closest(".food-card");

            const name = card.querySelector("h3").textContent.trim();
            const priceText = card.querySelector(".food-bottom strong").textContent;
            const price = Number(priceText.replace(/[^0-9]/g, ""));
            const image = card.querySelector("img").src;

            const existingItem = cart.find(function (item) {
                return item.name === name;
            });

            if (existingItem) {
                existingItem.quantity++;
            } else {
                cart.push({
                    name: name,
                    price: price,
                    image: image,
                    quantity: 1
                });
            }

            localStorage.setItem("biteoraCart", JSON.stringify(cart));

            updateCartCount();

            button.innerHTML = '<i class="fa-solid fa-check"></i>';

            setTimeout(function () {
                button.innerHTML = '<i class="fa-solid fa-plus"></i>';
            }, 800);
        });
    });

    updateCartCount();
});