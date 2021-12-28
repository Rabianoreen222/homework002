const multiply = (firstVar = 1, secondVar = 3) => {
  return firstVar * secondVar;
};

let buy = document.getElementById("buy");
let dataLayer = (window.dataLayer = window.dataLayer || []);

buy.onclick = () => {
  let price = document.getElementById("pirce").innerHTML;
  let name = document.getElementById("name").innerHTML;
  let qunatity = document.getElementById("qunatity").innerHTML;

  dataLayer.push({ ecommerce: null }); // Clear the previous ecommerce object.
  dataLayer.push({
    event: "add_to_cart",
    ecommerce: {
      items: [
        {
          item_name: name,
          price: price,
          quantity: qunatity,
        },
      ],
    },
  });
};
