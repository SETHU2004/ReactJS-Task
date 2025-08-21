import React, { useState } from "react";
import { useLocation } from "react-router-dom";

export default function OrderForm() {
  const { state } = useLocation();
  const product = state?.product;

  const [quantity, setQuantity] = useState(1);
  const [message, setMessage] = useState("");

  if (!product) {
    return <p>No product selected. Go back to Home.</p>;
  }

  const submitOrder = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://127.0.0.1:8000/api/orders", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ product_id: product.id, quantity })
      });

      if (!response.ok) throw new Error("Failed to place order");
      const data = await response.json();

      setMessage(`✅ Your order for "${product.name}" has been placed!`);
      setQuantity(1); // Reset quantity for next order

    } catch (error) {
      console.error(error);
      setMessage("❌ Error placing order. Please try again.");
    }
  };

  return (
    <div style={{ padding: 20, maxWidth: 600, margin: "0 auto" }}>
      <h1 style={{ fontSize: 26, marginBottom: 16 }}>Place Your Order</h1>

      {message && (
        <div style={{
          marginBottom: 20,
          padding: 12,
          background: "#d1fae5",
          color: "#065f46",
          borderRadius: 8,
          textAlign: "center"
        }}>
          {message}
        </div>
      )}

      <form onSubmit={submitOrder} style={{ background: "#fff", padding: 16, borderRadius: 12, border: "1px solid #e5e7eb" }}>
        <div style={{ display:"flex", alignItems:"center", gap: 10, marginBottom: 12 }}>
          <img
            src={product.image_url || `https://source.unsplash.com/120x80/?${product.name}`}
            alt={product.name}
            style={{ width: 120, height: 80, objectFit: "cover", borderRadius: 8 }}
          />
          <div>
            <div><strong>{product.name}</strong></div>
            <div style={{ color: "#6b7280" }}>₹{product.price}</div>
          </div>
        </div>

        <div style={{ marginBottom: 12 }}>
          <label>Quantity: </label>
          <button type="button" onClick={() => setQuantity(q => Math.max(1, q - 1))}>-</button>
          <input
            type="number"
            value={quantity}
            onChange={e => setQuantity(parseInt(e.target.value) || 1)}
            style={{ width: 50, textAlign: "center" }}
          />
          <button type="button" onClick={() => setQuantity(q => q + 1)}>+</button>
        </div>

        <button
          type="submit"
          style={{
            background:"#16a34a",
            color:"#fff",
            border:"none",
            padding:"10px 16px",
            borderRadius:10,
            cursor:"pointer"
          }}
        >
          Place Order
        </button>
      </form>
    </div>
  );
}
