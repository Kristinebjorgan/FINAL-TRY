import { viewProduct } from "./product.js";
import { fetchData } from "./api.js";
import { generateProductContainers } from "./generate.js";
import { fetchProduct } from "./api.js";

// Add cart functionality
function addToCart(product, condition) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.push({ product, condition });
  localStorage.setItem("cart", JSON.stringify(cart));
}

// Add checkout functionality
function handleCheckout(event) {
  event.preventDefault();
  // Checkout logic
  localStorage.removeItem("cart");
  // Redirect or show a message
}

// Existing window.onload function
window.onload = function () {
  const productContainer = document.getElementById("productContainer");
  const loader = document.getElementById("loader");
  const errorMessage = document.getElementById("errorMessage");

  // Check if we're on the product detail page and there is a 'id' parameter in the URL
  if (window.location.pathname.endsWith("product.html")) {
    const params = new URLSearchParams(window.location.search);
    const productId = params.get("id");

    if (productId) {
      // Fetch the product data using the ID and display it
      fetchProduct(productId)
        .then((productData) => {
          viewProduct(productData);
        })
        .catch((error) => {
          console.error("Error fetching product:", error);
          errorMessage.textContent = "Error fetching product: " + error.message;
          errorMessage.style.display = "block";
        });
    } else {
      console.error("No product ID found in the URL");
      errorMessage.textContent = "Product ID not found in the URL.";
      errorMessage.style.display = "block";
    }
  }

  // Handle the existing functionality for other pages
  if (productContainer) {
    fetchData()
      .then((data) => {
        loader.style.display = "none";
        generateProductContainers(data);
      })
      .catch((error) => {
        console.error("Error:", error);
        loader.style.display = "none";
        errorMessage.textContent =
          "This didn't go as planned! :( " + error.message;
        errorMessage.style.display = "block";
      });
  }
};

// Export the new functions
export { addToCart, handleCheckout };
