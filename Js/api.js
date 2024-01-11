export const baseUrl =
  "http://cms-ca.kristinebjorgan.com/wp-json/wc/store/products";

//GENERATE PRODUCTS ON GAMES.HMTML
export async function fetchData() {
  try {
    const response = await fetch(baseUrl);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error:", error);
    const errorMessageElement = document.getElementById("errorMessage");
    errorMessageElement.textContent =
      "This did not go as planned! " + error.message;
    throw error;
  }
}
//FETCHING SINGLE PRODUCT
export async function fetchProduct(productId) {
  try {
    const response = await fetch(`${baseUrl}/${productId}`);

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const productData = await response.json();
    return productData;
  } catch (error) {
    console.error("This did not go as planned!", error);
    throw error;
  }
}
