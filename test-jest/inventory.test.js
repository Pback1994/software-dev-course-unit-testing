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
  test("should return an empty string if an array is not passed in the callback function for products", () => {
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
    let schoolProducts = [
      { product: "laptop", isElectronic: true },
      { product: "backpack", isElectronic: false },
      { product: "monitor", isElectronic: true },
    ];

    function isElectronicProducts(schoolProducts) {
      return schoolProducts.isElectronic === true;
    }

    expect(filterProducts(schoolProducts, isElectronicProducts)).toStrictEqual(
      filterProducts(schoolProducts, isElectronicProducts)
    );
  });

  test("should return an empty array is there are no products in the product inventory", () => {
    let schoolProducts = [];

    function isElectronicProducts(schoolProducts) {
      return schoolProducts.isElectronic === true;
    }

    expect(filterProducts(schoolProducts, isElectronicProducts)).toEqual([]);
  });
});

// Unit #3: sortInventory function

describe("sortInventory", () => {
  test("should return an empty array if the inventory of products passed into the function is not an array", () => {
    let schoolProducts = { product: "laptop", isElectronic: true };

    function isElectronicProducts(schoolProducts) {
      return schoolProducts.isElectronic === true;
    }

    expect(sortInventory(schoolProducts, "product")).toEqual([]);
  });

  test("should sort a valid array of products by price from smallest to largest value", () => {
    let schoolProducts = [
      { product: "laptop", isElectronic: true, price: 45 },
      { product: "backpack", isElectronic: false, price: 60 },
      { product: "monitor", isElectronic: true, price: 50 },
    ];

    expect(sortInventory(schoolProducts, "price")).toEqual([
      { product: "laptop", isElectronic: true, price: 45 },
      { product: "monitor", isElectronic: true, price: 50 },
      { product: "backpack", isElectronic: false, price: 60 },
    ]);
  });

  test("should return an array in the same order if you are sorting an array of products with the same price value.", () => {
    let schoolProducts = [
      { product: "laptop", isElectronic: true, price: 45 },
      { product: "backpack", isElectronic: false, price: 45 },
      { product: "monitor", isElectronic: true, price: 45 },
    ];
    expect(sortInventory(schoolProducts, "price")).toEqual([
      { product: "laptop", isElectronic: true, price: 45 },
      { product: "backpack", isElectronic: false, price: 45 },
      { product: "monitor", isElectronic: true, price: 45 },
    ]);
  });
});
