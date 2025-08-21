import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function OrderSummary() {
  const { state } = useLocation();
  const navigate = useNavigate();

  const resp = state?.response;
  if (!resp || !resp.success) {
    return (
      <div style={{ padding: 20 }}>
        <h2>No order found</h2>
        <button onClick={() => navigate("/")}>Back to menu</button>
      </div>
    );
  }

  const o = resp.order;
  return (
    <div style={{ padding: 20, maxWidth: 700, margin: "0 auto" }}>
      <h1 style={{ color:"#16a34a" }}>{resp.message}</h1>
      <div style={{ marginTop: 12, background:"#fff", border:"1px solid #e5e7eb", borderRadius:12, padding:16 }}>
        <p><b>Dish:</b> {o?.product?.name}</p>
        <p><b>Quantity:</b> {o?.quantity}</p>
        <p><b>Total:</b> ₹{o?.total_price}</p>
      </div>
      <div style={{ marginTop: 16, display:"flex", gap: 10 }}>
        <button onClick={() => navigate("/")} style={{ padding:"8px 12px" }}>Back to Menu</button>
        <button onClick={() => navigate("/orders")} style={{ padding:"8px 12px" }}>View My Orders</button>
      </div>
    </div>
  );
}
