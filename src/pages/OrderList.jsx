import React, { useEffect, useState } from "react";

export default function OrderList() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/orders")
      .then((res) => res.json())
      .then(setOrders)
      .catch(console.error);
  }, []);

  return (
    <div style={{ padding: 20, maxWidth: 1000, margin: "0 auto" }}>
      <h1 style={{ fontSize: 26, marginBottom: 16, color:"#16a34a" }}>📦 My Orders</h1>

      {orders.length === 0 ? (
        <p>No orders yet.</p>
      ) : (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
            gap: 16,
          }}
        >
          {orders.map((o) => {
            const product = o.product; // make sure your backend returns product info
            const quantity = o.quantity || 1;
            const totalPrice = product?.price * quantity;

            return (
              <div
                key={o.id}
                style={{
                  background: "#fff",
                  border: "1px solid #e5e7eb",
                  borderRadius: 12,
                  padding: 14,
                }}
              >
                <div style={{ display: "flex", gap: 12 }}>
                  <img
                    src={product?.image_url || `https://source.unsplash.com/120x80/?${product?.name}`}
                    alt={product?.name}
                    style={{ width: 120, height: 80, objectFit: "cover", borderRadius: 8 }}
                  />
                  <div>
                    <div><b>{product?.name}</b></div>
                    <div style={{ color: "#6b7280" }}>Qty: {quantity}</div>
                    <div><strong>₹{totalPrice}</strong></div>
                  </div>
                </div>
                <div style={{ marginTop: 8, fontSize: 12, color: "#6b7280" }}>
                  Ordered on: {new Date(o.created_at).toLocaleString()}
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
