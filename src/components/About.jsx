const About = () => {
  return (
    <div id="about">
      <h1>About Me.</h1>
      <p>
        As a long-time tech enthusiast who loves learning about the latest
        innovations, I embarked on my journey in April 2022 to become a
        full-stack developer through the Northcoders’ coding bootcamp in
        Manchester, UK.{" "}
      </p>
      <p>
        At the bootcamp, I gained hands-on experience in developing web and
        mobile applications, various key skills, and industry best practices
        such as Test-Driven Development (TDD). I also had the opportunity to
        present a live-streamed lightning talk which has reinforced my passion
        for technology – and its impact on society.
      </p>
      <br></br>
      <div className="About-Lists">
        <div id="Tech-List">
          <h2> Here are the technologies I've worked with:</h2>
          <ul>
            <li>JavaScript (ES6)</li>
            <li>Node.js</li>
            <li>Express.js</li>
            <li>React</li>
            <li>PostgreSQL</li>
            <li>Jest</li>
            <li>React Native</li>
            <li>Git Version Control</li>
            <li>Heroku</li>
            <li>HTML5 & CSS3</li>
          </ul>
        </div>
        <div id="Practices-List">
          <h2>Using Industry Best Practices:</h2>
          <ul>
            <li>Test-Driven Development (TDD)</li>
            <li>Agile Methodologies</li>
            <li>Pair Programming</li>
            <li>Version Control with Git & GitHub</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
