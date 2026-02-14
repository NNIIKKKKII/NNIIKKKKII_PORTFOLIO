import React from 'react';

const ProjectCard = ({ project }) => {


    return (

        <div className="border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 w-full max-w-[400px] bg-white p-3 flex flex-col gap-4">
            <div className="flex gap-4 flex-grow">
                <div className="w-40 h-40 flex-grow overflow-hidden rounded-lg">
                    <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover"
                    />
                </div>

                <div className="flex flex-col gap-3 justify-center ml-auto">

                    <button className="w-15 h-15 bg-gray-100 hover:bg-black hover:text-white border border-gray-200 rounded-full  text-[11px] font-bold uppercase tracking-tight transition-all text-gray-700">
                        GitHub
                    </button>
                    <button className="w-15 h-15 bg-gray-100 hover:bg-black hover:text-white border border-gray-200 rounded-full  text-[11px] font-bold uppercase tracking-tight transition-all text-gray-700">
                        Live
                    </button>
                </div>
            </div>

            <div className="flex flex-col gap-2">
                <h3 className="text-xl font-bold text-gray-800">{project.title}</h3>
                <p className="text-gray-600 text-sm line-clamp-3 min-h-[1rem]">
                    {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-2">
                    {project.tech.map((tech, index) => (
                        <span key={index} className="bg-gray-100 text-black rounded-md px-3 py-2 text-xs font-semibold">
                            {tech}
                        </span>
                    ))}
                </div>
            </div>
        </div>

    );
};

export default ProjectCard;
