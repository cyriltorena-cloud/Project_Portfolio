function Certificates() {
  return (
    <section className="section">
      <h2>Certificates & Achievements</h2>

      <div className="certificate-container">

        {/* Certificate 1 */}
        <div className="certificate-card">
          <h3>Getting Started with Cisco Packet Tracer</h3>

          <p>
            Networking Academy through the Cisco Networking Academy program
          </p>

          <p className="certificate-date">
            Completion Date: February 1, 2026
          </p>

          <a
            href="/certificates/getting-started-cisco-packet-tracer.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="certificate-button"
          >
            View Certificate
          </a>
        </div>

        {/* Certificate 2 */}
        <div className="certificate-card">
          <h3>Exploring Networking with Cisco Packet Tracer</h3>

          <p>
            Networking Academy through the Cisco Networking Academy program
          </p>

          <p className="certificate-date">
            Completion Date: February 1, 2026
          </p>

          <a
            href="/certificates/exploring-networking-cisco-packet-tracer.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="certificate-button"
          >
            View Certificate
          </a>
        </div>

        {/* Certificate 3 */}
        <div className="certificate-card">
          <h3>Exploring Internet of Things with Cisco Packet Tracer</h3>

          <p>
            Networking Academy through the Cisco Networking Academy program
          </p>

          <p className="certificate-date">
            Completion Date: February 1, 2026
          </p>

          <a
            href="/certificates/exploring-iot-cisco-packet-tracer.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="certificate-button"
          >
            View Certificate
          </a>
        </div>

      </div>
    </section>
  );
}

export default Certificates;