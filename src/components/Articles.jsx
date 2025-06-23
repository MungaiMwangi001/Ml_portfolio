import './Articles.css';

const articles = [
  {
    title: 'Medical Data Visualization with Python',
    link: 'https://mungaimwangi001.medium.com/'
  },
  {
    title: 'Time Series Analysis for Web Analytics',
    link: 'https://mungaimwangi001.medium.com/'
  },
  {
    title: 'Sea Level Prediction Using Regression',
    link: 'https://mungaimwangi001.medium.com/'
  }
];

const Articles = () => (
  <section className="articles" id="articles">
    <h2>Articles & Blog</h2>
    <ul className="articles-list">
      {articles.map((article, i) => (
        <li key={i}>
          <a href={article.link} target="_blank" rel="noopener noreferrer">{article.title}</a>
        </li>
      ))}
    </ul>
  </section>
);

export default Articles; 