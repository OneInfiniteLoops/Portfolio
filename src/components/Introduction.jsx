import Profile from "./Profile";

const Introduction = () => {
  return (
    <div id="Top" className="Introduction">
      <p>Hi, my name is</p>
      <h1>Siu Kwan James Yeung.</h1>
      <h2>I'm a Software Developer. 🧑🏻‍💻</h2>
      <p>
        A software developer with a background in economics, finance, and
        international political economy. I recently completed a coding bootcamp
        at Northcoders in Manchester where I acquired experience in Node.JS,
        React, PostgreSQL, and more.
      </p>
      <Profile />
    </div>
  );
};

export default Introduction;
