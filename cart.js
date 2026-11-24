
document.addEventListener("DOMContentLoaded", function () {
    const cartContainer = document.getElementById("cart-items");
    const emptyCart = document.getElementById("empty-cart");
    const itemCount = document.getElementById("item-count");
    const subtotalElement = document.getElementById("subtotal");
    const deliveryElement = document.getElementById("delivery");
    const totalElement = document.getElementById("total");
    const checkoutButton = document.getElementById("checkout-btn");

    let cart = JSON.parse(localStorage.getItem("biteoraCart")) || [];
    const deliveryCharges = 150;

    function formatPrice(amount) {
        return "Rs. " + Number(amount).toLocaleString("en-PK");
    }

    function saveCart() {
        localStorage.setItem("biteoraCart", JSON.stringify(cart));
        renderCart();
    }

    function renderCart() {
        cartContainer.innerHTML = "";

        const totalItems = cart.reduce(
            (sum, item) => sum + Number(item.quantity), 0
        );

        const subtotal = cart.reduce(
            (sum, item) => sum + Number(item.price) * Number(item.quantity), 0
        );

        const delivery = cart.length > 0 ? deliveryCharges : 0;
        const total = subtotal + delivery;

        itemCount.textContent = totalItems + " Items";
        subtotalElement.textContent = formatPrice(subtotal);
        deliveryElement.textContent = formatPrice(delivery);
        totalElement.textContent = formatPrice(total);

        emptyCart.hidden = cart.length > 0;
        checkoutButton.disabled = cart.length === 0;

        cart.forEach(function (item, index) {
            const product = document.createElement("div");
            product.className = "cart-item";

            product.innerHTML = `
                <img src="${item.image}" alt="${item.name}">

                <div class="cart-item-info">
                    <h3>${item.name}</h3>
                    <p>${formatPrice(item.price)}</p>

                    <div class="quantity-control">
                        <button type="button" data-action="decrease" data-index="${index}">-</button>
                        <span>${item.quantity}</span>
                        <button type="button" data-action="increase" data-index="${index}">+</button>
                    </div>
                </div>

                <button type="button" class="remove-item" data-action="remove" data-index="${index}" aria-label="Remove item">
                    <i class="fa-solid fa-trash"></i>
                </button>
            `;

            cartContainer.appendChild(product);
        });
    }

    cartContainer.addEventListener("click", function (event) {
        const button = event.target.closest("button[data-action]");

        if (!button) return;

        const index = Number(button.dataset.index);
        const action = button.dataset.action;

        if (!cart[index]) return;

        if (action === "increase") {
            cart[index].quantity = Number(cart[index].quantity) + 1;
        }

        if (action === "decrease") {
            cart[index].quantity = Number(cart[index].quantity) - 1;

            if (cart[index].quantity <= 0) {
                cart.splice(index, 1);
            }
        }

        if (action === "remove") {
            cart.splice(index, 1);
        }

        saveCart();
    });

    checkoutButton.addEventListener("click", function () {
        if (cart.length > 0) {
            window.location.href = "checkout.html";
        }
    });

    renderCart();
});
