import React from "react";

const containerStyle = {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  backgroundColor: "#272525",
};

const firstDiv = {
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  height: "20vh",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  width: "100%",
};

const heading = {
  color: "white",
  fontSize: "34pt",
  paddingBottom: "15px",
};

const gridContainer = {
  display: "grid",
  gridTemplateColumns: "repeat(2, 1fr)",
  gap: "2.5rem",
  padding: "30px",
  width: "80%",
  maxWidth: "1200px",
};

/* Responsive styles */
const responsiveStyles = `
  @media (max-width: 768px) {
    .grid-container {
      grid-template-columns: 1fr; /* 1 item per row for smaller screens */
    }
  }
`;

const About = () => {
  return (
    <div style={containerStyle}>
      <style>{responsiveStyles}</style>
      <div style={firstDiv}>
        <h1 style={heading}>About Us</h1>
      </div>
      <div className="grid-container" style={gridContainer}>
        <div>
          <h2>Welcome to AI Quiz Generator</h2>
          <p>
            AI Quiz Generator transforms the way quizzes are created by
            leveraging artificial intelligence to generate engaging,
            interactive, and customized quizzes instantly.
          </p>
        </div>
        <div>
          <h2>Our Story</h2>
          <p>
            We aim to revolutionize the quiz-making experience by using AI to
            simplify and enhance the process. Our intelligent system generates
            relevant questions based on user input.
          </p>
        </div>
        <div>
          <h2>What We Offer</h2>
          <p>
            AI Quiz Generator provides various quiz formats, including
            multiple-choice, true/false, and fill-in-the-blanks.
          </p>
        </div>
        <div>
          <h2>Why Choose Us</h2>
          <p>
            Our platform is designed for students, teachers, and professionals
            who need quick and reliable quizzes.
          </p>
        </div>
        <div>
          <h2>Get Started Today</h2>
          <p>
            Start by entering a simple prompt, and our AI will generate a
            complete quiz for you, making learning and assessments seamless.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
