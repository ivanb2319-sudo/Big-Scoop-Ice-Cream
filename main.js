// Toggle Instagram icon on Contact button click
function cinfo() {
  const contactDiv = document.getElementById("conta");
  if (contactDiv.style.display === "block") {
    contactDiv.style.display = "none"; // hide if visible
  } else {
    contactDiv.style.display = "block"; // show if hidden
  }
}

// QUANTITY & CHECKOUT FUNCTIONS (unchanged)
function changeQty(btn, value) {
  let span = btn.parentElement.querySelector("span");
  let qty = parseInt(span.textContent);

  qty += value;
  if (qty < 0) qty = 0;

  span.textContent = qty;
  updateTotal();
}

function updateTotal() {
  let total = 0;
  document.querySelectorAll(".card").forEach(card => {
    let price = parseInt(card.dataset.price);
    let qty = parseInt(card.querySelector("span").textContent);
    total += price * qty;
  });
  document.getElementById("total").textContent = total;
}

function checkout() {
  let total = document.getElementById("total").textContent;
  if (total == 0) {
    alert("Please select at least one item.");
  } else {
    alert("✅ You have successfully checked out!\nTotal: ₱" + total);
  }
}