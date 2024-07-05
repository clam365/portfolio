import Link from "next/link";
import {ArrowRight} from "lucide-react";


export default function BasicInfo() {
    return (
        <div>
            <h1 className={"font-semibold text-3xl xl:text-6xl lg:text-6xl md:text-5xl text-[#121212]"}>Spotify Clone</h1>
            <p className={"text-gray-400 font-semibold text-xl mt-5"}>Digital Music Service that gives you access to millions of songs.</p>

                <Link href={"https://spotify-ochre-kappa.vercel.app/"}>
                    <div className="rounded-lg p-4 bg-[#f2f2f2] mt-6 flex justify-between hover:bg-[#EEEEEE] transition">
                        <h1 className={"text-sm"}>Check out the Live Demo</h1>
                        <ArrowRight />
                    </div>
                </Link>



            <hr className={"mt-6"}/>
            <p className={"mt-6 text-sm"}>
                {/* eslint-disable-next-line react/no-unescaped-entities */}
                "Spotify is a digital music, podcast, and video streaming service that offers access to millions of
                songs, albums, podcasts, audiobook. and other content from
                {/* eslint-disable-next-line react/no-unescaped-entities */}
                &nbsp;creators around the world" (Spotify).
                <br/>
                <br/>
                Every year, I listen to on average 100,000 minutes of music, putting me in the top 10% of the world. I cherish music so much on this platform, and its UI has always fascinated me.
                To understand its layout and functionalities, I built this clone to mimic its basic functions and design.
                <br/>
                <br/>
                <span className={"font-semibold"}>Technology Stack: </span> Next.js, React, Tailwind, Supabase,
                PostgreSQP, Stripe API

            </p>
        </div>
    )
}