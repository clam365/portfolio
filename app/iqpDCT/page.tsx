"use client";
import { motion } from "framer-motion";
import Sidebar from "@/app/components/Sidebar";
import Image from "next/image";
import UnderConstruction from "@/app/components/UnderConstruction";
import RoleDurationTeam from "@/app/iqpDCT/components/RoleDurationTeam";
import BasicInfo from "@/app/iqpDCT/components/BasicInfo";
import ContextProblemGoal from "@/app/iqpDCT/components/ContextProblemGoal";
import GoToMGB from "@/app/iqpDCT/components/GoToMGB";
import Research from "@/app/iqpDCT/components/Research";
import Goals from "@/app/iqpDCT/components/Goals";

const fadeUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function page() {
    return (
        <div className="lg:flex">
            <Sidebar />
            <motion.div
                className="flex-1 lg:pt-0 sm: lg:ml-64 flex flex-col  "
                initial="hidden"
                animate="visible"
                variants={fadeUpVariants}
            >
                <div className={" flex flex-col justify-center m-auto"}>
                    <Image src={"/dctMockup.png"} alt={"DCT"} width={1280} height={720}
                           className={" m-auto drop-shadow-2xl"}/>
                    <div className="p-12 md:p-20 lg:p-44 xl:p-60 lg:pt-10 xl:pt-16">
                        <BasicInfo/>
                        <hr className={"mt-10"}/>
                        <RoleDurationTeam/>
                        <hr className={"mt-12 mb-6"}/>
                        <ContextProblemGoal/>
                        <Research/>
                        <Goals/>
                        <UnderConstruction/>
                        <GoToMGB/>
                    </div>
                </div>

            </motion.div>
        </div>
    );
}
