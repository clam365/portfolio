import MetricCard from "@/app/components/MetricCard";

export default function Goals() {
    const metrics = [
        { number: 1, title: 'Create a project', description: 'Teams should be able to create their own team dashboard and project, unique to them and their needs.' },
        { number: 2, title: 'Geotag data at locations', description: 'Log data and drop pins on the map where it was taken on site.' },
        { number: 3, title: 'Collect data offline', description: 'Many IQP data sites may not have service or wifi. Students will store data in local storage until sync at a later time.' },
        { number: 4, title: 'View data and Export', description: 'After collecting our respective data, a student should be able to see and export the data in the format they want.' },
    ];

    return (
        <div className="mt-16 rounded-lg bg-[#323232] p-4">
            <h1 className="text-[#949494] text-sm">Goal</h1>
            <h1 className="text-[#E3E3E3] font-bold text-lg mt-1">Develop an application to log unique forms of data all in one place with effectiveness in organization, intake, and exportation of data.</h1>

            <h1 className="text-[#949494] text-sm mt-4">Success Metrics</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                {metrics.map((metric) => (
                    <MetricCard
                        key={metric.number}
                        number={metric.number}
                        title={metric.title}
                        description={metric.description}
                    />
                ))}
            </div>
        </div>
    );
}
