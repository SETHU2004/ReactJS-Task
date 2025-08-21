import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/products")
      .then(res => res.json())
      .then(setProducts)
      .catch(console.error);
  }, []);

  const placeOrder = async (product) => {
    try {
      const response = await fetch("http://127.0.0.1:8000/api/orders", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ product_id: product.id, quantity: 1 }) // default 1 quantity
      });

      if (!response.ok) throw new Error("Failed to place order");

      const data = await response.json();
      alert(`Order placed successfully! Order ID: ${data.id}`);

      // Optional: navigate to My Orders page
      navigate("/orders");
    } catch (error) {
      console.error(error);
      alert("Error placing order. Try again.");
    }
  };

  return (
    <div style={{ padding: 20, maxWidth: 1100, margin: "0 auto" }}>
      <h1 style={{ fontSize: 28, marginBottom: 16, textAlign: "center" }}>🍴 Food Menu</h1>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
        gap: 16
      }}>
        {products.length === 0 ? (
          <p style={{ gridColumn: "1 / -1", textAlign: "center" }}>Loading products...</p>
        ) : (
          products.map(p => (
            <div key={p.id} style={{
              background: "#fff",
              border: "1px solid #e5e7eb",
              borderRadius: 16,
              overflow: "hidden",
              boxShadow: "0 4px 12px rgba(0,0,0,0.06)"
            }}>
              <img
                src={p.image_url || `https://source.unsplash.com/600x400/?${p.name}`}
                alt={p.name}
                style={{ width: "100%", height: 160, objectFit: "cover" }}
              />
              <div style={{ padding: 14 }}>
                <h3 style={{ margin: 0 }}>{p.name}</h3>
                <p style={{ color: "#6b7280", margin: "6px 0" }}>{p.description}</p>
                <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center" }}>
                  <strong>₹{p.price}</strong>
                  <button
                    onClick={() => placeOrder(p)}
                    style={{
                      background:"#16a34a",
                      color:"#fff",
                      border:"none",
                      padding:"8px 12px",
                      borderRadius:8,
                      cursor:"pointer"
                    }}
                  >
                    Order
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
