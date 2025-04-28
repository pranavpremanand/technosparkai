import file from "../assets/images/png/file.png";
import graph from "../assets/images/png/graph.png";
import rocket from "../assets/images/png/rocket.png";
import start from "../assets/images/png/start.png";
import integrity from "../assets/images/png/integrity.png";
import quality from "../assets/images/png/quality.png";
import success from "../assets/images/png/success.png";
import Infinite from "../assets/images/png/Infinite.png";

// porfolio images
// Import all images at the top (Web Development)
import FiveGHomesImg from "../assets/images/portfolio/web-development/5ghomes.webp";
import AkashMegaMart from "../assets/images/portfolio/web-development/akash-mega-mart.webp";
import ColdCreekcapImg from "../assets/images/portfolio/web-development/cold-creekcap.webp";
import Midwam from "../assets/images/portfolio/web-development/midwam.webp";
import ThinkReality from "../assets/images/portfolio/web-development/think-reality.webp";

// Import all images at the top (App Development)
import AkashMegaMartApp from "../assets/images/portfolio/app-development/akash_mega_mart-app.webp";
import AutosnapApp from "../assets/images/portfolio/app-development/autosnap-app.webp";
import FeelItApp from "../assets/images/portfolio/app-development/feelit_app.webp";
import KlikomicsApp from "../assets/images/portfolio/app-development/klikomics.webp";
import RentopImg from "../assets/images/portfolio/app-development/rentop.webp";

//portfolio blockchain
import Cryptopadie from "../assets/images/portfolio/blockchain/cryptopadie.webp";
import Nanoflow from "../assets/images/portfolio/blockchain/nanoflow.webp";
import Padipal from "../assets/images/portfolio/blockchain/padipal.webp";

import { CgWebsite } from "react-icons/cg";
import { GoFileMedia } from "react-icons/go";
import { TfiLayoutMediaRightAlt } from "react-icons/tfi";
import { MdOutlineDashboardCustomize } from "react-icons/md";
import {
  FaAppStoreIos,
  FaCloud,
  FaFacebook,
  FaInstagram,
  FaLanguage,
  FaLinkedin,
  FaRobot,
  FaVideo,
  FaYoutube,
} from "react-icons/fa";
import { IoLogoAndroid } from "react-icons/io";
import { SiFlutter } from "react-icons/si";
import { TbDeviceMobileCode } from "react-icons/tb";
import { FaXTwitter } from "react-icons/fa6";

// industries
import financial from "../assets/images/industries/Financial Services.webp";
import healthcare from "../assets/images/industries/Healthcare.webp";
import manufacturing from "../assets/images/industries/Manufacturing.webp";
import energy from "../assets/images/industries/Energy.webp";
import retail from "../assets/images/industries/Retail.webp";
import realestate from "../assets/images/industries/Real Estate.webp";
import food from "../assets/images/industries/Food and Beverage.webp";
import transportation from "../assets/images/industries/Transportation.webp";
import communication from "../assets/images/industries/Communication.webp";
import electronics from "../assets/images/industries/Consumer Electronics.webp";
import aerospace from "../assets/images/industries/Aerospace and Defense.webp";
import chemicals from "../assets/images/industries/Chemicals.webp";
import mining from "../assets/images/industries/Mining.webp";
import agriculture from "../assets/images/industries/Agriculture.webp";
import construction from "../assets/images/industries/Construction.webp";
import hospitality from "../assets/images/industries/Hospitality.webp";
import entertainment from "../assets/images/industries/Entertainment.webp";
import consulting from "../assets/images/industries/Consulting.webp";
import legal from "../assets/images/industries/Legal.webp";

import {
  FaMobileAlt,
  FaDesktop,
  FaBrain,
  FaGamepad,
  FaChartLine,
  FaPaintBrush,
} from "react-icons/fa";
import { SiBlockchaindotcom } from "react-icons/si";

export const companyDetails = {
  name: "Technospark AI",
  email: "abc@xyz.com",
  phone: "+91-8247712844",
  address: "ABC Building, XYZ Street, City, State, Country",
  socialLinks: [
    {
      href: "https://www.linkedin.com/company/Technospark AI/",
      icon: FaLinkedin,
    },
    {
      href: "https://www.instagram.com/Technospark AI?igsh=ZGRuMTFsbDM1NWJ6",
      icon: FaInstagram,
    },
    {
      href: "",
      icon: FaFacebook,
    },
    {
      href: "",
      icon: FaXTwitter,
    },
    {
      href: "",
      icon: FaYoutube,
    },
  ],
  whatsapp: "",
  // whatsapp: "https://wa.me/",
};

