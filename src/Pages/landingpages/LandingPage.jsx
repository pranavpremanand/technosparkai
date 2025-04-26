import React from "react";
import LandingHeader from "../../Components/landingpage/LandingHeader";
import LandingFooter from "../../Components/landingpage/LandingFooter";
import LandingServices from "../../Components/landingpage/LandingServices";
import { useTheme } from "../../Context/ThemeContext";
import CoreValues from "../../Components/CoreValues";
import VisionMission from "../../Components/VisionMission";
import OurApproach from "../../Components/OurApproach";
import UnlockEfficiency from "../../Components/UnlockEfficiency";
import LeadForm from "../../Components/landingpage/LeadForm";
import Portfolio from "../../Components/Portfolio";
import Banner from "../../Components/landingpage/Banner";
import webAboutImg from "../../assets/images/web-development.webp";
import appAboutImg from "../../assets/images/app-development.webp";
import Ourvalues from "../../Components/Ourvalues";
import TechnologiesUsed from "../../Components/landingpage/TechnologiesUsed";
import BrandLogos from "../../Components/BrandLogos";
import Industries from "../../Components/Industries";
import WhatsAppIcon from "../../Components/WhatsApp";

const LandingPage = ({ page }) => {
  const { theme } = useTheme();
  const isDarkMode = theme === "dark";
  const isWeb = page === "web";

  const bannerTitle = isWeb
    ? "Innovative Web Development Solutions"
    : "Cutting-Edge Mobile App Development";
  const bannerDesc = isWeb
    ? "Building responsive, scalable, and SEO-friendly websites tailored to your business needs."
    : "Creating intuitive, high-performance mobile applications for iOS and Android platforms.";

  return (
    <>
      <WhatsAppIcon />
      <LandingHeader />
      <div id="banner" className="bg-white dark:bg-darkblack">
        <Banner bannerTitle={bannerTitle} bannerDesc={bannerDesc} />
        <section id="about-us">
          <div className="wrapper grid md:grid-cols-2 gap-10 paddingtop paddingbottom">
            <div className="flex flex-col h-full max-h-[24rem] overflow-hidden">
              <img
                src={isWeb ? webAboutImg : appAboutImg}
                alt={
                  isWeb
                    ? "Web Development Services"
                    : "Mobile App Development Services"
                }
                className="h-full object-cover w-full"
              />
            </div>
            <div>
              <h1 className="main-title leading-tight">
                {isWeb
                  ? "Expert Web Development for Business Growth"
                  : "Professional Mobile App Development Services"}
              </h1>
              <p className="desc mt-4">
                {isWeb
                  ? "At Technospark AI, we specialize in delivering custom web development solutions that drive traffic and increase conversions. Our team ensures your website is optimized for speed, security, and user experience."
                  : "Technospark AI offers comprehensive mobile app development services, crafting user-friendly and feature-rich applications that engage your audience and enhance your digital presence."}
              </p>
            </div>
          </div>
        </section>

        <LandingServices page={page} />
        <div className="relative overflow-hidden">
          <div
            className={`absolute ${
              isDarkMode ? "flex" : "hidden"
            } top-[41rem] blur-3xl -left-[47rem] w-full h-full bg-footerBackground`}
          />
          <Portfolio page={page} />
          <TechnologiesUsed service={page} />
          <section className="relative z-10 w-full h-full">
            <Industries />
            <CoreValues />
            <VisionMission />
            <OurApproach />
            <UnlockEfficiency />
            <Ourvalues />
            <BrandLogos />
            <LeadForm />
          </section>
        </div>
      </div>
      <LandingFooter />
    </>
  );
};

export default LandingPage;
