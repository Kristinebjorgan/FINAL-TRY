function displayCart() {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const cartContainer = document.getElementById('cartContainer'); // Make sure you have this in your cart.html

    cart.forEach(item => {
        const itemDiv = document.createElement('div');
        itemDiv.classList.add('cart-item');

        const title = document.createElement('h3');
        title.textContent = item.product.name;
        itemDiv.appendChild(title);

        const condition = document.createElement('p');
        condition.textContent = `Condition: ${item.condition}`;
        itemDiv.appendChild(condition);

        // Add more details as needed

        cartContainer.appendChild(itemDiv);
    });
}

// Call displayCart on page load
window.onload = function() {
    displayCart();
};
