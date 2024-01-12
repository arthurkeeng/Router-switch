import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <section>
      <span>this is the About page</span>
      <Link to="/">Home</Link>
      <Link to="/dashboard">dashboard</Link>
      {/*  */}
    </section>
  );
};

export default About;
