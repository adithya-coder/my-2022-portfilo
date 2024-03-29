/* Change this file to get your personal Porfolio */

// Website related settings
const settings = {
  isSplash: true, // Change this to false if you don't want Splash screen.
};

//SEO Related settings
const seo = {
  title: "Adithya's Portfolio",
  description: "Software Engineer",
  og: {
    title: "Adithya Heshan Portfolio",
    type: "website",
    url: "",
  },
};

//Home Page
const greeting = {
  title: "Adithya Heshan",
  logo_name: "Adithya Heshan",
  nickname: " Software Engineer",
  subTitle:
    "I am a good team player and self-motivated individual who is willing to take on new challenges. I am currently looking for an opportunity to join an organization that has a good reputation in the industry where I can develop and use my software engineering skills and knowledge while adding value to the company. ",
  resumeLink:
    "https://drive.google.com/drive/folders/1ktAVoF9JMH3QGfU8pIXwliIpD6Jc6TMT?usp=sharing",
  portfolio_repository: "https://github.com/adithya-coder/",
  githubProfile: "https://github.com/adithya-coder/",
};

const socialMediaLinks = [
  {
    name: "Github",
    link: "https://github.com/adithya-coder/",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/adithya-heshan-701169186/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "YouTube",
    link: "",
    fontAwesomeIcon: "fa-youtube", // Reference https://fontawesome.com/icons/youtube?style=brands
    backgroundColor: "#FF0000", // Reference https://simpleicons.org/?q=youtube
  },
  {
    name: "Gmail",
    link: "mailto:jadithya803@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "Twitter",
    link: "",
    fontAwesomeIcon: "fa-twitter", // Reference https://fontawesome.com/icons/twitter?style=brands
    backgroundColor: "#1DA1F2", // Reference https://simpleicons.org/?q=twitter
  },
  {
    name: "Facebook",
    link: "https://www.facebook.com/adiththiya.heshan/",
    fontAwesomeIcon: "fa-facebook-f", // Reference https://fontawesome.com/icons/facebook-f?style=brands
    backgroundColor: "#1877F2", // Reference https://simpleicons.org/?q=facebook
  },
  {
    name: "Instagram",
    link: "",
    fontAwesomeIcon: "fa-instagram", // Reference https://fontawesome.com/icons/instagram?style=brands
    backgroundColor: "#E4405F", // Reference https://simpleicons.org/?q=instagram
  },
];

