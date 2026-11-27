
let cartCount = 0;
let totalAmount = 0;
let cartItems = [];

function addToCart(name, price) {

    cartCount++;
    totalAmount += price;

    cartItems.push({
        name: name,
        price: price
    });

    document.getElementById("cart-count").innerText = cartCount;

    alert(
        name + " Ice Cream Added to Cart!\n" +
        "Total Items: " + cartCount +
        "\nTotal Amount: ₹" + totalAmount
    );
}

// View Cart
function viewCart() {

    if (cartItems.length === 0) {
        alert("Your Cart is Empty!");
        return;
    }

    let message = "YOUR SHOPPING CART\n\n";

    cartItems.forEach((item, index) => {
        message += (index + 1) + ". " +
            item.name + " - ₹" + item.price + "\n";
    });

    message += "\nTotal Items: " + cartCount;
    message += "\nTotal Amount: ₹" + totalAmount;

    alert(message);
}

// Clear Cart
function clearCart() {

    cartCount = 0;
    totalAmount = 0;
    cartItems = [];

    document.getElementById("cart-count").innerText = cartCount;

    alert("Your Cart has been Cleared!");
}
