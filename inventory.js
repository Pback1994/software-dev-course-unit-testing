function calculateDiscount(price, discountRate) {
  if (typeof price !== "number" || typeof discountRate !== "number")
    return null;
  if (discountRate < 0 || discountRate > 1) return null;

  // TODO: Implement logic

  return price * (1 - discountRate);
}

function filterProducts(products, callback) {
  if (!Array.isArray(products) || typeof callback !== "function") return [];

  // TODO: Implement filtering logic

  return products.filter((product) => callback(product));
}

function sortInventory(inventory, key) {
  if (!Array.isArray(inventory) || typeof key !== "string") return [];

  // TODO: Implement sorting logic

  return inventory.sort((a, b) => {
    if (a[key] < b[key]) return -1;
    if (a[key] > b[key]) return 1;
    return 0;
  });
}

module.exports = { calculateDiscount, filterProducts, sortInventory };
