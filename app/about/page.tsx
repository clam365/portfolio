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
                className="flex-1 p-10 lg:p-60 lg:pt-10 lg:ml-64"
                initial="hidden"
                animate="visible"
                variants={fadeUpVariants}
            >
                <Header />
                <InfoSection />
                <Education />
                <MyPhilosophy />
            </motion.div>
        </div>
    );
}
