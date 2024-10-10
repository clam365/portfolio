import Image from "next/image";

export default function Demo() {
    return (
        <div>

            <h1 className="font-semibold text-gray-400 text-sm mt-3 tracking-widest mb-6">APPLICATION ITERATIONS</h1>

            <div className="mb-3 mt-6">
                <div className="mb-3">
                    <p className="text-sm text-[#949494] mb-1">Landing Page</p>
                </div>
                <div className="bg-[#f2f2f2] rounded-lg p-4 md:p-10 flex flex-col justify-center m-auto ">
                    <div className={""}>
                        <video
                            src="/freelance/wildscape_landingPage.mp4"
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
            <div className="mb-3 mt-6">
                <div className="mb-3">
                    {/* eslint-disable-next-line react/no-unescaped-entities */}
                    <p className="text-sm text-[#949494] mb-1">Dashboard</p>
                    <p className={"text-sm"}>
                        {/* eslint-disable-next-line react/no-unescaped-entities */}
                        Users can see other users' posts, save them, like comment, and even upload their own spots!
                    </p>
                </div>
                <div className="bg-[#f2f2f2] rounded-lg p-4 md:p-10 flex flex-col justify-center m-auto ">
                    <div className={""}>
                        <video
                            src="/freelance/wildscape_dashboard.mp4"
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

            <div className="mb-3 mt-6">
                <div className="mb-3">
                    {/* eslint-disable-next-line react/no-unescaped-entities */}
                    <p className="text-sm text-[#949494] mb-1">Posting "Spots"</p>
                    <p className={"text-sm"}>
                        This is where people can upload a relevant photo, fill in the data and most importantly link the
                        location & any potential donation links for the park.
                    </p>
                </div>
                <div className="bg-[#f2f2f2] rounded-lg p-4 md:p-10 flex flex-col justify-center m-auto ">

                    <div className={""}>
                        <video
                            src="/freelance/wildscape_create.mp4"
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
            <div className="mt-12">
                <div className="mb-3">
                    {/* eslint-disable-next-line react/no-unescaped-entities */}
                    <p className="text-sm text-[#949494] mb-1">Maps Page</p>
                    <p className={"text-sm"}>
                        Users from the actual post itself and the map hot icon can view where national parks are with
                        the power of the Google Maps API.
                    </p>
                </div>
                <div className="bg-[#f2f2f2] rounded-lg p-4 md:p-10 flex justify-center m-auto ">
                    <Image alt={"old"}
                           src="/freelance/mapPage.PNG"
                           className="rounded-lg w-fit h-full drop-shadow-xl"
                           width={750} height={500}/>

                </div>
            </div>
            <div className="mt-12">
                <div className="mb-3">
                    {/* eslint-disable-next-line react/no-unescaped-entities */}
                    <p className="text-sm text-[#949494] mb-1">Get Involved Page</p>
                    <p className={"text-sm"}>
                        Of course, there needs to be a dedicated page where users can understand our mission and how to get involved themselves, even when they might not be 18.
                        There are many ways to start! And regardless of whether they are taking action with this page and its actions, actively viewing spots through brings the
                        appreciation of nature to a whole new level. Start by going outside and plan a hike at any place you deem interesting!
                    </p>
                </div>
                <div className="bg-[#f2f2f2] rounded-lg p-4 md:p-10 flex justify-center m-auto ">
                    <Image alt={"old"}
                           src="/freelance/supportParks.PNG"
                           className="rounded-lg w-fit h-full drop-shadow-xl"
                           width={750} height={500}/>

                </div>
            </div>


        </div>
    )
}