export const services = [
  {
    title: "Web Development",
    link: "/web-development",
    description:
      "We craft lightning-fast, secure, and scalable websites that are built to impress — blending sleek design with robust functionality.",
    icon: FaDesktop,
    bgColor: "bg-blue-600",
  },
  {
    title: "App Development",
    link: "/app-development",
    description:
      "From idea to launch, we build seamless, high-performance mobile apps that deliver value across iOS, Android, and cross-platform solutions.",
    icon: FaMobileAlt,
    bgColor: "bg-purple-600",
  },
  {
    title: "UI and UX Design",
    link: "/ux-ui-design",
    description:
      "Our designs go beyond visuals — we create intuitive, human-centered interfaces that enhance engagement and drive conversions.",
    icon: FaPaintBrush,
    bgColor: "bg-pink-600",
  },
  {
    title: "Blockchain Development",
    link: "/blockchain-development",
    description:
      "We develop secure, scalable blockchain solutions — from smart contracts to full-stack dApps — tailored for the decentralized future.",
    icon: SiBlockchaindotcom,
    bgColor: "bg-yellow-600",
  },
  {
    title: "Game Development",
    link: "/game-development",
    description:
      "Whether it’s hyper-casual or immersive 3D, we build games that are engaging, performant, and ready for every platform.",
    icon: FaGamepad,
    bgColor: "bg-red-600",
  },
  {
    title: "Robotic Process Automation",
    link: "/rpa",
    description:
      "We automate repetitive tasks with intelligent bots that boost efficiency, reduce errors, and scale seamlessly across operations.",
    icon: FaRobot,
    bgColor: "bg-indigo-600",
  },
  {
    title: "Artificial Intelligence Development",
    link: "/ai-development",
    description:
      "We create AI-driven products that think, learn, and optimize — helping you solve real-world problems with intelligent automation.",
    icon: FaBrain,
    bgColor: "bg-teal-600",
  },
  {
    title: "Machine Learning Services",
    link: "/machine-learning",
    description:
      "Our custom ML models analyze patterns, automate decisions, and supercharge your digital ecosystem with data-powered intelligence.",
    icon: FaRobot,
    bgColor: "bg-green-600",
  },
  {
    title: "Cloud Computing Services",
    link: "/cloud-computing",
    description:
      "We architect scalable cloud environments that streamline deployment, enhance flexibility, and reduce operational costs.",
    icon: FaCloud,
    bgColor: "bg-blue-400",
  },
  {
    title: "Data Science Services",
    link: "/data-science",
    description:
      "We turn raw data into strategic assets using predictive models, real-time analytics, and compelling data visualizations.",
    icon: FaChartLine,
    bgColor: "bg-orange-600",
  },
  {
    title: "Natural Language Processing",
    link: "/nlp",
    description:
      "We build NLP systems that interpret, generate, and analyze human language — powering chatbots, summarizers, and intelligent insights.",
    icon: FaLanguage,
    bgColor: "bg-purple-400",
  },
  {
    title: "AI Video & Voice Calling",
    link: "/ai-video-voice",
    description:
      "We build AI-powered calling systems that enhance user communication with features like real-time transcription, analysis, and moderation.",
    icon: FaVideo,
    bgColor: "bg-red-400",
  },
];

export const whyChooseUs = [
  "We harness cutting-edge technologies to build scalable, future-ready digital solutions that keep your business ahead of the curve.",

  "Your vision drives everything we do — each solution is handcrafted to fit your unique needs, never based on one-size-fits-all templates.",

  "We support you through the entire journey, from idea to launch and beyond, with ongoing enhancements, optimizations, and updates.",

  "Our enterprise-grade quality standards ensure secure, high-performing solutions built for long-term growth and adaptability.",

  "We believe in clear, open communication and agile teamwork, collaborating closely with you to bring your goals to life.",

  "Backed by cross-industry expertise, we infuse every project with strategic insight and proven best practices.",
];

