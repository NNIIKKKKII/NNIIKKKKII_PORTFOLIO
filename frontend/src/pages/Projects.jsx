import React from 'react';
import Header from '../components/Header';
import ProjectCard from '../components/ProjectCard';
import { flagshipProjects, allProjects } from '../projectsInfo';

const Projects = () => {

    const [view, setView] = React.useState("flagship")
    const projectsToShow = view === "flagship" ? flagshipProjects : allProjects
    return (
        <div id="projects" className="min-h-screen px-6 md:px-16 py-20">
            <Header pretitle="Browse my" title="Projects" />

            <div className="flex gap-4 justify-center mt-8">

                {/* BUTTON PART */}
                <button onClick={() => setView("flagship")}
                    className={`px-4 py-2 rounded-full border border-gray-200 transition ${view === "flagship" ? "bg-black text-white" : "bg-gray-200 hover:bg-gray-300"}`}
                >
                    FlagShip Projects
                </button>
                <button onClick={() => setView("all")}
                    className={`px-4 py-2 rounded-full border border-gray-200 transition ${view === "all" ? "bg-black text-white" : "bg-gray-200 hover:bg-gray-300"}`}
                >
                    All Projects
                </button>
                {/* BUTTON PART */}

            </div>
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-5 justify-items-center">

                {projectsToShow.map((project, index) => (
                    <ProjectCard key={index} project={project} />
                ))}
            </div>

        </div>
    );
};

export default Projects;

