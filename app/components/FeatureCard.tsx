interface FeatureCardProps {
    number: string | number;
    title: string;
    description: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ number, title, description }) => {
    return (
        <div className="bg-[#EEEEEE] p-4 rounded-md">
            <div className="flex items-center">
                <h1 className="bg-[#323232] text-[#E3E3E3] w-6 h-6 p-1 text-sm rounded-sm flex items-center justify-center scale-90 font-bold">{number}</h1>
                <h1 className="font-semibold  text-sm ml-2">{title}</h1>
            </div>
            <h1 className="text-sm text-[#949494] mt-2">{description}</h1>
        </div>
    );
}

export default FeatureCard;
