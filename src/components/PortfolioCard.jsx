import github from "../images/github_icon.png";

const PortfolioCard = ({ portfolioItem }) => {
  return (
    <li className="portfolio-card">
      <img src={portfolioItem.img_url} alt={portfolioItem.name} />
      <h1>{portfolioItem.name}</h1>
      <h2>{portfolioItem.type}</h2>
      <p>{portfolioItem.description}</p>
      <p>{portfolioItem.liveDemoLink}</p>
      <a href={portfolioItem.githubLink}>
        <img className="Social-Icons" src={github} alt="github_icon"></img>
      </a>
    </li>
  );
};

export default PortfolioCard;
