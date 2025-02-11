function loadCartItems() {
  const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
  const cartItemsContainer = document
    .getElementById("cart-items")
    .querySelector("tbody");
  const cartCountElement = document.getElementById("cart-count");
  const totalPriceElement = document.getElementById("total-price");
  let totalCount = 0;
  let totalPrice = 0;

  cartItems.forEach((item) => {
    const row = document.createElement("tr");
    row.innerHTML = `
                    <td>${item.ticketType}</td>
                    <td>${item.price.toFixed(2)} EUR</td>
                    <td>${item.quantity}</td>
                    <td>${item.total.toFixed(2)} EUR</td>
                `;
    cartItemsContainer.appendChild(row);
    totalCount += item.quantity;
    totalPrice += item.total;
  });

  cartCountElement.textContent = totalCount;
  totalPriceElement.textContent = `${totalPrice.toFixed(2)} EUR`;
}

function payForTickets() {
  alert(
    "Paldies par pirkumu! Jūsu biļetes ir apmaksātas un nosūtītas uz Jūsu epasta adresi."
  );
  localStorage.removeItem("cartItems");
  document.getElementById("cart-items").innerHTML = "";
  document.getElementById("cart-count").textContent = "0";
  document.getElementById("total-price").textContent = "0.00 EUR";
}

document.addEventListener("DOMContentLoaded", loadCartItems);
