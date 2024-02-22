import { useState } from "react";
import { IoTrashBin } from "react-icons/io5";

function ShoppingCart({ selectedBooks, handleShoppingCartDelete, total }) {
  console.log("Received selectedBooks:", selectedBooks);

  const [selectedOption, setSelectedOption] = useState("standard_europe");

  const options = {
    standard_europe: { shipping: 8.99, location: 0.0 },
    tracked_europe: { shipping: 26.99, location: 0.0 },
    standard_uk: { shipping: 8.99, location: 2.0 },
    tracked_uk: { shipping: 26.99, location: 2.0 },
    standard_overseas: { shipping: 18.49, location: 5.0 },
    tracked_overseas: { shipping: 47.99, location: 5.0 },
  };

  const formattedTotal = typeof total === "number" ? total.toFixed(2) : total;

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const calculateTotalWithShipping = () => {
    if (selectedBooks.length === 0) {
      return 0.0;
    }
    const selected = options[selectedOption] || {
      shipping: 0.0,
      location: 0.0,
    };
    return total + selected.shipping + selected.location;
  };

  return (
    <div>
      <h2>Shopping Cart</h2>
      <ul>
        {selectedBooks.map((book) => (
          <li key={book.id}>
            {book.title} - €{book.price}
            <IoTrashBin
              className="delete-button"
              onClick={() => handleShoppingCartDelete(book)}
            ></IoTrashBin>{" "}
          </li>
        ))}
      </ul>

      <div>
        <label>
          Shipping Option:
          <select value={selectedOption} onChange={handleOptionChange}>
            <option value="standard_europe">Standard Europe - 8.99€</option>
            <option value="tracked_europe">Tracked Europe - 26.99€</option>
            <option value="standard_uk">Standard UK - 8.99€ </option>
            <option value="tracked_uk">Tracked UK - 26,99€</option>
            <option value="standard_overseas">
              Standard Overseas - 18,49€
            </option>
            <option value="tracked_overseas">Tracked Overseas - 47,99€</option>
          </select>
        </label>
      </div>
      <p>Total: €{calculateTotalWithShipping().toFixed(2)}</p>
    </div>
  );
}

export default ShoppingCart;
