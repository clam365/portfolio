
import Link from "next/link";
import {ArrowRight} from "lucide-react";

export default function GoToMGB() {
    return (
        <Link href={"/mgb-kiosk"}>
            <div className="rounded-lg p-4 bg-[#f2f2f2] mt-6 flex justify-between hover:bg-[#EEEEEE] transition">
                <h1 className={"text-sm"}>Check out my work with MGB Kiosk</h1>
                <ArrowRight />
            </div>
        </Link>
    )
}