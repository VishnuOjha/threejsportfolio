import React from "react";
import { Link } from "react-router-dom";
import { arrow } from "../assets/icons";

const InfoBox = ({ text, link, btnText }) => (
  <div className="info-box">
    <p className="font-medium sm:text-xl text-center">{text} </p>
    <Link to={link} className="neo-brutalism-white neo-btn">
      {btnText}
      <img src={arrow} className="w-4 h-4 object-contain" />
    </Link>
  </div>
);

const renderContent = {
  1: (
    <h1 className="sm:text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white mx-5">
      Hi, I am   <span className="font-semibold">Vishnu</span> 👋
      <br />A Software Developer from Ahmedabad
    </h1>
  ),
  2: (
    <InfoBox
      text="Worked on many projects and picked up many skills along the way to skill myself"
      link="/about"
      btnText="Learn More"
    />
  ),
  3: (
    <InfoBox
      text="Experience of working on different projects and proved history of deliver of feature rich product "
      link="/projects"
      btnText="Visit My Portfolio"
    />
  ),
  4: (
    <InfoBox
      text="Need a project done or looking for a dev? I'm just a few keystrokes away"
      link="/contact"
      btnText="Let's talk"
    />
  ),
};

const HomeInfo = ({ currentStage }) => {
  return renderContent[currentStage] || <></>;
};

export default HomeInfo;
