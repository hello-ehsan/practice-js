// =======templete string=========
let productName = 'Mobile';
let price = 20000;
let quantity = 2;
let isAvailable = true;
console.log(
  `Product Name: ${productName}, Price: ${price}BDT, Quantity: ${quantity}, Stock: ${isAvailable}`
);

// ====Array======
let productInfo = ['Computer', 40000, 3];

console.log(
  `Product: ${productInfo[0]}, Price: ${productInfo[1]}, Quantity: ${productInfo[2]}`
);

// ========object=======
let products = {
  productName: 'Laptop',
  price: 20000,
  color: 'black',
};

console.log(products);
console.log(
  `Product: ${products.productName}, Price: ${products.price}, Quantity: ${products.color}`
);
