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
          <p>MERN Stack Developer • AI Engineer • GenAI & Prompt Engineering </p>
        </div>

        <div
          className="hamburger-menu"
          onClick={() => setMenuOpen(!menuOpen)}
        >
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

      {menuOpen && (
        <div className="overlay" onClick={() => setMenuOpen(false)} />
      )}
    </>
  );
}
function ContactForm() {
  const [sent, setSent] = React.useState(false);

 const handleSubmit = async (e) => {
  e.preventDefault();

  const formData = {
    name: e.target[0].value,
    email: e.target[1].value,
    message: e.target[2].value
  };

  try {
    const res = await fetch("https://new-portfolio-backend-xdn4.onrender.com/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData)
    });

    if (res.ok) {
      setSent(true);
      e.target.reset();
      setTimeout(() => setSent(false), 4000);
    }
  } catch (err) {
    console.error(err);
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

        <button type="submit">Send Message</button>
      </form>

      {sent && (
        <p className="success-message">
          ✅ Message sent successfully!
        </p>
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
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <p className="hero-badge">👋 Welcome to my world</p>

          <h1>
            I build <span>Web Apps</span>
            <br />
            & Automate the System 💻
          </h1>

          <p className="hero-desc">
            I’m a MERN stack developer focused on building clean, scalable,
            and user-friendly web applications with a touch of intelligence 🚀
          </p>

          <div className="hero-tools">
            <span>🛠 Tools I use daily</span>
            <div className="tool-icons">
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" />
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" />
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" />
              <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" />
            </div>
          </div>
        </motion.div>

        <motion.div
          className="hero-right"
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <motion.img
            src={myPhoto}
            alt="Profile"
            className="hero-photo main"
            initial={{ rotate: -12, scale: 0.9 }}
            animate={{ rotate: -6, scale: 1 }}
            transition={{ duration: 1 }}
          />

          <motion.img
            src={myPhoto}
            alt="Preview"
            className="hero-photo secondary"
            initial={{ rotate: 12, scale: 0.9 }}
            animate={{ rotate: 6, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          />
        </motion.div>
      </section>

      {/* ================= ABOUT ================= */}
      <motion.section
        id="about"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2>About Me</h2>
        <p>
          I'm a passionate MERN stack developer who enjoys building efficient,
          scalable, and user-friendly web applications.
        </p>
        <p>
          I aim to combine full-stack development with intelligent automation
          and AI to create impactful solutions.
        </p>
      </motion.section>

      {/* ================= EDUCATION ================= */}
      <motion.section
        id="education"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2>Education</h2>
        <div className="education-list">
          <div className="education-card">
            <h3>Class 10th</h3>
            <p>Jagriti Vidyapeeth High School</p>
            <p>2021</p>
          </div>
          <div className="education-card">
            <h3>Class 12th</h3>
            <p>Patha Bhavan, Kolkata</p>
            <p>2023</p>
          </div>
          <div className="education-card">
            <h3>B.Tech</h3>
            <p>UEM Jaipur</p>
            <p>Ongoing</p>
          </div>
        </div>
      </motion.section>

      {/* ================= EXPERIENCE ================= */}
      <motion.section
        id="experience"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2>Experience</h2>
        <div className="experience-list">
          <div className="experience-card">
            <h3>Personal Projects</h3>
            <p>
              Built MERN applications including portfolio websites, REST APIs,
              and real-time chat apps.
            </p>
          </div>
          <div className="experience-card">
            <h3>Internship (Upcoming)</h3>
            <p>Actively seeking real-world development opportunities.</p>
          </div>
        </div>
      </motion.section>

      {/* ================= SKILLS ================= */}
      <motion.section
        id="skills"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2>Skills</h2>
        <div className="skills-list">
          <div className="skill-card"><FaReact size={40} /><h3>React</h3></div>
          <div className="skill-card"><SiMongodb size={40} /><h3>MongoDB</h3></div>
          <div className="skill-card"><SiExpress size={40} /><h3>Express</h3></div>
          <div className="skill-card"><FaNodeJs size={40} /><h3>Node.js</h3></div>
          <div className="skill-card"><SiJavascript size={40} /><h3>JavaScript</h3></div>
          <div className="skill-card"><SiPython size={40} /><h3>Python</h3></div>
          <div className="skill-card"><SiMysql size={40} /><h3>SQL</h3></div>
        </div>
      </motion.section>

      {/* ================= TOOLS ================= */}
      <motion.section
        id="tools"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2>Tools</h2>
        <div className="tools-list">
          <div className="tool-card"><FaGitAlt size={40} /><h3>Git</h3></div>
          <div className="tool-card"><FaGithub size={40} /><h3>GitHub</h3></div>
          <div className="tool-card"><DiVisualstudio size={40} /><h3>VS Code</h3></div>
          <div className="tool-card"><SiChatbot size={40} /><h3>ChatGPT</h3></div>
        </div>
      </motion.section>

      {/* ================= PROJECTS ================= */}
      <motion.section
        id="projects"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2>Projects</h2>
        <div className="project-list">
          <div className="project-card">
            <h3>Portfolio Website</h3>
            <p>Personal portfolio built using React.</p>
            <a href="https://github.com/ismartashish/portfolio" target="_blank">
              View Code
            </a>
          </div>
          <div className="project-card">
            <h3>Chat Application</h3>
            <p>Real-time chat app using MERN & Socket.IO.</p>
            <a href="#">Ongoing</a>
          </div>
          <div className="project-card">
            <h3>To-Do</h3>
            <p>A MERN stack To-Do app that simplifies task tracking with an intuitive interface and efficient backend handling.</p>
            <a href="https://whattoodoo.netlify.app/">Check Out</a>
          </div>
          <div className="project-card">
            <h3>Bharat Tredition</h3>
            <p>Bharat Tradition is a digital initiative that brings India’s rich traditions and cultural values to the modern web world.</p>
            <a href="https://bharat-tradition.netlify.app/">Check Out</a>
          </div>

        </div>
      </motion.section>

      {/* ================= ACHIEVEMENTS ================= */}
      <motion.section
        id="achievements"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <h2>Achievements</h2>
        <div className="achievement-list">
          <div className="achievement-card">
            <h3>IEEE Research Paper</h3>
            <p>
              Published research paper on FPGA-based vehicle accident reporting
              system in IEEE Xplore.
            </p>
            <a
              href="https://ieeexplore.ieee.org/document/11101305"
              target="_blank"
            >
              View Publication
            </a>
          </div>
        </div>
      </motion.section>

      {/* ================= CONTACT ================= */}
<motion.section
  id="contact"
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
  viewport={{ once: true }}
>
  <h2>Contact Me</h2>

  <ContactForm />

  <p className="contact-email">
    Email: <a href="mailto:aj5249308@gmail.com">aj5249308@gmail.com</a>
  </p>
</motion.section>

      {/* ================= FOOTER ================= */}
      <footer>
        <div className="socials">
          <a href="https://github.com/ismartashish" target="_blank"><FaGithub /></a>
          <a href="https://linkedin.com" target="_blank"><FaLinkedin /></a>
          <a href="https://instagram.com/ismartashish2.0" target="_blank"><FaInstagram /></a>
        </div>
        <p>© 2025 Ashish Kumar Jha | MERN Developer</p>
      </footer>
    </>
  );
}
