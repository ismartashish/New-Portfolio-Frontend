import React, { useState } from "react";
import {
  FaReact,
  FaNodeJs,
  FaGithub,
  FaLinkedin,
  FaGitAlt
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

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="header-simple">
        <div className="header-left">
          <h1>Ashish Kumar Jha</h1>
          <p>☎️ 8797093015</p>
        </div>
        <div
          className="hamburger-menu"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          role="button"
          tabIndex={0}
          onKeyPress={() => setMenuOpen(!menuOpen)}
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
          "Interests",
          "Location",
          "Skills",
          "Tools",
          "Projects",
          "Contact"
        ].map(item => (
          <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setMenuOpen(false)}>
            {item}
          </a>
        ))}
      </nav>
      {menuOpen && <div className="overlay" onClick={() => setMenuOpen(false)} />}
    </>
  );
}

const App = () => {
  return (
    <>
      <Header />

      <img src={myPhoto} alt="My Photo" className="profile-photo" />

      {/* Sections follow */}
      <section id="about" className="about">
        <h2>About Me</h2>
        <p>
          I'm a passionate MERN (MongoDB, Express, React, Node.js) stack
          developer who loves building creative, efficient, and scalable web
          applications. My curiosity drives me to constantly learn and explore
          the world of Artificial Intelligence and modern technologies. 🚀
        </p>
        <p style={{ marginTop: "1.2rem", fontWeight: "600" }}>
          I aim to combine full-stack development with intelligent automation
          and machine learning to create innovative solutions that make a
          difference. 💡
        </p>
      </section>

      <section id="education" className="education">
        <h2>Education</h2>
        <div className="education-list">
          <div className="education-card">
            <h3>Class 10th</h3>
            <p>Jagriti Vidyapeeth High School, Kolkata</p>
            <p>Passed in 2021</p>
          </div>
          <div className="education-card">
            <h3>Class 12th</h3>
            <p>Patha Bhavan, Kolkata</p>
            <p>Passed in 2023</p>
          </div>
          <div className="education-card">
            <h3>Bachelor of Technology (B.Tech)</h3>
            <p>University of Engineering and Management, Jaipur</p>
            <p>Currently Pursuing</p>
          </div>
        </div>
      </section>

      <section id="experience" className="experience">
        <h2>Experience</h2>
        <div className="experience-list">
          <div className="experience-card">
            <h3>Personal Projects</h3>
            <p>
              Worked on several full-stack web apps including a portfolio
              website, chat application, and RESTful APIs using MERN stack.
            </p>
          </div>
          <div className="experience-card">
            <h3>Internship (Upcoming)</h3>
            <p>
              Seeking opportunities to contribute to real-world projects and
              gain hands-on experience in full-stack or AI-based development.
            </p>
          </div>
        </div>
      </section>

      <section id="interests" className="interests">
        <h2>Interests</h2>
        <div className="interests-list">
          <div className="interest-card">💻 Web Development</div>
          <div className="interest-card">🤖 Artificial Intelligence</div>
          <div className="interest-card">🧩 Problem Solving</div>
          <div className="interest-card">📚 Continuous Learning</div>
          <div className="interest-card">🎨 UI/UX Design</div>
        </div>
      </section>

      <section id="location" className="location">
        <h2>Location</h2>
        <p>📍 Currently based in Jaipur, Rajasthan, India</p>
        <p>Open to relocation and remote opportunities across India and abroad.</p>
      </section>

      <section id="skills" className="skills">
        <h2>Skills</h2>
        <div className="skills-list">
          <div className="skill-card">
            <FaReact size={40} color="#61DBFB" />
            <h3>React.js</h3>
          </div>
          <div className="skill-card">
            <SiMongodb size={40} color="#4DB33D" />
            <h3>MongoDB</h3>
          </div>
          <div className="skill-card">
            <SiExpress size={40} color="#000000" />
            <h3>Express.js</h3>
          </div>
          <div className="skill-card">
            <FaNodeJs size={40} color="#68A063" />
            <h3>Node.js</h3>
          </div>
          <div className="skill-card">
            <SiJavascript size={40} color="#F7DF1E" />
            <h3>JavaScript</h3>
          </div>
          <div className="skill-card">
            <SiPython size={40} color="#3776AB" />
            <h3>Python</h3>
          </div>
          <div className="skill-card">
            <SiMysql size={40} color="#00758F" />
            <h3>SQL Database</h3>
          </div>
        </div>
      </section>

      <section id="tools" className="tools">
        <h2>Tools</h2>
        <div className="tools-list">
          <div className="tool-card">
            <FaGitAlt size={40} color="#F1502F" />
            <h3>Git</h3>
          </div>
          <div className="tool-card">
            <FaGithub size={40} color="#181717" />
            <h3>GitHub</h3>
          </div>
          <div className="tool-card">
            <DiVisualstudio size={40} color="#007ACC" />
            <h3>VS Code</h3>
          </div>
          <div className="tool-card">
            <SiChatbot size={40} color="#10A37F" />
            <h3>ChatGPT</h3>
          </div>
        </div>
      </section>

      <section id="projects" className="projects">
        <h2>Projects</h2>
        <div className="project-list">
          <div className="project-card">
            <h3>Portfolio Website</h3>
            <p>
              A personal portfolio built using React and Node.js showcasing my
              skills and achievements.
            </p>
            <a href="#">View Code</a>
          </div>
          <div className="project-card">
            <h3>Chat App</h3>
            <p>
              A real-time chat application built with MERN stack and Socket.IO.
            </p>
            <a href="#">View Code</a>
          </div>
        </div>
      </section>

      <section id="contact" className="contact">
        <h2>Contact Me</h2>
        <form>
          <input type="text" placeholder="Your Name" required />
          <input type="email" placeholder="Your Email" required />
          <textarea placeholder="Your Message" rows="4" required></textarea>
          <button type="submit">Send</button>
        </form>
        <p style={{ marginTop: "1rem" }}>
          Email: <a href="mailto:aj5249308@gmail.com" className="contact-email">aj5249308@gmail.com</a>
        </p>
      </section>

      <footer>
        <div className="socials">
          <a href="https://github.com/ismartashish" target="_blank" rel="noopener noreferrer">
            <FaGithub size={25} />
          </a>
          <a
            href="https://www.linkedin.com/in/ashish-kumar-jha"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin size={25} />
          </a>
        </div>
        <p>© 2025 Ashish Kumar Jha | Built with ❤️ using MERN</p>
      </footer>
    </>
  );
};

export default App;
