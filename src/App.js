import React from "react";
import "./App.css";
import profileImage from "./assets/profile.jpeg"; // replace with your own photo

function App() {
  return (
    <div className="container">
      {/* Column 1 – Personal Info */}
      <div className="column personal-info">
        <img src={profileImage} alt="Absolom Muzambi" className="profile-pic" />
        <h1>Absolom Muzambi</h1>
        <p>
          PhD Candidate in Computer Science (UNISA)
          <br />
          MSc Computing (UNISA, with Distinction)
        </p>
        <p>
          I’m passionate about Artificial Intelligence, Computer Vision, and Music Technology. Currently, I’m developing an AI generative model for <b>Maskandi music</b> that can create new songs automatically.
        </p>
      </div>

      {/* Column 2 – Academic Background */}
      <div className="column academic-info">
        <h2>Academic Background</h2>
        <ul>
          <li>BSc Hons Mathematics (Zimbabwe)</li>
          <li>BSc Computing (UNISA)</li>
          <li>BSc Hons Computing (UNISA)</li>
          <li>MSc Computing (UNISA) – Distinction</li>
          <li>Currently pursuing PhD in Computer Science (UNISA)</li>
        </ul>
        <p>
          My Master’s research focused on <b>Computer Vision</b>, specifically South African Sign Language recognition and translation into Setswana.
        </p>
      </div>

      {/* Column 3 – Experience */}
      <div className="column experience-info">
        <h2>Experience & Skills</h2>
        <ul>
          <li>Advanced Python Programming</li>
          <li>Machine Learning & Deep Learning</li>
          <li>Artificial Intelligence Research</li>
          <li>Web Scraping & Automation</li>
          <li>Full-Stack Web Development (React, JavaScript, HTML, CSS)</li>
        </ul>
        <p>
          I’m passionate about creating intelligent systems that solve real-world problems and integrating AI with creative fields such as music and language.
        </p>

        {/* 👇 Contact Section */}
        <div className="contact-section">
          <h2>Contact</h2>
          <p>Email: <a href="mailto:absolommuzambi@gmail.com">absolommuzambi@gmail.com</a></p>
          <p>
            <a href="https://www.linkedin.com/in/your-linkedin" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a> |{" "}
            <a href="https://github.com/50417347" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
