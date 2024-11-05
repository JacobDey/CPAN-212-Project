// Front-End/client_app/src/App.js
import React from "react";
import { Route, Routes, Link } from "react-router-dom";
import Menu from "./Menu"; // Import the Menu component
import Home from "./Home";

export default function App() {
  return (
    <div style={styles.container}>
      <Home /> {/* Your home component */}
      <div style={styles.linkContainer}>
        <p>
          <Link to="/" style={styles.link}>Home</Link>
        </p>
        <p>
          <Link to="/menu" style={styles.link}>Check Out Our Menu</Link>
        </p>
        <p>
          <Link to="/newOrder" style={styles.link}>Place an Order</Link>
        </p>
        <p>
          <Link to="/allOrders" style={styles.link}>View Order History</Link>
        </p>
      </div>

      {/* Define the routes here */}
      <Routes>
        
        <Route path="/menu" element={<Menu />} />
        {/* Add routes for newOrder and allOrders as needed */}
      </Routes>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "100vh",
    backgroundColor: "#f8f8ff",
    textAlign: "center",
    border: "7px double black"
  },
  title: {
    fontSize: "2.5rem",
    fontWeight: "bold",
    marginBottom: "20px",
  },
  content: {
    fontSize: "1.2rem",
    marginBottom: "20px",
  },
  linkContainer: {
    marginTop: "20px",
  },
  link: {
    color: "#007BFF",
    textDecoration: "none",
    fontSize: "1.7rem",
    margin: "6px 0",
  },
};
