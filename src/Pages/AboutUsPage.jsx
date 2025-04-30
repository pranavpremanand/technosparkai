import React from "react";
import aboutusimg from "../assets/images/aboutusimg.webp";
import { useTheme } from "../Context/ThemeContext";
import CoreValues from "../Components/CoreValues";
import VisionMission from "../Components/VisionMission";
import OurApproach from "../Components/OurApproach";
import UnlockEfficiency from "../Components/UnlockEfficiency";

const AboutUsPage = () => {
  const { theme } = useTheme();
  const isDarkMode = theme === "dark";

  return (
    <div className=" bg-white dark:bg-secondary">
      <section className="relative pt-[7rem]  overflow-hidden">
        <div
          className={`absolute ${
            isDarkMode ? `flex` : "hidden"
          } -top-[28rem] blur-3xl left-0 w-full h-full bg-footerBackground  `}
        />{" "}
        <section className="relative z-10 w-full h-full">
          <div>
            <div className="wrapper paddingtop paddingbottom grid md:grid-cols-2 gap-10">
              <div>
                <h1
                  data-aos="fade-right"
                  className="hero-title text-8xl font-bold text-secondary dark:text-white"
                >
                  About Us
                </h1>
                <p data-aos="fade-right" className="desc mt-10">
                  At TechnosparkAI, we’re more than just a technology solutions
                  provider—we’re a partner in your journey toward innovation and
                  growth. Our mission is to help businesses like yours unlock
                  the power of technology to solve real-world problems, enhance
                  operational efficiency, and create exceptional customer
                  experiences. With a team of skilled professionals, we deliver
                  practical, impactful, and future-proof solutions designed to
                  take your business to new heights.
                  <br />
                  <br />
                  Founded with the belief that technology can transform
                  businesses for the better, we’ve spent years honing our
                  expertise and deepening our knowledge in a wide range of
                  industries. Over time, we’ve become trusted partners to
                  companies of all sizes, helping them navigate digital
                  transformation, adopt emerging technologies, and achieve their
                  strategic goals. From startups to established enterprises, we
                  work closely with each of our clients to develop tailored
                  solutions that address their unique challenges and accelerate
                  their growth.
                </p>
              </div>
              <img
                data-aos="fade-left"
                src={aboutusimg}
                alt="aboutus-img"
                className="h-full aspect-square object-cover"
              />
            </div>
          </div>
        </section>
      </section>
      <div className="relative overflow-hidden">
        <div
          className={`absolute ${
            isDarkMode ? `flex` : "hidden"
          } top-[41rem] blur-3xl -left-[47rem] w-full h-full bg-footerBackground  `}
        />
        <section className="relative z-10 w-full h-full">
          <CoreValues />
          <VisionMission />
          <OurApproach />
          <UnlockEfficiency />
        </section>
      </div>
    </div>
  );
};

export default AboutUsPage;
