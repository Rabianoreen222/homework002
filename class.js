class Book {
  constructor(datePublished, stock, edition, authorName, title, price) {
    this.title = title;
    this.datePublished = datePublished;
    this.stock = stock;
    this.edition = edition;
    this.price = price;
    this.authorName = authorName;
  }
  expensive() {
    if (this.price > 100) {
      return `book is expensive at ${this.price}$`;
    } else {
      return `book is not expensive at ${this.price}$`;
    }
  }
  priceUpdates(newPrice) {
    const oldPrice = this.price;
    this.price = newPrice;
    return `the new price is ${this.price}$, the old price was ${oldPrice}$`;
  }
  stockUpdates(newStock) {
    const oldStock = this.stock;
    return `the new stock is ${(this.stock +=
      newStock)}, the old stock was ${oldStock}`;
  }
}

export default Book;
