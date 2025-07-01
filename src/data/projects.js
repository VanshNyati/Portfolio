import startupPortal from "../assets/Startup_Accelerator_Portal.jpg";
import conferencing from "../assets/Video_Conferencing_App.jpg";
import mes2024 from "../assets/MES_2024_Website.jpg"; 
import livePolling from "../assets/Live_Polling_System.png"; 
import blogImg from "../assets/social_blog.png";


const projects = [
  {
    title: "Startup Accelerator Portal",
    description:
      "Designed a collaborative portal for MAHE’s startup accelerator to connect founders, mentors, students, and the incubation center. Enabled centralised tracking of achievements, events, and startup milestones.",
    tech: ["ReactJS", "Tailwind CSS"],
    link: "https://accelerator-management.web.app/",
    image: startupPortal, // Use appropriate image
  },
  {
    title: "Live Polling System",
    description:
      "Real-time classroom polling system built for student-teacher interaction with live vote tracking, chat, and student moderation. Includes Socket.IO-based event-driven architecture with REST APIs for past poll data.",
    tech: ["ReactJS", "Tailwind CSS", "ExpressJS", "Socket.IO", "Node.js"],
    link: "https://intervuetask-frontend.onrender.com/",
    image: livePolling,
  },
  {
    title: "Video Conferencing App",
    description:
      "Engineered a multi-participant video conferencing platform with secure peer-to-peer connections, chat, whiteboard, and screen sharing, aimed at delivering a privacy-first alternative.",
    tech: ["HTML", "CSS", "JavaScript", "WebRTC", "Socket.IO"],
    link: "https://weshow.onrender.com/",
    image: conferencing, // Use appropriate image
  },
  {
    title: "MES 2024 Website",
    description:
      "Built a modern responsive site for MES '24 featuring dynamic speaker bios, workshop panels, startup showcase, and intuitive registration.",
    tech: ["ReactJS", "Node.js", "Tailwind CSS", "Atom Payment Gateway"],
    link: "https://mes24-2-0-sooty.vercel.app/",
    image: mes2024, // placeholder for screenshot
  },
  {
    title: "Social Blog Platform",
    description:
      "MERN-stack powered blog platform built to empower marginalized communities and NGOs to raise concerns. Features include reporting, liking, and commenting on posts. Images are hosted via AWS S3 for scalable delivery.",
    tech: [
      "ReactJS",
      "Tailwind CSS",
      "Node.js",
      "Express",
      "MongoDB",
      "AWS S3",
    ],
    link: "https://blog-deployment-xyap.onrender.com/",
    image: blogImg, // Add the blog preview image here in assets and import it
  },
];

export default projects;
