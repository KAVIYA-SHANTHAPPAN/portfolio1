import './App.css';

function App() {
  return (
    <>
      <nav>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Technical Skills</a></li>
          <li><a href="#education">Education</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#soft-skills">Soft Skills</a></li>
          <li><a href="#hobbies">Hobbies</a></li>
          <li><a href="#projects">Projects</a></li>
        </ul>
      </nav>

      <section id="home">
        <h1>Welcome to My Portfolio</h1>
      </section>

      <section id="about">
        <h2>KAVIYA S</h2>
        <p>I am a computer science and engineering student. I am passionate about software development and am actively building skills through coursework, personal projects, and internships.</p>
      </section>

      <section id="skills">
        <h2>Technical Skills</h2>
        <ul>
          <li>HTML, CSS, JavaScript</li>
          <li>React, Angular</li>
          <li>Python, Java</li>
        </ul>
      </section>

      <section id="education">
        <h2>Education</h2>
        <ul>
          <li>B.E-CSE - Bharathiyar Institute of Engineering for Women (2021-2025)</li>
          <li>HSC - Vaani Vikas Matric Higher Secondary School (2020-2021)</li>
          <li>SSLC - Vaani Vikas Matric Higher Secondary School (2018-2019)</li>
        </ul>
      </section>

      <section id="experience">
        <h2>Experience</h2>
        <ul>
          <li>
            <h3>Internship at NSIC, Chennai</h3>
            <p>Duration: June 2024 - July 2024</p>
            <p>I focused on learning real-world applications of AI & ML.</p>
          </li>
          <li>
            <h3>Internship at Emiglitz Technology</h3>
            <p>Duration: July 2024 - August 2024</p>
            <p>I developed a DBMS project during my internship.</p>
          </li>
        </ul>
      </section>

      <section id="soft-skills">
        <h2>Soft Skills</h2>
        <ul>
          <li>Communication</li>
          <li>Teamwork</li>
          <li>Leadership</li>
        </ul>
      </section>

      <section id="hobbies">
        <h2>Hobbies</h2>
        <ul>
          <li>Reading</li>
          <li>Traveling</li>
          <li>Photography</li>
        </ul>
      </section>

      <section id="projects">
        <h2>Projects</h2>
        <ul>
          <li>Project 1: Portfolio Website</li>
          <li>Project 2: E-commerce App</li>
        </ul>
      </section>
    </>
  );
}

export default App;
