
document.addEventListener("DOMContentLoaded", function () {

    const order = JSON.parse(localStorage.getItem("biteoraLastOrder"));

    if (!order) {
        window.location.href = "cart.html";
        return;
    }

    function formatPrice(amount) {
        return "Rs. " + Number(amount).toLocaleString("en-PK");
    }

    document.getElementById("order-id").textContent = order.orderId;
    document.getElementById("customer-name").textContent = order.customer.name;
    document.getElementById("customer-phone").textContent = order.customer.phone;
    document.getElementById("customer-address").textContent =
        order.customer.address + ", " + order.customer.city;
    document.getElementById("payment-method").textContent = order.payment;

    document.getElementById("order-total").textContent =
        formatPrice(order.total);

    const itemsContainer = document.getElementById("success-items");

    order.items.forEach(function (item) {

        const product = document.createElement("div");
        product.className = "success-product";

        const image = document.createElement("img");
        image.src = item.image;
        image.alt = item.name;

        const info = document.createElement("div");
        info.className = "success-product-info";

        const name = document.createElement("h3");
        name.textContent = item.name;

        const quantity = document.createElement("p");
        quantity.textContent = "Quantity: " + item.quantity;

        const price = document.createElement("strong");
        price.textContent = formatPrice(item.price * item.quantity);

        info.append(name, quantity);
        product.append(image, info, price);

        itemsContainer.appendChild(product);
    });

});
