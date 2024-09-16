import FeatureCard from "@/app/components/FeatureCard";

export default function Features() {
    const features = [
        { number: 1, title: 'Team Management', description: 'IQP Teams can create and manage their own team dashboard and project, unique to them and their needs.' },
        { number: 2, title: 'Geotagging', description: 'Log data and drop pins on the map where it was taken on site.' },
        { number: 3, title: 'Offline Data Collection', description: 'Many IQP data sites may not have service or wifi. Students can store data in local storage until syncing at a later time.' },
        { number: 4, title: 'View data and Export', description: 'After collecting respective data, a student should be able to export the data for further analyzation.' },
    ];

    return (
        <div className=" mb-10 rounded-lg justify-between mt-14">
            <hr/>
            <h1 className="font-semibold text-gray-400 text-sm mt-3 tracking-widest mb-6">FEATURES</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                {features.map((metric) => (
                    <FeatureCard
                        key={metric.number}
                        number={metric.number}
                        title={metric.title}
                        description={metric.description}
                    />
                ))}
            </div>

            <div className="mt-12">
                <div className="mb-3">
                    <p className="text-sm text-[#949494] mb-1">Logging Into Your Team Dashboard</p>
                    <p className={"text-sm"}>
                        {/* eslint-disable-next-line react/no-unescaped-entities */}
                        Create your own account and login to your team's dashboard. If you do not have a team, you can
                        create/join one.
                    </p>
                </div>
                <div className="bg-[#f2f2f2] rounded-lg p-4 md:p-10 flex justify-center m-auto ">
                    <div className={""}>
                        <video
                            src="/dct/loginDashboard.mp4"
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
                    <p className="text-sm text-[#949494] mb-1">Create Your Own Forms</p>
                    <p className={"text-sm"}>
                        Using <span className={"font-bold"}>AssemblyAI</span>, conduct your interviews, record, and
                        transcribe audio.
                    </p>
                </div>
                <div className="bg-[#f2f2f2] rounded-lg p-4 md:p-10 flex justify-center m-auto ">
                    <div className={""}>
                        <video
                            src="/dct/form.mp4"
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
                    <p className="text-sm text-[#949494] mb-1">Geotag your Form Data</p>
                    <p className={"text-sm"}>
                        Locate the entries you have logged at the location you took it at, or search up one using <span
                        className={"font-bold"}>OpenNomination</span>.
                    </p>
                </div>
                <div className="bg-[#f2f2f2] rounded-lg p-4 md:p-10 flex justify-center m-auto ">
                    <div className={""}>
                        <video
                            src="/dct/map.mp4"
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
        </div>
    )
}
