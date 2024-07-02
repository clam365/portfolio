import {AppWindow, List} from "lucide-react";

export default function Research() {
    return (
        <div className={"mb-6 mt-12"}>
            <h1 className="font-semibold text-gray-400 text-sm mt-3 tracking-widest">UXR</h1>
            <h1 className={"text-[#121212] text-xl font-semibold mb-4 "}>Three main research pillars for our approach</h1>
            <hr/>
            <div className={"grid grid-cols-1 md:grid-cols-3 gap-2 mt-6 justify-between"}>
                <div className={"flex flex-col "}>
                    <div className={"flex items-center gap-2"}>
                        <List/>
                        <h1 className={"font-semibold"}>Prioritization</h1>
                    </div>
                    <p className={"text-sm text-gray-400 mt-3"}>What kind of data are students mostly trying to
                        collect?</p>
                </div>

                <div className={"flex flex-col "}>
                    <div className={"flex items-center gap-2"}>
                        <AppWindow/>
                        <h1 className={"font-semibold"}>Viability</h1>
                    </div>
                    <p className={"text-sm text-gray-400 mt-3"}>What existing apps pose as a competitor? How can we be
                        different?</p>
                </div>

                <div className={"flex flex-col "}>
                    <div className={"flex items-center gap-2"}>
                        <AppWindow/>
                        <h1 className={"font-semibold"}>Modernity</h1>
                    </div>
                    <p className={"text-sm text-gray-400 mt-3"}>How can we leverage existing UI on WPI pages to bring a new feel?</p>
                </div>


            </div>
        </div>
    )
}