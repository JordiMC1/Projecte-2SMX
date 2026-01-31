function filterProducts() {
    const text = document.getElementById("searchInput").value.toLowerCase();
    const category = document.getElementById("categoryFilter").value;
    const minPrice = document.getElementById("minPrice").value;
    const maxPrice = document.getElementById("maxPrice").value;

    const products = document.querySelectorAll("article");

    products.forEach(product => {
        const title = product.querySelector("h3").textContent.toLowerCase();
        const productCategory = product.getAttribute("data-category");
        const price = parseFloat(product.getAttribute("data-price"));

        const matchesText = title.includes(text);
        const matchesCategory = category === "all" || productCategory === category;
        const matchesMin = minPrice === "" || price >= parseFloat(minPrice);
        const matchesMax = maxPrice === "" || price <= parseFloat(maxPrice);

        if (matchesText && matchesCategory && matchesMin && matchesMax) {
            product.style.display = "block";
        } else {
            product.style.display = "none";
        }
    });
}
