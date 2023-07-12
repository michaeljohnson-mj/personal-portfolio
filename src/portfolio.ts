/* Change this file to get your personal Porfolio */

// SEO Related settings
const seo = {
  title: "Portfolio - Michael Johnson | Software Engineer",
  description:
    "A software engineer who focuses on building engaging and interactive applications across the spectrum of devices and platforms by using modern technologies, frameworks etc.",
  og: {
    title: "Portfolio - Michael Johnson | Software Engineer",
    type: "website",
    url: "http://michaeljohnson.tech/",
  },
};

// Home Page
const greeting = {
  greetingText: "Hi! I'm ",
  name: "Michael Johnson",
  introText:
    "A software engineer who focuses on building engaging and interactive applications across the spectrum of devices and platforms by using modern technologies, frameworks etc.",
  aboutMeText:
    "A Software Engineer based in Bengaluru, whose primary focus is on Web and Mobile Application Development using ReactJS and React Native with an additional experience on Backend development using NodeJS and ExpressJS. I have been employed in the tech industry since 2016. Having worked in a startup environment for over 5.5 years, I have delivered projects both in individual capacity and as a team member and also managed various teams and resources across different functional groups. I've done software development starting from the ideation phase to delivery and have also been directly involved with business owners in gathering requirements and planning.",
  resumeLink:
    "https://drive.google.com/file/d/1GvYvv-mjs1DKtJtaXCqT2-MU26Hk8MPF/view?usp=sharing",
  alertPillText: "🌟 Looking for a Software Engineer ?",
};

const socialMediaLinks = [
  {
    name: "Github",
    link: "https://github.com/ashutosh1919",
    fontAwesomeIcon: "fa-github",
    backgroundColor: "#181717",
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/michaeljohnson-mj/",
    fontAwesomeIcon: "fa-linkedin-in",
    backgroundColor: "#0077B5",
  },
  {
    name: "Gmail",
    link: "mailto:michaeljohnsonblrtech@gmail.com",
    fontAwesomeIcon: "fa-google",
    backgroundColor: "#D14836",
  },
];

// Skills Page
const skills = {
  title: "Technical Capabilities",
  subtitle:
    "As a software professional with a motive to build quality products, I have been exposed to a wide array of tools, frameworks and languages.",
  skills: [
    {
      skillName: "HTML 5",
      imageName: "ic_html5",
    },
    {
      skillName: "CSS 3",
      imageName: "ic_css3",
    },
    {
      skillName: "JavaScript",
      imageName: "ic_javascript",
    },
    {
      skillName: "Typescript",
      imageName: "ic_typescript",
    },
    {
      skillName: "React JS",
      imageName: "ic_reactjs",
    },
    {
      skillName: "React Native",
      imageName: "ic_react_native",
    },
    {
      skillName: "Redux",
      imageName: "ic_redux",
    },
    {
      skillName: "Node JS",
      imageName: "ic_nodejs",
    },
    {
      skillName: "Angular",
      imageName: "ic_angularjs",
    },
    {
      skillName: "GIT",
      imageName: "ic_git",
    },
    {
      skillName: "NPM",
      imageName: "ic_npm",
    },
  ],
};

// Projects Page
const projects = {
  title: "My Work & Portfolio",
  description:
    "Here is a list of some of the projects I've worked on. The projects I've worked on makes use of a vast variety of latest technology and tools.",
  projects: [
    {
      title: "Intentwise",
      subtitle: "Amazon Advertising, PPC Optimization Software Tool",
      imageName: "ic_intentwise",
      webUrl: "https://app.intentwise.com/#!/login",
      appstoreUrl: "https://apps.apple.com/in/app/intentwise/id1465563563",
      playstoreUrl:
        "https://play.google.com/store/apps/details?id=com.intentwise.adoptimizer.android",
    },
    {
      title: "Talisma CRM Mobile",
      subtitle:
        "CRM Solutions for Enterprises by providing them with critical real-time information",
      imageName: "ic_talisma",
      webUrl: null,
      appstoreUrl: "https://apps.apple.com/us/app/talisma-crm/id1019125779",
      playstoreUrl:
        "https://play.google.com/store/apps/details?id=com.talisma.mobile&hl=en_IN&gl=US",
    },
    {
      title: "Signify Saathi",
      subtitle:
        "Signify Saathi is a loyalty platform to incentivize its channel partners",
      imageName: "ic_signify",
      webUrl: "https://ecolink.emproto.com",
      appstoreUrl: null,
      playstoreUrl:
        "https://play.google.com/store/apps/details?id=com.emproto.ecolink",
    },
    {
      title: "Phable",
      subtitle: "Empower your life with intelligent chronic disease management",
      imageName: "ic_phablecare",
      webUrl: "https://admin.phablecare.com/login",
    },
    {
      title: "Titan Converge",
      subtitle:
        "A Product to bring down the time taken by Product designers at Titan, using the concept of GANs (Generative Adversarial Networks)",
      imageName: "ic_titan",
      webUrl: null,
    },
    {
      title: "Black Tulip Flowers",
      subtitle:
        "A product using which we can purchase flowers and bouquets online",
      imageName: "ic_btf",
      webUrl:
        "http://admin-btf-fe-stage.s3-website.ap-south-1.amazonaws.com/login",
    },
  ],
};

// Education Page
const degrees = {
  degrees: [
    {
      title: "Sambhram Institute of Technology, Bengaluru",
      subtitle: "Bachelor of Engineering in Information Science",
      duration: "2011 - 2015",
      website_link: "https://sambhramit.com/",
    },
    {
      title: "St Joseph's Pre University College, Bengaluru",
      subtitle: "Pre University Education",
      duration: "2009 - 2011",
      website_link: "https://www.sjpuc.in/",
    },
  ],
};

// Work Experience Page
const workExperience = {
  title: "Work History",
  subtitle:
    "I have over 5.5 years of experience in building software by working in a startup environment.",
  experiences: [
    {
      title: "Senior Software Engineer",
      company: "Emproto Technologies Private Limited, Bengaluru",
      duration: "2017 - Current",
      description:
        "Developed large scale highly interactive Frontend / User Interfaces for web and mobile applications.",
    },
    {
      title: "Software Engineer",
      company: "Springs Technologies, Bengaluru",
      duration: "2016 - 2017",
      description:
        "Trained on multiple technologies as a Junior engineer and developed small web applications and worked on POCs.",
    },
  ],
};

// Contact Page
const contactMe = {
  title: "Get In Touch",
  description:
    "I am available on Linkedin. You can message me, I will reply within 24 to 48 hours. I can help you with Web and Mobile Application Development.",
  contacts: [
    {
      title: "Email",
      contact: "michaeljohnson.dev@gmail.com",
      isEmail: true,
    },
    {
      title: "Location",
      contact: "Bengaluru, Karnataka, India 560010",
      isEmail: false,
    },
  ],
};

// Footer Page
const footer = {
  footerText: "Made with ❤️ by Michael Johnson",
};

export {
  seo,
  greeting,
  socialMediaLinks,
  skills,
  projects,
  degrees,
  workExperience,
  contactMe,
  footer,
};
