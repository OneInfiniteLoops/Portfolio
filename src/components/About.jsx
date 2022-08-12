const About = () => {
  return (
    <div id="about">
      <h1>About Me.</h1>
      <p>
        As a long-time tech enthusiast who has always been captivated by digital
        innovations, I decided that beyond being an admirer of tech I wanted to
        also get involved and be a part of the digital revolution. In April
        2022, I embarked on my journey to become a full-stack developer at the
        Northcoders’ coding bootcamp in Manchester, UK.
      </p>
      <p>
        Through the bootcamp, I gained hands-on experience in developing web and
        mobile applications, learnt various key skills, and applied industry
        best practices such as Test-Driven Development (TDD). I also had the
        opportunity to present a live-streamed lightning talk which has
        reinforced my passion for technology – and its impact on society.
      </p>
      <br></br>
      <div className="About-Lists">
        <div id="tech-list">
          <h2> Here Are The Technologies I've Worked With:</h2>
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
        <div id="practices-list">
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
