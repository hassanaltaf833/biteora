

document.addEventListener("DOMContentLoaded", function () {

    const checkoutItems = document.getElementById("checkout-items");
    const subtotalElement = document.getElementById("checkout-subtotal");
    const deliveryElement = document.getElementById("checkout-delivery");
    const totalElement = document.getElementById("checkout-total");
    const checkoutForm = document.getElementById("checkout-form");

    const cart = JSON.parse(localStorage.getItem("biteoraCart")) || [];
    const deliveryCharges = 150;

    function formatPrice(amount) {
        return "Rs. " + Number(amount).toLocaleString("en-PK");
    }

    function calculateSubtotal() {
        return cart.reduce(function (sum, item) {
            return sum + Number(item.price) * Number(item.quantity);
        }, 0);
    }

    function renderOrderSummary() {

        checkoutItems.innerHTML = "";

        const subtotal = calculateSubtotal();
        const delivery = cart.length > 0 ? deliveryCharges : 0;

        cart.forEach(function (item) {

            const product = document.createElement("div");
            product.className = "checkout-product";

            const image = document.createElement("img");
            image.src = item.image;
            image.alt = item.name;

            const info = document.createElement("div");
            info.className = "checkout-product-info";

            const name = document.createElement("h3");
            name.textContent = item.name;

            const quantity = document.createElement("p");
            quantity.textContent = "Quantity: " + item.quantity;

            const price = document.createElement("strong");
            price.textContent = formatPrice(item.price * item.quantity);

            info.append(name, quantity);
            product.append(image, info, price);

            checkoutItems.appendChild(product);
        });

        subtotalElement.textContent = formatPrice(subtotal);
        deliveryElement.textContent = formatPrice(delivery);
        totalElement.textContent = formatPrice(subtotal + delivery);
    }

    checkoutForm.addEventListener("submit", function (event) {

        event.preventDefault();

        if (cart.length === 0) {
            alert("Your cart is empty. Please add items before checkout.");
            window.location.href = "menu.html";
            return;
        }

        const subtotal = calculateSubtotal();
        const total = subtotal + deliveryCharges;

        const order = {
            orderId: "BIT-" + Date.now(),
            customer: {
                name: document.getElementById("customer-name").value.trim(),
                phone: document.getElementById("phone").value.trim(),
                city: document.getElementById("city").value.trim(),
                address: document.getElementById("address").value.trim(),
                instructions: document.getElementById("instructions").value.trim()
            },
            payment: document.querySelector('input[name="payment"]:checked').value,
            items: cart,
            subtotal: subtotal,
            delivery: deliveryCharges,
            total: total,
            orderDate: new Date().toLocaleString()
        };

        localStorage.setItem("biteoraLastOrder", JSON.stringify(order));

        localStorage.removeItem("biteoraCart");

        window.location.href = "order-success.html";
    });

    if (cart.length === 0) {
        alert("Your cart is empty. Please add items before checkout.");
        window.location.href = "menu.html";
        return;
    }

    renderOrderSummary();

});
