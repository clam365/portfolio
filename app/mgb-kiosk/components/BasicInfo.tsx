import Link from "next/link";


export default function BasicInfo() {
    return (
        <div>
            <h1 className={"font-semibold text-3xl xl:text-6xl lg:text-6xl md:text-5xl text-[#121212]"}>Mass General
                Brigham Hospital Kiosk</h1>
            <p className={"text-gray-400 font-semibold text-xl mt-5"}>Explore Mass General Brigham and manage service
                requests</p>
            <div className={"flex gap-2 mt-4"}>
                <Link href={"https://www.youtube.com/watch?v=eopEfoL5e4c"} className="text-sm text-blue-500  ">Demo</Link>
                <a href={"/teamEReport.pdf"} target={"_blank"} rel={"opener referrer"}
                   className="text-sm text-blue-500  ">Report</a>
                <a href={"/teamEReport.pdf"} target={"_blank"} rel={"opener referrer"}
                   className="text-sm text-blue-500">User-Manual</a>
            </div>


            <hr className={"mt-6"}/>
            <p className={"mt-6 text-sm"}>
                As the lead frontend developer in a dynamic 11-man team using the Agile Scrum methodology over an 8-week
                period,
                our team was tasked to create a full-stack Kiosk application for the hospital. I spearheaded task
                management, Figma mockups,
                and created the major components for the UI.
                <br/>
                <br/>
                The application at the end of the term was presented to representatives of Mass General Brigham for
                further feedback and usage.
                <br/>
                <br/>
                <span className={"font-semibold"}>Technology Stack: </span> React, Node.js, Express, Prisma, Axios, Docker, AWS, Figma, Git, Tailwind, Trello, Tailwind

            </p>
        </div>
    )
}