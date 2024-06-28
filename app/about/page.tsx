import Sidebar from "@/app/components/Sidebar";

import InfoSection from "@/app/about/InfoSection";
import Header from "@/app/about/Header";


export default function page() {
    return (
        <div className="lg:flex">
            <Sidebar />
            <div className="flex-1 p-10 lg:ml-64 flex flex-col items-center lg:items-start">
                <Header/>
                <InfoSection/>



            </div>
        </div>
    );
}
