import Book from "./class.js";
const firstBook = new Book("12th Dec, 2020", 19, "3rd", "Rabia", "My Book", 22);

console.log(firstBook);
console.log(firstBook.expensive());
console.log(firstBook.priceUpdates("111"));
console.log(firstBook.expensive());
console.log(firstBook.stockUpdates(10));

document.getElementById("oldStock").innerHTML = firstBook.stock;