export const testimonials = [
  {
    quote:
      "We turned to TechnosparkAi to develop a secure blockchain platform for our business, and they did an outstanding job. Their deep expertise and innovative approach allowed us to create a system that enhances transparency and trust across our operations. The project was smooth from start to finish, and their team supported us at every stage. We’re excited to see how this technology can continue to drive our success.",
    author: "Michael H., CEO, SecureChain Solutions",
    rating: 5,
    gridClass: "col-span-1",
  },
  {
    quote:
      "Our team was looking for a development partner who could bring our game concept to life with both creativity and technical excellence. TechnosparkAi delivered exactly that. The game they developed for us has received incredible feedback and is now a favorite among our users. Their attention to detail, responsiveness, and ability to execute our vision made them an invaluable partner in this project.",
    author: "Sarah L., Creative Director, PixelPlay Games",
    rating: 5,
    gridClass: "col-span-1",
  },
  {
    quote:
      "We came to TechnosparkAi to help us create a mobile app for our e-commerce business, and they exceeded our expectations. The team worked closely with us to design and develop an app that’s fast, intuitive, and easy for our customers to use. Thanks to their innovative approach, we’ve seen an increase in user engagement and revenue. We're thrilled with the final product and the ongoing support we've received.",
    author: "Jonathan M., Founder, StyleHub",
    rating: 5,
    gridClass: "col-span-1",
  },
  {
    quote:
      "Partnering with TechnosparkAi to implement RPA has been a game-changer for our business. They helped us automate a range of repetitive tasks, which has resulted in significant time savings and greater accuracy. The efficiency boost has been incredible, allowing our team to focus on more strategic work. The process was smooth, and the results have been impressive.",
    author: "Cynthia T., Operations Manager, FinSolve Corp.",
    rating: 5,
    gridClass: "col-span-1",
  },
  {
    quote:
      "We worked with TechnosparkAi to build a machine learning model that would help us better predict customer behavior. The team’s expertise in data science and machine learning was evident from day one, and the final product has allowed us to make smarter decisions that have improved our marketing efforts and customer retention. Their collaborative approach and technical knowledge were key to the success of this project.",
    author: "Alice G., Data Scientist, Insight Marketing",
    rating: 5,
    gridClass: "col-span-1",
  },
];

export const highlights = [
  {
    id: 1,
    icon: file,
    title: "Intelligent Solutions at Every Stage",
    description:
      "From bold startups to global enterprises, Technospark AI delivers scalable, adaptable AI solutions that accelerate growth, enhance agility, and drive smarter automation.",
  },
  {
    id: 2,
    icon: graph,
    title: "Unlocking the Power of Quantum AI",
    description:
      "We merge quantum computing with advanced AI to enable faster decision-making, unlock deeper insights, and power breakthroughs with next-generation algorithms.",
  },
  {
    id: 3,
    icon: rocket,
    title: "Automation and Analytics That Drive Results",
    description:
      "Empower your operations with AI-driven automation, real-time data intelligence, and predictive analytics for smarter, faster, and more confident strategic moves.",
  },
  {
    id: 4,
    icon: start,
    title: "Pioneering the Future of Intelligence",
    description:
      "At Technospark AI, we push beyond conventional boundaries—fusing machine learning with universal intelligence to create limitless digital possibilities.",
  },
];

