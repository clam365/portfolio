import FeatureCard from "@/app/components/FeatureCard";

export default function ContextProblemGoal() {
    const features = [
        { number: 1, title: 'Sleek User Interface', description: 'Responsive UI that closely resembles Spotify.' },
        { number: 2, title: 'Song Functionalities', description: 'Upload music, like, play, and manage songs and its playlists.' },
        { number: 3, title: 'Stripe API Integration', description: 'Enable premium subscriptions with Stripe API.' },
        { number: 4, title: 'Authentication', description: 'Secure user registration and login with Supabase.' },

    ];

    return (
        <div className=" mb-10 rounded-lg justify-between">
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
        </div>
    )
}
