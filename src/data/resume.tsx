import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Zakaria Shagor",
  initials: "ZS",
  url: "https://linkedin.com/in/zakariashagor",
  location: "Dhaka, Bangladesh",
  locationLink: "https://www.google.com/maps/place/dhaka",
  description:
    "Breaking bugs, not builds — QA Engineer ensuring flawless digital experiences.",
  summary:
    "I’m a QA Engineer and IT Specialist with over 5 years of experience in manual and automated testing of web, mobile, and API-based applications. I’m skilled in tools like Selenium, Playwright, Cypress, Postman, and JMeter, and have successfully contributed to test strategy design, automation framework development, and defect reduction in Agile environments. With a solid foundation in IT systems and support, I bring a well-rounded technical perspective and a strong commitment to being a proactive, collaborative team player in any IT organization. I’m passionate about delivering high-quality software through continuous learning, cross-functional teamwork, and a user-focused mindset.",
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
    "IT Support & Troubleshooting",
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
    {
      company: "Executive Machines Limited",
      href: "https://executivemachines.com/about-us/",
      badges: [],
      location: "On-site",
      title: "IT Support Professional",
      logoUrl: "/apple.png",
      start: "July 2019",
      end: "December 2020",
      description:
        "Operated within Apple Authorized Service Provider standards, ensuring compliance with Apple repair, Quality control & support protocols.",
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
      title: "Nike E-Commerce Automation with Selenium",
      dates: "January 2025",
      location: "",
      description:
        "A robust Python script using Selenium WebDriver to automate a purchase flow on the Nike Canada website (nike.com/ca). The script navigates the landing page, searches for a product ('Jordan'), selects a size, adds it to the cart, and initiates checkout—all structured with Page Object Model (POM) for maintainability and pytest for testing.",
      icon: "/nike.png",
      image:
        "/nike.png",
      links: [
          {
          title: "Github",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/iamzakaria/nike-ca-selenium",
        },],
    },
    {
      title: "Swag Labs E-Commerce Automation",
      dates: "February 2025",
      location: "",
      description:
        "The automated test for the Swag Labs demo website validates e-commerce functionality. It navigates to the homepage, logs in with valid credentials (e.g., standard_user, secret_sauce), and verifies login by checking the inventory page URL. A product is added to the cart, and its presence is confirmed by checking the cart contents. This ensures reliable login and cart operations for e-commerce testing.",
      image:
        "/swag.png",
      links: [
        {
          title: "Github",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/iamzakaria/saucedemo",
        },
      ],
    },
    {
      title: "Training Management System Batch Automation",
      dates: "October 2024",
      location: "EDGE Project (Repetitive Task)",
      description:
        "This project is a automation solution that integrates Playwright for web automation and Pandas for generating synthetic trainee data in Excel. The script automates the batch creation process for government training by first generating random trainee details (name, phone number, email, organization, and designation) and saving them in an Excel file. Then, using Playwright, it logs into the training portal, navigates through the UI, fills out the batch creation form, uploads the generated Excel file, and submits the form. The automation ensures the process is completed successfully by verifying confirmation messages. The project is structured with modular components, including a dedicated data generator, Playwright script, and logging system, making it scalable and maintainable. By integrating GitHub Actions, this script can be scheduled to run automatically, enabling continuous integration and deployment (CI/CD) for training batch management.",
      image:
        "/edge.png",
      win: "",
      mlh: "",
      links: [
        {
          title: "Github",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/iamzakaria/edge-tmp",
        },
      ],
    },
    
  ],
  certifications: [
    {
      title: "Python Programming Fundamentals",
      description: "Gained a comprehensive understanding of Python programming, data structures, and algorithms to enhance software testing and automation skills.",
      date: "May 2025",
      issuer: "DataCamp",
      image: "/data2.png",
      links: [
        {
          icon: "🔗",
          title: "View Certificate",
          href: "https://www.datacamp.com/completed/statement-of-accomplishment/track/19db24fffa9967d44d8981f3b63bfd43915969d7",
        },
      ],
    },
    {
      title: "SQL Fundamentals",
      description: "Developed a solid understanding of SQL fundamentals and applied them in database testing to ensure data integrity, accuracy, and performance.",
      date: "April 2025",
      issuer: "DataCamp",
      image: "/data2.png",
      links: [
        {
          icon: "🔗",
          title: "View Certificate",
          href: "https://www.datacamp.com/completed/statement-of-accomplishment/track/95688e01215fec958f86046b57515abf77a9cc17",
        },
      ],
    },
    {
      title: "Postman API Fundamentals",
      description: "Gained hands-on experience in API testing using Postman, including creating and executing test cases, validating responses, and automating API tests.",
      date: "April 2025",
      issuer: "Postman",
      image: "/postman.png",
      links: [{
        icon: "🔗",
        title: "View Certificate",
        href: "https://badgr.com/public/assertions/_3jpK4i5Rw2zNvFALq7RjQ?identity__email=zakaria1.edge@gmail.com",
      },],
    },
    {
      title: "Foundation of CyberSecurity",
      description: "Gained a foundational understanding of cybersecurity principles, practices, and tools to enhance software security and protect against vulnerabilities.",
      date: "June 2024",
      issuer: "Google",
      image: "/go.png",
      links: [
        {
          icon: "🔗",
          title: "View Certificate",
          href: "https://www.coursera.org/account/accomplishments/certificate/27WPY432GABD",
        },
      ],
    },
    {
      title: "Software Testing & Validation",
      description: "Gained a comprehensive understanding of software testing principles, methodologies, and tools to ensure software quality and reliability.",
      date: "May 2024",
      issuer: "University of Leeds",
      image: "/leeds.svg",
      links: [
        {
          icon: "🔗",
          title: "View Certificate",
          href: "https://www.coursera.org/account/accomplishments/verify/GMF23H6W85AH",
        },
        
      ],
    },
    {
      title: "UX Design Process",
      description: "Gained a comprehensive understanding of the UX design process, including user research, prototyping, and usability testing to enhance user experience.",
      date: "December 2023",
      issuer: "Google",
      image: "/go.png",
      links: [
        {
          icon: "🔗",
          title: "View Certificate",
          href: "https://www.coursera.org/account/accomplishments/verify/6P97H3C2MQXB",
        },
        
      ],
    },
    {
      title: "Foundation of User Experience (UX)",
      description: "Gained a foundational understanding of user experience (UX) principles, including user research, design thinking, and usability testing to create user-centered designs.",
      date: "November 2023",
      issuer: "Google",
      image: "/go.png",
      links:[
        {
          icon: "🔗",
          title: "View Certificate",
          href: "https://www.coursera.org/account/accomplishments/verify/NZE9HTHW5QVS",
        },
        
      ], },
      {
      title: "Apple Certified Technician",
      description: "Gained a comprehensive understanding of Apple hardware and software, including troubleshooting, repair, and maintenance of Apple devices.",
      date: "October 2021",
      issuer: "Apple",
      image: "/apple.png",
      }  
    
  ],
} as const;
