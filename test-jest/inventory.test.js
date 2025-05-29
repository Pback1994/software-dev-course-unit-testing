const {
  calculateDiscount,
  filterProducts,
  sortInventory,
} = require("../inventory.js");

// Unit Test #1: calculateDiscount function

describe("calculateDiscount", () => {
  test("should return null if discount rate is 0 or greater than 1", () => {
    expect(calculateDiscount(100, 2)).toBe(null);
    expect(calculateDiscount(100, -0.1)).toBe(null);
  });

  test("should return the discounted price if the discount rate is valid", () => {
    expect(calculateDiscount(100, 0.5)).toBe(50);
    expect(calculateDiscount(100, 0.25)).toBe(75);
  });

  test("should return the discount price if the discount rate is either 0 or 1", () => {
    expect(calculateDiscount(100, 0)).toBe(100);
    expect(calculateDiscount(100, 1.0)).toBe(0);
  });
});

// Unit Test #2: filterProducts function

describe("filterProducts", () => {
  test("should return an empty string if an array is not passed in the function for products", () => {
    let schoolProducts = [
      { product1: "laptop", isElectronic: true },
      { product2: "backpack", isElectronic: false },
      { product3: "monitor", isElectronic: true },
    ];

    function isElectronicProducts(schoolProducts) {
      return schoolProducts.isElectronic === true;
    }

    console.log(filterProducts(schoolProducts, isElectronicProducts));

    expect(filterProducts(schoolProducts, !isElectronicProducts)).not.toContain(
      filterProducts(schoolProducts, isElectronicProducts)
    );
  });

  test("should return the filtered array of all electronic products", () => {
    expect(filterProducts(schoolProducts, isElectronicProducts)).toEqual(
      filterProducts(schoolProducts, isElectronicProducts)
    );
  });
});
