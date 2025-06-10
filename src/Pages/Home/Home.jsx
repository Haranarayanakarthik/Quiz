import React, { useState, useRef } from "react";
import { Button, Box, IconButton } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
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
      // Optional: handle file here
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

          <div className="textarea-wrapper">
            <textarea
              placeholder="Enter your prompt"
              className="input-box"
              value={prompt}
              onChange={handleChange}
              rows={4}
            />
            <IconButton
              color="primary"
              onClick={handleFileClick}
              className="add-btn-inside"
            >
              <AddIcon />
            </IconButton>
          </div>

          <input
            type="file"
            accept="*/*"
            ref={fileInputRef}
            onChange={handleFileChange}
            hidden
          />
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
