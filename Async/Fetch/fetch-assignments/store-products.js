async function storeProducts() {
  const request = await fetch("https://fakestoreapi.com/products");
  const data = await request.json();

  console.log("Less than $50");
  console.log("//////////////////////////////////");
  for (const { price, title } of data) {
    if (price < 50) {
      console.log(title);
    }
  }
  console.log("//////////////////////////////////");

  console.log("The most expensive");
  console.log("//////////////////////////////////");
  const mostExpensive = data.sort((a, b) => b.price - a.price)[0];
  console.log(mostExpensive);
  console.log("//////////////////////////////////");

  console.log("Electronics Category");
  console.log("//////////////////////////////////");
  console.log(data.filter(({ category }) => category === "electronics"));
  console.log("//////////////////////////////////");

  console.log("Average price");
  console.log("//////////////////////////////////");
  let total = 0;
  for (const { price } of data) {
    total += price;
  }
  console.log(total / data.length);
  console.log("//////////////////////////////////");
}

storeProducts();