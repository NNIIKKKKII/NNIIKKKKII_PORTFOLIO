import { FaLinkedin, FaGithub } from "react-icons/fa";
import myImage from "/assets/ME_3.png"   // adjust path if needed


const Hero = () => {

    return (
        <div className="min-h-screen flex flex-col gap-22 px-6 items-center justify-center md:flex-row items-center justify-center  md:px-16 py-20">
            <div className="w-69 h-69 md:w-96 md:h-96">
                <img src={myImage} alt="myProfilePic"
                    className="w-full h-full object-cover rounded-full"
                />
            </div>
            <div className="flex flex-col gap-3  items-center">

                <p className="font-bold text-2xl text-gray-500">Hello, I'm</p>
                <h1 className="font-bold text-4xl text-black">NIKHIL PAREESHWAD</h1>
                <h2 className="font-bold text-3xl text-gray-500">MERN Stack Developer</h2>
                <div className="flex gap-5">

                    <a href="/assets/resume.pdf" download="Nikhil_Pareeshwad_Resume.pdf" className="p-3 border border-black rounded-3xl text-black hover:bg-black hover:text-white transition-colors">
                        Download Resume
                    </a>
                    <a href="#contact" className="p-3 border border-black rounded-3xl text-black hover:bg-black hover:text-white transition-colors">
                        Contact info
                    </a>
                </div>

                <div className="flex gap-5">
                    <a href="https://www.linkedin.com/in/nikhil-pareeshwad/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors">
                        <FaLinkedin size={30} className="w-10 h-10 text-black " />
                    </a>
                    <a href="https://github.com/NNIIKKKKII" target="_blank" rel="noopener noreferrer" className="hover:text-gray-800 transition-colors">
                        <FaGithub size={30} className="w-10 h-10 text-black " />
                    </a>
                </div>
            </div>
        </div>
    )
}


export default Hero