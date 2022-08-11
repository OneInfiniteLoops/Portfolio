import { useState } from "react";
import PortfolioCard from "./PortfolioCard";

const Work = () => {
  const [portfolioList, setPortfolioList] = useState([
    {
      name: "Portfolio Card1",
      type: "Back-End",
      description: "This is a portfolio card",
      img_url: "https://via.placeholder.com/150",
      liveDemoLink: "https://www.google.com",
      githubLink: "https://www.google.com",
    },
    {
      name: "Portfolio Card2",
      type: "Front-End",
      description: "This is a portfolio card",
      img_url: "https://via.placeholder.com/150",
      liveDemoLink: "https://www.google.com",
      githubLink: "https://www.google.com",
    },
    {
      name: "Portfolio Card3",
      type: "Mobile",
      description: "This is a portfolio card",
      img_url: "https://via.placeholder.com/150",
      liveDemoLink: "https://www.google.com",
      githubLink: "https://www.google.com",
    },
  ]);

  return (
    <div id="work">
      <h1>Check out my projects</h1>
      <ul className="portfolio-list">
        {portfolioList.map((portfolioItem) => {
          return (
            <PortfolioCard
              key={portfolioItem.name}
              portfolioItem={portfolioItem}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default Work;