export const faqs = [
  {
    question: "What is Technospark AI?",
    answer: `• Technospark AI is a next-gen AI platform combining quantum computing, intelligent automation, and immersive storytelling tools.
• It empowers individuals and businesses to explore advanced AI use cases, craft adaptive narratives, and co-create digital ecosystems.`,
  },
  {
    question: "How does Technospark AI work?",
    answer: `• It operates on a modular AI architecture supported by quantum logic and real-time data analysis.
• Users can deploy AI agents, train custom intelligence models, and navigate interactive environments driven by dynamic input.`,
  },
  {
    question: "What are the core features of Technospark AI?",
    answer: `• Custom AI Companions – Design intelligent agents tailored to your needs.
• Interactive Knowledge Portals – Engage with evolving, context-aware learning hubs.
• Real-Time Decision Engines – Use quantum-backed AI for advanced analytics and predictions.
• Cross-Domain Integration – Seamlessly connect with APIs, platforms, and tools for enterprise or creative applications.`,
  },
  {
    question: "Who can benefit from using Technospark AI?",
    answer: `• Innovators & Startups – Looking to leverage AI for product or service innovation.
• Enterprises – Seeking automation, insight, and scalable intelligence solutions.
• Researchers & Developers – Exploring quantum models and experimental frameworks.
• Creatives & Designers – Building intelligent experiences, worlds, or characters.`,
  },
  {
    question: "How does Technospark AI drive innovation?",
    answer: `• Fosters creative problem-solving through AI-assisted ideation tools.
• Encourages collaboration via shared AI networks and idea ecosystems.
• Enhances user experiences with adaptive content and predictive intelligence.`,
  },
  {
    question: "Is there a community around Technospark AI?",
    answer: `• Yes, users can connect through discussion hubs, collaborate on AI projects, and share their creations.
• Regular meetups, hackathons, and AI symposia keep the network active and evolving.`,
  },
  {
    question: "How do I get started?",
    answer: `• Sign up through the Technospark AI platform.
• Choose a use case (business, research, creative).
• Start exploring tools, training AI agents, or joining existing initiatives.`,
  },
  {
    question: "What pricing plans are available?",
    answer: `• Free Tier – Basic access to AI tools, templates, and public models.
• Pro Tier – Includes enhanced analytics, private AI environments, and early feature access.
• Enterprise – Tailored solutions, dedicated support, and full integration services.`,
  },
  {
    question: "How secure is my data on Technospark AI?",
    answer: `• All data is encrypted and protected with quantum-resilient protocols.
• Users have full control over privacy settings and access permissions.
• Optional decentralized storage is available for enhanced data sovereignty.`,
  },
  {
    question: "Can I create and publish my own AI content?",
    answer: `• Absolutely. Users can build intelligent apps, characters, or tools and share them within the platform or externally.
• Monetization options and co-creation tools are available for approved creators.`,
  },
  {
    question: "How does Technospark AI support future tech standards?",
    answer: `• Integrates Web 5.0 protocols, decentralized ID, and AI-optimized edge computing.
• Designed to evolve with emerging tech—ensuring long-term relevance and adaptability.`,
  },
  {
    question: "Where can I get help or support?",
    answer: `• Visit the Help Center for guides, tutorials, and forums.
• Use live chat or email support for real-time assistance.
• Join our community to get feedback, share insights, and collaborate.`,
  },
];

export const coreValues = [
  {
    id: 1,
    icon: integrity,
    title: "Innovation",
    description:
      "We’re always pushing the boundaries of what’s possible, exploring new ideas, and adopting emerging technologies that create value for our clients.",
  },
  {
    id: 2,
    icon: quality,
    title: "Integrity",
    description:
      "We take pride in being honest, transparent, and dependable. Our clients trust us to deliver, and we honor that trust by always keeping their best interests at heart.",
  },
  {
    id: 3,
    icon: success,
    title: "Collaboration",
    description:
      "We believe that the best results come from working closely with our clients. By understanding their challenges and objectives, we develop solutions that are precisely aligned with their needs.",
  },
  {
    id: 4,
    icon: Infinite,
    title: "Excellence",
    description:
      "We don’t settle for anything less than the best. Whether we’re building a website or implementing a complex AI solution, we are committed to delivering top-quality results that exceed expectations.",
  },
];

export const visionAndMission = [
  {
    title: "Our Vision",
    description:
      "We envision a future where businesses of all sizes can seamlessly integrate the latest technologies to unlock new opportunities, drive sustainable growth, and stay competitive. As the digital world continues to evolve, our goal is to help you stay ahead of the curve—creating smart, scalable solutions that drive your business forward and enable you to thrive in a constantly changing marketplace.",
  },
  {
    title: "Our Mission",
    description:
      "Our mission is simple: to empower businesses through technology. We aim to deliver innovative, custom solutions that streamline processes, enhance customer interactions, and help companies adapt to an ever-evolving digital landscape. By combining industry knowledge with technical expertise, we provide solutions that make a real difference, ensuring that every client achieves tangible results and long-term success.",
  },
];

