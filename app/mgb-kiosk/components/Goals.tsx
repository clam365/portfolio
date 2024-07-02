import MetricCard from "@/app/components/MetricCard";

export default function Goals() {
    const metrics = [
        { number: 1, title: 'Functional Interactive Map', description: 'Receive interactive directions and geotag service requests in the hospital.' },
        { number: 2, title: 'Send Service Requests', description: 'Dispatch requests throughout the hospital, depending on user type.' },
        { number: 3, title: 'Assign tasks to employees', description: 'Bring easier workflow management in a stressful environment.' },
        { number: 4, title: 'Admins control workflow', description: 'Manage data intake and maintain application.' },
    ];

    return (
        <div className="mt-16 rounded-lg bg-[#323232] p-4">
            <h1 className="text-[#949494] text-sm">Goal</h1>
            <h1 className="text-[#E3E3E3] font-bold text-lg mt-1">Facilitate efficient navigation and service request flow for guests and staff.</h1>

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
