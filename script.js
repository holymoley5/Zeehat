document.getElementById("orderForm").addEventListener("submit", function(e){
  e.preventDefault();

  const order = {
    name: document.getElementById("name").value,
    phone: document.getElementById("phone").value,
    address: document.getElementById("address").value,
    items: document.getElementById("items").value,
    total: document.getElementById("total").value,
    date: new Date().toLocaleString()
  };

  let orders = JSON.parse(localStorage.getItem("orders")) || [];
  orders.push(order);
  localStorage.setItem("orders", JSON.stringify(orders));

  alert("Order berhasil dikirim!");
  document.getElementById("orderForm").reset();
});
