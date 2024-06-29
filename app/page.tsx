"use client";
import { motion } from "framer-motion";
import Sidebar from "@/app/components/Sidebar";
import LandingContent from "@/app/components/LandingContent";

const fadeUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Home() {
    return (
        <div className="lg:flex">
            <Sidebar />
            <motion.div
                className="lg:ml-64 flex-1"
                initial="hidden"
                animate="visible"
                variants={fadeUpVariants}
            >
                <LandingContent />
            </motion.div>
        </div>
    );
}
