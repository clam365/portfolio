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
            <Sidebar />
            <motion.div
                className="flex-1 lg:pt-0 lg:ml-64 flex flex-col overflow-x-hidden"
                initial="hidden"
                animate="visible"
                variants={fadeUpVariants}
            >
                <div className="flex flex-col justify-center m-auto">
                    <div className="p-12 md:p-20 lg:p-20 xl:p-44 lg:pt-10 xl:pt-16">
                        <Header />
                        <InfoSection />
                        <Education />
                        <MyPhilosophy />
                    </div>
                </div>
            </motion.div>
        </div>
    );
}
