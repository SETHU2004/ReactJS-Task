// src/pages/Offers.jsx
import React from "react";

const offersData = [
  { id: 1, title: "50% Off Pizza", description: "Get 50% off on all pizzas today!" },
  { id: 2, title: "Buy 1 Get 1 Free", description: "Applicable on burgers and sandwiches." },
  { id: 3, title: "Free Delivery", description: "On orders above ₹500." },
  { id: 4, title: "Combo Meal Deal", description: "Save ₹150 on combo meals." },
  { id: 5, title: "Dessert Offer", description: "Free dessert with every main course." },
  { id: 6, title: "Weekend Special", description: "Special discounts every weekend!" },
];

export default function Offers() {
  return (
    <div style={{ padding: "40px", backgroundColor: "#f9fafb", minHeight: "100vh" }}>
      <h1 style={{ fontSize: "32px", fontWeight: 700, textAlign: "center", marginBottom: "30px" }}>
        Current Offers
      </h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "20px",
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        {offersData.map((offer) => (
          <div
            key={offer.id}
            style={{
              padding: "20px",
              backgroundColor: "#fff",
              borderRadius: "12px",
              boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
              textAlign: "center",
            }}
          >
            <h2 style={{ fontSize: "20px", fontWeight: 600, color: "#16a34a", marginBottom: "10px" }}>
              {offer.title}
            </h2>
            <p style={{ fontSize: "16px", color: "#334155" }}>{offer.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
