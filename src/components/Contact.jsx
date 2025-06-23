import './Contact.css';

const Contact = () => (
  <section className="contact" id="contact">
    <h2>Contact</h2>
    <p>Email: <a href="mailto:mungaistephen066@gmail.com">mungaistephen066@gmail.com</a></p>
    <div className="contact-links">
      <a href="https://github.com/MungaiMwangi001" target="_blank" rel="noopener noreferrer">
        <img src="/assets/github.svg" alt="GitHub" className="contact-icon" />
      </a>
      <a href="https://www.linkedin.com/in/stephen-mungai-959954333/" target="_blank" rel="noopener noreferrer">
        <img src="/assets/linkedin.svg" alt="LinkedIn" className="contact-icon" />
      </a>
    </div>
  </section>
);

export default Contact; 