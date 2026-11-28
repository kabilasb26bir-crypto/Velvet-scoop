
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

    alert(
        name + " added to cart successfully!\n" +
        "Total Items: " + cartCount + "\n" +
        "Total Amount: ₹" + totalAmount
    );
}

function showCart() {
    if (cartItems.length === 0) {
        alert("Your cart is empty!");
        return;
    }

    let message = "Your Shopping Cart:\n\n";

    cartItems.forEach(function(item, index) {
        message += (index + 1) + ". " + item.name +
                   " - ₹" + item.price + "\n";
    });

    message += "\nTotal Items: " + cartCount;
    message += "\nTotal Amount: ₹" + totalAmount;

    alert(message);
}
