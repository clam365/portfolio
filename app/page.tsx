import Sidebar from "@/app/components/Sidebar";
import LandingContent from "@/app/components/LandingContent";

export default function Home() {
    return (
        <div className="lg:flex">
            <Sidebar />
            <div className="lg:ml-64 flex-1">
                <LandingContent />
            </div>
        </div>
    );
}
