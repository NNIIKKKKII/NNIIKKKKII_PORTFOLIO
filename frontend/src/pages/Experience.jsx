import React from 'react'
import Skills from '../components/Skills'
import Header from "../components/Header"
const Experience = () => {
  return (
    <section id="experience" className="min-h-screen px-6 md:px-16 py-20">

      <Header pretitle="Explore my" title="Experience" />




      <div className="grid md:grid-cols-2 gap-12 mt-12">


        <div className="flex flex-col gap-5  border border-black rounded-3xl p-5 w-full">
          <h2 className='font-bold text-3xl text-center'>Frontend Skills</h2>


          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 w-full justify-items-center">
            <Skills name="HTML" level="Advanced" />
            <Skills name="TailwindCSS" level="Advanced" />
            <Skills name="Javascript" level="Intermediate" />
            <Skills name="React.js" level="Intermediate" />
            <Skills name="Redux" level="Intermediate" />
          </div>

        </div>





        <div className="flex flex-col gap-5 items-center border border-black rounded-3xl p-5 w-full">
          <h2 className='font-bold text-3xl text-center'>Backend Skills</h2>


          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full justify-items-center">
            <Skills name="Node.js" level="Advanced" />
            <Skills name="Express.js" level="advanced" />
            <Skills name="PostgreSQL" level="Intermediate" />
            <Skills name="MongoDB" level="Intermediate" />
            <Skills name="Redis" level="Intermediate" />
          </div>

        </div>

      </div>






    </section>
  )
}

export default Experience