import React from "react";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigator = useNavigate();
  return (
    <div>
      This is about page...
      <button
        onClick={() => {
          navigator("/");
        }}
      >
        Home
      </button>
    </div>
  );
};

export default About;
