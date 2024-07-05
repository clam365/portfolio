"use client";
import { motion } from "framer-motion";
import Sidebar from "@/app/components/Sidebar";
import Image from "next/image";
import RoleDurationTeam from "@/app/spotify-clone/components/RoleDurationTeam";
import BasicInfo from "@/app/spotify-clone/components/BasicInfo";
import ContextProblemGoal from "@/app/spotify-clone/components/ContextProblemGoal";
import GoToSpotify from "@/app/spotify-clone/components/GoToSpotify";
import Demo from "@/app/spotify-clone/components/Demo";
import OutcomesTakeaways from "@/app/spotify-clone/components/OutcomesTakeaways";

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
                    <Image src={"/spotify/spotifyHome.jpg"} alt={"spotify"} width={1280} height={720}
                           className={" m-auto drop-shadow-2xl w-screen"}/>
                    <div className="p-12 md:p-20 lg:p-44 xl:p-60 lg:pt-10 xl:pt-16">
                        <BasicInfo/>
                        <hr className={"mt-10"}/>
                        <RoleDurationTeam/>
                        <hr className={"mt-12 mb-6"}/>
                        <ContextProblemGoal/>
                        <hr className="mb-6"/>
                        <Demo/>
                        <hr className="mt-10 "/>
                        <OutcomesTakeaways/>
                        <GoToSpotify/>
                    </div>
                </div>

            </motion.div>
        </div>
    );
}
