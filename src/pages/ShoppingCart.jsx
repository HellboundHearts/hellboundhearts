function ShoppingCart({ selectedBooks, handleBuy }) {
  console.log("Received selectedBooks:", selectedBooks);
  return (
    <div>
      <h2>Shopping Cart</h2>
      <ul>
        {selectedBooks.map((book) => (
          <li key={book.id}>
            {book.title} - ${book.price}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ShoppingCart;
