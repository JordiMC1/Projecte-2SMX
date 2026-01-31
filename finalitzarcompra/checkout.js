// Recupera el carret del localStorage
let cart = JSON.parse(localStorage.getItem("cart")) || [];

function renderCheckout() {
    const tbody = document.getElementById("checkoutItems");
    const totalText = document.getElementById("checkoutTotal");

    tbody.innerHTML = "";
    let total = 0;

    if (cart.length === 0) {
        const tr = document.createElement("tr");
        const td = document.createElement("td");
        td.setAttribute("colspan", 4);
        td.textContent = "No hi ha productes al carret.";
        td.style.textAlign = "center";
        tr.appendChild(td);
        tbody.appendChild(tr);
    } else {
        cart.forEach(item => {
            total += item.price * item.quantity;

            const tr = document.createElement("tr");

            const tdName = document.createElement("td");
            tdName.textContent = item.name;

            const tdQty = document.createElement("td");
            tdQty.textContent = item.quantity;

            const tdPrice = document.createElement("td");
            tdPrice.textContent = item.price + "€";

            const tdSubtotal = document.createElement("td");
            tdSubtotal.textContent = item.price * item.quantity + "€";

            tr.appendChild(tdName);
            tr.appendChild(tdQty);
            tr.appendChild(tdPrice);
            tr.appendChild(tdSubtotal);

            tbody.appendChild(tr);
        });
    }

    totalText.textContent = "Total: " + total + "€";
}

// Renderitza quan es carrega la pàgina
document.addEventListener("DOMContentLoaded", renderCheckout);