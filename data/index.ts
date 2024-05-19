export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "I prioritize client collaboration, fostering open communication ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I'm very flexible with time zone communications",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently building a Job referral website",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "AI Image SaaS - Canva Application",
    des: "A REAL Software-as-a-Service app with AI features and a payments and credits system using the latest tech stack.",
    img: "/p3.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
    link: "/ui.aiimg.com",
  },
  {
    id: 2,
    title: "Yoom - Video Conferencing App",
    des: "Simplify your video conferencing experience with Yoom. Seamlessly connect with colleagues and friends.",
    img: "/p2.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
    link: "/ui.yoom.com",
  },

  {
    id: 3,
    title: "Google Search Clone",
    des: "Recreated the Apple iPhone 15 Pro website, combining GSAP animations and Three.js 3D effects..",
    img: "/search_clone.png",
    iconLists: [
      "/re.svg",
      "/rapid_api.png",
      "/material_logo.png",
      "/netlify_logo.png",
    ],
    link: "/ui.apple.com",
  },
  {
    id: 4,
    title: "Fundpe - Crowdfunding Platform",
    des: "A platform for tech startups. Where you can list your startup and raise money along with option to fund other startups.",
    img: "/Fundpe_logo.png",
    iconLists: ["/next.svg", , "firebase.png", "vercel.png"],
    link: "/ui.earth.com",
  },
];

export const testimonials = [
  {
    quote:
      "I've had the pleasure of knowing and working with Shariq for the last three years. A great guy with a genuine passion for all things tech, he truly is someone you can count on. I wish him all the best in all his future endeavors.",
    name: "Avinaba Bhattacharjee",
    title: "Software Engineer - p360",
    img: "/avinaba.jpeg",
  },
  {
    quote:
      "I am writing this testimonial to express my sincere appreciation for Abdul Sharique's hard work and dedication in my class CSE batch 2k24. Abdul is a bright, motivated, and inquisitive student who is always eager to learn. Abdul has a deep understanding of the course material and is able to apply it to real-world situations. ",
    name: "Abhishek Roy",
    title: "IT Engineer - Cube Constructions",
    img: "/abhishek.jpeg",
  },
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "Firebase",
    img: "/firebase.png",
    nameImg: "/Firebase_main.png",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "AWS",
    img: "/aws_main.png",
    nameImg: "/cloud_main.png",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Backend Developer Intern",
    desc: "Created Backend REST API of the company's products using python, Django and Django-Rest-Framework.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
    company: "Cosyugma Info LLP",
  },
  {
    id: 2,
    title: "Technical Content Writer",
    desc: "Creation of new and updation of already existing articles in GeeksforGeeks portal on subjects like OS, DBMS, CN, OOPs and Web Development.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp2.svg",
    company: "GeeksforGeeks",
  },
  {
    id: 3,
    title: "GDSC Lead 2022 - 2023",
    desc: "Organized and led workshops, events, and projects to foster community engagement and skill development in technology as a GDSC Lead.",
    className: "md:col-span-2", // change to md:col-span-2
    thumbnail: "/exp3.svg",
    company: "Google",
  },
  {
    id: 4,
    title: "Software Developer Intern",
    desc: "Developed and maintained user-facing features using modern frontend and backend technologies.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
    company: "Cognifyz technologies",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/abdulshariqkalim",
  },
  {
    id: 2,
    img: "/git.svg",
    link: "https://www.github.com/shariqkalim",
  },
];
