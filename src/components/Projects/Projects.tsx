import React from "react";
import Card from "@/components/Projects/Card";
import Heading from "@/components/Heading";
// Define project interface
import { prj1, prj2, prj3, prj4, prj5, prj11, prj22 } from "@/lib/utils";
const Projects: React.FC = (): JSX.Element => {
  return (
    <div id="projects" className=" mt-7">
      <div className="mt-12 ">
        <Heading title="My Projects" />
      </div>
      <div
        className="flex flex-wrap w-full justify-center gap-x-[10rem]
      relative"
      >
        <Card
          title="CodeSync"
          description="A competitive programming tool that generates personalized Codeforces contests based on your rating, preferred problem tags, and difficulty levels — helping users practice more effectively."
          imgLink="\prj11.jpg"
          liveLink="https://vol1-hima31.vercel.app/"
          githubLink="https://github.com/himanshuhr8/vol1"
          icons={prj11}
        />

        <Card
          title="Portfolio Website"
          description="A sleek and responsive portfolio showcasing projects, skills, and contact information."
          imgLink="\prj1.jpg"
          liveLink="https://hima31.vercel.app/"
          githubLink="https://github.com/Rohit1610/Portfolio"
          icons={prj1}
        />
        <Card
          title="WorkWave"
          description="A collaborative project management platform where assigners can delegate tasks to assignees, featuring Gantt charts, Kanban boards, and real-time task tracking."
          imgLink="\agentic_ai.jpg"
          liveLink="https://agenticmedicalai.streamlit.app/"
          githubLink="https://github.com/himanshuhr8/AgenticMedicalAi"
          icons={prj22}
        />

        <Card
          title="Campus-Cart"
          description="A campus-focused marketplace where students can buy, sell, and manage products, built with a seamless UI and real-time updates for listings and orders."
          imgLink="\prj22.jpg"
          liveLink="https://medium-hima31.vercel.app/"
          githubLink="https://github.com/himanshuhr8/medium_clone"
          icons={prj2}
        />
        <Card
          title="Todo App"
          description="A feature-rich todo application with authentication, profile management, and seamless task handling."
          imgLink="\prj2.jpg"
          githubLink="https://github.com/himanshuhr8/todoApp"
          icons={prj3}
        />

        <Card
          title="GradePlus App"
          description="A dedicated app for IIITA students to access lecture notes, past papers and study materials."
          imgLink="\prj3.png"
          githubLink="https://github.com/himanshuhr8/GradePlus"
          icons={prj4}
        />

        <Card
          title="Real Time Chat App"
          description="A real-time messaging app using React and Socket.io with live typing indicators and private chat rooms."
          imgLink="\prj4.jpg"
          githubLink="https://github.com/Rohit1610/Real-Time-Chat-App"
          icons={prj5}
        />
      </div>
    </div>
  );
};

export default Projects;
