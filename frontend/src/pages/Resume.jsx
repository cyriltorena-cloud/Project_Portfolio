function Resume() {
  return (
    <section className="section">
      <h2>Resume / CV</h2>

      <div className="resume-card">
        <h3>My Resume</h3>

        <p>
          I am a 3rd year BSIT student with skills in networking,
          basic cybersecurity, writing poems, video editing, and capturing.
        </p>

        <a
          href="/Cyril_Torena_CV.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="resume-button"
        >
          View Resume
        </a>

        <a
          href="/Cyril_Torena_CV.pdf"
          download
          className="resume-button secondary-resume-button"
        >
          Download CV
        </a>
      </div>
    </section>
  );
}

export default Resume;