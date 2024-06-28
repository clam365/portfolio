import Sidebar from "@/app/components/Sidebar";

import InfoSection from "@/app/about/InfoSection";
import Header from "@/app/about/Header";
import Education from "@/app/about/Education";


export default function page() {
    return (
        <div className="lg:flex">
            <Sidebar />
            <div className="flex-1 p-24 pt-10 lg:ml-64 ">
                <Header/>
                <InfoSection/>
                <Education/>

            </div>
        </div>
    );
}
