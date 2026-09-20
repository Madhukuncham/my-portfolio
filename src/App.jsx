import React from "react";
import "./App.css";

function App() {
  return (
    <div className="site">

      {/* ================= NAVBAR ================= */}

      <nav className="navbar">
        <div className="nav-inner">

          <a href="#home" className="brand">
            MK<span>.</span>
          </a>

          <div className="nav-links">
            <a href="#work">Work</a>
            <a href="#skills">Skills</a>
            <a href="#contact">Contact</a>
          </div>

          <a
            href="/Resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="resume-link"
          >
            Resume ↗
          </a>

        </div>
      </nav>


      {/* ================= MAIN ================= */}

      <main id="home" className="container">


        {/* =====================================================
            HERO
        ===================================================== */}

        <section className="hero-section">


          {/* PROFILE */}

          <article className="profile-area">

            <div className="profile-top">

              <span className="available">
                <i></i>
                SOFTWARE ENGINEER
              </span>

              <span className="location">
                INDIA · TELANGANA
              </span>

            </div>


            <div className="profile-content">


              {/* PHOTO */}

              <div className="profile-photo-wrap">

                <div className="profile-photo">

                  <img
                    src="/img.jpeg"
                    alt="Madhu Kuncham"
                  />

                </div>

              </div>


              {/* INTRO */}

              <div className="profile-description">

                <p>
                  Software Engineer focused on
                  <strong> data automation</strong>,
                  scalable processing systems and
                  full-stack applications.
                </p>


                <div className="profile-actions">

                  <a
                    href="#work"
                    className="primary-button"
                  >
                    Explore Work
                    <span>↗</span>
                  </a>


                  <a
                    href="/Resume.pdf"
                    target="_blank"
                    rel="noreferrer"
                    className="secondary-button"
                  >
                    Resume
                  </a>

                </div>

              </div>

            </div>


            <div className="profile-footer">

              <span>PYTHON</span>
              <span>REACT</span>
              <span>SQL</span>
              <span>AUTOMATION</span>

            </div>

          </article>


{/* =====================================================
    ABOUT CARD
===================================================== */}

<article className="about-area">

  {/* decorative background */}
  <div className="about-orbit">
    <span></span>
  </div>

  <div className="about-card-icon">
    <span>♙</span>
  </div>

  <div className="about-main">

    <span className="eyebrow">
      ABOUT ME
    </span>

    <h2>
      Building software
      <br />
      around <em>real problems.</em>
    </h2>

  </div>

  <p>
    I work with Python, databases and web
    technologies to turn repetitive data
    workflows into reliable software systems.
  </p>

  <a
    href="#work"
    className="text-link"
  >
    View my work
    <span>↗</span>
  </a>

</article>


{/* =====================================================
    PROJECT COUNT CARD
===================================================== */}

<article className="count-area">

  {/* decorative project visual */}
  <div className="project-visual">

    <div className="project-orbit orbit-one"></div>
    <div className="project-orbit orbit-two"></div>

    <div className="project-glow"></div>

    <div className="project-sphere"></div>

  </div>


  <div className="count-icon">
    <span>▰</span>
  </div>


  <div className="project-number">
    06
  </div>


  <div className="count-content">

    <span className="eyebrow">
      SELECTED
    </span>

    <h3>
      Projects
    </h3>

  </div>


  <p className="count-description">
    A collection of full-stack and
    automation projects solving
    real-world problems.
  </p>


  <a
    href="#work"
    className="count-link"
  >
    Explore projects
    <span>↗</span>
  </a>

</article>        </section>



        {/* =====================================================
            TOOLBOX + CONNECT
        ===================================================== */}

        <section
          id="skills"
          className="toolbox-section"
        >


          {/* TOOLBOX */}

          <article className="toolbox-area">

            <div className="section-top">

              <div>

                <span className="eyebrow">
                  TECHNOLOGY
                </span>

                <h2>
                  My toolbox
                </h2>

              </div>

              <div className="circle-arrow">
                ↗
              </div>

            </div>


            <div className="tech-grid">


              <div className="tech-item">

                <img
                  src="https://cdn.simpleicons.org/python"
                  alt="Python"
                />

                <span>
                  Python
                </span>

              </div>


              <div className="tech-item">

                <img
                  src="https://cdn.simpleicons.org/javascript"
                  alt="JavaScript"
                />

                <span>
                  JavaScript
                </span>

              </div>


              <div className="tech-item">

                <img
                  src="https://cdn.simpleicons.org/react"
                  alt="React"
                />

                <span>
                  React
                </span>

              </div>


              <div className="tech-item">

                <img
                  src="https://cdn.simpleicons.org/mysql"
                  alt="MySQL"
                />

                <span>
                  SQL
                </span>

              </div>


              <div className="tech-item">

                <img
                  src="https://cdn.simpleicons.org/nodedotjs"
                  alt="Node.js"
                />

                <span>
                  Node.js
                </span>

              </div>


              <div className="tech-item">

                <img
                  src="https://cdn.simpleicons.org/pandas"
                  alt="Pandas"
                />

                <span>
                  Pandas
                </span>

              </div>


              <div className="tech-item">

                <img
                  src="https://cdn.simpleicons.org/mongodb"
                  alt="MongoDB"
                />

                <span>
                  MongoDB
                </span>

              </div>


              <div className="tech-item">

                <img
                  src="https://cdn.simpleicons.org/git"
                  alt="Git"
                />

                <span>
                  Git
                </span>

              </div>

            </div>

          </article>



          {/* CONNECT */}

          <article className="connect-area">

            <span className="eyebrow">
              CONNECT
            </span>

            <h2>
              Find me
              <br />
              <em>online.</em>
            </h2>


            <div className="social-grid">

  <a
    href="https://github.com/Madhukuncham"
    target="_blank"
    rel="noreferrer"
  >
    <span className="social-icon">
      <img
        src="https://cdn.simpleicons.org/github/ffffff"
        alt="GitHub"
      />
    </span>

    <span>GitHub</span>

    <b>↗</b>
  </a>


  <a
    href="https://www.linkedin.com/in/madhukuncham/"
    target="_blank"
    rel="noreferrer"
  >
    <span className="social-icon">
      <img
         src="https://cdn.jsdelivr.net/npm/simple-icons@v13/icons/linkedin.svg"
        alt="LinkedIn"
      />
    </span>

    <span>LinkedIn</span>

    <b>↗</b>
  </a>


  <a href="mailto:madhukunchamm@gmail.com">
    <span className="social-icon">
      <img
        src="https://cdn.simpleicons.org/gmail/ffffff"
        alt="Email"
      />
    </span>

    <span>Email</span>

    <b>↗</b>
  </a>

</div>
          </article>

        </section>



        {/* =====================================================
            STATS
        ===================================================== */}

        <section className="stats-section">

          <div className="stat">

            <strong>
              01+
            </strong>

            <span>
              Years Experience
            </span>

          </div>


          <div className="stat">

            <strong>
              06
            </strong>

            <span>
              Featured Projects
            </span>

          </div>


          <div className="stat">

            <strong>
              10+
            </strong>

            <span>
              Technologies
            </span>

          </div>


          <div className="stat stat-focus">

            <span>
              FOCUS
            </span>

            <strong>
              DATA AUTOMATION
            </strong>

          </div>

        </section>



        {/* =====================================================
            PROJECTS
        ===================================================== */}

        <section
          id="work"
          className="projects-section"
        >


          {/* PROJECT HEADER */}

          <div className="projects-heading">

            <div>

              <span className="eyebrow">
                SELECTED PROJECTS
              </span>

              <h2>
                Things I've <em>built.</em>
              </h2>

            </div>


            <p>
              A few projects that showcase my skills
              in problem solving, development and
              automation.
            </p>


            <div className="projects-heading-arrow">
              ↗
            </div>

          </div>



          {/* PROJECT CARDS */}

          <div className="projects-grid">


            {/* ================= PROJECT 01 ================= */}

            <article className="project-card">

              <div className="project-image">

                <img
                  src="/bulkmatcher.png"
                  alt="BulkMatcher project"
                />

                <span className="project-index">
                  01
                </span>

              </div>


              <div className="project-body">

                <span className="project-category">
                  DATA AUTOMATION · PYTHON
                </span>

                <h3>
                  BulkMatcher
                </h3>

                <p>
                  Large-scale data matching tool designed
                  to process multiple telecom datasets
                  containing 1–10+ lakh rows without
                  memory overflow.
                </p>


                <div className="project-tags">

                  <span>Python</span>
                  <span>Pandas</span>
                  <span>Tkinter</span>
                  <span>XLSX</span>

                </div>


                <div className="project-bottom">

                  <a
                    href="#"
                    className="project-link"
                  >
                    View Project
                    <span>→</span>
                  </a>


                  <a
                    href="https://github.com/"
                    target="_blank"
                    rel="noreferrer"
                    className="github-link"
                  >
                    GH
                  </a>

                </div>

              </div>

            </article>



            {/* ================= PROJECT 02 ================= */}

            <article className="project-card">

              <div className="project-image">

                <img
                  src="/movieglide.png"
                  alt="MovieGlide project"
                />

                <span className="project-index">
                  02
                </span>

              </div>


              <div className="project-body">

                <span className="project-category">
                  FULL STACK · WEB
                </span>

                <h3>
                  MovieGlide
                </h3>

                <p>
                  Full-stack movie ticket booking system
                  with authentication, seat selection,
                  showtime management and booking APIs.
                </p>


                <div className="project-tags">

                  <span>React</span>
                  <span>Node.js</span>
                  <span>Express</span>
                  <span>MySQL</span>

                </div>


                <div className="project-bottom">

                  <a
                    href="#"
                    className="project-link"
                  >
                    View Project
                    <span>→</span>
                  </a>


                  <a
                    href="https://github.com/"
                    target="_blank"
                    rel="noreferrer"
                    className="github-link"
                  >
                    GH
                  </a>

                </div>

              </div>

            </article>



            {/* ================= PROJECT 03 ================= */}

            <article className="project-card">

              <div className="project-image">

                <img
                  src="/cms.png"
                  alt="Complaint Management System"
                />

                <span className="project-index">
                  03
                </span>

              </div>


              <div className="project-body">

                <span className="project-category">
                  FULL STACK · MANAGEMENT
                </span>

                <h3>
                  Complaint Management System
                </h3>

                <p>
                  Complaint management platform for
                  submitting, tracking and administering
                  academic and personal complaints.
                </p>


                <div className="project-tags">

                  <span>React</span>
                  <span>Node.js</span>
                  <span>MongoDB</span>
                  <span>Bootstrap</span>

                </div>


                <div className="project-bottom">

                  <a
                    href="#"
                    className="project-link"
                  >
                    View Project
                    <span>→</span>
                  </a>


                  <a
                    href="https://github.com/"
                    target="_blank"
                    rel="noreferrer"
                    className="github-link"
                  >
                    GH
                  </a>

                </div>

              </div>

            </article>



            {/* ================= RANDOM PROJECT 04 ================= */}

            <article className="project-card">

              <div className="project-image">

                <img
                  src="/data.png"
                  alt="Data Analytics Dashboard"
                />

                <span className="project-index">
                  04
                </span>

              </div>


              <div className="project-body">

                <span className="project-category">
                  DATA ANALYTICS · POWER BI
                </span>

                <h3>
                  Analytics Dashboard
                </h3>

                <p>
                  Interactive analytics dashboard for
                  transforming operational datasets into
                  meaningful KPIs, reports and insights.
                </p>


                <div className="project-tags">

                  <span>Power BI</span>
                  <span>SQL</span>
                  <span>Excel</span>
                  <span>Power Query</span>

                </div>


                <div className="project-bottom">

                  <a
                    href="#"
                    className="project-link"
                  >
                    View Project
                    <span>→</span>
                  </a>


                  <a
                    href="https://github.com/"
                    target="_blank"
                    rel="noreferrer"
                    className="github-link"
                  >
                    GH
                  </a>

                </div>

              </div>

            </article>



            {/* ================= RANDOM PROJECT 05 ================= */}

            <article className="project-card">

              <div className="project-image">

                <img
                  src="/automation.png"
                  alt="Data Pipeline Automation"
                />

                <span className="project-index">
                  05
                </span>

              </div>


              <div className="project-body">

                <span className="project-category">
                  DATA ENGINEERING · PYTHON
                </span>

                <h3>
                  Data Pipeline Automation
                </h3>

                <p>
                  Automated data processing workflow for
                  cleaning, validating, transforming and
                  generating structured reporting datasets.
                </p>


                <div className="project-tags">

                  <span>Python</span>
                  <span>Pandas</span>
                  <span>SQL</span>
                  <span>ETL</span>

                </div>


                <div className="project-bottom">

                  <a
                    href="#"
                    className="project-link"
                  >
                    View Project
                    <span>→</span>
                  </a>


                  <a
                    href="https://github.com/"
                    target="_blank"
                    rel="noreferrer"
                    className="github-link"
                  >
                    GH
                  </a>

                </div>

              </div>

            </article>



            {/* ================= RANDOM PROJECT 06 ================= */}

            <article className="project-card">

              <div className="project-image">

                <img
                  src="/task.png"
                  alt="Task Management Application"
                />

                <span className="project-index">
                  06
                </span>

              </div>


              <div className="project-body">

                <span className="project-category">
                  FULL STACK · APPLICATION
                </span>

                <h3>
                  Task Management App
                </h3>

                <p>
                  Modern task management application
                  designed for organizing tasks, tracking
                  progress and managing daily workflows.
                </p>


                <div className="project-tags">

                  <span>React</span>
                  <span>Node.js</span>
                  <span>MongoDB</span>
                  <span>REST API</span>

                </div>


                <div className="project-bottom">

                  <a
                    href="#"
                    className="project-link"
                  >
                    View Project
                    <span>→</span>
                  </a>


                  <a
                    href="https://github.com/"
                    target="_blank"
                    rel="noreferrer"
                    className="github-link"
                  >
                    GH
                  </a>

                </div>

              </div>

            </article>

          </div>



          {/* ALL PROJECTS */}

          <div className="all-projects">

            <a href="#work">
              View All Projects
              <span>→</span>
            </a>

          </div>

        </section>



        {/* =====================================================
            CONTACT
        ===================================================== */}

        <section
          id="contact"
          className="contact-section"
        >

          <div className="contact-content">

            <span className="eyebrow">
              HAVE A PROJECT?
            </span>

            <h2>
              Let's build
              <br />
              something <em>useful.</em>
            </h2>

          </div>


          <div className="contact-right">

            <p>
              Open to Software Engineering,
              Data Engineering, Full-Stack and
              Automation opportunities.
            </p>


            <a
              href="mailto:madhukunchamm@gmail.com"
              className="primary-button"
            >
              Get in touch
              <span>↗</span>
            </a>

          </div>

        </section>

      </main>



      {/* ================= FOOTER ================= */}

      <footer>

        <span>
          © {new Date().getFullYear()} MADHU KUNCHAM
        </span>

        <span>
          SOFTWARE ENGINEER · DATA AUTOMATION
        </span>

        <a href="#home">
          BACK TO TOP ↑
        </a>

      </footer>

    </div>
  );
}

export default App;