const skills = {
  data: [
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        " Building resposive website front end using Angular,React-Redux,Thymeleaf",
        " Developing mobile applications using Flutter, React Native and solo android apps using Kotlin",
        " Creating application backend & Rest API in Spring Boot, .NET ,Node, Express ",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "Git",
          fontAwesomeClassname: "bi:git",
          style: {
            color: "#F05032",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "simple-icons:node-dot-js",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
        {
          skillName: "Yarn",
          fontAwesomeClassname: "simple-icons:yarn",
          style: {
            color: "#2C8EBB",
          },
        },
        {
          skillName: "PHP",
          fontAwesomeClassname: "simple-icons:php",
          style: {
            color: "#663399",
          },
        },

        {
          skillName: "Spring Boot",
          fontAwesomeClassname: "bx:bxl-spring-boot",
          style: {
            color: "#6DB33F",
          },
        },
        {
          skillName: "Thymeleaf",
          fontAwesomeClassname: "simple-icons:thymeleaf",
          style: {
            color: "#005F0F",
          },
        },
        {
          skillName: "Angular",
          fontAwesomeClassname: "vscode-icons:file-type-angular",
          style: {
            color: "#DD0031",
          },
        },
        {
          skillName: "JSP",
          fontAwesomeClassname: "vscode-icons:file-type-jsp",
          style: {
            color: "#007396",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "logos:python",
          style: {
            color: "#3776AB",
          },
        },
        {
          skillName: "Java",
          fontAwesomeClassname: "logos:java",
          style: {
            color: "#007396",
          },
        },
        {
          skillName: ".NET",
          fontAwesomeClassname: "mdi:dot-net",
          style: {
            color: "#512BD4",
          },
        },
        {
          skillName: "AJAX",
          fontAwesomeClassname: "whh:ajax",
          style: {
            color: "#007396",
          },
        },
        {
          skillName: "jQuery",
          fontAwesomeClassname: "logos:jquery",
          style: {
            color: "#0769AD",
          },
        },
        {
          skillName: "Bootstrap",
          fontAwesomeClassname: "logos:bootstrap",
          style: {
            color: "#7952B3",
          },
        },
        {
          skillName: "Typescript",
          fontAwesomeClassname: "logos:typescript-icon",
          style: {
            color: "#3178C6",
          },
        },
        {
          skillName: "Git",
          fontAwesomeClassname: "logos:git-icon",
          style: {
            color: "#3178C6",
          },
        },

        {
          skillName: "Rest API",
          fontAwesomeClassname: "dashicons:rest-api",
          style: {
            color: "#FF6A00",
          },
        },
      ],
    },
    {
      title: "Cloud Infra-Architecture",
      fileName: "CloudInfraImg",
      skills: [
        " Experience working on multiple cloud platforms",
        "Hosting and maintaining websites on virtual machine instances along with integration of databases",
        " Deploying deep learning models on cloud to use on mobile devices",
        " Setting up streaming jobs from DB to Server or vice-versa on GCP and Azure",
      ],
      softwareSkills: [
        {
          skillName: "GCP",
          fontAwesomeClassname: "simple-icons:googlecloud",
          style: {
            color: "#4285F4",
          },
        },
          {
            skillName: "AWS",
            fontAwesomeClassname: "simple-icons:amazonaws",
            style: {
              color: "#FF9900",
            },
          },
        {
          skillName: "Azure",
          fontAwesomeClassname: "simple-icons:microsoftazure",
          style: {
            color: "#0089D6",
          },
        },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "#FFCA28",
          },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
        //   {
        //     skillName: "Docker",
        //     fontAwesomeClassname: "simple-icons:docker",
        //     style: {
        //       color: "#1488C6",
        //     },
        //   },
        {
          skillName: "Kubernetes",
          fontAwesomeClassname: "simple-icons:kubernetes",
          style: {
            color: "#326CE5",
          },
        },
        {
          skillName: "Docker",
          fontAwesomeClassname: "logos:docker",
          style: {
            color: "##2396ED",
          },
        },
      ],
    },
    {
      title: "UI/UX Design",
      fileName: "DesignImg",
      skills: [
        " Designing highly attractive user interface for mobile and web applications",
        " Customizing logo designs and building logos from scratch",
        " Creating the flow of application functionalities to optimize user experience",
      ],
      softwareSkills: [
        {
          skillName: "Adobe XD",
          fontAwesomeClassname: "simple-icons:adobexd",
          style: {
            color: "#FF2BC2",
          },
        },
        {
          skillName: "Figma",
          fontAwesomeClassname: "simple-icons:figma",
          style: {
            color: "#F24E1E",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866",
      },
      profileLink: "https://www.hackerrank.com/jadithya803",
    },
    {
      siteName: "CISCO",
      iconifyClassname: "simple-icons:cisco",
      style: {
        color: "#5B4638",
      },
      profileLink: "",
    },
    //   {
    //     siteName: "Codeforces",
    //     iconifyClassname: "simple-icons:codeforces",
    //     style: {
    //       color: "#1F8ACB",
    //     },
    //     profileLink: "http://codeforces.com/profile/layman_brother",
    //   },
    //   {
    //     siteName: "Hackerearth",
    //     iconifyClassname: "simple-icons:hackerearth",
    //     style: {
    //       color: "#323754",
    //     },
    //     profileLink: "https://www.hackerearth.com/@ashutosh391",
    //   },
    //   {
    //     siteName: "Kaggle",
    //     iconifyClassname: "simple-icons:kaggle",
    //     style: {
    //       color: "#20BEFF",
    //     },
    //     profileLink: "https://www.kaggle.com/laymanbrother",
    //   },
  ],
};

const degrees = {
  degrees: [
    {
      title: " Sri Lanka Institute of Information Technology",
      subtitle:
        " Bsc (Hons) in Information Technology Specializing in Software Engineering ",
      logo_path: "sliit1.png",
      alt_name: "Malabe",
      duration: "2021 - Present",
      descriptions: [
        " I have studied basic software engineering subjects like DS, Algorithms, DBMS, OS, CA, AI etc.",
        " Apart from this, I have done courses on  Data Science, Cloud Computing and Full Stack Development.",
      ],
      website_link: "https://www.sliit.lk/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Design Patterns",
      subtitle: "- Course ",
      logo_path: "stanford_logos.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/certificate/YXFS85JRWHPT",
      alt_name: "University of Alberta",
      color_code: "#8C151599",
    },
    //   {
    //     title: "Deep Learning",
    //     subtitle: "- Andrew Ng",
    //     logo_path: "deeplearning_ai_logo.png",
    //     certificate_link:
    //       "https://www.coursera.org/account/accomplishments/specialization/H8CPSFXAJD2G",
    //     alt_name: "deeplearning.ai",
    //     color_code: "#00000099",
    //   },
    {
      title: "Google Cloud Certified",
      subtitle: "- GCP Cloud",
      logo_path: "google_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/certificate/84DL5PED7F78",
      alt_name: "Google",
      color_code: "#0C9D5899",
    },
    //   {
    //     title: "Data Science",
    //     subtitle: "- Alex Aklson",
    //     logo_path: "ibm_logo.png",
    //     certificate_link:
    //       "https://www.coursera.org/account/accomplishments/specialization/PLEAPCSJBZT5",
    //     alt_name: "IBM",
    //     color_code: "#1F70C199",
    //   },
    {
      title: "Core Java",
      subtitle: "- specializations",
      logo_path: "coursera_logo.png",
      certificate_link:
        "https://www.coursera.org/account/accomplishments/specialization/PNS89CJVLYYP?utm_source%3Dandroid%26utm_medium%3Dcertificate%26utm_content%3Dcert_image%26utm_campaign%3Dsharing_cta%26utm_product%3Ds12n",
      alt_name: "Coursera",
      color_code: "#D83B0199",
    },
    {
      title: "Python",
      subtitle: "- PCAP",
      logo_path: "pcap.png",
      certificate_link:
        "https://drive.google.com/file/d/1Im93S9Ke9LpSrGLs0NJgVkqVd3caCNNI/view?usp=sharing",
      alt_name: "OpenEDG",
      color_code: "#1F70C199",
    },
    {
      title: "IEEE",
      subtitle: "- IEE Training",
      logo_path: "sliit33.png",
      certificate_link: "",
      alt_name: "SLIIT IEEE",
      color_code: "#0C9D5899",
    },
    {
      title: "Programming in C ",
      subtitle: "- Course",
      logo_path: "udemy.png",
      certificate_link:
        "https://www.udemy.com/certificate/UC-1c47d4fa-6f6f-4854-bc27-49cdb2eb7ce4/",
      alt_name: "deeplearning.ai",
      color_code: "#00000099",
    },
    //   {
    //     title: "Fullstack Development",
    //     subtitle: "- Jogesh Muppala",
    //     logo_path: "coursera_logo.png",
    //     certificate_link:
    //       "https://www.coursera.org/account/accomplishments/certificate/NRANJA66Y2YA",
    //     alt_name: "Coursera",
    //     color_code: "#2A73CC",
    //   },
    //   {
    //     title: "Kuberenetes on GCP",
    //     subtitle: "- Qwiklabs",
    //     logo_path: "gcp_logo.png",
    //     certificate_link:
    //       "https://google.qwiklabs.com/public_profiles/e4d5a92b-faf6-4679-a70b-a9047c0cd750",
    //     alt_name: "GCP",
    //     color_code: "#4285F499",
    //   },
    //   {
    //     title: "Cryptography",
    //     subtitle: "- Saurabh Mukhopadhyay",
    //     logo_path: "nptel_logo.png",
    //     certificate_link:
    //       "https://drive.google.com/open?id=1z5ExD_QJVdU0slLkp8CBqSF3-C3g-ro_",
    //     alt_name: "NPTEL",
    //     color_code: "#FFBB0099",
    //   },
    //   {
    //     title: "Cloud Architecture",
    //     subtitle: "- Qwiklabs",
    //     logo_path: "gcp_logo.png",
    //     certificate_link:
    //       "https://google.qwiklabs.com/public_profiles/5fab4b2d-be6f-408c-8dcb-6d3b58ecb4a2",
    //     alt_name: "GCP",
    //     color_code: "#4285F499",
    //   },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Work, Internship  ",
  description:
    "I have worked with many evolving startups as Software Developer, Designer and Software Architect. I have also worked with some well established companies mostly as Software Developer.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      experiences: [
        {
          title: "Software engineer",
          company: "Dialog Axiata",
          company_url: "https://www.dialog.lk",
          logo_path: "dialog.png",
          duration: "November 2022 - PRESENT",
          location: "No.475, Union Place, Colombo 2, Colombo, Sri Lanka ",
          // description:
          //   "I am working on automating healthcare products. The projects involve automation for process improvements and for significantly enhancing the profits. I am currently working on Cancer Survival and Reoccurence Prediction. Our goal is to make AI system which scales and removes doctor dependency as much as possible.",
          color: "#0879bf",
        },
        {
          title: " Associate software engineer",
          company: " Zincat Technology",
          company_url: "https://zincat.net",
          logo_path: "zincat.png",
          duration: "April 2022 - PRESENT",
          location: "Mount Lavinia,Sri Lanka ",
          // description:
          //   "I am working on automating healthcare products. The projects involve automation for process improvements and for significantly enhancing the profits. I am currently working on Cancer Survival and Reoccurence Prediction. Our goal is to make AI system which scales and removes doctor dependency as much as possible.",
          color: "#0879bf",
        },
        //   {
        //     title: "Software Engineer Intern",
        //     company: "FalconX",
        //     company_url: "https://technologies.falconxsolutions.com/",
        //     logo_path: "FalconX.png",
        //     duration: "May 2018 - Oct 2018",
        //     location: "Pune, Maharashtra",
        //     description:
        //       "I have created complete Android Application for locating Pub, Bar and beverage shops around you. I have also worked on implementation of algorithms for Face Detection, Text extraction from Image. I was involved in a team for creating complete software architecure of mobile and web application as well as admin panel for company.",
        //     color: "#9b1578",
        //   },
        //   {
        //     title: "Android Developer",
        //     company: "FreeCopy Pvt. Ltd.",
        //     company_url: "https://www.linkedin.com/company/freecopy/about/",
        //     logo_path: "freecopy_logo.png",
        //     duration: "Nov 2017 - Dec 2017",
        //     location: "Ahmedabad, Gujarat",
        //     description:
        //       "FreeCopy is the Start up from Indian Institute of Management, Ahmedabad. I have changed the integration of the whole app from Google to Firebase. I learnt the efﬁcient ways of Data communications like Retroﬁt, Eventbus etc. I experienced the real time start up. I learnt the Design thinking of UI on perspective of People.",
        //     color: "#fc1f20",
        //   },
      ],
    },
    {
      title: "Internships",
      experiences: [
        {
          title: " Software Engineer Intern",
          company: " Aus-etech pvt Ltd",
          company_url: "https://www.aus-etech.com/",
          logo_path: "logo-light.png",
          duration: "Dec 2021 - April 2022",
          location: " 3170 Victoria, Australia",
          description: "",
          color: "#0879bf",
        },
        {
          title: "Software Engineer Intern",
          company: "FalconX",
          company_url: "https://technologies.falconxsolutions.com/",
          logo_path: "FalconX.png",
          duration: "June 2021 - Nov 2021",
          location: "Kurunegala , Sri Lanka",
          description: ".",
          color: "#9b1578",
        },
      ],
    },
    {
      title: "Volunteerships",
      experiences: [
        {
          title: " Computer ",
          company: "IEEE",
          company_url: "https://standards.ieee.org",
          logo_path: "ieee.png",
          duration: "July 2022 -  PRESENT",
          location: "Los Alamitos, CA 90720-1264 USA",
          description:
            "IEEE Computer Society is the trusted information, networking, and career-development source for a global community of technology leaders that includes researchers, educators, software engineers, IT professionals, employers, and students",
          color: "#4285F4",
        },
        //   {
        //     title: "Microsoft Student Partner",
        //     company: "Microsoft",
        //     company_url: "https://www.microsoft.com/",
        //     logo_path: "microsoft_logo.png",
        //     duration: "Aug 2019 - May 2020",
        //     location: "Hyderabad, Telangana",
        //     description:
        //       "Microsoft Student Partner is a program for university students to lead the awareness and use of Cloud especially Azure tools in the development of their projects and startups. Under this program, I have organised hands on workshops and seminars to teach Cloud Computing concepts to students.",
        //     color: "#D83B01",
        //   },
        //   {
        //     title: "Mozilla Campus Captain",
        //     company: "Mozilla",
        //     company_url: "https://www.mozilla.org/",
        //     logo_path: "mozilla_logo.png",
        //     duration: "Oct 2019 - May 2020",
        //     location: "Kurnool, Andhra Pradesh",
        //     description:
        //       "My responsibility for this program was to create opensource environment in college and in the city. We have organised multiple hackathons on the problems collected by ordinary people from Kurnool city. We have build opensource community of our own college. The community is available at dsc_iiitdmk on github.",
        //     color: "#000000",
        //   },
        //   {
        //     title: "Developer Students Club Member",
        //     company: "DSC IIITDM Kurnool",
        //     company_url:
        //       "https://www.linkedin.com/company/developer-students-club-iiitdm-kurnool",
        //     logo_path: "dsc_logo.png",
        //     duration: "Jan 2018 - May 2020",
        //     location: "Kurnool, Andhra Pradesh",
        //     description:
        //       "We have well established developer club in college which is directly associated with Google Developers. We have developed many interdisciplinary projects under the membership of this club. We have organised workshops and activities on Android Application Development, Flutter and React JS.",
        //     color: "#0C9D58",
        //   },
        {
          title: "Developer Program Member",
          company: "Github",
          company_url: "https://github.com/",
          logo_path: "github_logo.png",
          duration: "2021 - PRESENT",
          location: "Work From Home",
          description:
            "I am actively contributing to many opensource projects. I have contributed to projects of organisations like Tensorflow, Uber, Facebook, Google, Scikit-learn, Kiwix, Sympy, Python, NVLabs, Fossasia, Netrack, Keras etc. These contributions include bug fixes, feature requests and formulating proper documentation for project.",
          color: "#181717",
        },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create Desktop Application  projects and deploy them to web applications using cloud infrastructure.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  //     title: "Publications",
  //     description:
  //       "I have worked on and published a few research papers and publications of my own.",
  //     avatar_image_path: "projects_image.svg",
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "adithya.png",
    description:
      "I am available on almost every social media. You can message me, I will reply within 24 hours. I can help you with JAVA , React, Android, Cloud and Opensource Development.",
  },
  blogSection: {
    title: "Articles",
    subtitle:
      "For individual fundamental empowerment, I like to write powerful lessons that create impact on each of the reader individually to change the core of their character.",
    link: "https://www.sinhala.techxlk.com/author/adithya/",
    avatar_image_path: "blogs_image.svg",
  },
  addressSection: {
    title: "Address",
    subtitle: "Welimada, Sri Lanka",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://goo.gl/maps/VSVCbYJSVi7CR9hp7",
  },
  phoneSection: {
    title: "Phone Number",
    subtitle: "+94 760155746",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  contactPageData,
};
