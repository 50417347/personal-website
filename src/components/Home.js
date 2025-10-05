// components/Home.js
import React from "react";
import "./Home.css";

function Home() {
  return (
    <section className="home-section">
      <div className="home-content">
        <h1>Hi, I'm Absolom Muzambi</h1>
        <p className="intro">
          I am a Computer Scientist and Mathematician with multiple degrees, including a MSc in Computing with Distinction. Currently, I am pursuing a PhD in Computer Science at UNISA.
        </p>
        <p className="research-focus">
          My research focuses on developing AI generative models for Maskandi music, creating new songs using advanced machine learning techniques. I also have experience in computer vision, web scraping, and full-stack web development.
        </p>
        <a href="#contact" className="contact-button">Get in Touch</a>
      </div>
    </section>
  );
}

export default Home;
