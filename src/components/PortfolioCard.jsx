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
      {portfolioItem.githubLink1 ? (
        <a href={portfolioItem.githubLink1}>
          <img
            className="project-link-icons"
            src={github_icon}
            alt="github_icon"
          ></img>
        </a>
      ) : null}

      {portfolioItem.githubLink2 ? (
        <a href={portfolioItem.githubLink2}>
          <img
            className="project-link-icons"
            src={github_icon}
            alt="github_icon"
          ></img>
        </a>
      ) : null}

      {portfolioItem.liveDemoLink ? (
        <a href={portfolioItem.liveDemoLink}>
          <img
            className="project-link-icons"
            src={link_icon}
            alt="link_icon"
          ></img>
        </a>
      ) : null}
      <p>{portfolioItem.description}</p>
    </li>
  );
};

export default PortfolioCard;
