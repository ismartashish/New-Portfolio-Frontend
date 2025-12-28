import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaReact,
  FaNodeJs,
  FaGithub,
  FaLinkedin,
  FaGitAlt,
  FaInstagram
} from "react-icons/fa";
import {
  SiMongodb,
  SiExpress,
  SiJavascript,
  SiPython,
  SiChatbot,
  SiMysql
} from "react-icons/si";
import { DiVisualstudio } from "react-icons/di";
import "./App.css";
import myPhoto from "./assets/photo.jpg";

/* ================= HEADER ================= */
function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="header-simple">
        <div className="header-left">
          <h1>Ashish Kumar Jha</h1>
          <p>MERN Stack Developer • AI Engineer • GenAI & Prompt Engineering</p>
        </div>

        <div className="hamburger-menu" onClick={() => setMenuOpen(!menuOpen)}>
          <div className="bar" />
          <div className="bar" />
          <div className="bar" />
        </div>
      </header>

      <nav className={`side-menu ${menuOpen ? "open" : ""}`}>
        {[
          "About",
          "Education",
          "Experience",
          "Skills",
          "Tools",
          "Projects",
          "Achievements",
          "Contact"
        ].map(item => (
          <a
            key={item}
            href={`#${item.toLowerCase()}`}
            onClick={() => setMenuOpen(false)}
          >
            {item}
          </a>
        ))}
      </nav>

      {menuOpen && <div className="overlay" onClick={() => setMenuOpen(false)} />}
    </>
  );
}

/* ================= CONTACT FORM ================= */
function ContactForm() {
  const [status, setStatus] = useState(null); 
  // null | loading | success | error

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");

    const formData = {
      name: e.target[0].value,
      email: e.target[1].value,
      message: e.target[2].value
    };

    try {
      const res = await fetch(
        "https://new-portfolio-backend-xdn4.onrender.com/api/contact",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData)
        }
      );

      const data = await res.json();

      if (res.ok && data.success) {
        setStatus("success");
        e.target.reset();
        setTimeout(() => setStatus(null), 4000);
      } else {
        setStatus("error");
      }
    } catch (err) {
      console.error("Contact error:", err);
      setStatus("error");
    }
  };

  return (
    <>
      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-row">
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
        </div>

        <textarea placeholder="Your Message" rows="5" required />

        <button type="submit" disabled={status === "loading"}>
          {status === "loading" ? "Sending..." : "Send Message"}
        </button>
      </form>

      {status === "success" && (
        <p className="success-message">✅ Message sent successfully!</p>
      )}

      {status === "error" && (
        <p className="error-message">❌ Sorry, unable to send message.</p>
      )}
    </>
  );
}

/* ================= MAIN APP ================= */
export default function App() {
  return (
    <>
      <Header />

      {/* ================= HERO ================= */}
      <section className="hero-modern">
        <motion.div
          className="hero-left"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="hero-badge">👋 Welcome to my world</p>

          <h1>
            I build <span>Web Apps</span>
            <br />& Automate Systems 💻
          </h1>

          <p className="hero-desc">
            MERN stack developer crafting scalable web apps with AI-powered
            automation 🚀
          </p>

          <div className="hero-tools">
            <span>🛠 Tools I use daily</span>
            <div className="tool-icons">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" />
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" />
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" />
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" />
              <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/linkedin.svg" />
              <img src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/openai.svg"/>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="hero-right"
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <img src={myPhoto} className="hero-photo main" alt="Profile" />
          <img src={myPhoto} className="hero-photo secondary" alt="Preview" />
        </motion.div>
      </section>

      {/* ================= ABOUT ================= */}
      <section id="about">
        <h2>About Me</h2>
        <p>
          Passionate MERN Stack Developer focused on building clean, scalable,
          and user-friendly applications.
        </p>
        <p>
          I blend full-stack development with AI & automation to create impactful
          digital solutions.
        </p>
      </section>

      {/* ================= EDUCATION ================= */}
      <section id="education">
        <h2>Education</h2>
        <div className="education-list">
          <div className="education-card">
            <h3>Class 10</h3>
            <p>Jagriti Vidyapeeth High School</p>
            <p>2021</p>
          </div>
          <div className="education-card">
            <h3>Class 12</h3>
            <p>Patha Bhavan, Kolkata</p>
            <p>2023</p>
          </div>
          <div className="education-card">
            <h3>B.Tech</h3>
            <p>UEM Jaipur</p>
            <p>Ongoing</p>
          </div>
        </div>
      </section>

      {/* ================= PROJECTS ================= */}
      <section id="projects">
        <h2>Projects</h2>
        <div className="project-list">
          <div className="project-card">
            <h3>To-Do App</h3>
            <p>MERN-based task manager with authentication & API backend.</p>
            <a href="https://whattoodoo.netlify.app/">Live</a>
          </div>
          <div className="project-card">
            <h3>Bharat Tradition</h3>
            <p>Showcasing India’s cultural heritage through a modern web app.</p>
            <a href="https://bharat-tradition.netlify.app/">Live</a>
          </div>
        </div>
      </section>

      {/* ================= CONTACT ================= */}
      <section id="contact">
        <h2>Contact Me</h2>
        <ContactForm />
        <p className="contact-email">
          Email: <a href="mailto:aj5249308@gmail.com">aj5249308@gmail.com</a>
        </p>
      </section>

      {/* ================= FOOTER ================= */}
      <footer>
        <div className="socials">
          <a href="https://github.com/ismartashish" target="_blank">
            <FaGithub />
          </a>
          <a href="https://linkedin.com" target="_blank">
            <FaLinkedin />
          </a>
          <a href="https://instagram.com/ismartashish2.0" target="_blank">
            <FaInstagram />
          </a>
        </div>
        <p> Ashish Kumar Jha</p>
      </footer>
    </>
  );
}
