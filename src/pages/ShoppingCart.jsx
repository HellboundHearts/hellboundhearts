function ShoppingCart({ selectedBooks, handleShoppingCartDelete, total }) {
  console.log("Received selectedBooks:", selectedBooks);

  const formattedTotal = typeof total === "number" ? total.toFixed(2) : total;

  return (
    <div>
      <h2>Shopping Cart</h2>
      <ul>
        {selectedBooks.map((book) => (
          <li key={book.id}>
            {book.title} - ${book.price}
            <button
              className="delete-button"
              onClick={() => handleShoppingCartDelete(book)}
            >
              Delete
            </button>{" "}
          </li>
        ))}
      </ul>
      <p>Total: ${formattedTotal}</p>
    </div>
  );
}

export default ShoppingCart;
