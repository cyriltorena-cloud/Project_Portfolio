
function Skills({ portfolioData }) {
  const skills = portfolioData?.skills || [];

  return (
    <section className="section">
      <h2>Skills</h2>

      <div className="skills-container">
        {skills.map((skill) => (
          <div className="skill-item" key={skill.id}>
            <h3>{skill.name}</h3>
            <p>{skill.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
