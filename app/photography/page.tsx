"use client";
import { motion } from "framer-motion";
import Sidebar from "@/app/components/Sidebar";
import Image from "next/image";

const fadeUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Page() {
    return (
        <div className="lg:flex">
            <div className={"z-10 fixed"}><Sidebar/></div>
            <motion.div
                className="flex-1 p-10 lg:pl-32 lg:ml-64 flex flex-col items-center lg:items-start z-0"
                initial="hidden"
                animate="visible"
                variants={fadeUpVariants}
            >
                <div className={"mt-28 lg:mt-0"}>
                    <h1 className="font-bold text-4xl text-neutral-700 text-center lg:text-left">PHOTOGRAPHY</h1>
                    <p className="mt-6 mb-16 text-gray-400 text-center lg:text-left">
                        I like to take photos everywhere I travel to embody the beauty of the world. I am traveling next
                        to Kyoto, Japan soon to study abroad!
                    </p>
                    <div className="flex flex-col items-center lg:items-start">
                        <Image src="/venice.jpeg" alt="Photos" width={500} height={350}
                               className="mb-8 rounded-md drop-shadow-md"/>
                        <Image src="/venice2.jpeg" alt="Photos" width={500} height={350}
                               className="mb-8 rounded-md drop-shadow-md"/>
                        <Image src="/venice3.jpeg" alt="Photos" width={500} height={350}
                               className="mb-8 rounded-md drop-shadow-md"/>
                        <Image src="/grad.jpeg" alt="Photos" width={500} height={350}
                               className="mb-8 rounded-md drop-shadow-md"/>
                    </div>
                </div>

            </motion.div>
        </div>
    );
}
