import './Projects.css';

const projects = [
  {
    name: 'BOILERPLATE-MEDICAL-DATA-VISUALIZER',
    image: 'thumbnails/medical-data-visualizer.png',
    description: 'Visualize and analyze medical data with interactive charts and insights.',
    tools: ['Python', 'Pandas', 'Matplotlib'],
    github: 'https://github.com/MungaiMwangi001/Machine_learning-Lab/tree/main/FCC_projects/BOILERPLATE-MEDICAL-DATA-VISUALIZER',
    demo: 'https://github.com/MungaiMwangi001/Machine_learning-Lab/tree/main/FCC_projects/BOILERPLATE-MEDICAL-DATA-VISUALIZER'
  },
  {
    name: 'BOILERPLATE-PAGE-VIEW-TIME-SERIES-VISUALIZER',
    image: 'thumbnails/page-view-time-series.png',
    description: 'Analyze and visualize time series data for web page views.',
    tools: ['Python', 'Pandas', 'Matplotlib'],
    github: 'https://github.com/MungaiMwangi001/Machine_learning-Lab/tree/main/FCC_projects/BOILERPLATE-PAGE-VIEW-TIME-SERIES-VISUALIZER',
    demo: 'https://github.com/MungaiMwangi001/Machine_learning-Lab/tree/main/FCC_projects/BOILERPLATE-PAGE-VIEW-TIME-SERIES-VISUALIZER'
  },
  {
    name: 'BOILERPLATE-SEA-LEVEL-PREDICTOR',
    image: 'thumbnails/sea-level-predictor.png',
    description: 'Predict and visualize sea level changes using regression models.',
    tools: ['Python', 'Pandas', 'Matplotlib'],
    github: 'https://github.com/MungaiMwangi001/Machine_learning-Lab/tree/main/FCC_projects/BOILERPLATE-SEA-LEVEL-PREDICTOR',
    demo: 'https://github.com/MungaiMwangi001/Machine_learning-Lab/tree/main/FCC_projects/BOILERPLATE-SEA-LEVEL-PREDICTOR'
  }
];

const Projects = () => (
  <section className="projects" id="projects">
    <h2>Projects</h2>
    <div className="projects-grid">
      {projects.map((project, i) => (
        <div className="project-card" key={i}>
          <img src={project.image} alt={project.name} className="project-thumb" />
          <h3>{project.name.replace('BOILERPLATE-', '').replace(/-/g, ' ')}</h3>
          <p>{project.description}</p>
          <div className="project-tools">
            {project.tools.map((tool, j) => (
              <span className="tool-tag" key={j}>{tool}</span>
            ))}
          </div>
          <div className="project-links">
            <a href={project.github} target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href={project.demo} target="_blank" rel="noopener noreferrer">View Project</a>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Projects; 