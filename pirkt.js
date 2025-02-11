function updateTotal(input) {
  const row = input.parentElement.parentElement;
  const price = parseFloat(row.cells[1].textContent.replace(" EUR", ""));
  const quantity = parseInt(input.value);
  const totalCell = row.querySelector(".total");
  totalCell.textContent = (price * quantity).toFixed(2) + " EUR";
}

function addToCart() {
  const cartCountElement = document.getElementById("cart-count");
  let currentCount = parseInt(cartCountElement.textContent);
  const inputs = document.querySelectorAll(
    '.ticket-table input[type="number"]'
  );
  let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];

  inputs.forEach((input) => {
    const quantity = parseInt(input.value);
    if (quantity > 0) {
      const row = input.parentElement.parentElement;
      const ticketType = row.cells[0].textContent;
      const price = parseFloat(row.cells[1].textContent.replace(" EUR", ""));
      const total = parseFloat(
        row.querySelector(".total").textContent.replace(" EUR", "")
      );

      // Check if the item already exists in the cart
      const existingItemIndex = cartItems.findIndex(
        (item) => item.ticketType === ticketType
      );
      if (existingItemIndex !== -1) {
        // Update the existing item
        cartItems[existingItemIndex].quantity += quantity;
        cartItems[existingItemIndex].total += total;
      } else {
        // Add the new item
        cartItems.push({ ticketType, price, quantity, total });
      }

      currentCount += quantity;
      input.value = 0; // Reset the input value
      updateTotal(input); // Update the total cell
    }
  });

  localStorage.setItem("cartItems", JSON.stringify(cartItems));
  cartCountElement.textContent = currentCount;
}
