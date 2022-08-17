import email from "../images/email_icon.png";
import linkedin from "../images/linkedin_icon.png";
import github from "../images/github_icon.png";

const Contact = () => {
  return (
    <div>
      <div id="contact">
        <h1>Get In Touch.</h1>
        <p>Feel free to drop me an email at skjyeung@gmail.com.</p>
        <p>You can also find me on LinkedIn and GitHub.</p>
        <a href="mailto:skjyeung@gmail.com">
          <img className="Social-Icons" src={email} alt="email_icon"></img>
        </a>
        <a href="https://www.linkedin.com/in/jamesyeung1/">
          <img
            className="Social-Icons"
            src={linkedin}
            alt="linkedin_icon"
          ></img>
        </a>
        <a href="https://github.com/OneInfiniteLoops">
          <img className="Social-Icons" src={github} alt="github_icon"></img>
        </a>
      </div>
    </div>
  );
};

export default Contact;
