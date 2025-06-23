import './Features.css';

const features = [
  {
    title: 'Collect',
    description: 'Gather and clean medical and business data from diverse sources, ensuring quality and reliability.'
  },
  {
    title: 'Process',
    description: 'Prepare, model, and analyze data using advanced ML and statistical techniques.'
  },
  {
    title: 'Visualize',
    description: 'Communicate findings with compelling visuals, dashboards, and reports.'
  }
];

const Features = () => (
  <section className="features">
    <div className="features-grid">
      {features.map((f, i) => (
        <div className="feature-card" key={i}>
          <h3>{f.title}</h3>
          <p>{f.description}</p>
        </div>
      ))}
    </div>
  </section>
);

export default Features; 