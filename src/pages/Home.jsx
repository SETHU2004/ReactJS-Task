import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  // Cart stored in localStorage
  const [cart, setCart] = useState(
    JSON.parse(localStorage.getItem("cart")) || []
  );

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/products")
      .then(res => res.json())
      .then(setProducts)
      .catch(console.error);
  }, []);

  const goOrder = (product) => {
    navigate("/order", { state: { product } });
  };

  const addToCart = (product) => {
    const existing = cart.find((p) => p.id === product.id);
    let updatedCart;
    if (existing) {
      updatedCart = cart.map((p) =>
        p.id === product.id ? { ...p, quantity: p.quantity + 1 } : p
      );
    } else {
      updatedCart = [...cart, { ...product, quantity: 1 }];
    }
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    alert(`✅ ${product.name} added to cart!`);
  };

  return (
    <div style={{ padding: 20, maxWidth: 1100, margin: "0 auto" }}>
      <h1 style={{ fontSize: 28, marginBottom: 16, textAlign: "center", color:"#101211ff" }}>
        🍴 Food Menu
      </h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
          gap: 16,
        }}
      >
        {products.map((p) => (
          <div
            key={p.id}
            style={{
              background: "#fff",
              border: "1px solid #e5e7eb",
              borderRadius: 16,
              overflow: "hidden",
              boxShadow: "0 4px 12px rgba(0,0,0,0.06)",
            }}
          >
            <img
              src={p.image_url || `https://source.unsplash.com/600x400/?${p.name}`}
              alt={p.name}
              style={{ width: "100%", height: 160, objectFit: "cover" }}
            />
            <div style={{ padding: 14 }}>
              <h3 style={{ margin: 0 }}>{p.name}</h3>
              <p style={{ color: "#6b7280", margin: "6px 0" }}>{p.description}</p>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <strong>₹{p.price}</strong>
                <div style={{ display: "flex", gap: 8 }}>
                  <button
                    onClick={() => goOrder(p)}
                    style={{
                      background: "#16a34a",
                      color: "#fff",
                      border: "none",
                      padding: "8px 12px",
                      borderRadius: 8,
                      cursor: "pointer",
                    }}
                  >
                    Order
                  </button>

                  <button
                    onClick={() => addToCart(p)}
                    style={{
                      background:"#16a34a",
                      color: "#fff",
                      border: "none",
                      padding: "8px 12px",
                      borderRadius: 8,
                      cursor: "pointer",
                    }}
                  >
                    + 
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
