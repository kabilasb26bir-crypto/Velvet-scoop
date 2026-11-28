
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
        name + " Ice Cream Added to Cart!\n\n" +
        "Total Items: " + cartCount +
        "\nTotal Amount: ₹" + totalAmount
    );
}

function viewCart() {

    if (cartItems.length === 0) {
        alert("Your Cart is Empty!");
        return;
    }

    let message = "Your Shopping Cart:\n\n";

    cartItems.forEach(function(item, index) {
        message += (index + 1) + ". " +
                   item.name + " - ₹" +
                   item.price + "\n";
    });

    message += "\nTotal Items: " + cartCount;
    message += "\nTotal Amount: ₹" + totalAmount;

    alert(message);
}

function clearCart() {
    cartCount = 0;
    totalAmount = 0;
    cartItems = [];

    document.getElementById("cart-count").innerText = cartCount;

    alert("Your Cart has been cleared!");
}