export const webDevelopmentServices = [
  {
    id: 1,
    title: "E-Commerce Web Applications",
    img: CgWebsite,
    description:
      "We craft scalable, AI-powered e-commerce platforms designed for future growth. Features include personalized product recommendations, intelligent search, automated inventory management, and seamless checkout experiences to maximize sales and user satisfaction.",
  },
  {
    id: 2,
    title: "Community & Networking Web Apps",
    img: GoFileMedia,
    description:
      "We build dynamic online communities with real-time feeds, AI-driven user recommendations, personalized content delivery, and smart engagement tools that foster loyalty, growth, and interaction.",
  },
  {
    id: 3,
    title: "Landing Pages & Microsites",
    img: TfiLayoutMediaRightAlt,
    description:
      "We design high-conversion landing pages and microsites optimized for lead generation. Our solutions feature AI-powered user journey mapping, integrated analytics, and compelling CTAs to maximize visitor engagement and ROI.",
  },
  {
    id: 4,
    title: "Custom Websites & Web Platforms",
    img: MdOutlineDashboardCustomize,
    description:
      "We specialize in developing custom websites and interactive web platforms tailored to your needs. Expect AI automation, bespoke workflows, real-time analytics, and intuitive user interfaces to enhance business operations and user satisfaction.",
  },
];

export const appDevelopmentServices = [
  {
    id: 1,
    title: "iOS Application Development",
    img: FaAppStoreIos,
    description:
      "We build high-performance iOS applications with sleek interfaces, integrating cutting-edge AI features like voice recognition, predictive behavior analytics, and personalized experiences—all leveraging the latest Apple frameworks and technologies.",
  },
  {
    id: 2,
    title: "Android App Solutions",
    img: IoLogoAndroid,
    description:
      "We create powerful, scalable Android applications with built-in AI capabilities for automation, predictive UX design, intelligent notifications, and robust security, ensuring seamless performance across all Android devices.",
  },
  {
    id: 3,
    title: "Cross-Platform Flutter Applications",
    img: SiFlutter,
    description:
      "We leverage Flutter to develop beautiful, high-performance cross-platform applications. With AI-enhanced personalization, real-time optimization, and adaptive UX, our apps deliver consistent experiences across iOS and Android ecosystems.",
  },
  {
    id: 4,
    title: "Hybrid Mobile App Development",
    img: TbDeviceMobileCode,
    description:
      "We develop agile, cross-platform hybrid apps that feel native. Our AI-driven hybrid apps offer smart offline capabilities, seamless data synchronization, and faster market delivery to give you a competitive edge.",
  },
];

