<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>Checkout | Biteora</title>

    <link rel="stylesheet" href="css/style.css">
    <link rel="stylesheet" href="css/checkout.css">

    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css">

    <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700;800&family=Playfair+Display:wght@600;700;800&display=swap" rel="stylesheet">
</head>

<body>

    <!-- Checkout Header -->
    <header class="header">
        <div class="container navbar">

            <a href="index.html" class="logo">
                Bite<span>ora</span><span class="logo-dot">.</span>
            </a>

            <nav class="nav-menu">
                <a href="index.html">Home</a>
                <a href="menu.html">Our Menu</a>
                <a href="cart.html">My Cart</a>
            </nav>

            <a href="cart.html" class="order-btn">
                Back to Cart
                <i class="fa-solid fa-arrow-left"></i>
            </a>

        </div>
    </header>


    <!-- Checkout Heading -->
    <section class="checkout-heading">
        <div class="container">
            <span class="section-label">COMPLETE YOUR ORDER</span>
            <h1>Secure <span>Checkout</span></h1>
            <p>Enter your delivery details to complete your order.</p>
        </div>
    </section>


    <!-- Checkout Content -->
    <section class="checkout-section">

        <div class="container checkout-layout">

            <!-- Customer Information -->
            <div class="checkout-form-area">

                <div class="checkout-card">

                    <div class="checkout-card-heading">
                        <i class="fa-solid fa-user"></i>
                        <div>
                            <h2>Customer Information</h2>
                            <p>Please provide your contact details.</p>
                        </div>
                    </div>

                    <form id="checkout-form">

                        <div class="form-group">
                            <label for="customer-name">Full Name</label>
                            <input
                                type="text"
                                id="customer-name"
                                name="customer-name"
                                placeholder="Enter your full name"
                                required>
                        </div>

                        <div class="form-row">

                            <div class="form-group">
                                <label for="phone">Phone Number</label>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    placeholder="03XXXXXXXXX"
                                    pattern="03[0-9]{9}"
                                    maxlength="11"
                                    required>
                            </div>

                            <div class="form-group">
                                <label for="city">City</label>
                                <input
                                    type="text"
                                    id="city"
                                    name="city"
                                    placeholder="Enter your city"
                                    required>
                            </div>

                        </div>

                        <div class="form-group">
                            <label for="address">Complete Delivery Address</label>
                            <textarea
                                id="address"
                                name="address"
                                rows="4"
                                placeholder="House number, street, area and nearby landmark"
                                required></textarea>
                        </div>

                        <div class="form-group">
                            <label for="instructions">Additional Instructions (Optional)</label>
                            <textarea
                                id="instructions"
                                name="instructions"
                                rows="3"
                                placeholder="Any special delivery instructions?"></textarea>
                        </div>

                        <div class="payment-heading">
                            <i class="fa-solid fa-wallet"></i>
                            <div>
                                <h2>Payment Method</h2>
                                <p>Select your preferred payment option.</p>
                            </div>
                        </div>

                        <label class="payment-option">
                            <input type="radio" name="payment" value="Cash on Delivery" checked>
                            <span>
                                <i class="fa-solid fa-money-bill-wave"></i>
                                Cash on Delivery
                            </span>
                        </label>

                        <button type="submit" class="place-order-btn">
                            Place Order
                            <i class="fa-solid fa-arrow-right"></i>
                        </button>

                    </form>

                </div>

            </div>


            <!-- Order Summary -->
            <aside class="checkout-summary">

                <h2>Order Summary</h2>

                <div id="checkout-items"></div>

                <div class="checkout-summary-divider"></div>

                <div class="checkout-summary-row">
                    <span>Subtotal</span>
                    <strong id="checkout-subtotal">Rs. 0</strong>
                </div>

                <div class="checkout-summary-row">
                    <span>Delivery Charges</span>
                    <strong id="checkout-delivery">Rs. 0</strong>
                </div>

                <div class="checkout-total">
                    <span>Total Amount</span>
                    <strong id="checkout-total">Rs. 0</strong>
                </div>

                <div class="secure-note">
                    <i class="fa-solid fa-shield-halved"></i>
                    Your order details are prepared securely.
                </div>

            </aside>

        </div>

    </section>


    <!-- Footer -->
    <footer class="footer">
        <div class="container footer-bottom">
            <p>© 2026 Biteora. All Rights Reserved.</p>
        </div>
    </footer>

    <script src="checkout.js"></script>

</body>
</html>

