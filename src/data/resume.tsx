import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Md. Zakaria Shagor",
  initials: "ZS",
  url: "https://dillion.io",
  location: "Dhaka, Bangladesh",
  locationLink: "https://www.google.com/maps/place/dhaka",
  description:
    "Breaking bugs, not builds — QA Engineer ensuring flawless digital experiences.",
  summary:
    "I'm a QA Engineer with over 4 years of experience in manual and automated testing of web, mobile, and API-based applications. I specialize in tools like Selenium, Playwright, Cypress, Postman, and JMeter, and I’ve successfully contributed to test strategy design, automation framework development, and defect reduction in Agile environments. I’m committed to delivering high-quality software through collaboration, research, and continuous improvement.",
  avatarUrl: "/me.png",
  skills: [
    "Python",
    "JavaScript",
    "Java",
    "Web Automation",
    "Test Process",
    "Test Automation",
    "SDLC",
    "STLC",
    "SQL",
    "CI/CD",
    "Github",
    "API Testing",
    "Load Testing",
    "Performance Testing",
    "Software Testing",
    "Agile Methodologies",
    "Playwright",
    "Selenium",
    "Cypress",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "zakariashagorr@gmail.com",
    mob: "+8801307283035",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/iamzakaria",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/zakariashagor/",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "",
        icon: Icons.x,

        navbar: false,
      },
      Youtube: {
        name: "Youtube",
        url: "",
        icon: Icons.youtube,
        navbar: false,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "EDGE Project, Bangladesh Computer Council",
      href: "https://edge.gov.bd/",
      badges: [],
      location: "On-site",
      title: "Software Quality Assurance Engineer",
      logoUrl: "/ict.png",
      start: "February 2024",
      end: "Present",
      description:
        "As an SQA Engineer on the EDGE Project under the ICT Division, I was responsible for designing and executing both manual and automated tests for a high-traffic training platform supporting 100,000+ concurrent users. I performed functional, regression, and API testing using tools like Selenium, Postman, and REST Assured, and supported performance testing with JMeter and Locust. My efforts led to the early detection of 90% of critical bugs pre-release and a 60% reduction in manual testing through automation. I also contributed to UI/UX improvements and collaborated closely with Agile teams to ensure high-quality, timely deliveries.",
    },
    {
      company: "SoftBD Limited",
      badges: [],
      href: "https://softbdltd.com/",
      location: "On-site",
      title: "SQA Engineer",
      logoUrl: "/sbd.png",
      start: "January 2021",
      end: "February 2024",
      description:
        "As an SQA Engineer at SoftBD Limited, I was responsible for planning, executing, and maintaining manual and automated test cases for various government and educational software projects. I conducted functional, regression, and UAT testing to ensure the reliability of platforms like Eporcha, Konnect, and Futurenation. I used tools like Postman for API testing, and participated in test documentation, bug reporting, and sprint activities within Agile teams. My role also involved cross-browser testing, UI/UX validation, and collaborating with developers to resolve defects efficiently before release."
    },
  ],
  education: [
    {
      school: "Daffodil International University",
      href: "https://daffodilvarsity.edu.bd/",
      degree: "Electrical and Electronics Engineering (EEE)",
      logoUrl: "/diu.png",
      start: "2016",
      end: "2019",
    },
    {
      school: "MCET Engineering College",
      href: "https://bteb.gov.bd/",
      degree: "Diploma in Electrical Engineering",
      logoUrl: "/bteb.png",
      start: "2012",
      end: "2016",
    },
    {
      school: "Power Development Board High School",
      href: "https://www.sohopathi.com/power-development-board-high-school-ghorashal/",
      degree: "Secondary School Certificate (SSC)",
      logoUrl: "/pdb.png",
      start: "2006",
      end: "2011",
    },
  ],
  projects: [
    {
      title: "Digital Leadership Academy (Training Management System)",
      href: "https://training.edge.gov.bd/",
      dates: "Year 2024-2025 (EDGE Project)",
      active: true,
      description:
        "Digital Leadership Academy's comprehensive training programs management system.",
      technologies: [
        "Automation",
        "Performance",
        "Database",
        "Test Process Management",
        "API",
        "UAT",
        "STLC",
      ],
      links: [
        {
          type: "Website",
          href: "https://training.edge.gov.bd/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/tmp.png",
      video:
        "",
    },
    {
      title: "Unified Communication Tool (Convay)",
      href: "https://convay.com/",
      dates: "Year 2025 (EDGE Project)",
      active: true,
      description:
        "Convay is more than just a platform for video calls. It is the new collaborative masterpiece to support synchronized teamwork and communication.",
      technologies: [
        "Cross Platform",
        "UAT",
        "Test Process Management",
        "Monitoring",
        "Requirement Analysis",
        "STLC",
      ],
      links: [
        {
          type: "Website",
          href: "https://convay.com/",
          icon: <Icons.globe className="size-3" />,
        },
        /*{
          type: "Source",
          href: "https://github.com/magicuidesign/magicui",
          icon: <Icons.github className="size-3" />,
        },*/
      ],
      image: "/uct.png",
      video: "",
    },
    {
      title: "Eporcha (Ministry of Land)",
      href: "https://dlrms.land.gov.bd/",
      dates: "Year 2021-2024 (SoftBD Limited)",
      active: true,
      description:
        "Enhancing dynamism and transparency in all land-related services through the implementation of software called “Land Management Automation Project” for integrated land management.",
      technologies: [
        "UAT",
        "Manual Testing",
        "Database",
        "Test Case Management",
        "Bug Reporting",
        "Requirement Analysis",
        "Technical Documentation",
        "API",
      ],
      links: [
        {
          type: "Website",
          href: "https://dlrms.land.gov.bd/",
          icon: <Icons.globe className="size-3" />,
        },
        /*{
          type: "Source",
          href: "https://github.com/magicuidesign/magicui",
          icon: <Icons.github className="size-3" />,
        },*/
      ],
      image: "/dlrms.png",
      video: "",
    },
    {
      title: "Konnect",
      href: "https://konnect.edu.bd/",
      dates: "Year 2022-2023 (SoftBD Limited)",
      active: true,
      description:
        "Konnect is an online platform that helps to guarantee that 36 million adolescents across Bangladesh have access to academic and entertainment materials. Konnect improves connection amongst all youth development efforts and equips youth with the information and abilities they will need to succeed in the 21st century beyond their school curriculum.",
      technologies: [
        "UAT",
        "Manual Testing",
        "Technical Documentation",
        "Test Case Management",
        "Bug Reporting",
        "Requirement Analysis",
      ],
      links: [
        {
          type: "Website",
          href: "https://konnect.edu.bd/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/konnect.png",
      video:
        "",
    },
    {
      title: "Teletalk",
      href: "https://futurenation.edu.bd/",
      dates: "Year 2022 (SoftBD Limited)",
      active: true,
      description:
        "Teletalk Bangladesh Limited is the only government-owned mobile network operator in Bangladesh, operating under the Ministry of Posts, Telecommunications, and Information Technology. Since its inception in 2004, Teletalk has played a pivotal role in ensuring affordable and inclusive mobile communication services across the country—especially in remote and underserved regions.",
      technologies: [
        "UAT",
        "Manual Testing",
        "Technical Documentation",
        "Test Case Management",
        "Bug Reporting",
        "Requirement Analysis",
      ],
      links: [
        {
          type: "Website",
          href: "https://www.teletalk.com.bd/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/tt.png",
      video:
        "",
    },
    {
      title: "Futurenation",
      href: "https://platform.futurenation.gov.bd/",
      dates: "Year 2023 (SoftBD Limited)",
      active: true,
      description:
        "Futurenation is a platform that provides students with the opportunity to learn about the latest technologies and trends in the job market. It offers a wide range of courses and resources to help students develop their skills and prepare for their future careers.",
      technologies: [
        "UAT",
        "Manual Testing",
        "Technical Documentation",
        "Test Case Management",
        "Bug Reporting",
        "Requirement Analysis",
      ],
      links: [
        {
          type: "Website",
          href: "https://platform.futurenation.gov.bd/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/fn.png",
      video:
        "",
    },
  ],
  hackathons: [
    {
      title: "Web Scraper Validator",
      dates: "January 2025",
      location: "",
      description:
        "A Python-based SQA tool that scrapes remote developer and QA jobs from RemoteOK, validates their quality, and displays results in a Flask dashboard. Logs data to SQLite, includes pytest tests, and showcases automation",
      image:
        "/web-crawler.png",
      mlh: "",
      links: [ 
        {
        title: "Github",
        icon: <Icons.github className="h-4 w-4" />,
        href: "https://github.com/iamzakaria/web-scraper-validator",
      },],
    },
    {
      title: "Login Authentication System",
      dates: "April 2025",
      location: "",
      description:
        "This project automates the testing of a login and registration system using Playwright with Python, and uses a MySQL database as the backend for storing user credentials. It validates login scenarios including registration, authentication, invalid credentials, and logout flow.",
      image:
        "/login.png",
      mlh: "",
      links: [ {
        title: "Github",
        icon: <Icons.github className="h-4 w-4" />,
        href: "https://github.com/iamzakaria/auth_project",
      },],
    },
    {
      title: "FirstNet Public Safety Hackathon",
      dates: "March 23rd - 24th, 2018",
      location: "San Francisco, California",
      description:
        "Developed a mobile application which communcicates a victims medical data from inside an ambulance to doctors at hospital.",
      icon: "public",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/firstnet.png",
      links: [],
    },
    {
      title: "DeveloperWeek Hackathon",
      dates: "February 3rd - 4th, 2018",
      location: "San Francisco, California",
      description:
        "Developed a web application which aggregates social media data regarding cryptocurrencies and predicts future prices.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/developer-week.jpg",
      links: [
        {
          title: "Github",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/cryptotrends/cryptotrends",
        },
      ],
    },
    {
      title: "HackDavis",
      dates: "January 20th - 21st, 2018",
      location: "Davis, California",
      description:
        "Developed a mobile application which allocates a daily carbon emission allowance to users to move towards a sustainable environment.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-davis.png",
      win: "Best Data Hack",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2018/white.svg",
      links: [
        {
          title: "Devpost",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://devpost.com/software/my6footprint",
        },
        {
          title: "ML",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/Wallet6/my6footprint-machine-learning",
        },
        {
          title: "iOS",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/Wallet6/CarbonWallet",
        },
        {
          title: "Server",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/Wallet6/wallet6-server",
        },
      ],
    },
    {
      title: "ETH Waterloo",
      dates: "October 13th - 15th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed a blockchain application for doctors and pharmacists to perform trustless transactions and prevent overdosage in patients.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/eth-waterloo.png",
      links: [
        {
          title: "Organization",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/ethdocnet",
        },
      ],
    },
    {
      title: "Hack The North",
      dates: "September 15th - 17th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed a virtual reality application allowing users to see themselves in third person.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-north.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Streamer Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/justinmichaud/htn2017",
        },
        {
          title: "Client Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/RTSPClient",
        },
      ],
    },
    {
      title: "Hack The 6ix",
      dates: "August 26th - 27th, 2017",
      location: "Toronto, Ontario",
      description:
        "Developed an open platform for people shipping items to same place to combine shipping costs and save money.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-6ix.jpg",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/ShareShip/ShareShip",
        },
        {
          title: "Site",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://share-ship.herokuapp.com/",
        },
      ],
    },
    {
      title: "Stupid Hack Toronto",
      dates: "July 23rd, 2017",
      location: "Toronto, Ontario",
      description:
        "Developed a chrome extension which tracks which facebook profiles you have visited and immediately texts your girlfriend if you visited another girls page.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/stupid-hackathon.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/nsagirlfriend/nsagirlfriend",
        },
      ],
    },
    {
      title: "Global AI Hackathon - Toronto",
      dates: "June 23rd - 25th, 2017",
      location: "Toronto, Ontario",
      description:
        "Developed a python library which can be imported to any python game and change difficulty of the game based on real time emotion of player. Uses OpenCV and webcam for facial recognition, and a custom Machine Learning Model trained on a [Kaggle Emotion Dataset](https://www.kaggle.com/c/challenges-in-representation-learning-facial-expression-recognition-challenge/leaderboard) using [Tensorflow](https://www.tensorflow.org/Tensorflow) and [Keras](https://keras.io/). This project recieved 1st place prize at the Global AI Hackathon - Toronto and was also invited to demo at [NextAI Canada](https://www.nextcanada.com/next-ai).",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/global-ai-hackathon.jpg",
      win: "1st Place Winner",
      links: [
        {
          title: "Article",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://syncedreview.com/2017/06/26/global-ai-hackathon-in-toronto/",
        },
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/TinySamosas/",
        },
      ],
    },
    {
      title: "McGill AI for Social Innovation Hackathon",
      dates: "June 17th - 18th, 2017",
      location: "Montreal, Quebec",
      description:
        "Developed realtime facial microexpression analyzer using AI",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/ai-for-social-good.jpg",
      links: [],
    },
    {
      title: "Open Source Circular Economy Days Hackathon",
      dates: "June 10th, 2017",
      location: "Toronto, Ontario",
      description:
        "Developed a custom admin interface for food waste startup <a href='http://genecis.co/'>Genecis</a> to manage their data and provide analytics.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/open-source-circular-economy-days.jpg",
      win: "1st Place Winner",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/genecis",
        },
      ],
    },
    {
      title: "Make School's Student App Competition 2017",
      dates: "May 19th - 21st, 2017",
      location: "International",
      description: "Improved PocketDoc and submitted to online competition",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/make-school-hackathon.png",
      win: "Top 10 Finalist | Honourable Mention",
      links: [
        {
          title: "Medium Article",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://medium.com/make-school/the-winners-of-make-schools-student-app-competition-2017-a6b0e72f190a",
        },
        {
          title: "Devpost",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://devpost.com/software/pocketdoc-react-native",
        },
        {
          title: "YouTube",
          icon: <Icons.youtube className="h-4 w-4" />,
          href: "https://www.youtube.com/watch?v=XwFdn5Rmx68",
        },
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/pocketdoc-react-native",
        },
      ],
    },
    {
      title: "HackMining",
      dates: "May 12th - 14th, 2017",
      location: "Toronto, Ontario",
      description: "Developed neural network to optimize a mining process",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-mining.png",
      links: [],
    },
    {
      title: "Waterloo Equithon",
      dates: "May 5th - 7th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed Pocketdoc, an app in which you take a picture of a physical wound, and the app returns common solutions or cures to the injuries or diseases.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/waterloo-equithon.png",
      links: [
        {
          title: "Devpost",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://devpost.com/software/pocketdoc-react-native",
        },
        {
          title: "YouTube",
          icon: <Icons.youtube className="h-4 w-4" />,
          href: "https://www.youtube.com/watch?v=XwFdn5Rmx68",
        },
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/pocketdoc-react-native",
        },
      ],
    },
    {
      title: "SpaceApps Waterloo",
      dates: "April 28th - 30th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed Earthwatch, a web application which allows users in a plane to virtually see important points of interest about the world below them. They can even choose to fly away from their route and then fly back if they choose. Special thanks to CesiumJS for providing open source world and plane models.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/space-apps.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/earthwatch",
        },
      ],
    },
    {
      title: "MHacks 9",
      dates: "March 24th - 26th, 2017",
      location: "Ann Arbor, Michigan",
      description:
        "Developed Super Graphic Air Traffic, a VR website made to introduce people to the world of air traffic controlling. This project was built completely using THREE.js as well as a node backend server.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/mhacks-9.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/threejs-planes",
        },
      ],
    },
    {
      title: "StartHacks I",
      dates: "March 4th - 5th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed at StartHacks 2017, Recipic is a mobile app which allows you to take pictures of ingredients around your house, and it will recognize those ingredients using ClarifAI image recognition API and return possible recipes to make. Recipic recieved 1st place at the hackathon for best pitch and hack.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/starthacks.png",
      win: "1st Place Winner",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Source (Mobile)",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/mattBlackDesign/recipic-ionic",
        },
        {
          title: "Source (Server)",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/mattBlackDesign/recipic-rails",
        },
      ],
    },
    {
      title: "QHacks II",
      dates: "February 3rd - 5th, 2017",
      location: "Kingston, Ontario",
      description:
        "Developed a mobile game which enables city-wide manhunt with random lobbies",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/qhacks.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Source (Mobile)",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/human-huntr-react-native",
        },
        {
          title: "Source (API)",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/mattBlackDesign/human-huntr-rails",
        },
      ],
    },
    {
      title: "Terrible Hacks V",
      dates: "November 26th, 2016",
      location: "Waterloo, Ontario",
      description:
        "Developed a mock of Windows 11 with interesting notifications and functionality",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/terrible-hacks-v.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/justinmichaud/TerribleHacks2016-Windows11",
        },
      ],
    },
    {
      title: "Portal Hackathon",
      dates: "October 29, 2016",
      location: "Kingston, Ontario",
      description:
        "Developed an internal widget for uploading assignments using Waterloo's portal app",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/portal-hackathon.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/UWPortalSDK/crowmark",
        },
      ],
    },
  ],
} as const;
