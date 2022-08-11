import { useState } from "react";
import PortfolioCard from "./PortfolioCard";
import newsapi_screenshot from "../images/newsapi_screenshot.png";
import newsspace_screeen from "../images/newsspace_screenshot.jpg";
import studyout_screenshot from "../images/studyout_screenshot.PNG";

const Work = () => {
  const [portfolioList, setPortfolioList] = useState([
    {
      name: "News-API",
      type: "Back-End",
      description:
        "The REST API is built with Node.js (JavaScript) and the Express framework. It is a back-end web application that contains a selection of endpoints where users can interact with the PostgreSQL database. Features include enabling users to access stored articles, post comments, and update vote count.",
      img_url: newsapi_screenshot,
      liveDemoLink: "https://news-space.herokuapp.com/",
      githubLink: "https://github.com/OneInfiniteLoops/News-API",
    },
    {
      name: "NewsSpace",
      type: "Front-End",
      description:
        "A Reddit-like social news aggregation app. It is a mobile-first front-end application built with React.js (JavaScript), HTML5 and CSS3. It provides users with the ability to interact with the back-end News API via a user-accessible interface.",
      img_url: newsspace_screeen,
      liveDemoLink: "https://newsspace-project.netlify.app/",
      githubLink: "https://github.com/OneInfiniteLoops/newsspace",
    },
    {
      name: "StudyOut",
      type: "Mobile App",
      description:
        "Designed to help students find public study spaces more easily, the crowd-sourced application shows users nearby study spaces with key information such as specific features and suggested conditions of use. The mobile application was developed using React Native and Expo for the front-end, and Go/Golang and Fiber for the back-end. The area search feature and its map interface are powered by Google Places API and Google Maps respectively.",
      img_url: studyout_screenshot,
      liveDemoLink: "To Be Updated",
      githubLink: "https://github.com/OneInfiniteLoops/studyout",
    },
  ]);

  return (
    <div id="work">
      <h1>Check Out My Projects Here.</h1>
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
