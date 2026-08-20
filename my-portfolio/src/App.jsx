import './App.css'

function App() {
  return (
    <div className="portfolio">

      {/* Navigation */}
      <nav className="navbar">
        <h2 className="logo">Portfolio</h2>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#education">Education</a>
          <a href="#resume">Resume</a>
          <a href="#contact">Contact</a>  
        </div>
      </nav>

      {/* Home */}
      <section id="home" className="hero-section">
        <div className="hero-text">
          <p className="hello">Hello, I'm</p>

          <h1>Anitha N</h1>

          <h2>BCA Student & Aspiring Backend Developer</h2>

          <p>
  <p>
  I am a BCA student and aspiring backend developer with an interest in
  programming, databases, and web development. I enjoy building practical
  projects, learning new technologies, and improving my problem-solving skills.
</p>
</p>

          <div className="hero-buttons">
            <a href="#projects" className="btn">
              View My Projects
            </a>

            <a href="#contact" className="btn secondary">
              Contact Me
            </a>
          </div>
        </div>

        <div className="hero-card">
  <div className="profile-circle">
    <img src="/Anitha.jpeg" alt="Anitha N" />
  </div>
</div>
      </section>

      {/* About */}
      <section id="about" className="section">
        <p className="section-title">ABOUT ME</p>
        <h2>Who I Am</h2>

        <p className="about-text">
  <p>
  I am currently pursuing my Bachelor of Computer Applications (BCA) at
  B.M.S College for Women. I am developing my skills in programming,
  databases, and web development, with a growing interest in backend
  development.
</p>

<p>
  I enjoy working on practical projects that help me strengthen my
  technical and problem-solving skills. I am always interested in
  learning new technologies and gaining practical experience.
</p>
</p>
      </section>

      {/* Skills */}
      <section id="skills" className="section">
        <p className="section-title">MY SKILLS</p>
        <h2>Skills & Technologies</h2>

        <div className="skills-container">
  <div className="skill">HTML</div>
  <div className="skill">CSS</div>
  <div className="skill">JavaScript</div>
  <div className="skill">React</div>
  <div className="skill">Node.js</div>
  <div className="skill">Java Basics</div>
  <div className="skill">SQL Basics</div>
  <div className="skill">Git & GitHub</div>
</div>
      </section>

      {/* Projects */}
<section id="projects" className="section">
  <p className="section-title">MY WORK</p>
  <h2>Projects</h2>

  <div className="projects-container">

    <div className="project-card">
      <h3>Hangman Game</h3>
      <p>
       <p>
  A simple word-guessing game developed using Python. This project helped me
  strengthen my programming fundamentals, logical thinking, and problem-solving
  skills.
</p>
      </p>
      <span>Python</span>
    </div>

    <div className="project-card">
  <h3>Job Application Tracker</h3>
  <p>
    <p>
  A web-based application designed to help users organize and track their job
  applications, application status, and related information in one place.
</p>
  </p>
  <span>HTML • CSS • JavaScript</span>
</div>

    <div className="project-card">
      <h3>Personal Portfolio Website</h3>
      <p>
        <p>
  A responsive portfolio website created to showcase my skills, education,
  projects, and contact information. This project helped me improve my
  frontend development and web design skills.
</p>
      </p>
      <span>React • HTML • CSS • JavaScript</span>
    </div>

  </div>
</section>

      {/* Footer */}
            {/* Education */}
      <section id="education" className="section">
        <p className="section-title">EDUCATION</p>
        <h2>My Education</h2>

        <div className="education-card">
          <h3>Bachelor of Computer Applications (BCA)</h3>

          <p className="college-name">
            B.M.S College for Women
          </p>

          <p className="education-year">
            Expected Graduation: 2027
          </p>

          <p>
<p>
  Currently pursuing BCA with a focus on programming, web development,
  databases, and computer applications. I am building my technical skills
  through practical projects and continuous learning.
</p>          </p>
        </div>
      </section>
            {/* Resume */}
      <section id="resume" className="section">
        <p className="section-title">MY RESUME</p>
        <h2>Resume</h2>

        <p>
          View my resume to learn more about my education, skills,
          projects, and experience.
        </p>

        <div className="hero-buttons">
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="btn"
          >
            View Resume
          </a>

          <a
            href="/resume.pdf"
            download
            className="btn secondary"
          >
            Download Resume
          </a>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="section contact-section">
        <p className="section-title">CONTACT</p>
        <h2>Let's Connect</h2>

        <p>
          <p>
  I am currently looking for internship opportunities where I can learn,
  apply my technical skills, and gain practical experience.
</p>
        </p>

        <div className="contact-links">
          <a href="mailto:anithanarayan012006@gmail.com">

            📧 Email
          </a>

          <a
  href="https://github.com/anithanarayan012006-cmyk"
  target="_blank"
  rel="noopener noreferrer"
>
  💻 GitHub
</a>

          <a
  href="https://www.linkedin.com/in/anitha-n-6b4191424/"
  target="_blank"
  rel="noopener noreferrer"
>
  🔗 LinkedIn
</a>
        </div>
      </section>
      <footer>
        <p>© 2026 Anitha N. All Rights Reserved.</p>
      </footer>

    </div>
  )
}

export default App