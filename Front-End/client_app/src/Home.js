// Front-End/client_app/src/Home.js
import React, { useEffect, useState } from "react";
import axios from "axios"; // Import axios for API calls

const Home = () => {
  const [homeContent, setHomeContent] = useState({});

  // Fetch home page content from the Express server
  const fetchHomeContent = async () => {
    try {
      const response = await axios.get("http://localhost:8000/");
      setHomeContent(response.data); // Update state with fetched home content
    } catch (error) {
      console.error("Error fetching home content:", error);
    }
  };

  useEffect(() => {
    fetchHomeContent(); // Call fetchHomeContent on component mount
  }, []);

  return (
    <div style={homeStyles.container}>
      <h1 style={homeStyles.title}>{homeContent.title}</h1>
      <h2 style={homeStyles.subtitle}>{homeContent.subtitle}</h2>
      <p style={homeStyles.description}>{homeContent.description}</p>
    </div>
  );
};

const homeStyles = {
  container: {
    textAlign: "center",
    marginBottom: "20px",
  },
  title: {
    fontSize: "2.5rem",
    fontWeight: "bold",
    marginBottom: "10px",
  },
  subtitle: {
    fontSize: "1.5rem",
    marginBottom: "10px",
  },
  description: {
    fontSize: "1.2rem",
    color: "#555",
  },
};

export default Home;
