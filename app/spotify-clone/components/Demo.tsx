import Image from "next/image";
import {ArrowRight} from "lucide-react";
import Link from "next/link";

export default function Demo() {
    return (
        <div>
            <div>
                <div className="mb-3 ">
                    <p className="text-sm text-[#949494] mb-1">Home Page</p>
                    <p className="text-sm ">
                        Responsive home page divided up into header, sidebar, and library, where the library contains the song modals and liked songs playlist.
                    </p>
                </div>
                <div className="bg-[#f2f2f2] rounded-lg p-4 md:p-10 flex justify-center m-auto ">


                    <Image alt={"old"}
                           src="/spotify/spotifyHome.jpg"
                           className="rounded-lg w-fit h-full drop-shadow-xl"
                           width={1000} height={800}/>

                </div>
            </div>
            <div>
                <div className="mb-3 mt-6">
                    <p className="text-sm text-[#949494] mb-1">Searching and Liking Songs</p>
                    <p className="text-sm ">
                        You can search up the songs you want in the database and like the songs to be put in your liked playlist.
                    </p>
                </div>
                <div className="bg-[#f2f2f2] rounded-lg p-4 md:p-10 flex flex-col justify-center m-auto ">

                    <div className={"hidden lg:flex"}>
                        <video
                            src="/spotify/search.mp4"
                            className="hidden lg:block rounded-lg w-fit h-full drop-shadow-xl"
                            autoPlay
                            loop
                            muted
                            width={1000} height={800}
                        />
                    </div>
                    <div className={"flex lg:hidden"}>
                        <Image src={"/spotify/searchFrame.jpg"} alt={"/mapdemo"} width={1000} height={800}
                               className="rounded-lg w-fit h-full drop-shadow-xl"/>
                    </div>
                </div>
            </div>

            <div className="mt-12">
                <div className="mb-3">
                    <p className="text-sm text-[#949494] mb-1">Upload a song</p>
                    <p className={"text-sm"}>
                        Upload your wanted songs with its .mp3 file and its song cover with visual confirmation.
                    </p>
                </div>
                <div className="bg-[#f2f2f2] rounded-lg p-4 md:p-10 flex justify-center m-auto ">
                    <div className={"hidden lg:flex"}>
                        <video
                            src="/spotify/uploadSong.mp4"
                            className="hidden lg:block rounded-lg w-fit h-full drop-shadow-xl"
                            autoPlay
                            loop
                            muted
                            width={1000} height={800}
                        />
                    </div>
                    <div className={"flex lg:hidden"}>
                        <Image src={"/spotify/uploadFrame.jpg"} alt={"/mapdemo"} width={1000} height={800}
                               className="rounded-lg w-fit h-full drop-shadow-xl"/>
                    </div>
                </div>
            </div>

            <div className="mb-3 mt-6">
                <div className="mb-3">
                    <p className="text-sm text-[#949494] mb-1">Subscribe to Spotify Premium</p>
                    <p className={"text-sm"}>
                    Get Spotify Premium through Stripe API, where you can open up more features.
                    </p>
                </div>
                <div className="bg-[#f2f2f2] rounded-lg p-4 md:p-10 flex flex-col justify-center m-auto ">

                    <div className={"hidden lg:flex"}>
                        <video
                            src="/spotify/premium.mp4"
                            className="hidden lg:block rounded-lg w-fit h-full drop-shadow-xl"
                            autoPlay
                            loop
                            muted
                            width={1000} height={800}
                        />
                    </div>
                    <div className={"flex lg:hidden"}>
                        <Image src={"/spotify/premiumFrame.jpg"} alt={"/mapdemo"} width={1000} height={800}
                               className="rounded-lg w-fit h-full drop-shadow-xl"/>
                    </div>
                </div>
            </div>

            <Link href={"https://spotify-ochre-kappa.vercel.app/"}>
                <div className="rounded-lg p-4 bg-[#f2f2f2] mt-6 flex justify-between hover:bg-[#EEEEEE] transition">
                    <h1 className={"text-sm"}>Check out the live demo to see it in action!</h1>
                    <ArrowRight/>
                </div>
            </Link>


        </div>
    )
}