export const futureTechSectors = [
  {
    id: 1,
    img: financial,
    title: "Financial Services",
    description:
      "Shaping the future of finance through AI-driven risk assessment, blockchain smart contracts, and decentralized finance innovations.",
  },
  {
    id: 2,
    img: healthcare,
    title: "Healthcare",
    description:
      "Advancing healthcare with AI-powered diagnostics, personalized treatment plans, and intelligent patient monitoring systems.",
  },
  {
    id: 3,
    img: manufacturing,
    title: "Manufacturing",
    description:
      "Reinventing production with intelligent automation, predictive maintenance, and data-driven smart factories.",
  },
  {
    id: 4,
    img: energy,
    title: "Energy",
    description:
      "Powering the energy sector with AI-based optimization, seamless renewable integration, and smart grid technologies.",
  },
  {
    id: 5,
    img: retail,
    title: "Retail",
    description:
      "Redefining retail with AI-driven product recommendations, personalized shopping experiences, and frictionless checkouts.",
  },
  {
    id: 6,
    img: realestate,
    title: "Real Estate",
    description:
      "Transforming real estate operations with intelligent property management, automated leasing, and blockchain-enabled contracts.",
  },
  {
    id: 7,
    img: food,
    title: "Food and Beverage",
    description:
      "Revolutionizing food services through AI-powered supply chains, predictive inventory management, and smart menu engineering.",
  },
  {
    id: 8,
    img: transportation,
    title: "Transportation",
    description:
      "Driving the future of transport with AI-optimized routes, autonomous logistics, and intelligent fleet management.",
  },
  {
    id: 9,
    img: communication,
    title: "Communication",
    description:
      "Elevating communication through AI-powered virtual assistants, smart messaging platforms, and real-time analytics.",
  },
  {
    id: 10,
    img: electronics,
    title: "Consumer Electronics",
    description:
      "Innovating electronics with AI-driven personalization, smart home automation, and connected wearable technologies.",
  },
  {
    id: 11,
    img: aerospace,
    title: "Aerospace and Defense",
    description:
      "Modernizing aerospace and defense with intelligent automation, advanced sensor technologies, and secure smart systems.",
  },
  {
    id: 12,
    img: chemicals,
    title: "Chemicals",
    description:
      "Optimizing chemical manufacturing with AI-enhanced automation, smart quality controls, and predictive process management.",
  },
  {
    id: 13,
    img: mining,
    title: "Mining",
    description:
      "Revolutionizing mining operations through AI-driven exploration, autonomous equipment, and safety optimization systems.",
  },
  {
    id: 14,
    img: agriculture,
    title: "Agriculture",
    description:
      "Boosting agricultural productivity with AI-based crop monitoring, smart irrigation, and automated farming solutions.",
  },
  {
    id: 15,
    img: construction,
    title: "Construction",
    description:
      "Reimagining construction with AI-powered project management, autonomous machinery, and predictive maintenance technologies.",
  },
  {
    id: 16,
    img: hospitality,
    title: "Hospitality",
    description:
      "Enhancing guest experiences with AI-driven personalization, smart service automation, and predictive demand planning.",
  },
  {
    id: 17,
    img: entertainment,
    title: "Entertainment",
    description:
      "Transforming entertainment with AI-enhanced content creation, smart audience analytics, and immersive digital experiences.",
  },
  {
    id: 18,
    img: consulting,
    title: "Consulting",
    description:
      "Redefining consulting with AI-assisted decision-making, predictive insights, and automated research capabilities.",
  },
  {
    id: 19,
    img: legal,
    title: "Legal",
    description:
      "Revolutionizing legal services with AI-powered contract analysis, smart document automation, and predictive case outcomes.",
  },
];

// portfolio images (web development)
export const webPortfolio = [
  // {
  //   id: 1,
  //   img: FiveGHomesImg,
  //   title: "5g Homes",
  //   link: "https://5ghighspeedinternet.co",
  // },
  {
    id: 2,
    img: ColdCreekcapImg,
    title: "Cold Creekcap",
    link: "https://www.coldcreekcap.com",
  },
  {
    id: 3,
    img: ThinkReality,
    title: "Think Reality",
    link: "https://thinkrealty.ae",
  },
  {
    id: 4,
    img: AkashMegaMart,
    title: "Akash Mega Mart",
    link: "https://akashmegamart.com/",
  },
  {
    id: 5,
    img: Midwam,
    title: "Midwam – Immersive Experience Design Company",
    link: "https://www.midwam.com/en/about",
  },
];

// portfolio images (app development)
export const appPortfolio = [
  {
    id: 1,
    img: AkashMegaMartApp,
    title: "Akash Mega Mart Mobile App",
    link: "https://play.google.com/store/apps/details?id=com.app.akash_mega_mart",
  },
  {
    id: 2,
    img: FeelItApp,
    title: "FeelIt Mobile App",
    link: "https://play.google.com/store/apps/details?id=com.feelit.feelit_app",
  },
  {
    id: 3,
    img: KlikomicsApp,
    title: "Klikomics Mobile App",
    link: "https://play.google.com/store/apps/details?id=com.klikomics.android&pcampaignid=web_share",
  },
  {
    id: 4,
    img: AutosnapApp,
    title: "AutoSnap Mobile App",
    link: "https://play.google.com/store/apps/details?id=com.Zigna.AutoSnap&pcampaignid=web_share",
  },
  {
    id: 5,
    img: RentopImg,
    title: "Rentop Bike and Car",
    link: "https://play.google.com/store/apps/details?id=com.rentop&pcampaignid=web_share",
  },
];

// portfolio images (blockchain development)
export const blockchainPortfolio = [
  {
    id: 1,
    img: Nanoflow,
    title: "Nanoflow",
    link: "https://play.google.com/store/apps/details?id=com.nanfolo.user.app",
  },
  {
    id: 2,
    img: Padipal,
    title: "Padipal",
    link: "https://padiepal.com",
  },
  {
    id: 3,
    img: Cryptopadie,
    title: "Cryptopadie",
    link: "https://cryptopadie.com/",
  },
];
