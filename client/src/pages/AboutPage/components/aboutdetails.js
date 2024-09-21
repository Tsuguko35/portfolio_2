import {
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaNodeJs,
  FaPhp,
  FaJava,
  FaPython,
} from "react-icons/fa";
import { IoLogoFirebase, IoLogoJavascript } from "react-icons/io5";
import { DiMysql } from "react-icons/di";
import { SiMongodb, SiPhpmyadmin } from "react-icons/si";

const about_details = {
  name: "Jazpher Carpio",
  profile_image:
    "https://res.cloudinary.com/dkwgg59ur/image/upload/v1719105225/Portfolio_Files/hmppayoiaarwqdk43ks5.webp",
  summary:
    "I am a passionate Full Stack Developer with expertise in HTML, CSS,JavaScript, React.js, Node.js, PHP, MySQL, and MongoDB. My journey in web development has equipped me with a robust understanding of both front-end and back-end technologies, enabling me to create dynamic, responsive, and user-friendly web applications. With a strong foundation in front-end technologies, I build intuitive interfaces, while my back-end skills ensure efficient server-side logic and secure data management. I am always eager to learn and stay updated with the latest industry trends, ready to tackle innovative projects and deliver creative solutions.",
  skills: [
    {
      skill_name: "HTML",
      icon: <FaHtml5 />,
    },
    {
      skill_name: "CSS",
      icon: <FaCss3Alt />,
    },
    {
      skill_name: "JavaScript",
      icon: <IoLogoJavascript />,
    },
    {
      skill_name: "React.JS",
      icon: <FaReact />,
    },
    {
      skill_name: "Node.JS",
      icon: <FaNodeJs />,
    },
    {
      skill_name: "PHP",
      icon: <FaPhp />,
    },
    {
      skill_name: "MySQL",
      icon: <DiMysql />,
    },
    {
      skill_name: "MongoDB",
      icon: <SiMongodb />,
    },
    {
      skill_name: "phpMyAdmin",
      icon: <SiPhpmyadmin />,
    },
    {
      skill_name: "Firebase",
      icon: <IoLogoFirebase />,
    },
    {
      skill_name: "Java",
      icon: <FaJava />,
    },
    {
      skill_name: "Python",
      icon: <FaPython />,
    },
  ],

  experience: [
    {
      company: "Arc Corporation",
      position: "Freelance Frontend Developer",
      duration: "May 2024 - July 2024",
      summary:
        "As a skilled front-end developer,  I brought solid experience in creating user-friendly, responsive websites that increased customer happiness and engagement. I used my knowledge in HTML, CSS, JavaScript, and React.js at Arc Corporation to create aesthetically pleasing and fluid user interfaces. My emphasis on performance and creative design made sure Arc Corporation s website was always state-of-the-art and productive.",
      tech_stack: ["React.JS", "HTML", "CSS", "JavaScript"],
    },
    {
      company: "Eden HVAC & Home Efficiency",
      position: "Freelance Frontend Developer",
      duration: "May 2024 - July 2024",
      summary:
        "I used my knowledge of HTML, CSS, and JavaScript in conjunction with React.js to create visually appealing and interactive online interfaces at Eden HVAC & Home Efficiency. My commitment to cutting-edge design and top-notch functionality made sure Eden HVAC & Home Efficiency s web presence remained influential and up to date.",
      tech_stack: ["React.JS", "HTML", "CSS", "JavaScript"],
    },
    {
      company: "Bulacan State University",
      position: "Fullstack Developer Intern",
      duration: "February 2024 - May 2024",
      summary:
        " In my role, I was in charge of developing complete administrative and user form functionalities, which included database management and API development, as well as server-side scripting and seamless system interaction. My responsibilities also included developing frontend functionalities, with a primary focus on improving user features and experiences. I ensured that important system components functioned cohesively and efficiently by leveraging my knowledge in both the backend and frontend.",
      tech_stack: ["MongoDB", "Express.JS", "React.JS", "Node.JS"],
    },
  ],

  education: [
    {
      school_name: "Bulacan State University",
      course: "Bachelor of Science inInformation Technology",
      duration: "2020 - 2024",
      awards: "Magna Cum Laude",
    },
    {
      school_name: "Assumpta Academy",
      course: "STEM",
      duration: "2014 - 2020",
      awards: "",
    },
  ],
};

export default about_details;
