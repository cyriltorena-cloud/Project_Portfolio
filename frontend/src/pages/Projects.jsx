function Projects() {
  return (
    <section className="section">
      <h2>Projects</h2>

      <p>
        Here are some of my academic and personal projects.
      </p>

      <div className="project-container">

        <div className="project-card">
          <h3>Multi-page React Portfolio Website</h3>
          <p>
            A personal portfolio website developed using React
            to showcase my skills, projects, education, and certificates.
          </p>
        </div>

        <div className="project-card">
          <h3>Django Backend Integration</h3>
          <p>
            A backend project using Django for handling application
            logic and backend functionality.
          </p>
        </div>

        <div className="project-card">
          <h3>Networking & Cybersecurity Lab Exercises</h3>
          <p>
            Academic activities involving networking configuration,
            troubleshooting, and basic cybersecurity concepts.
          </p>
        </div>

      </div>
    </section>
  );
}

export default Projects;