"use client";
import Sidebar from "@/app/components/Sidebar";
import { motion } from "framer-motion";
import InfoSection from "@/app/about/InfoSection";
import Header from "@/app/about/Header";
import Education from "@/app/about/Education";
import MyPhilosophy from "@/app/about/MyPhilosophy";

const fadeUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Page() {
    return (
        <div className="lg:flex">
            <div className={"z-10 fixed"}><Sidebar/></div>
            <motion.div
                className="flex-1 lg:pt-0 lg:ml-64 flex flex-col overflow-x-hidden z-0"
                initial="hidden"
                animate="visible"
                variants={fadeUpVariants}
            >
                <div className={" flex flex-col justify-center m-auto mt-28 lg:mt:0"}>
                    <div className="p-12 md:p-20 lg:p-20 xl:p-44 lg:pt-10 xl:pt-16">
                        <Header/>
                        <InfoSection/>
                        <Education/>
                        <MyPhilosophy/>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}
