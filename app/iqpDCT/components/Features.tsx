import FeatureCard from "@/app/components/FeatureCard";

export default function Features() {
    const features = [
        { number: 1, title: 'Team Management', description: 'IQP Teams can create and manage their own team dashboard and project, unique to them and their needs.' },
        { number: 2, title: 'Geotagging', description: 'Log data and drop pins on the map where it was taken on site.' },
        { number: 3, title: 'Offline Data Collection', description: 'Many IQP data sites may not have service or wifi. Students can store data in local storage until syncing at a later time.' },
        { number: 4, title: 'Create Customizable Forms', description: 'With our form builder, students will create forms based on their research methods.' },
        { number: 5, title: 'Transcribe Interviews', description: 'Using AssemblyAI, parse through recordings to provide an accurate transcription of interviews taken.' },
        { number: 6, title: 'View data and Export', description: 'After collecting respective data, a student should be able to export the data for further analyzation.' },
    ];

    return (
        <div className=" mb-10 rounded-lg justify-between mt-14">
            <h1 className="font-semibold text-gray-400 text-sm mt-3 tracking-widest mb-6">OUR SOLUTION</h1>

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
        </div>
    )
}
