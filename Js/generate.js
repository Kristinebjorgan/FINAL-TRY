import { fetchProduct } from "./api.js";

//GENERATES PRODUCTS ON GAMES.HTML
export function generateProductContainers(data) {
  const productContainer = document.getElementById("productContainer");
  const loader = document.getElementById("loader");

  loader.style.display = "block";

  data.forEach((product, index) => {
    const productContainerDiv = document.createElement("div");
    productContainerDiv.classList.add("product-container");

    const image = document.createElement("img");
    image.id = `prod${index + 1}`;
    image.src = product.images[0].src;
    image.alt = product.name;
    productContainerDiv.appendChild(image);

    const description = document.createElement("p");
    description.textContent = product.description.replace(/<\/?p>/g, "");
    productContainerDiv.appendChild(description);

    const priceElement = document.createElement("span");
    let price = parseFloat(product.prices.regular_price) / 100;
    priceElement.textContent = `Price: €${price.toFixed(2)}`;
    productContainerDiv.appendChild(priceElement);

    // Read More link
    const readMoreLink = document.createElement("a");
    readMoreLink.href = `product.html?id=${product.id}`;
    readMoreLink.textContent = "Read More";
    productContainerDiv.appendChild(readMoreLink);

    const buttonContainer = document.createElement("div");
    buttonContainer.classList.add("buttoncontainer");

    const buyNewLink = document.createElement("a");
    buyNewLink.href = "#";
    buyNewLink.textContent = "BUY NEW";
    buyNewLink.classList.add("button");
    buyNewLink.addEventListener("click", (event) => {
      event.preventDefault();
      addToCart(product, "new");
    });
    buttonContainer.appendChild(buyNewLink);

    const buyUsedLink = document.createElement("a");
    buyUsedLink.href = "#";
    buyUsedLink.textContent = "BUY USED";
    buyUsedLink.classList.add("button");
    buyUsedLink.addEventListener("click", (event) => {
      event.preventDefault();
      addToCart(product, "used");
    });
    buttonContainer.appendChild(buyUsedLink);

    productContainerDiv.appendChild(buttonContainer);

    productContainer.appendChild(productContainerDiv);

    productContainer.appendChild(productContainerDiv);
  });

  loader.style.display = "none";
}

//ON CLICK TO GET TO PRODUCT
export function handleReadMoreClick(productId) {
  fetchProduct(productId)
    .then((productData) => {
      localStorage.setItem("productData", JSON.stringify(productData));
      window.location.href = `product.html?id=${productId}`;
    })
    .catch((error) => {
      console.error("Error:", error);
      // Handle error appropriately
    })
    .finally(() => {
      // Hide loader or perform other final actions
    });
}

//ADD TO CART
export function addToCart(product, condition) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.push({ product, condition });
  localStorage.setItem("cart", JSON.stringify(cart));
}

// // DISPLAY PRICE
// const priceElement = document.createElement("span");
// priceElement.textContent = `Price: ${product.prices.regular_price}`;
// productContainerDiv.appendChild(priceElement);
