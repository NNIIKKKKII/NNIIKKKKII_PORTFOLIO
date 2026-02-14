
import React from 'react';
import { Check } from "lucide-react";



const Skills = ({ name, level }) => {
    return (
        <div className='flex gap-2'>
            <Check className="w-5 h-5 mt-1 text-black flex-shrink-0" />

            <section id="skills" className="">
                <h2 className="font-bold text-xl">{name}</h2>
                <p>{level}</p>
            </section>
        </div>
    );
};

export default Skills;

