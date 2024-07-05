import Image from "next/image";
import {ArrowRight} from "lucide-react";
import Link from "next/link";

export default function Demo() {
    return (
        <div>

            <h1 className="font-semibold text-gray-400 text-sm mt-3 tracking-widest mb-6">APPLICATION ITERATIONS</h1>

            <div>
                <div className="mb-3 ">
                    <p className="text-sm text-[#949494] mb-1">Initial Map</p>
                    <p className="text-sm ">
                        Though this image is blurry, the layout of the sections is enough to show that there is NO
                        cohesiveness.
                        It is hard to navigate from place to place as the selections to map is in FOUR different places,
                        not one designated div.
                        You choose floors on the top left dropdown, choose the location on the left sidebar, place the
                        selection onto the bottom div, and plot on
                        the map separately. The rest of the top bar selections is also just too much ex. Request List
                        should be a pathway from Service Request.
                        Color scheme is too harsh on the user.
                    </p>
                </div>
                <div className="bg-[#f2f2f2] rounded-lg p-4 md:p-10 flex justify-center m-auto ">


                    <Image alt={"old"}
                           src="/oldMapPage.PNG"
                           className="rounded-lg w-fit h-full drop-shadow-xl"
                           width={1000} height={800}/>

                </div>
            </div>
            <div>
                <div className="mb-3 mt-6">
                    <p className="text-sm text-[#949494] mb-1">Final Map</p>
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
                <div className="bg-[#f2f2f2] rounded-lg p-4 md:p-10 flex flex-col justify-center m-auto ">

                    <div className={""}>
                        <video
                            src="/mapDemo.mp4"
                            className=" rounded-lg w-fit h-full drop-shadow-xl"
                            autoPlay
                            playsInline
                            loop
                            muted
                            width={1000} height={800}
                        />
                    </div>
                </div>
            </div>

            <div className="mt-12">
                <div className="mb-3">
                    <p className="text-sm text-[#949494] mb-1">Initial Service Requests</p>
                    <p className={"text-sm"}>
                        This Figma mockup is too simplified and the page overall feels very blockly with web design trends from the early 2000s.
                        {/* eslint-disable-next-line react/no-unescaped-entities */}
                        &nbsp;Sure, the type of request tab area makes it accessible, but there's too much whitespace and the button/selection themes don't seem to match.
                    </p>
                </div>
                <div className="bg-[#f2f2f2] rounded-lg p-4 md:p-10 flex justify-center m-auto ">


                    <Image alt={"old"}
                           src="/oldRequestDesign.png"
                           className="rounded-lg w-fit h-full drop-shadow-xl"
                           width={750} height={500}/>

                </div>
            </div>

            <div className="mb-3 mt-6">
                <div className="mb-3">
                    <p className="text-sm text-[#949494] mb-1">Final Service Requests</p>
                    <p className={"text-sm"}>
                        Guests, Staff, and admin have different views of the requests, but can all send one depending on
                        what it is. Total, there
                        is Flower, Religious, Medicine, Transport, and Sanitation. Staff have the power to see all
                        current requests and maintain them. Icons are in place to help bring easier recognition. Looking back, component
                        scalability relative to monitor display should be in place here.

                    </p>
                </div>
                <div className="bg-[#f2f2f2] rounded-lg p-4 md:p-10 flex flex-col justify-center m-auto ">

                    <div className={""}>
                        <video
                            src="/requestDemo.mp4"
                            className="rounded-lg w-fit h-full drop-shadow-xl"
                            autoPlay
                            playsInline
                            loop
                            muted
                            width={1000} height={800}
                        />
                    </div>

                </div>
            </div>

            <Link href={"https://www.youtube.com/watch?v=eopEfoL5e4c"}>
                <div className="rounded-lg p-4 bg-[#f2f2f2] mt-6 flex justify-between hover:bg-[#EEEEEE] transition">
                <h1 className={"text-sm"}>Check out the other features in this demo video!</h1>
                    <ArrowRight/>
                </div>
            </Link>


        </div>
    )
}