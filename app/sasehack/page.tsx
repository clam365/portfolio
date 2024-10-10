"use client";
import { motion } from "framer-motion";
import Sidebar from "@/app/components/Sidebar";
import Image from "next/image";
import BasicInfo from "@/app/sasehack/components/BasicInfo";
import {ArrowRight} from "lucide-react";
import Link from "next/link";
import RoleDurationTeam from "@/app/sasehack/components/RoleDurationTeam";
import ContextProblemGoal from "@/app/sasehack/components/ContextProblemGoal";

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
                    <Image src={"/freelance/full_width.png"} alt={"image"} width={1280} height={171}
                           className={" m-auto drop-shadow-2xl w-screen"}/>
                    <div className="p-12 md:p-20 lg:p-44 lg:pt-10 xl:pt-16">
                        <BasicInfo/>
                        <hr className={"mt-10"}/>
                        <RoleDurationTeam/>
                        <hr className={"mt-12 mb-6"}/>
                        <ContextProblemGoal/>
                        <Link href={"/iqpDCT"}>
                            <div
                                className="rounded-lg p-4 bg-[#f2f2f2] mt-6 flex justify-between hover:bg-[#EEEEEE] transition">
                                <h1 className={"text-sm"}>Check out my work with IQP DCT</h1>
                                <ArrowRight/>
                            </div>
                        </Link>
                    </div>
                </div>

            </motion.div>
        </div>
    );
}
