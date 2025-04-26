import React from "react";
import RoundedHeader from "./RoundedHeader";
import { useNavigate } from "react-router-dom";

const UnlockEfficiency = () => {
  const navigate = useNavigate();
  const navigateTo = (link) => {
    navigate(link);
  };
  return (
    <section>
      <div className="wrapper w-full flex flex-col gap-10 items-center paddingtop paddingbottom">
        <RoundedHeader title="Unlock Efficiency" />
        <h1 className="main-title w-fit">
          Unlock Efficiency with Technospark AI
        </h1>
        <p className="desc text-center">
          Unleash the Next Wave of Business Evolution with Technospark AI. Our
          AI solutions are designed to revolutionize your business processes and
          operations, freeing you up to focus on what truly matters.
        </p>
        <button
          onClick={() => navigateTo("/contact-us")}
          className="primary-btn w-fit"
        >
          Contact Us
        </button>
      </div>
    </section>
  );
};

export default UnlockEfficiency;
