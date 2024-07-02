import Goals from "@/app/mgb-kiosk/components/Goals";

export default function ContextProblemGoal() {
    return (
        <div className="mb-10">
            <h1 className="font-semibold text-gray-400 text-sm mt-3 tracking-widest">CONTEXT</h1>
            <p className={"text-sm mt-3"}>
                {/* eslint-disable-next-line react/no-unescaped-entities */}
                In our software engineering class CS3733 taught by Professor Wilson Wong, our team was tasked to create a kiosk app for Brigham and Women's Hospital.
                This app will be primarily used as a map and navigation tool, along with users being able send service requests. Staff members with additional level of
                security can also send requests for a more efficient workflow.

            </p>

            <Goals/>
        </div>
    )
}
