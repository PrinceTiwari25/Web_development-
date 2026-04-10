const products = [
    {
        id: 1,
        name: "Laptop",
        price: 60000,
        img: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8"
    },
    {
        id: 2,
        name: "Smartphone",
        price: 25000,
        img: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9"
    },
    {
        id: 3,
        name: "Headphones",
        price: 3000,
        img: "https://images.unsplash.com/photo-1519677100203-a0e668c92439"
    },
    {
        id: 4,
        name: "Smart Watch",
        price: 7000,
        img: "https://images.unsplash.com/photo-1516574187841-cb9cc2ca948b"
    }
];

// LOAD CART FROM STORAGE
let cart = JSON.parse(localStorage.getItem("cart")) || [];

// DISPLAY PRODUCTS
if (document.getElementById("products")) {
    const container = document.getElementById("products");
    container.innerHTML = "";

    products.forEach(p => {
        container.innerHTML += `
        <div class="card">
            <img src="${p.img}">
            <h3>${p.name}</h3>
            <p>₹${p.price}</p>
            <button onclick="addToCart(${p.id})">Add to Cart</button>
        </div>`;
    });
}

// ADD TO CART
function addToCart(id) {
    const product = products.find(p => p.id === id);
    cart.push(product);
    localStorage.setItem("cart", JSON.stringify(cart));
    alert("Added to cart!");
}

// DISPLAY CART
if (document.getElementById("cart-items")) {
    const cartItems = document.getElementById("cart-items");
    const totalEl = document.getElementById("total");

    cartItems.innerHTML = "";
    let total = 0;

    cart.forEach((item, index) => {
        total += item.price;

        cartItems.innerHTML += `
        <li>
            ${item.name} - ₹${item.price}
            <button onclick="removeItem(${index})">❌</button>
        </li>`;
    });

    totalEl.innerText = total;
}

// REMOVE ITEM
function removeItem(index) {
    cart.splice(index, 1);
    localStorage.setItem("cart", JSON.stringify(cart));
    location.reload();
}

// SEARCH
function searchProduct() {
    const query = document.getElementById("search").value.toLowerCase();
    const filtered = products.filter(p =>
        p.name.toLowerCase().includes(query)
    );

    const container = document.getElementById("products");
    container.innerHTML = "";

    filtered.forEach(p => {
        container.innerHTML += `
        <div class="card">
            <img src="${p.img}">
            <h3>${p.name}</h3>
            <p>₹${p.price}</p>
            <button onclick="addToCart(${p.id})">Add</button>
        </div>`;
    });
}

// CHECKOUT
function placeOrder() {
    alert("Order placed successfully 🎉");
    localStorage.removeItem("cart");
}