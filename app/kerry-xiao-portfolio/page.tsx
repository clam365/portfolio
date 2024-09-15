"use client";
import { motion } from "framer-motion";
import Sidebar from "@/app/components/Sidebar";
import Image from "next/image";
import BasicInfo from "@/app/kerry-xiao-portfolio/components/BasicInfo";
import {UnderConstruction} from "@/app/components/UnderConstruction";
import ProtoTypePhotos from "@/app/kerry-xiao-portfolio/components/ProtoTypePhotos";


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
                    <Image src={"/freelance/kerry_website.PNG"} alt={"kerry"} width={1280} height={720}
                           className={" m-auto drop-shadow-2xl w-screen"}/>
                    <div className="p-12 md:p-20 lg:p-44 lg:pt-10 xl:pt-16">
                        <BasicInfo/>
                        <hr className={"mt-10"}/>
                        <br/>
                        <ProtoTypePhotos/>
                        <UnderConstruction text={"This project is still under construction, but if you want to learn more about this project in detail, please reach out and let's chat!"}/>
                    </div>
                </div>

            </motion.div>
        </div>
    );
}
