
/* ========================================
   BITEORA | Menu & Cart Controller
======================================== */

document.addEventListener("DOMContentLoaded", function () {

    const filterButtons = document.querySelectorAll(".filter-btn");
    const menuCards = document.querySelectorAll(".menu-card");
    const cartCount = document.getElementById("cart-count");

    // Load Existing Cart
    let cart = JSON.parse(localStorage.getItem("biteoraCart")) || [];

    // Create Cart Notification
    const notification = document.createElement("div");
    notification.className = "cart-notification";

    notification.innerHTML = `
        <div class="notification-content">
            <i class="fa-solid fa-circle-check"></i>
            <div>
                <strong>Added to Your Cart!</strong>
                <p>Your item has been added successfully.</p>
            </div>
        </div>
        <a href="cart.html" class="notification-link">
            View Cart <i class="fa-solid fa-arrow-right"></i>
        </a>
    `;

    document.body.appendChild(notification);

    let notificationTimer;

    // Update Cart Count
    function updateCartCount() {

        if (!cartCount) return;

        const totalItems = cart.reduce(
            (total, item) => total + Number(item.quantity), 0
        );

        cartCount.textContent = totalItems;
    }

    // Save Cart
    function saveCart() {

        localStorage.setItem("biteoraCart", JSON.stringify(cart));
        updateCartCount();

    }

    // Show Success Notification
    function showNotification(productName) {

        notification.querySelector("p").textContent =
            productName + " has been added successfully.";

        notification.classList.add("show");

        clearTimeout(notificationTimer);

        notificationTimer = setTimeout(function () {
            notification.classList.remove("show");
        }, 4000);
    }

    // Add Products to Cart
    document.querySelectorAll(".menu-card .add-cart").forEach(function (button) {

        button.addEventListener("click", function () {

            const card = button.closest(".menu-card");

            if (!card) return;

            const name = card.querySelector("h3").textContent.trim();

            const priceText = card.querySelector(".menu-price strong").textContent;

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

            saveCart();

            button.innerHTML = '<i class="fa-solid fa-check"></i>';

            showNotification(name);

            setTimeout(function () {
                button.innerHTML = '<i class="fa-solid fa-plus"></i>';
            }, 800);

        });

    });

    // Filter Menu Categories
    filterButtons.forEach(function (button) {

        button.addEventListener("click", function () {

            const selectedCategory = button.dataset.category;

            filterButtons.forEach(function (item) {
                item.classList.remove("active");
            });

            button.classList.add("active");

            menuCards.forEach(function (card) {

                const matches =
                    selectedCategory === "all" ||
                    selectedCategory === card.dataset.category;

                card.classList.toggle("hide", !matches);

            });

        });

    });

    updateCartCount();

});

