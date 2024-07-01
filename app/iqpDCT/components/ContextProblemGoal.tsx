export default function ContextProblemGoal() {
    return (
        <div className="mb-10">
            <h1 className="font-semibold text-gray-400 text-sm mt-3 tracking-widest">CONTEXT</h1>
            <p className={"text-sm mt-3"}>
                Approximately 1,200 juniors each year participates in a 7 week long humanitarian project known as the
                Interactive Qualifying Project (IQP) in any part of the globe wherever it interests them.
                Though each project is unique, most relate to each other in their methods and structures.

            </p>
            <h1 className="font-semibold text-gray-400 text-sm mt-8 tracking-widest">PROBLEM</h1>
            <p className={"text-sm mt-3"}>
                Teams must collect vast amounts of different types of data ranging from qualitative, quantitative, surveys, and interviews.
                With multiple platforms and applications tracking this data, it becomes easy to be disorganized and inefficient to put together a comprehensive
                solution without overcoming this barrier.
            </p>

            <div className={"mt-16 rounded-lg bg-[#323232] p-4"}>
                <h1 className={"text-[#949494] text-sm"}>Goal</h1>
                <h1 className={"text-[#E3E3E3] font-bold text-lg mt-1"}>Develop an application to log unique forms of data all in one place with effectiveness in organization, intake, and exportation of data.</h1>

                <h1 className={"text-[#949494] text-sm mt-4"}>Succes Metrics</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                    <div className="bg-[#6B6B6B] p-4 rounded-md">
                        <div className="flex items-center">
                            <h1 className="bg-[#323232] text-[#E3E3E3] w-6 h-6 p-1 text-sm rounded-sm flex items-center justify-center scale-90 font-bold">1</h1>
                            <h1 className="font-semibold text-[#E3E3E3] text-sm ml-2">Create a project</h1>
                        </div>
                        <h1 className="text-sm text-[#949494] mt-2">
                            Teams should be able to create their own team dashboard and project, unique to them and
                            their needs.
                        </h1>
                    </div>
                    <div className="bg-[#6B6B6B] p-4 rounded-md">
                        <div className="flex items-center">
                            <h1 className="bg-[#323232] text-[#E3E3E3] w-6 h-6 p-1 text-sm rounded-sm flex items-center justify-center scale-90 font-bold">2</h1>
                            <h1 className="font-semibold text-[#E3E3E3] text-sm ml-2">Geotag data at locations</h1>
                        </div>
                        <h1 className="text-sm text-[#949494] mt-2">Log data and drop pins on the map where it was taken
                            on site.</h1>
                    </div>
                    <div className="bg-[#6B6B6B] p-4 rounded-md">
                        <div className="flex items-center">
                            <h1 className="bg-[#323232] text-[#E3E3E3] w-6 h-6 p-1 text-sm rounded-sm flex items-center justify-center scale-90 font-bold">3</h1>
                            <h1 className="font-semibold text-[#E3E3E3] text-sm ml-2">Collect data offline</h1>
                        </div>
                        <h1 className="text-sm text-[#949494] mt-2">
                            Many IQP data sites may not have service or wifi. Students will store data in local storage until sync at a later time.
                        </h1>
                    </div>
                    <div className="bg-[#6B6B6B] p-4 rounded-md">
                        <div className="flex items-center">
                            <h1 className="bg-[#323232] text-[#E3E3E3] w-6 h-6 p-1 text-sm rounded-sm flex items-center justify-center scale-90 font-bold">4</h1>
                            <h1 className="font-semibold text-[#E3E3E3] text-sm ml-2">View data and Export</h1>
                        </div>
                        <h1 className="text-sm text-[#949494] mt-2">
                            After collecting our respective data, a student should be able to see and export the data in
                            the format they want.
                        </h1>
                    </div>

                </div>

            </div>
        </div>
    )
}
