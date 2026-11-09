function Contact() {
  return (
    <>
      <section className="contact-section">

        {/* LEFT SIDE */}
        <div className="contact-info">

          <h2>Get In Touch</h2>

          <p className="subtitle">
            I'd love to hear from you!
          </p>

          <p>
            If you have any inquiries or just want to say hi, please use the
            contact form below.
          </p>

          <div className="contact-details">

            {/* PHONE */}
            <div className="contact-item">
              <a
                href="https://www.flaticon.com/free-icon/phone-call_5585856"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://cdn-icons-png.flaticon.com/128/5585/5585856.png"
                  alt="Phone"
                  className="icon"
                />
              </a>
              <span>09702635277</span>
            </div>

            {/* GMAIL */}
            <div className="contact-item">
              <a
                href="https://www.flaticon.com/free-icon/gmail_732200"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://cdn-icons-png.flaticon.com/128/732/732200.png"
                  alt="Gmail"
                  className="icon"
                />
              </a>
              <span>cyriltorena@gmail.com</span>
            </div>

            {/* FACEBOOK */}
            <div className="contact-item">
              <a
                href="https://www.flaticon.com/free-icon/communication_15047435"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://cdn-icons-png.flaticon.com/128/15047/15047435.png"
                  alt="Facebook"
                  className="icon"
                />
              </a>
              <span>Cyril D. Torena</span>
            </div>

            {/* INSTAGRAM */}
            <div className="contact-item">
              <a
                href="https://www.flaticon.com/free-icon/instagram_15713420"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://cdn-icons-png.flaticon.com/128/15713/15713420.png"
                  alt="Instagram"
                  className="icon"
                />
              </a>
              <span>@CyrilTorena</span>
            </div>

          </div>
        </div>

        {/* RIGHT SIDE */}
        <form className="contact-form">
          <div className="form-row">
            <input type="text" placeholder="First Name" required />
            <input type="text" placeholder="Last Name" required />
          </div>
          <input type="email" placeholder="Email" required />
          <textarea placeholder="Message" rows="5" required></textarea>
          <button type="submit">SEND</button>
        </form>

      </section>

      <footer className="footer">
        © 2026 Cyril Toreña. All rights reserved.
      </footer>
    </>
  );
}

export default Contact;
