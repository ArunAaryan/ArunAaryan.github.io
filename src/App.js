import "./App.css";
import profilepic from "./images/arun.png";
import ProjectCard from "./Components/ProjectCard";
import React, { useState, useEffect } from "react";
// import { data } from "./Components/projectData";
import { motion } from "framer-motion";
function App() {
  const [data, setProjectData] = useState([]);
  const [bio, setBio] = useState("");
  const [skills, setSkills] = useState([]);
  const [dark, setDark] = useState(true);
  const toggleDarkMode = () => {
    if (!dark) {
      document.documentElement.classList.add("dark");
      window.sessionStorage.theme = "dark";
      setDark(true);
    } else {
      document.documentElement.classList.remove("dark");
      window.sessionStorage.theme = "light";
      setDark(false);
    }
  };
  useEffect(() => {
    fetch(process.env.REACT_APP_STATIC_DATA)
      .then((res) => {
        res.json().then((data) => {
          setProjectData(data.projectData);
          setBio(data.bio);
          setSkills(data.skills);
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      if (
        window.sessionStorage.theme === "dark" ||
        (!window.sessionStorage.theme &&
          window.matchMedia("(prefers-color-scheme: dark)").matches)
      ) {
        document.documentElement.classList.add("dark");
        setDark(true);
      } else {
        document.documentElement.classList.remove("dark");
        setDark(false);
      }
    }
    // fetch(process.env.REACT_APP_URL)
    //   .then((data) => {})
    //   .catch((err) => {});
    const url = "https://api.ipify.org/?format=json";
    function ping() {
      fetch(url)
        .then((res) => {
          // fetch(url).then((res) => {
          console.log(res);

          res.json().then(async (data) => {
            let message = "You have a new visitor : ";
            console.log(data);
            for (const [key, value] of Object.entries(data)) {
              message += `${key}-${value}%0A`;
            }
            // console.log(message);
            await fetch(`${process.env.REACT_APP_URL}${message}`)
              .then((data) => {})
              .catch((err) => {});
          });
        })
        .catch((err) => console.log(""));
    }
    ping();
  }, []);

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={{
        hidden: {
          scale: 0.5,
          opacity: 0,
        },
        visible: {
          scale: 1,
          opacity: 1,
          transition: {
            delay: 0.8,
          },
        },
      }}
      className="main font-JosefinSans transition duration-1000 bg-gray-100 "
      id="main"
    >
      <div className="flex-col max-w-screen-lg mt-6 ">
        <div className="flex justify-start -mr-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-12 w-12 mr-4 text-primary text-opacity-80 hover: cursor-pointer"
            viewBox="0 0 20 20"
            fill="currentColor"
            onClick={toggleDarkMode}
          >
            <path
              fillRule="evenodd"
              d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
              clipRule="evenodd"
            />
          </svg>
        </div>

        <div className="profileimg">
          <div className="w-64 h-64 md:w-48 md:h-48 md:self-end mb-10 mt-4 ">
            <img className=" rounded-3xl" alt="profile" src={profilepic} />
          </div>

          <span className="nametext whitedark">
            Arun <p className="text-primary inline-block">Kumar B</p>
          </span>
        </div>
        <p className="aboutparagraph whitedark">{bio}</p>
        <div className="jsfont m-2 mt-4">
          <span className="headings">Skills</span>
          <div className="font-light text-2xl flex flex-wrap gap-3 whitedark">
            {skills?.map((skill) => (
              <span className="" key={skill}>
                {skill}
              </span>
            ))}
          </div>
        </div>
        <div className="mt-4 p-2">
          <span className="headings mt-6 ">Education</span>
          <span className="block whitedark font-light text-2xl">
            Master of computer applications - Chaitanya Bharathi Institute of
            Technology
          </span>
        </div>

        <div className="m-2 projects_div">
          <span className="text-primary font-bold text-3xl font-JosefinSans mt-6">
            Projects && Interests
          </span>
          <div className="md:grid md:grid-cols-2 gap-2 mt-2">
            {/* <ProjectCard
            project={{
              title: "ClassNetwork",
              duration: "3 Months",
              languages: "NodeJs, EJS, Express",
              info: " An official communication platform for teachers and students",
            }}
          /> */}
            {data.map((data) => (
              <ProjectCard key={data.title} project={data} />
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default App;
