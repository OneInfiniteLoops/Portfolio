const PortfolioCard = ({ portfolioItem }) => {
  return (
    <li className="portfolio-card">
      <img src={portfolioItem.img_url} alt={portfolioItem.name} />
      <h1>{portfolioItem.name}</h1>
      <h2>{portfolioItem.type}</h2>
      <p>{portfolioItem.description}</p>
      <p>{portfolioItem.liveDemoLink}</p>
      <p>{portfolioItem.githubLink}</p>
    </li>
  );
};

export default PortfolioCard;
