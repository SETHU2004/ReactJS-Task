import React, { useState } from "react";

export default function SignIn() {
  const [signedIn, setSignedIn] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can add authentication logic here if needed
    setSignedIn(true);
  };

  return (
    <div style={{ padding: "40px", textAlign: "center" }}>
      {!signedIn ? (
        <>
          <h1 style={{ fontSize: "32px", fontWeight: 700, color: "#16a34a" }}>Sign In</h1>
          <form style={{ marginTop: "20px" }} onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Email"
              style={{ padding: "10px", marginBottom: "10px", width: "250px" }}
              required
            />
            <br />
            <input
              type="password"
              placeholder="Password"
              style={{ padding: "10px", marginBottom: "10px", width: "250px" }}
              required
            />
            <br />
            <button
              type="submit"
              style={{
                padding: "10px 20px",
                backgroundColor: "#16a34a",
                color: "#fff",
                border: "none",
                cursor: "pointer",
              }}
            >
              Sign In
            </button>
          </form>
        </>
      ) : (
        <div style={{ marginTop: 30, fontSize: 18, color: "#065f46" }}>
          ✅ Your account has been signed in successfully!
        </div>
      )}
    </div>
  );
}
