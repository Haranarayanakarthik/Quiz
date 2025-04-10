import React, { useState, useRef } from "react";
import { Button, Box } from "@mui/material";
import "./home.css";

const Home = () => {
  const [prompt, setPrompt] = useState("");
  const fileInputRef = useRef(null);

  const handleChange = (event) => {
    setPrompt(event.target.value);
  };

  const handleFileClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      console.log("Selected file:", file);
      // Optional: You can handle the file here (e.g., preview or upload)
    }
  };

  return (
    <div className="main">
      <Box className="home">
        <div className="content">
          <h1>So, what are we building today?</h1>
          <p style={{ opacity: "0.75" }}>
            Get started with a simple prompt to create your Quiz.
          </p>

          <textarea
            placeholder="Enter your prompt"
            className="input-box"
            value={prompt}
            onChange={handleChange}
            onClick={handleFileClick}
            rows={4}
            style={{
              width: "100%",
              resize: "none",
              whiteSpace: "pre-wrap",
              padding: "10px",
              fontSize: "1.5rem",
              cursor: "pointer",
            }}
          />

          <input
            type="file"
            accept="image/png, image/jpeg"
            ref={fileInputRef}
            onChange={handleFileChange}
            hidden
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
