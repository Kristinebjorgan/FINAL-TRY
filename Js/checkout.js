// In checkout.js
import { fetchProduct } from "./api.js";

export async function populateCheckout() {
  const productId = "";
  const productData = await fetchProduct(productId);

  const container = document.getElementById("checkoutProductDetails");
  container.innerHTML = `
    <h2>${productData.title}</h2>
    <img src="${productData.image}" alt="${productData.title}">
    <p>Price: $${productData.price}</p>
    <!-- Add more product details as needed -->
  `;
}

populateCheckout();
