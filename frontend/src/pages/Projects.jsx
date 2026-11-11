
function Projects({ portfolioData }) {
  const projects = portfolioData?.projects || [];

  return (
    <section className="section">
      <h2>Projects</h2>

      <p>
        Here are some of my academic and personal projects.
      </p>

      <div className="project-container">
        {projects.map((project) => (
          <div className="project-card" key={project.id}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
