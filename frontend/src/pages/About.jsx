
function About({ portfolioData }) {
  const name = portfolioData?.name || "Cyril Toreña";
  const education =
    portfolioData?.education ||
    "Laguna State Polytechnic University";

  return (
    <section className="section">
      <h2>About Me</h2>

      <p>
        I am {name}, a 3rd year Bachelor of Science in Information
        Technology student at {education}.
      </p>

      <p>
        I am interested in networking, basic cybersecurity, editing, and
        other areas of information technology. I am continuously developing
        my skills through academic activities, projects, and hands-on
        learning.
      </p>

      <p>
        In the future, I want to use the skills and knowledge I gain from
        my studies in a real work environment. I hope to improve my skills
        in networking, cybersecurity, and web development while gaining
        more experience.
      </p>

      <p>
        I also want to keep learning new technologies and become a reliable
        IT professional. My goal is to build a career in the IT field and
        continue improving as I gain more experience.
      </p>
    </section>
  );
}

export default About;
