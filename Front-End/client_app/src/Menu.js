// Front-End/client_app/src/Menu.js
import React, { useEffect, useState } from "react";
import axios from "axios";

const Menu = () => {
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    const fetchMenu = async () => {
      try {
        const response = await axios.get("http://localhost:8000/menu");
        setMenuItems(response.data); // Ensure this is an array
      } catch (error) {
        console.error("Error fetching the menu:", error);
      }
    };

    fetchMenu();
  }, []);

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Our Menu</h2>
      <ul>
        {Array.isArray(menuItems) && menuItems.length > 0 ? (
          menuItems.map((item, index) => (
            <li key={index}>
              {item.name} - {item.price}
            </li>
          ))
        ) : (
          <li>No menu items available.</li>
        )}
      </ul>
    </div>
  );
};

const styles = {
  container: {
    padding: "20px",
  },
  title: {
    fontSize: "2rem",
    marginBottom: "20px",
  },
};

export default Menu;
