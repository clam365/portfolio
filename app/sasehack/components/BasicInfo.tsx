import {ArrowRight} from "lucide-react";
import Link from "next/link";

export default function BasicInfo() {
    return (
        <div>
            {/* eslint-disable-next-line react/no-unescaped-entities */}
            <h1 className={"font-semibold text-3xl xl:text-6xl lg:text-6xl md:text-5xl text-[#121212]"}>Wildscape</h1>
            <p className={"text-gray-400 font-semibold text-xl mt-5"}>Discover. Share. Protect.</p>
            <Link href={"https://wildscape.vercel.app/"}>
                <div
                    className="rounded-lg p-4 bg-[#f2f2f2] mt-6 flex justify-between hover:bg-[#EEEEEE] transition">
                    <h1 className={"text-sm"}>Check out the deployed Wildscape!</h1>
                    <ArrowRight/>
                </div>
            </Link>
            <hr className={"mt-6"}/>
            <p className={"mt-6 text-sm"}>
                From October 4-6, 2024, I participated in the SASEHackathon which had $3,750 in prizes to award. Our
                team created the project Wildscape,
                an application designed to empower adolescents by getting involved with environmental protection by
                understanding the meaning behind their&nbsp;
                {/* eslint-disable-next-line react/no-unescaped-entities */}
                "I know a spot" phrase. There were 31 team submissions and approximately 124 participants were involved.
                <br/>
                <br/>
                <span className={"font-semibold"}>Technology Stack: </span> Next.js, Pocketbase, Framer-Motion, GSAP, Typescript, Docker, Fly.io, OAuth, Shadcn. AceturnityUI, Google Maps API
            </p>


        </div>
    )
}