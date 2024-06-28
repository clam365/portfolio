import ProjectSection from "@/app/components/ProjectSection";
import UserInterfaceFun from "@/app/components/UserInterfaceFun";
import Footer from "@/app/components/Footer";


export default function LandingContent() {
    return (

        <div className={"p-10 sm:pt-0 xl:pt-10 md:pt-0 lg:pt-10"}>
            {/* Introduction */}
            <div className={"text-transparent bg-clip-text bg-gradient-to-r from-gray-400 to-black"}>
                <h1 className="font-semibold text-lg md:text-xl lg:text-2xl mb-5">
                    Hello there!
                </h1>
                <p className="font-semibold text-xl md:text-2xl lg:text-4xl">
                    Chris is a full stack software engineer with a focus in frontend and UI/UX work, crafting meaningful
                    user interfaces that feel natural and free-flowing. He currently
                    is an intern with the Air Force.
                </p>
            </div>
            <hr className={"mt-10"}/>
            <ProjectSection/>
            <UserInterfaceFun/>

            <Footer/>
        </div>
    );
}
