"use client";
import { motion } from "framer-motion";
import Sidebar from "@/app/components/Sidebar";
import Image from "next/image";

const fadeUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function page() {
    return (
        <div className="lg:flex">
            <Sidebar />
            <motion.div
                className="flex-1 p-10 lg:p-40 lg:pt-10 lg:ml-64 flex flex-col items-center lg:items-start"
                initial="hidden"
                animate="visible"
                variants={fadeUpVariants}
            >
                <div
                    className={"text-transparent bg-clip-text bg-gradient-to-r from-gray-400 to-[#121212]  md:text-left"}>
                    <h1 className={"font-bold text-4xl md:text-4xl lg:text-5xl xl:text-8xl sm:text-5xl "}>
                        Mass General Brigham Hospital Kiosk
                    </h1>
                    <hr className={"mt-6"}/>
                </div>

            </motion.div>
        </div>
    );
}
