const product1 = {
  name: 'Laptop',
  color: 'red',
  quantity: 2,
};

const product2 = {
  name: 'Mobile',
  color: 'green',
  quantity: 4,
};

function products(productInfo) {
  return `Product Name: ${productInfo.name}, Color: ${productInfo.color}`;
}

const pLaptop = products(product1);
const pMobile = products(product2);

console.log(pLaptop);
console.log(pMobile);

// sum of all available products
function productSum(...params) {
  return params[0].quantity + params[1].quantity;
}

const totalProduct = productSum(product1, product2);

console.log(totalProduct);
