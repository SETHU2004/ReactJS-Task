import React, { useState, useEffect } from "react";

function Orders() {
  const [orders, setOrders] = useState([]);
  const [formData, setFormData] = useState({ customer_name: "", item: "", quantity: 1 });

  // Fetch orders from Laravel API
  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/orders")
      .then(res => res.json())
      .then(data => setOrders(data))
      .catch(err => console.error("Error fetching orders:", err));
  }, []);

  // Handle form submit
  const handleSubmit = e => {
    e.preventDefault();
    fetch("http://127.0.0.1:8000/api/orders", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData)
    })
      .then(res => res.json())
      .then(order => {
        setOrders([...orders, order]); // Add new order to state
        setFormData({ customer_name: "", item: "", quantity: 1 }); // Reset form
      })
      .catch(err => console.error("Error adding order:", err));
  };

  return (
    <div style={{ padding: "20px", maxWidth: "600px", margin: "auto" }}>
      <h1>Ordering System</h1>

      {/* Order Form */}
      <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
        <input
          type="text"
          placeholder="Customer Name"
          value={formData.customer_name}
          onChange={e => setFormData({ ...formData, customer_name: e.target.value })}
          style={{ display: "block", marginBottom: "10px", width: "100%", padding: "8px" }}
          required
        />
        <input
          type="text"
          placeholder="Item"
          value={formData.item}
          onChange={e => setFormData({ ...formData, item: e.target.value })}
          style={{ display: "block", marginBottom: "10px", width: "100%", padding: "8px" }}
          required
        />
        <input
          type="number"
          placeholder="Quantity"
          value={formData.quantity}
          onChange={e => setFormData({ ...formData, quantity: parseInt(e.target.value) })}
          style={{ display: "block", marginBottom: "10px", width: "100%", padding: "8px" }}
          min="1"
          required
        />
        <button type="submit" style={{ padding: "10px 20px" }}>Add Order</button>
      </form>

      {/* Order List */}
      <h2>All Orders</h2>
      <ul>
        {orders.map(order => (
          <li key={order.id}>
            <strong>{order.customer_name}</strong> ordered {order.quantity} × {order.item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Orders;
