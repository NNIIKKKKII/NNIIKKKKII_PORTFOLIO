import React from 'react';
import { NavLink } from 'react-router-dom';

const Hamburger = ({ isOpen, setIsOpen }) => {
    const navLinkstyle = "text-black no-underline decoration-white transition-all duration-400 ease-in-out hover:text-gray-500 hover: underline hover: underline-offset-[1rem] hover:decoration-gray-300"

    return (
        <>
            <div className="flex justify-between items-center w-full md:hidden p-6">
                <div className="text-3xl font-bold hover:cursor-pointer">NNIIKKII</div>
                {/* Here the navbar sends false and button is visible bcuz !isOpen(false) == true and button renders */}

                {/* ONLY ☰ */}
                {!isOpen && (
                    <button
                        className="md:hidden text-2xl"
                        onClick={() => setIsOpen(true)}
                    >
                        ☰
                    </button>
                )}
            </div>


            {/* Here button automatically renders when hamburger button hides bcuz isOpen connects both the buttons so when hamburger button is not visible then this button is visible  */}

            {/* ONLY X + menu */}
            {
                isOpen && (
                    <div className="fixed inset-0 bg-white z-50 md:hidden p-6 ">
                        <div className="flex justify-between items-center">
                            <div className="text-3xl font-bold hover:cursor-pointer">NNIIKKII</div>
                            <button className="md:hidden text-2xl" onClick={() => setIsOpen(false)}>
                                ✕
                            </button>
                        </div>


                        <div className="flex flex-col gap-2 text-2xl mt-10">
                            {/* <a onClick={() => setIsOpen(false)}
                                className={navLinkstyle}
                                href="#"
                            >
                                Home
                            </a> */}
                            <a onClick={() => setIsOpen(false)}
                                className={navLinkstyle}
                                href="#about"
                            >
                                About
                            </a>
                            <a onClick={() => setIsOpen(false)}
                                className={navLinkstyle}
                                href="#experience"
                            >
                                Experience
                            </a>
                            <a onClick={() => setIsOpen(false)}
                                className={navLinkstyle}
                                href="#projects"
                            >
                                Projects
                            </a>
                            <a onClick={() => setIsOpen(false)}
                                className={navLinkstyle}
                                href="#contact"
                            >
                                Contact
                            </a>
                        </div>


                    </div>
                )
            }

        </>
    )
};

export default Hamburger;

