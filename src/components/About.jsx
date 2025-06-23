import './About.css';

const expertise = [
  'Data Analysis',
  'Machine Learning',
  'Deep Learning',
  'Data Visualization',
  'Dashboards',
  'Python',
  'Pandas',
  'Matplotlib',
  'Scikit-learn'
];

const About = () => (
  <section className="about" id="about">
    <h2>About Me</h2>
    <p>
      I am Stephen Mungai, an Analytics Consultant & ML Specialist. I help organizations collect, process, analyze, and visualize data to drive impactful decisions and solve real-world problems.
    </p>
    <h3>Areas of Expertise</h3>
    <ul className="expertise-list">
      {expertise.map((area, i) => <li key={i}>{area}</li>)}
    </ul>
    <h3>Tools & Languages</h3>
    <div className="tools-list">
      <span>Python</span>
      <span>Pandas</span>
      <span>Matplotlib</span>
      <span>Scikit-learn</span>
      <span>Jupyter</span>
    </div>
  </section>
);

export default About; 