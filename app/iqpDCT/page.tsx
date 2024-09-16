"use client";
import { motion } from "framer-motion";
import Sidebar from "@/app/components/Sidebar";
import Image from "next/image";
import RoleDurationTeam from "@/app/iqpDCT/components/RoleDurationTeam";
import BasicInfo from "@/app/iqpDCT/components/BasicInfo";
import ContextProblemGoal from "@/app/iqpDCT/components/ContextProblemGoal";
import GoToMGB from "@/app/iqpDCT/components/GoToMGB";
import Research from "@/app/iqpDCT/components/Research";
import Features from "@/app/iqpDCT/components/Features";
import {UnderConstruction} from "@/app/components/UnderConstruction";

const fadeUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function page() {
    return (
        <div className="lg:flex">
            <div className={"z-10 fixed"}><Sidebar/></div>
            <motion.div
                className="flex-1 lg:pt-0 sm: lg:ml-64 flex flex-col z-0 "
                initial="hidden"
                animate="visible"
                variants={fadeUpVariants}
            >
                <div className={" flex flex-col justify-center m-auto mt-28 lg:mt-0"}>
                    <Image src={"/dashboard.png"} alt={"DCT"} width={1280} height={720}
                           className={" m-auto drop-shadow-2xl"}/>
                    <div className="p-12 md:p-20 lg:p-44 lg:pt-10 xl:pt-16">
                        <BasicInfo/>
                        <hr className={"mt-10"}/>
                        <RoleDurationTeam/>
                        <hr className={"mt-12 mb-6"}/>
                        <ContextProblemGoal/>
                        <Research/>
                        <Features/>
                        <UnderConstruction text={"This project is still under construction, but if you want to learn more about this project in detail, please reach out and let's chat!"}/>
                        <GoToMGB/>
                    </div>
                </div>

            </motion.div>
        </div>
    );
}
