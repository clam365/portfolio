"use client";
import { motion } from "framer-motion";
import Sidebar from "@/app/components/Sidebar";
import ProjectSection2 from "@/app/components/ProjectSection2";
import Footer from "@/app/components/Footer";
import Freelance from "@/app/components/Freelance/Freelance";

const fadeUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Home() {
    return (
        <div className="lg:flex">
            <div className={"z-10 fixed top-0"}><Sidebar/></div>
            <motion.div
                className="lg:ml-64 flex-1 z-0"
                initial="hidden"
                animate="visible"
                variants={fadeUpVariants}
            >
                <div className={" flex flex-col justify-center m-auto mt-28 lg:mt-0"}>
                    <div className={"p-10  lg:p-12 "}>
                        {/* Introduction */}
                        <div className={"text-transparent bg-clip-text bg-gradient-to-r from-gray-400 to-[#121212]"}>
                            <h1 className="font-semibold text-lg md:text-xl lg:text-2xl mb-5">
                                Hello there!
                            </h1>
                            <p className="font-semibold text-2xl md:text-3xl  xl:text-4xl">
                                {/* eslint-disable-next-line react/no-unescaped-entities */}
                                I'm Chris Lam, a full stack software engineer specializing in frontend and UI/UX design crafting meaningful free-flowing interfaces. Currently, I work as a website freelancer.
                            </p>
                        </div>
                        <hr className={"mt-10"}/>

                        <ProjectSection2/>
                        <Freelance/>
                        <Footer/>
                    </div>
                </div>

            </motion.div>
        </div>
    );
}
