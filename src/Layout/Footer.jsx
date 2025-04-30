import { Link } from "react-router-dom";
import logo from "../assets/images/logo.png";
import { useTheme } from "../Context/ThemeContext";
import { companyDetails } from "../util/constant";
import { PhoneCall } from "lucide-react";
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  const { theme } = useTheme();
  const isDarkMode = theme === "dark";

  return (
    <div className="relative bg-white text-black z-20 overflow-hidden border-t">
      {/* <div
        className={`absolute ${
          isDarkMode ? `flex` : "hidden"
        } -bottom-[15rem] blur-3xl left-0 w-full h-full bg-footerBackground -z-10 `}
      /> */}
      <footer className="w-full   py-16  z-10">
        <div className="wrapper">
          <div className="grid grid-cols-1 md:grid-cols-3  xl:grid-cols-4 gap-8 items-start">
            <div className="col-span-1">
              <div className="flex items-center gap-2 mb-4">
                <img src={logo} alt="logo" className="w-[15rem]" />
              </div>
              <p className=" text-sm max-w-xs">
                EMPOWERING THE BUSINESS WITH AI
              </p>
            </div>

            <div className="col-span-1">
              <h3 className=" font-medium mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/about-us" className=" hover:text-black/80 text-sm">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="/services" className=" hover:text-black/80 text-sm">
                    Services
                  </Link>
                </li>
                <li>
                  <Link to="/careers" className=" hover:text-black/80 text-sm">
                    Careers
                  </Link>
                </li>
              </ul>
            </div>

            <div className="col-span-1">
              <h3 className=" font-medium mb-4">Information</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/blogs" className=" hover:text-black/80 text-sm">
                    Blogs
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact-us"
                    className=" hover:text-black/80 text-sm"
                  >
                    Contact US
                  </Link>
                </li>
              </ul>
            </div>

            <div className="col-span-1">
              <div className="flex space-x-4 mt-8">
                {companyDetails.socialLinks.map((obj, index) => (
                  <Link
                    key={index}
                    to={obj.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-2xl transition-colors duration-300"
                  >
                    {obj.icon === FaLinkedin && (
                      <FaLinkedin className="text-[#0A66C2] hover:text-[#0A66C2]/80 dark:hover:text-[#0A66C2]/90" />
                    )}
                    {obj.icon === FaInstagram && (
                      <FaInstagram className="text-[#E4405F] hover:text-[#E4405F]/80 dark:hover:text-[#E4405F]/90" />
                    )}
                    {obj.icon === FaFacebook && (
                      <FaFacebook className="text-[#1877F2] hover:text-[#1877F2]/80 dark:hover:text-[#1877F2]/90" />
                    )}
                    {obj.icon === FaXTwitter && (
                      <FaXTwitter className="text-black hover:text-black dark:text-black dark:hover:text-black/80" />
                    )}
                    {obj.icon === FaYoutube && (
                      <FaYoutube className="text-[#FF0000] hover:text-[#FF0000]/80 dark:hover:text-[#FF0000]/90" />
                    )}
                  </Link>
                ))}
              </div>
              <div className="mt-6  text-sm">
                Phone :
                <a href={`tel:${companyDetails.phone}`} className="ml-2">
                  {companyDetails.phone}
                </a>
              </div>
              <div className="mt-4  text-sm">
                Email :
                <a href={`mailto:${companyDetails.email}`} className="ml-2">
                  {companyDetails.email}
                </a>
              </div>
              <div className="mt-4  text-sm">
                Address :<span className="ml-2">{companyDetails.address}</span>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className=" text-sm">
              ©{new Date().getFullYear()} Technospark AI. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
