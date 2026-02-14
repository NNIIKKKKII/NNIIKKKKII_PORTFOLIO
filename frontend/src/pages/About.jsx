import React from 'react'
import webImage from "../../public/assets/ME_4.jpeg"
import Header from '../components/Header'
const About = () => {
  return (
    <section id="about" className=" min-h-screen px-6 md:px-16 py-20">

      <Header pretitle="Get To Know More" title="About Me" />



      <div className="flex flex-col gap-15  items-center justify-center md:flex-row items-center justify-center mt-10 ">



        <div className="w-80 h-100">
          <img src={webImage} alt="webImage" className="w-full h-full object-cover rounded-full" />
        </div>



        <div className='flex flex-col gap-5 items-center'>

          <div className='flex justify-center gap-5 md:gap-15 w-full'>

            <div className="flex-1 p-5 border border-black rounded-3xl flex flex-col items-center text-center">
              <p className="font-bold text-lg py-3">Experience</p>
              <span className="text-sm">Team Leader & Event Co-ordinator</span>
            </div>
            <div className="flex-1 p-5 border border-black rounded-3xl flex flex-col items-center text-center">
              <p className="font-bold text-lg py-3">Education</p>
              <span className="text-sm text-center">Bachelor of Computer Science & Engineering</span>
            </div>

          </div>

          <p className="text-center md:text-left max-w-xl leading-relaxed text-gray-700 mt-3">Full Stack Developer experienced in building end-to-end web products using React.js, Node.js, and PostgreSQL/MongoDB.
            Adept at translating product requirements into scalable technical solutions, implementing secure authentication,
            optimizing performance with Redis, and delivering responsive user experiences. Comfortable working across the
            stack in fast-paced, product-focused environments</p>


        </div>

      </div>
    </section>
  )
}

export default About