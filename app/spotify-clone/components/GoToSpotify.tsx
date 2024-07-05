
import Link from "next/link";
import {ArrowRight} from "lucide-react";

export default function GoToSpotify() {
    return (
        <Link href={"/iqpDCT"}>
            <div className="rounded-lg p-4 bg-[#f2f2f2] mt-6 flex justify-between hover:bg-[#EEEEEE] transition">
                <h1 className={"text-sm"}>Check out my work with IQP DCT</h1>
                <ArrowRight />
            </div>
        </Link>
    )
}