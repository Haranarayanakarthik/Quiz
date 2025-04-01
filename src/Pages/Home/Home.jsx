import React, { useState } from "react";
import { Button, Box } from "@mui/material";
import "./home.css";

const Home = () => {
  const [prompt, setPrompt] = useState("");

  const handleChange = (event) => {
    setPrompt(event.target.value);
  };

  return (
    <div className="main">
      <Box className="home">
        <div className="content">
          <h1>So, what are we building today?</h1>
          <p style={{opacity:"0.75"}}>Get started with a simple prompt to create your Quiz.</p>

          <textarea
            placeholder="Enter your prompt"
            className="input-box"
            value={prompt}
            onChange={handleChange}
            rows={4} // Adjust this as needed
            style={{
              width: "100%",
              resize: "none", // Prevents manual resizing
              whiteSpace: "pre-wrap", // Preserves line breaks
              padding: "10px",
              fontSize: "1.5rem",
            }}
          />
          <br />
          <br />
          <Button variant="contained" color="primary" className="generate-btn">
            Generate
          </Button>
        </div>
      </Box>
    </div>
  );
};

export default Home;
