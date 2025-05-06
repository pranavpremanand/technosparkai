import React, { useEffect, useState } from "react";
import logo from "../assets/images/logo_icon.png";
// import bannervideo from "../assets/video/bannervideo.mp4";
import ReactPlayer from "react-player";
import { useNavigate } from "react-router-dom";
const HomePageBanner = () => {
  const navigate = useNavigate();
  const navigateTo = (link) => {
    navigate(link);
  };
  const headingText = "TECHNOSPARK Ai";
  const paragraphText = "Shaping the Future with Innovative Technology";

  const [displayHeading, setDisplayHeading] = useState("");
  const [displayParagraph, setDisplayParagraph] = useState("");
  const [headingComplete, setHeadingComplete] = useState(false);
  const [cursorVisible, setCursorVisible] = useState(true);
  const [cursorPosition, setCursorPosition] = useState("heading");

  useEffect(() => {
    if (displayHeading.length < headingText.length) {
      const typingTimer = setTimeout(() => {
        setDisplayHeading(headingText.substring(0, displayHeading.length + 1));
      }, 150);

      return () => clearTimeout(typingTimer);
    } else if (!headingComplete) {
      const pauseTimer = setTimeout(() => {
        setHeadingComplete(true);
        setCursorPosition("paragraph");
      }, 500);

      return () => clearTimeout(pauseTimer);
    }

    if (headingComplete && displayParagraph.length < paragraphText.length) {
      const typingTimer = setTimeout(() => {
        setDisplayParagraph(
          paragraphText.substring(0, displayParagraph.length + 1)
        );
      }, 100);

      return () => clearTimeout(typingTimer);
    }

    const cursorTimer = setInterval(() => {
      setCursorVisible((prev) => !prev);
    }, 500);

    return () => clearInterval(cursorTimer);
  }, [displayHeading, displayParagraph, headingComplete]);

  return (
    <div className="relative w-full bg-white min-h-screen overflow-hidden">
      <div className="h-full w-full absolute inset-0 flex items-center justify-center">
        <img
          src={logo}
          alt=""
          className="object-contain sm:h-[40%] opacity-30 aspect-square w-2/3 sm:w-full"
        />
      </div>
      <div className="absolute z-[3] flex justify-center items-center left-0 top-0 w-full h-full pt-[7rem]">
        <div className="wrapper">
          <p className="font-bold font-audiowide mx-auto max-w-[19rem] sm:max-w-full text-xl sm:text-4xl text-secondary sm:text-center text-center">
            {displayHeading}
            {cursorPosition === "heading" && (
              <span
                className={`ml-1 ${
                  cursorVisible ? "opacity-100" : "opacity-0"
                } transition-opacity duration-100`}
              >
                |
              </span>
            )}
          </p>

          <div className="flex flex-col gap-8 pb-5">
            <h1 className="hero-title text-3xl sm:text-6xl font-bold text-center text-secondary mb-6">
              {displayParagraph}
              {cursorPosition === "paragraph" && (
                <span
                  className={`ml-1 ${
                    cursorVisible ? "opacity-100" : "opacity-0"
                  } transition-opacity duration-100`}
                >
                  |
                </span>
              )}
            </h1>
            <div className="flex justify-center gap-5 pt-8">
              <button
                data-aos="fade-right"
                onClick={() => navigateTo("/about-us")}
                className="primary-btn"
              >
                Get Start{" "}
              </button>
              <button
                data-aos="fade-left"
                onClick={() => navigateTo("/contact-us")}
                className="secondary-btn-white"
              >
                Contact Us{" "}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePageBanner;
