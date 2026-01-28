import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home.jsx";
import About from "./Pages/About/About.jsx";
import Faq from "./Pages/Faq.jsx";
import Nclearavbar from "./Pages/Navabr/navbar.jsx";
import SignIn from "./Pages/Login/SIgnIn.jsx";
import SignUp from "./Pages/Signup/signup.jsx";
import Quizes from "./components/quizes.jsx";
import Dashboard from "./components/dashboard.jsx";
import Footer from "./Pages/Footer/footer.jsx";
import Contact from "./Pages/contact.jsx";

const App = () => {
  return (
    <>
    {/* Routes for this project */}
      <Nclearavbar />
      <div style={styles.mainContent}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/Faq" element={<Faq />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/quizzes" element={<Quizes />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
};

const styles = {
  mainContent: {
    minHeight: "calc(100vh - 80px)", 
    paddingBottom: "0px", 
  },
};

export default App;

