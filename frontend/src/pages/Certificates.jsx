
function Certificates({ portfolioData }) {
  const certificates = portfolioData?.certificates || [];

  return (
    <section className="section">
      <h2>Certificates & Achievements</h2>

      <div className="certificate-container">
        {certificates.map((certificate) => (
          <div className="certificate-card" key={certificate.id}>
            <h3>{certificate.title}</h3>

            <p>{certificate.issuer}</p>

            {certificate.completionDate && (
              <p className="certificate-date">
                Completion Date: {certificate.completionDate}
              </p>
            )}

            {certificate.fileUrl && (
              <a
                href={certificate.fileUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="certificate-button"
              >
                View Certificate
              </a>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Certificates;
