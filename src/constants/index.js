import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  php,
  threejs,
  svelte,
  git,
  mugan,
  canikid,
  sci,
  foodorders,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Front End Developer",
    icon: creator,
  },
  {
    title: "Back End Developer",
    icon: mobile,
  },
];

const technologies = [
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "SvelteJS",
    icon: svelte,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "git",
    icon: git,
  },
];

const experiences = [
  {
    title: "Junior Full-Stack Developer",
    company_name: "MuganTech",
    icon: mugan,
    iconBg: "#E6DEDD",
    date: "2020 - 2021",
    points: [
      "Developing and maintaining web applications using PHP and other related technologies.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
      "Create database designs and develop data models to ensure good integration between Front End and Back End.",
      "Implement security techniques such as input validation, data encryption, and setting permissions.",
      "Identify and fix bugs or errors in apps or websites.",
    ],
  },
  {
    title: "Front End Developer",
    company_name: "CantikID",
    icon: canikid,
    iconBg: "#383E56",
    date: "2021 - 2022",
    points: [
      "Develop an attractive and easy-to-use user interface leveraging HTML, CSS and JavaScript.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Participating in code reviews and providing constructive feedback to other developers.",
      "Ensuring websites or applications are made responsive and accessible from various devices such as desktops, laptops, tablets and cellphones.",
      "Create clean, structured code that is easy for other development teams to learn and maintain.",
      "Optimizing websites or applications for better speed and performance, such as reducing load times and fixing error issues with websites.",
      "Coordinate with the design team to produce designs that suit the goals and needs of users.",
      "Implement and integrate APIs with websites or applications to enhance their functionality.",
      "Use tools like Git to manage code versioning and collaboration with other development teams.",
    ],
  },
  {
    title: "Data Engineer",
    company_name: "PT. Solusi Cipta Integrasi",
    icon: sci,
    iconBg: "#E6DEDD",
    date: "2022 - Present",
    points: [
      "Collect data from various sources and prepare it for analysis and creating stored procedures.",
      "Setting up and running data pipelines for processing, aggregating, cleaning, and validating data.",
      "Monitor the system and take corrective action when problems occur.",
      "Optimize data performance and ensure data can be accessed and processed quickly.",
    ],
  },
];

const projects = [
  {
    name: "Food Order",
    description:
      "Food Order is a website that enables users to conveniently and efficiently order their favorite meals online. With a user-friendly interface, the website offers a wide selection of restaurants and menus for users to choose from. Users can easily browse through various food options, add items to their shopping cart, and arrange delivery or pickup according to their preferences. Food Order provides a seamless and convenient experience for ordering food, ensuring high customer satisfaction and delivering an efficient solution for enjoying delicious meals hassle-free.",
    tags: [
      {
        name: "ReactJS",
        color: "blue-text-gradient",
      },
    ],
    image: foodorders,
    source_code_link: "https://foodorders.nunorifa.com/",
  },
];

export { services, technologies, experiences, projects };
