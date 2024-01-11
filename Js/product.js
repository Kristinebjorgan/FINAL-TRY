//ONE SINGLE PRODUCT DATA
export function viewProduct(productData) {
  try {
    const productDetailsContainer = document.getElementById(
      "productDetailsContainer"
    );
    productDetailsContainer.innerHTML = "";
    productDetailsContainer.classList.add("productcontainer");

    const image = document.createElement("img");
    image.src = productData.images[0].src;
    image.alt = productData.images[0].alt;
    productDetailsContainer.appendChild(image);

    const title = document.createElement("h2");
    title.textContent = productData.name;
    productDetailsContainer.appendChild(title);

    const tempDiv = document.createElement("div");
    tempDiv.innerHTML = productData.description; 
    const descriptionText = tempDiv.textContent || tempDiv.innerText || ""; 

    // Create and append the description paragraph
    const description = document.createElement("p");
    description.textContent = descriptionText;
    productDetailsContainer.appendChild(description);

    const genre = document.createElement("p");
    genre.textContent = "Genre: " + productData.categories[0].name;
    productDetailsContainer.appendChild(genre);

    // const released = document.createElement("p");
    // released.textContent = "Released: " + productData.released;
    // productDetailsContainer.appendChild(released);

    const ageRating = document.createElement("p");
    ageRating.textContent = "Age Rating: " + productData.average_rating;
    productDetailsContainer.appendChild(ageRating);

    // Display regular price
    const regularPriceElement = document.createElement("p");
    let regularPriceValue = parseFloat(productData.prices.regular_price) / 100;
    regularPriceElement.textContent = "Price: €" + regularPriceValue.toFixed(2);
    productDetailsContainer.appendChild(regularPriceElement);

    // Check if there's a sale price and display it
    if (productData.prices.sale_price) {
      const salePriceElement = document.createElement("p");
      let salePriceValue = parseFloat(productData.prices.sale_price) / 100;
      salePriceElement.textContent =
        "Discounted Price: €" + salePriceValue.toFixed(2);
      productDetailsContainer.appendChild(salePriceElement);
    }

    const buttonsContainer = document.createElement("div");
    buttonsContainer.classList.add("buttons-container");

    const buyNewButton = document.createElement("button");
    buyNewButton.textContent = "BUY NEW";
    buyNewButton.classList.add("button");
    buttonsContainer.appendChild(buyNewButton);

    const buyUsedButton = document.createElement("button");
    buyUsedButton.textContent = "BUY USED";
    buyUsedButton.classList.add("button");
    buttonsContainer.appendChild(buyUsedButton);

    productDetailsContainer.appendChild(buttonsContainer);
  } catch (error) {
    console.error("Error:", error);
    const errorMessageElement = document.getElementById("errorMessage");
    errorMessageElement.textContent = "An error occurred! " + error.message;
  }
}
