import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const { pathname } = useLocation();

  const linkStyle = (p) => ({
    marginRight: 20,
    fontWeight: pathname === p ? 700 : 500,
    textDecoration: "none",
    color: "#0f172a",
  });

  return (
    <nav
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "12px 20px",
        borderBottom: "1px solid #e5e7eb",
        background: "#fff",
        position: "sticky",
        top: 0,
        zIndex: 10,
      }}
    >
      <Link
        to="/"
        style={{
          fontWeight: 800,
          fontSize: 25,
          color: "#16a34a",
          textDecoration: "none",
        }}
      >
        DeliverEat
      </Link>

      <div>
        <Link to="/" style={linkStyle("/")}>Home</Link>
        <Link to="/offers" style={linkStyle("/offers")}>Offers</Link>
        <Link to="/help" style={linkStyle("/help")}>Help</Link>
        <Link to="/cart" style={linkStyle("/cart")}>Cart</Link>
        <Link to="/orders" style={linkStyle("/orders")}>My Orders</Link>
        <Link to="/signin" style={linkStyle("/signin")}>Sign In</Link>
      </div>
    </nav>
  );
}
