import MetricCard from "@/app/components/MetricCard";

export default function OutcomesTakeaways() {
    const metrics = [
        { number: 1, title: 'Full Stack Capability', description: 'I learned how to to backend for the first time and also fetch data onto our frontend.' },
        { number: 2, title: 'Implement UI Standards', description: 'Users in ANY application should be able to almost never have to second think their page navigation decisions.' },
        { number: 3, title: 'Recognize Agile Scrum', description: 'I was able to adapt and be resilient in tough one week sprints and communicated effectively with the team.' },

    ];

    return (
        <div>
            <div className="mt-10 rounded-lg bg-[#323232] p-4">
                <h1 className="text-[#949494] text-sm">Personal Outcomes</h1>
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
                    {/* eslint-disable-next-line react/no-unescaped-entities */}
                    This was the first time I got my feet wet in developing a full-stack app through WPI's project-based learning in the Agile Scrum methodology. Our designs needed a
                    180 turn to bring professionalism into the picture, and with extensive research on existing capabilities, my new proposed designs became our backbone.
                    {/* eslint-disable-next-line react/no-unescaped-entities */}
                    &nbsp;This privilege opened many doors for me, and it blossomed my passion into being a frontend developer, focusing intensively on UI's impact. If I could do this course
                    again with the knowledge I have, I'm confident that my coding etiquette and UI can bring this application to 200% (I can center a div now :\ ).
                </p>

            </div>
        </div>

    );
}
