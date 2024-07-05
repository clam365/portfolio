import MetricCard from "@/app/components/MetricCard";

export default function OutcomesTakeaways() {
    const metrics = [
        { number: 1, title: 'Integrate Stripe API', description: 'Connected Stripe with Supabase backend and communicated with middleware.' },
        { number: 2, title: 'Leverage Next.js for UI', description: 'layout.tsx is a powerful tool to integrate authentication and other components.' },
        { number: 3, title: 'Well Rounded', description: 'I was more hands on with creating the Supabase schemas rather than purely just being frontend.' },

    ];

    return (
        <div>
            <div className="mt-10 rounded-lg bg-[#323232] p-4">
                <h1 className="text-[#949494] text-sm">Learning Outcomes</h1>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-2">
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

            <div className={"mt-6"}>
                <h1 className="text-[#949494] text-sm">Takeaways</h1>

                <p className={"text-sm mt-1"}>
                    I had so much fun throughout this entire process, and this was a great opportunity to use the Next.js framework for the first time and see much powerful it is
                    with server-side rendering and directory capabilities against regular React.js. The UI side was definitely the easiest part, but integrating the Stripe API and its webhooks
                    into the application was super hard (so many linesss). Ready to see more out there!
                </p>

            </div>
        </div>

    );
}
