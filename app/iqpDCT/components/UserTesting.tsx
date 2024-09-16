export default function UserTesting() {
    return(
        <div className={""}>
            <h1 className="font-semibold text-gray-400 text-sm mt-4 tracking-widest">USER TESTING</h1>
            <h1 className={"text-[#121212] text-xl font-semibold mb-4 "}>What do students think of our application?</h1>
            <hr/>
            <p className={"text-sm mt-4"}>
                Our user testing consisted of 3 weekly sessions, aiming to do 10 tests for the first 2 weeks each, and
                then finalize with 5 test in the last (25 total).
                Initially in the first beta version, we knew that we would have a lot of issues or UI tweaks, but in our
                findings as we got to the second week, those bugs
                diminished greatly. Below are features that we changed based on their responses each week.
                <br/>
                <br/>
                <span className={"font-bold"}>Features that were tweaked:</span> Adding collapsible accordions to the
                form categories, Form & Link Tiles, and adding in an Multiple Choice Question Option.
                <br/>
                <br/>
                Most importantly, what did students actually think over the span of 3 weeks? Here are the findings given on a scale of <span className={"font-bold"}>1 (Bad) - 10 (Awesome)</span> out of those 25:
            </p>
            <div className={"grid grid-cols-2 md:grid-cols-4 gap-y-6 mt-10"}>
                <div>
                    <h1 className={"font-bold text-5xl text-center"}>88%</h1>
                    <p className={"text-center mt-2 text-lg"}>Overall Satisfaction</p>
                    <p className={"text-center mt-2 text-sm text-gray-500"}>Rated 8 or higher</p>
                </div>
                <div>
                    <h1 className={"font-bold text-5xl text-center"}>100%</h1>
                    <p className={"text-center mt-2 text-lg"}>Aesthetics</p>
                    <p className={"text-center mt-2 text-sm text-gray-500"}>Rated 8 or higher</p>
                </div>
                <div>
                    <h1 className={"font-bold text-5xl text-center"}>87%</h1>
                    <p className={"text-center mt-2 text-lg"}>Navigation</p>
                    <p className={"text-center mt-2 text-sm text-gray-500"}>Rated 8 or higher</p>
                </div>
                <div>
                    <h1 className={"font-bold text-5xl text-center"}>81%</h1>
                    <p className={"text-center mt-2 text-lg"}>Performance</p>
                    <p className={"text-center mt-2 text-sm text-gray-500"}>Rated 9 or higher</p>
                </div>
            </div>
        </div>
    )
}