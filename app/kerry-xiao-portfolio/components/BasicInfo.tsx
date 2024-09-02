import Link from "next/link";


export default function BasicInfo() {
    return (
        <div>
            {/* eslint-disable-next-line react/no-unescaped-entities */}
            <h1 className={"font-semibold text-3xl xl:text-6xl lg:text-6xl md:text-5xl text-[#121212]"}>Kerry Xiao's Portfolio</h1>
            <hr className={"mt-6"}/>
            <p className={"mt-6 text-sm"}>
                A good friend of mine needed a portfolio required by his employers before SASE Nationals to showcase his previous work in Robotics Engineering.
                This was a great opportunity for me to work with my&nbsp;
                <span className={"font-bold"}>first ever client</span>
                &nbsp;and showcase my abilities in the real world regarding website development.
            </p>
        </div>
    )
}