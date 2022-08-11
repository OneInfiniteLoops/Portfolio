import { useState } from "react";
import PortfolioCard from "./PortfolioCard";

const Work = () => {
  const [portfolioList, setPortfolioList] = useState([
    {
      name: "News-API",
      type: "Back-End",
      description: "This is a portfolio card",
      img_url: "https://via.placeholder.com/150",
      liveDemoLink: "https://news-space.herokuapp.com/",
      githubLink: "https://github.com/OneInfiniteLoops/News-API",
    },
    {
      name: "NewsSpace",
      type: "Front-End",
      description: "This is a portfolio card",
      img_url: "https://via.placeholder.com/150",
      liveDemoLink: "https://newsspace-project.netlify.app/",
      githubLink: "https://github.com/OneInfiniteLoops/newsspace",
    },
    {
      name: "StudyOut",
      type: "Mobile",
      description: "This is a portfolio card",
      img_url: "https://via.placeholder.com/150",
      liveDemoLink: "To Be Updated",
      githubLink: "https://github.com/OneInfiniteLoops/studyout",
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
