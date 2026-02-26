let cartCount = 0;

function addToCart() {
    cartCount++;
    document.getElementById("cart-count").innerText = cartCount;

    let notification = document.getElementById("notification");
    notification.style.display = "block";

    setTimeout(() => {
        notification.style.display = "none";
    }, 1500);
}