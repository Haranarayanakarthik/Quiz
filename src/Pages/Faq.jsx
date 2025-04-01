import React, { useState } from "react";

const Faq = () => {
  // State to manage the visibility of each FAQ answer
  const [activeIndex, setActiveIndex] = useState(null);

  // Function to toggle the visibility of the answer
  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div
      style={{
        maxWidth: "800px",
        margin: "0 auto",
        padding: "20px",
        height: "100vh",
      }}
    >
      <h2
        style={{
          textAlign: "center",
          paddingTop: "20px",
          paddingBottom: "20px",
        }}
      >
        Frequently Asked Questions
      </h2>

      {/* FAQ 1 */}
      <div style={{ marginBottom: "15px" }}>
        <button onClick={() => toggleAnswer(0)} style={buttonStyle}>
          How does the AI Quiz work?
        </button>
        {activeIndex === 0 && (
          <p style={answerStyle}>
            Our AI Quiz generates questions based on various topics and
            difficulty levels. Answer the questions, and the AI will analyze
            your performance to offer personalized feedback.
          </p>
        )}
      </div>

      {/* FAQ 2 */}
      <div style={{ marginBottom: "15px" }}>
        <button onClick={() => toggleAnswer(1)} style={buttonStyle}>
          Is the AI Quiz accurate?
        </button>
        {activeIndex === 1 && (
          <p style={answerStyle}>
            Yes, our AI Quiz is designed to evaluate your knowledge accurately.
            It adapts based on your responses and provides insightful results to
            help you improve.
          </p>
        )}
      </div>

      {/* FAQ 3 */}
      <div style={{ marginBottom: "15px" }}>
        <button onClick={() => toggleAnswer(2)} style={buttonStyle}>
          What topics are available in the quiz?
        </button>
        {activeIndex === 2 && (
          <p style={answerStyle}>
            We offer quizzes across multiple subjects like Science, Technology,
            History, and more. Stay tuned as we continuously add new topics to
            enhance your learning experience.
          </p>
        )}
      </div>

      {/* FAQ 4 */}
      <div style={{ marginBottom: "15px" }}>
        <button onClick={() => toggleAnswer(3)} style={buttonStyle}>
          Can I track my progress?
        </button>
        {activeIndex === 3 && (
          <p style={answerStyle}>
            Absolutely! After completing the quiz, you’ll receive detailed
            feedback and a score to track your progress over time.
          </p>
        )}
      </div>

      {/* FAQ 5 */}
      <div style={{ marginBottom: "15px" }}>
        <button onClick={() => toggleAnswer(4)} style={buttonStyle}>
          How can I take the quiz?
        </button>
        {activeIndex === 4 && (
          <p style={answerStyle}>
            Simply click on the 'Start Quiz' button, choose your desired topic
            and difficulty level, and begin answering questions. It’s that easy!
          </p>
        )}
      </div>
    </div>
  );
};

// Styling for the button
const buttonStyle = {
  width: "100%",
  padding: "15px",
  fontSize: "1.5rem",
  backgroundColor: "#333",
  color: "#fff",
  border: "none",
  textAlign: "left",
  cursor: "pointer",
  borderRadius: "5px",
  marginBottom: "10px",
  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
  transition: "background-color 0.3s",
};

// Styling for the answer text
const answerStyle = {
  backgroundColor: "#f7f7f7",
  padding: "10px",
  borderRadius: "5px",
  marginTop: "10px",
  color: "#333",
  fontSize: "14px",
};

export default Faq;
