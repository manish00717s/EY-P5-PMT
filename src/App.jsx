import React from "react";
import "./App.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">Project Manager</div>
      {/* <div className="nav-links">
        <a href="#features">Features</a>
        <a href="#pricing">Pricing</a>
        <a href="#contact">Contact</a>
      </div> */}
      <div className="nav-buttons">
        <button className="btn-outline">Log In</button>
        <button className="btn-primary1">Register</button>
      </div>
    </nav>
  );
};

const HeroSection = () => {
  return (
    <section className="hero-section">
      <h1>Make Your Projects</h1>
      <p>
      Our AI-powered platform is designed to help you seamlessly streamline project workflows, monitor progress, and foster effective team collaboration with ease.     
       </p>
      <a href="#features" className="btn-primary2">Let's Start</a>
    </section>
  );
};

const FeaturesSection = () => {
  return (
    <section id="features" className="features-section">
      <h2>Key Features</h2>
      <div className="features-grid">
        <div className="feature-card">
          <span className="feature-icon">📌</span>
          <h3>Task Management</h3>
          <p>Boost productivity by organizing and tracking tasks with ease.</p>
        </div>
        <div className="feature-card">
          <span className="feature-icon">👥</span>
          <h3>Group Synergy</h3>
          <p>Foster seamless communication and strengthen collaboration to enhance teamwork.</p>
        </div>
        <div className="feature-card">
          <span className="feature-icon">🤖</span>
          <h3>AI-Backed Intelligence</h3>
          <p>Gain actionable insights and accurate predictions with advanced smart analytics.</p>
        </div>
        {/* <div className="feature-card">
          <span className="feature-icon">🔔</span>
          <h3>Real-Time Notifications</h3>
          <p>Stay updated with instant alerts.</p>
        </div> */}
      </div>
      <button className="btn-primary2">Learn More</button>
    </section>

      

  );
};

const Footer = () => {
  return (
    <footer className="footer">
      <p>&copy; 2025 Project Management Tool. All Rights Reserved.</p>
      <div className="social-links">
        <a href="#">Facebook</a>
        <a href="#">Twitter</a>
        <a href="#">LinkedIn</a>
      </div>
    </footer>
  );
};

const App = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <Footer />
    </div>
  );
};

export default App;
