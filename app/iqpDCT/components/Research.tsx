import {AppWindow, List} from "lucide-react";

export default function Research() {
    return (
        <div className={"mb-6 mt-16"}>
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
                        <h1 className={"font-semibold"}>Revitalization</h1>
                    </div>
                    <p className={"text-sm text-gray-400 mt-3"}>How can we leverage existing UI on WPI pages to bring a new feel?</p>
                </div>
            </div>
            <p className={"text-sm mt-10"}>
                {/* eslint-disable-next-line react/no-unescaped-entities */}
                We analyzed <span className={"font-bold"}>20</span> unique IQP project papers to find common metrics in the way students collected data. To minimize error, all team members took part in reviewing another peer's
                overview to check for any mistakes. Using the findings below,
                we prioritized the highest percentages as our first sprints and progressed from there.
                <div className={"grid grid-cols-2 md:grid-cols-4 gap-y-6 mt-10"}>
                    <div>
                        <h1 className={"font-bold text-5xl text-center"}>90%</h1>
                        <p className={"text-center mt-2 text-lg"}>Interviews</p>
                    </div>
                    <div>
                        <h1 className={"font-bold text-5xl text-center"}>90%</h1>
                        <p className={"text-center mt-2 text-lg"}>Qualitative</p>
                    </div>
                    <div>
                        <h1 className={"font-bold text-5xl text-center"}>70%</h1>
                        <p className={"text-center mt-2 text-lg"}>Surveys</p>
                    </div>
                    <div>
                        <h1 className={"font-bold text-5xl text-center"}>50%</h1>
                        <p className={"text-center mt-2 text-lg"}>Quantitative</p>
                    </div>
                </div>
                <br/>
                <br/>
                Existing applications such as Fastfield and Jotfield allow form building, geotagging data, and
                exportation, but what
                disadvantages to they have? Not free, complicated UI, and is intended for the electrical industries. Our
                application
                will be&nbsp;
                <span className={"font-bold"}>tailored</span>
                &nbsp;to WPI students as a university service for free and aim to have a simple UI.
                <br/>
                <br/>
                With current WPI pages such as the university site, planner.wpi.edu, and courselistings.wpi.edu,
                we will&nbsp;
                <span className={"font-bold"}>revitalize</span>
                &nbsp;the current color palette and component structures so users can recognize similar layouts.
                Using shadcn UI, our interface brings a new level to the frontier.
            </p>

        </div>
    )
}