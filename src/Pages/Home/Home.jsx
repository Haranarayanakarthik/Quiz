import React, { useState, useRef } from "react";
import { Button, Box, IconButton, CircularProgress } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { GoogleGenerativeAI } from "@google/generative-ai";
import "./home.css";

// Initialize Gemini API
const genAI = new GoogleGenerativeAI("AIzaSyAsnHL0KOrnmuP4uP9Uc4w4gG0a4lpIZOU");

const Home = () => {
  const [prompt, setPrompt] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);
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
    }
  };

  const handleGenerate = async () => {
    if (!prompt.trim()) return;

    setLoading(true);
    setResponse("");

    try {
      const model = genAI.getGenerativeModel({ model: "gemini-pro" });
      const result = await model.generateContent(prompt);
      const text = await result.response.text();
      setResponse(text);
    } catch (error) {
      console.error("Error generating content:", error);
      setResponse("Something went wrong while generating the response.");
    } finally {
      setLoading(false);
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

          <Button
            variant="contained"
            color="primary"
            className="generate-btn"
            onClick={handleGenerate}
            disabled={loading}
          >
            {loading ? (
              <CircularProgress size={24} color="inherit" />
            ) : (
              "Generate"
            )}
          </Button>

          {response && (
            <div className="output-box">
              <h3>AI Response:</h3>
              <p>{response}</p>
            </div>
          )}
        </div>
      </Box>
    </div>
  );
};

export default Home;
