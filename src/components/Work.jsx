import { useState } from "react";
import PortfolioCard from "./PortfolioCard";
import newsapi_screenshot from "../images/newsapi_screenshot.png";
import newsspace_screeen from "../images/newsspace_screenshot.jpg";
import studyout_screenshot from "../images/studyout_screenshot.PNG";
import portfolio_screenshot from "../images/portfolio_website_screenshot.png";

const Work = () => {
  const [portfolioList] = useState([
    {
      name: "News-API",
      type: "Back-End",
      img_url: newsapi_screenshot,
      githubLink1: "https://github.com/OneInfiniteLoops/News-API",
      liveDemoLink: "https://news-space.herokuapp.com/",
      description:
        "The REST API is built with Node.js (JavaScript) and the Express framework. It is a back-end web application that contains a selection of endpoints where users can interact with the PostgreSQL database. Features include enabling users to access stored articles, post comments, and update vote count.",
    },
    {
      name: "NewsSpace",
      type: "Front-End",
      img_url: newsspace_screeen,
      githubLink1: "https://github.com/OneInfiniteLoops/newsspace",
      liveDemoLink: "https://newsspace-project.netlify.app/",
      description:
        "A Reddit-like social news aggregation app. It is a mobile-first front-end application built with React.js (JavaScript), HTML5 and CSS3. It provides users with the ability to interact with the back-end News API via a user-accessible interface.",
    },
    {
      name: "StudyOut",
      type: "Mobile App",
      img_url: studyout_screenshot,
      githubLink1: "https://github.com/OneInfiniteLoops/studyout",
      githubLink2: "https://github.com/jaykeHarrison/studyout-api",
      description:
        "Designed to help students find public study spaces more easily, the application shows the users study spaces nearby with crowd-sourced key information, such as specific amenities and suggested conditions of use. The mobile application was developed using React Native and Expo for the front-end, and Go/Golang and Fiber for the back-end. The area search feature and its map interface are powered by Google Places API and Google Maps respectively.",
    },
    {
      name: "Portfolio Website",
      type: "Front-End",
      img_url: portfolio_screenshot,
      githubLink1: "https://github.com/OneInfiniteLoops/portfolio-website.git",
      liveDemoLink: "https://www.james-yeung.com",
      description:
        "The single-page web application is built from the ground up with the React.js framework. With user accessibility in mind, the application’s user interface follows a minimalist design language and employs a warm tone colour palette to enhance the readability of the content. Continuous deployment (CD) is implemented for this application.",
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
