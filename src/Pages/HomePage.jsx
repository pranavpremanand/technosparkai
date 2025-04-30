import React from "react";
import HomePageBanner from "../Components/HomePageBanner";
import homeaboutimg from "../assets/images/homeaboutimg.webp";
import WhyChooseUs from "../Components/WhyChooseUs";
import RoundedHeader from "../Components/RoundedHeader";
import ServicesGrid from "../Components/ServicesGrid";
import Testimonials from "../Components/Testimonials";
import Highlights from "../Components/Highlights";
import Faq from "../Components/Faq";
import { useTheme } from "../Context/ThemeContext";
import Industries from "../Components/Industries";
import Ourvalues from "../Components/Ourvalues";
import Portfolio from "../Components/Portfolio";
import LeadForm from "../Components/landingpage/LeadForm";
import BrandLogos from "../Components/BrandLogos";
const HomePage = () => {
  const { theme } = useTheme();
  const isDarkMode = theme === "dark";
  return (
    <div className="min-h-screen overflow-x-hidden">
      <HomePageBanner />
      <section>
        <div className="wrapper grid md:grid-cols-2 gap-10 sm:pt-[4rem] pt-[2rem] paddingbottom">
          <img data-aos="fade-right" src={homeaboutimg} alt="homeaboutimg" />
          <div>
            <h1 className="main-title leading-tight" data-aos="fade-left">
              Welcome to Technospark AI
            </h1>
            <p className="desc mt-4" data-aos="fade-left">
              At TechnosparkAI, we’re committed to helping businesses embrace
              the future with transformative tech solutions. Whether you're
              looking to streamline processes, enhance user experiences, or
              develop new groundbreaking products, we're here to guide you every
              step of the way. With our team of skilled professionals, we offer
              tailored solutions across multiple industries to ensure your
              business stays ahead of the curve.
            </p>
          </div>
        </div>
      </section>
      <WhyChooseUs />
      <Ourvalues />
      <section className="dark:bg-darkblack ">
        <div className="flex wrapper flex-col gap-4 items-center w-full paddingtop paddingbottom">
          <RoundedHeader title={"Our Services"} />
          <h1 className="main-title text-center" data-aos="fade-up">
            Unlock the Future With Technospark AI
          </h1>
          <p className="desc max-w-[40rem] text-center" data-aos="fade-up">
            We offer a wide range of services to help businesses navigate the
            digital landscape.
          </p>
        </div>
        <ServicesGrid />
      </section>

      <Industries />
      <Portfolio />
      <div className="relative overflow-hidden dark:bg-darkblack min-h-screen">
        <div
          className={`absolute ${
            isDarkMode ? `flex` : `hidden`
          } -bottom-[50rem] -left-[50rem] w-full h-full bg-background blur-3xl opacity-70 z-0`}
        />
        <div className="relative z-10 w-full h-full">
          <Testimonials />
          <Highlights />
          <BrandLogos />
          <LeadForm />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
