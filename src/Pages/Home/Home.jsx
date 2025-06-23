import React, { useState, useRef } from "react";
import { Button, Box, IconButton, CircularProgress } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import "./home.css";

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
      // You can handle file upload or processing here if needed
    }
  };

  const handleGenerate = async () => {
    if (!prompt.trim()) return;

    setLoading(true);
    setResponse("");

    try {
      const cohereResponse = await fetch("https://api.cohere.ai/v1/generate", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${import.meta.env.VITE_COHERE_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "command", // Use the appropriate model
          prompt: prompt,
          max_tokens: 300,
          temperature: 0.7,
          k: 0,
          stop_sequences: [],
          return_likelihoods: "NONE",
        }),
      });

      const data = await cohereResponse.json();
      console.log("Cohere API Response:", data);

      if (data.generations && data.generations.length > 0) {
        // Clean and format the response before setting it
        const rawText = data.generations[0].text;
        // Normalize line breaks and trim
        const neatText = rawText
          .replace(/\r\n/g, "\n") // Normalize Windows CRLF to LF
          .replace(/\n{2,}/g, "\n\n") // Collapse multiple blank lines
          .trim();
        setResponse(neatText);
      } else {
        setResponse("❌ Still no content. Try a simpler or different prompt.");
      }
    } catch (error) {
      console.error("Cohere API Error:", error);
      setResponse("❌ API Error: " + error.message);
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
              aria-label="upload file"
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
              <div className="formatted-response">
                {response.split("\n\n").map((paragraph, idx) => (
                  <p key={idx}>{paragraph.trim()}</p>
                ))}
              </div>
            </div>
          )}
        </div>
      </Box>
    </div>
  );
};

export default Home;
