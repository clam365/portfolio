import Image from "next/image";
import {ArrowRight} from "lucide-react";
import Link from "next/link";

export default function Demo() {
    return (
        <div>

            <h1 className="font-semibold text-gray-400 text-sm mt-3 tracking-widest mb-6">FINAL APPLICATION</h1>

            <div>
                <div className="mb-3">
                    <p className="text-sm text-[#949494] mb-1">Map Functionality</p>
                    <p className="text-sm ">
                        Users can easily navigate through locations either from a search bar or quick pins. Using the
                        tabs
                        at the top, they
                        can select levels along with common endpoints like bathrooms, elevators, etc. Directions
                        encompass
                        A*, BFS, DFS, and
                        {/* eslint-disable-next-line react/no-unescaped-entities */}
                        &nbsp;Dijkstra's Search Algorithms
                    </p>
                </div>
                <div className="bg-[#f2f2f2] rounded-lg p-10 flex flex-col justify-center m-auto ">

                    <video
                        src="/mapDemo.mp4"
                        className="rounded-lg w-fit h-full drop-shadow-xl"
                        autoPlay
                        loop
                        muted
                    />
                </div>
            </div>

            <div className="mt-12">
                <div className="mb-3">
                    <p className="text-sm text-[#949494] mb-1">Service Requests</p>
                    <p className={"text-sm"}>
                        Guests, Staff, and admin have different views of the requests, but can all send one depending on what it is. Total, there
                        is Flower, Religious, Medicine, Transport, and Sanitation. Staff have the power to see all current requests and maintain them.

                    </p>
                </div>
                <div className="bg-[#f2f2f2] rounded-lg p-10 flex flex-col justify-center m-auto ">

                    <video
                        src="/requestDemo.mp4"
                        className="rounded-lg w-fit h-full drop-shadow-xl"
                        autoPlay
                        loop
                        muted
                    />
                </div>
            </div>

            <Link href={"https://www.youtube.com/watch?v=eopEfoL5e4c"}>
                <div className="rounded-lg p-4 bg-[#f2f2f2] mt-6 flex justify-between hover:bg-[#EEEEEE] transition">
                    <h1 className={"text-sm"}>Check out the other features in this demo video!</h1>
                    <ArrowRight />
                </div>
            </Link>



        </div>
    )
}