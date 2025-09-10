function filterProducts() {
  const input = document.getElementById("searchBar").value.toLowerCase();
  const products = document.querySelectorAll(".product");

  products.forEach((product) => {
    const name = product.getAttribute("data-name").toLowerCase();
    if (name.includes(input)) {
      product.style.display = "block";
    } else {
      product.style.display = "none";
    }
  });
}

function filterCategory(category) {
  const products = document.querySelectorAll(".product");

  products.forEach((product) => {
    if (
      category === "all" ||
      product.getAttribute("data-category") === category
    ) {
      product.style.display = "block";
    } else {
      product.style.display = "none";
    }
  });
}
