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

          <h2>BCA Student &amp; Aspiring Data Analyst</h2>

          <p>
            I am a BCA student and aspiring Data Analyst with an interest in data analysis, 
            databases, and problem-solving. I enjoy working with data to identify patterns, 
            generate insights, and support data-driven decision-making. I am passionate about
            learning new technologies, developing my analytical skills, and applying them through
            practical projects.

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
          I am currently pursuing my Bachelor of Computer Applications (BCA) 
          at B.M.S College for Women. I am developing my skills in programming, 
          databases, and data analysis, with a growing interest in data analytics 
          and data-driven decision-making.

        </p>

        <p className="about-text">
          I enjoy working on practical projects that help me strengthen 
          my analytical and problem-solving skills. I am always interested 
          in learning new data analysis tools and technologies and gaining practical
          experience in working with data.

        </p>
      </section>

      {/* Skills */}
      <section id="skills" className="section">
        <p className="section-title">MY SKILLS</p>
        <h2>Skills &amp; Technologies</h2>
<div className="skills-container">
  <div className="skill">Python</div>
  <div className="skill">SQL</div>
  <div className="skill">Excel</div>
  <div className="skill">Data Analysis</div>
  <div className="skill">Data Visualization</div>
  <div className="skill">JavaScript</div>
  <div className="skill">HTML & CSS</div>
  <div className="skill">GitHub</div>
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
              A simple word-guessing game developed using Python. This project
              helped me strengthen my programming fundamentals, logical
              thinking, and problem-solving skills.
            </p>
            <span>Python</span>
          </div>

          <div className="project-card">
            <h3>Job Application Tracker</h3>
            <p>
              A web-based application designed to help users organize and
              track their job applications, application status, and related
              information in one place.
            </p>
            <span>HTML • CSS • JavaScript</span>
          </div>

          <div className="project-card">
            <h3>Personal Portfolio Website</h3>
            <p>
              A responsive portfolio website created to showcase my skills, 
              education, projects, and contact information. This project helped
              me improve my technical, problem-solving, and web development skills
              while gaining practical experience in presenting projects and information effectively.

            </p>
            <span>React • HTML • CSS • JavaScript</span>
          </div>

        </div>
      </section>

      {/* Education */}
<section id="education" className="section">
  <p className="section-title">EDUCATION</p>
  <h2>My Education</h2>

  {/* BCA */}
  <div className="education-card">
    <h3>Bachelor of Computer Applications (BCA)</h3>

    <p className="college-name">
      B.M.S College for Women, Bengaluru
    </p>

    <p className="education-year">
      Expected Graduation: 2027
    </p>

    <p>
      Currently pursuing BCA with an interest in data analysis, 
      databases, programming, and computer applications. I am developing 
      my analytical and technical skills through practical projects, data-driven
      problem-solving, and continuous learning.

    </p>
  </div>

  {/* PUC */}
  <div className="education-card">
    <h3>Pre-University Course (PUC)</h3>

    <p className="college-name">
      BMS PU College for Women, Bengaluru
    </p>

    <p className="education-year">
      Completed: 2024
    </p>

    <p>
      <p>
  Completed my Pre-University education and developed a strong foundation
  in academics and general knowledge.
</p>
    </p>
  </div>

  {/* SSLC */}
  <div className="education-card">
    <h3>SSLC (10th Grade)</h3>

    <p className="college-name">
      Excellent English High School, Bengaluru
    </p>

    <p className="education-year">
      Completed: 2022
    </p>

    <p>
      <p>
  Completed my secondary education with a strong foundation in academics.
</p>
    </p>
  </div>
</section>

      {/* Resume */}
      <section id="resume" className="section">
        <p className="section-title">MY RESUME</p>
        <h2>Resume</h2>

        <p>
          View my resume to learn more about my education, skills, projects,
          and experience.
        </p>

        <div className="hero-buttons">
  <a
    className="btn"
    href="/resume.pdf"
    target="_blank"
    rel="noopener noreferrer"
  >
    View Resume
  </a>

  <a
    className="btn secondary"
    href="/resume.pdf"
    download
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
          I am currently looking for Data Analyst internship opportunities
          where I can apply my analytical and technical skills, work with 
          real-world data, and gain practical experience while continuing 
          to learn and grow professionally.

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

      {/* Footer */}
      <footer>
        <p>© 2026 Anitha N. All Rights Reserved.</p>
      </footer>

    </div>
  )
}

export default App