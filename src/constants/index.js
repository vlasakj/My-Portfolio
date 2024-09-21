import project1 from "../assets/projects/project-1.webp";
import project2 from "../assets/projects/project-2.webp";
import project3 from "../assets/projects/project-3.webp";
import project4 from "../assets/projects/project-4.webp";

export const HERO_CONTENT = `I am an enthusiastic front end developer with a focus on web applications, with a long term interest in developing knowledge in software and web application development. As part of my internship, I have worked on full-stack projects where I had the opportunity to combine front-end and back-end technologies and solve complex problems. I have also gained experience and skills in other areas of IT and digital marketing, including Email marketing, SEO, social media marketing, teaching IT in primary and secondary schools, IT security, web design, Python programming and website development. 
I am young, empathetic and have the ability to learn new things quickly. I am very adaptable to new conditions and environments, which allows me to handle different challenges effectively. I have a strong desire to continuously improve and expand my knowledge, with an emphasis on long-term growth and vision. I actively seek out new opportunities that move me forward professionally and personally.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 5 years of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "2024 - Present",
    role: "Frontend Developer",
    company: "",
    description: `Contributed to the development of web applications using JavaScript, React.js, and Node.js. Managed databases and implemented data storage solutions using MongoDB. Worked closely with product managers to prioritize features and enhancements.`,
    technologies: ["HTML", "CSS","React", "Node.js", "Express", "MongoDB", "Rest API"],
  },
  {
    year: "2022 - 2024",
    role: "Web Master",
    company: "Freelance",
    description: `Editing of web pages according to graphic specifications in Wordpress, DIVI plugin Responsibility for regular updating of content, functionality of links, compatibility with web browsers and correct display on mobile devices Knowledge and regular work with programming languages HTML5, CSS, (JavaScript, MySQL)`,
    technologies: ["HTML", "CSS", "Wordpress", "Bootstrap", "MongoDB"],
  },
  {
    year: "2022 - 2023",
    role: "Deliveribility Specialist ",
    company: "Mailkit",
    description: `Monitoring and security analysis of e-mail servers. In addition, I also assisted in customer support, resolved customer requests and issues, managed reports and actively worked with mailbox providers around the world, including Google, Yahoo and Seznam. My goal was to keep the email infrastructure running smoothly while ensuring optimal deliverability and compliance with regulatory requirements.`,
    technologies: ["Postman", "Kibana", "Rest API"],
  },
  {
    year: "2019 - 2022",
    role: "SEO Specialist",
    company: "Creaticom s.r.o",
    description: `I was involved in managing social media for digital marketing and B2B business clients and played a significant role in improving marketing strategy. I effectively managed social media platforms including LinkedIn, Facebook and Instagram and achieved an impressive 98% customer satisfaction rating. At the same time, I was actively involved in SEO keyword management, website management and link building. I created visuals and maintained effective communication with clients in the graphic design application Canva`,
    technologies: ["Screaming frog", "Ahrefs", "Semrush", "Google Sheets"],
  },
];

export const PROJECTS = [
  {
    title: "Portfolio Website",
    image: project1,
    description:"A personal portfolio website showcasing projects, skills, and contact information.",
    url: "https://honzavlasak.cz/",
    technologies: ["HTML", "CSS", "React", "Node.js", "Framer Motion"],
  },
  {
    title: "Product Store",
    image: project2,
    description:
      "Web application using MongoDB, Express.js, React, and Node.js, AKA the MERN stack",
      url: "https://apple-store-drxv.onrender.com/",
    technologies: ["HTML", "CSS", "MongoDB", "Express.js", "React", "Node.js"],
  },
  {
    title: "Build Website for CeskyTinyHouse.cz",
    image: project3,
    description:
      "A website is according to the designer's suggestion. I developed the site with an emphasis on speed, responsiveness and a modern look and feel, ensuring a great user experience on all devices. I translated the design into clean and optimized code that includes interactive elements and easy navigation, all fully customized to the specific needs of the project.",
    url: "https://www.ceskytinyhouse.cz/",
    technologies: ["HTML", "CSS", "Wordpress", "Divi"],
  },
  {
    title: "Rebuild & Redesign B2B E-Commerce shop for Maxidina.cz",
    image: project4,
    description:"A Maxidina E-Commerce shop is B2B solution for the needs of its clients for customized selection and purchase",
    url: "https://www.maxidina.cz/",
    technologies: ["HTML", "CSS", "ShoptBet", "Figma", "mySQL"],
  },
];

export const CONTACT = {
  address: "Slavíčkova 458/19, Ústí nad Labem 400 01",
  phoneNo: "+420 730 608 824",
  email: "jan.vlasak96@gmail.com",
};
