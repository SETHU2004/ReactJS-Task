import React from "react";

export default function Footer() {
  return (
    <footer style={{
      borderTop: "1px solid #e5e7eb", padding: "16px 20px",
      textAlign: "center", background: "#fff"
    }}>
      <small>© {new Date().getFullYear()} MyFoodApp</small>
    </footer>
  );
}
