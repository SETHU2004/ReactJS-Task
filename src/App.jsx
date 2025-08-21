import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

// Pages
import Home from "./pages/Home";
import Offers from "./pages/Offers";
import Help from "./pages/Help";
import Cart from "./pages/Cart";
import SignIn from "./pages/SignIn";
import OrderList from "./pages/OrderList";
import OrderForm from "./pages/OrderForm";

function App() {
  return (
    <Router>
      <Navbar />
      <div style={{ minHeight: "calc(100vh - 120px)" }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/offers" element={<Offers />} />
          <Route path="/help" element={<Help />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/orders" element={<OrderList />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/order" element={<OrderForm />} /> {/* Add this */}
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
