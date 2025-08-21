import React from "react";

export default function Help() {
  return (
    <div style={{ padding: 20, maxWidth: 900, margin: "0 auto" }}>
      <h1 style={{ fontSize: 28, marginBottom: 16 }}>🆘 Help & Support</h1>

      <div style={{ marginBottom: 20 }}>
        <h2 style={{ fontSize: 22, marginBottom: 8, color: "#16a34a" }}>Ordering</h2>
        <p>
          To place an order, go to the Home page, choose a dish, select quantity, 
          and click "Order". You can adjust the quantity before placing your order.
        </p>
      </div>

      <div style={{ marginBottom: 20 }}>
        <h2 style={{ fontSize: 22, marginBottom: 8, color: "#16a34a" }}>Payment</h2>
        <p>
          We accept all major payment methods, including credit/debit cards and UPI.
          Your payment details are securely processed and never stored.
        </p>
      </div>

      <div style={{ marginBottom: 20 }}>
        <h2 style={{ fontSize: 22, marginBottom: 8, color: "#16a34a" }}>Order Tracking</h2>
        <p>
          You can view all your placed orders by clicking on "My Orders" in the Navbar. 
          You will see the status, quantity, and total price for each order.
        </p>
      </div>

      <div style={{ marginBottom: 20 }}>
        <h2 style={{ fontSize: 22, marginBottom: 8, color: "#16a34a" }}>Contact Us</h2>
        <p>
          For any issues or queries, you can contact our support team at 
          <a href="mailto:support@myfoodapp.com"> support@myfoodapp.com</a>.
        </p>
      </div>

      <div style={{ marginBottom: 20 }}>
        <h2 style={{ fontSize: 22, marginBottom: 8, color: "#16a34a" }}>FAQs</h2>
        <ul>
          <li>How long does delivery take? – Usually within 30–45 minutes.</li>
          <li>Can I cancel an order? – Yes, before it’s marked as dispatched.</li>
          <li>Do you offer refunds? – Refunds are processed if the order is not delivered.</li>
        </ul>
      </div>
    </div>
  );
}
