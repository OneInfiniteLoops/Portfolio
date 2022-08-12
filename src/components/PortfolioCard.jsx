import github_icon from "../images/github_icon.png";
import link_icon from "../images/link_icon.png";

const PortfolioCard = ({ portfolioItem }) => {
  return (
    <li className="portfolio-card">
      <img
        className="project-screenshot"
        src={portfolioItem.img_url}
        alt={portfolioItem.name}
      />
      <h1>{portfolioItem.name}</h1>
      <h2>{portfolioItem.type}</h2>
      <p>{portfolioItem.description}</p>
      <a href={portfolioItem.githubLink}>
        <img
          className="project-social-icons"
          src={github_icon}
          alt="github_icon"
        ></img>
      </a>
      <a href={portfolioItem.liveDemoLink}>
        <img
          className="project-social-icons"
          src={link_icon}
          alt="link_icon"
        ></img>
      </a>
    </li>
  );
};

export default PortfolioCard;
