let cart = JSON.parse(localStorage.getItem("cart")) || [];

function addToCart(name, price) {
    const existing = cart.find(item => item.name === name);

    if (existing) {
        existing.quantity++;
    } else {
        cart.push({ name, price, quantity: 1 });
    }

    saveCart();
    renderCart();
}

function renderCart() {
    const cartList = document.getElementById("cartItems");
    const totalText = document.getElementById("cartTotal");

    cartList.innerHTML = "";
    let total = 0;

    if (!cart.length) {
        const li = document.createElement("li");
        li.textContent = "No hi ha productes al carret.";
        cartList.appendChild(li);
    } else {
        cart.forEach((item, index) => {
            total += item.price * item.quantity;

            const li = document.createElement("li");
            li.style.display = "flex";
            li.style.justifyContent = "space-between";
            li.style.alignItems = "center";

            li.innerHTML = `
                <span>${item.name}</span>
                <span>
                    <button class="qty-btn" onclick="decreaseQty(${index})">-</button>
                    ${item.quantity}
                    <button class="qty-btn" onclick="increaseQty(${index})">+</button>
                </span>
                <span>${item.price * item.quantity}€</span>
            `;

            cartList.appendChild(li);
        });
    }

    totalText.textContent = `Total: ${total}€`;
}

function increaseQty(index) {
    cart[index].quantity++;
    saveCart();
    renderCart();
}

function decreaseQty(index) {
    if (cart[index].quantity > 1) {
        cart[index].quantity--;
    } else {
        cart.splice(index, 1);
    }
    saveCart();
    renderCart();
}

function finalitzarCompra() {
    window.location.href = "finalitzarcompra/index.html";
}

function saveCart() {
    localStorage.setItem("cart", JSON.stringify(cart));
}

document.addEventListener("DOMContentLoaded", renderCart);