export default function ActualWeb() {
    return(
        <div className={""}>
            <hr className={"mt-10"}/>
            <h1 className="font-semibold text-gray-400 text-sm tracking-widest mb-6 mt-4">FINAL DESIGNS</h1>
            <div className="mt-12">
                <div className="mb-3">
                    <p className="text-sm text-[#949494] mb-1">Landing Page</p>
                    <p className={"text-sm"}>
                        From the mockup, I changed to an all black theme for cohesiveness. As this was a site meant to
                        showcase a robotics engineering student, there was not as much of a
                        need to use an about page, and so it was moved to a section here. All information about Kerry
                        would be located in his resume/CV.
                    </p>
                </div>
                <div className="bg-[#f2f2f2] rounded-lg p-4 md:p-10 flex justify-center m-auto ">
                    <div className={""}>
                        <video
                            src="/freelance/portfolioHero.mp4"
                            className=" rounded-lg w-fit h-full drop-shadow-xl flex justify-center m-auto"
                            autoPlay
                            playsInline
                            loop
                            muted
                            width={1250} height={800}
                        />
                    </div>
                </div>
            </div>
            <div className="mt-12">
                <div className="mb-3">
                    <p className="text-sm text-[#949494] mb-1">Project Page</p>
                    <p className={"text-sm"}>
                        More details about his project such as his processes, diagrams, and code will be updated as he
                        continues his studies and gives his resources.
                        I have put in placeholders, to show whether it is currently in progress or completed.
                    </p>
                </div>
                <div className="bg-[#f2f2f2] rounded-lg p-4 md:p-10 flex justify-center m-auto ">
                    <div className={""}>
                        <video
                            src="/freelance/project1.mp4"
                            className=" rounded-lg w-fit h-full drop-shadow-xl flex justify-center m-auto"
                            autoPlay
                            playsInline
                            loop
                            muted
                            width={1250} height={800}
                        />
                    </div>
                </div>
            </div>
            <hr className={"mt-10"}/>
            <div className={"mt-6"}>
                <h1 className="text-[#949494] text-sm">Takeaways</h1>
                <p className={"text-sm mt-1"}>
                    Working with my first client taught me that in order to produce a good product, it requires a two-way effort. Classes have definitely stressed
                    us out. Despite that, a working portfolio is present, but just needs project details.
                </p>

            </div>
        </div>
    )
}