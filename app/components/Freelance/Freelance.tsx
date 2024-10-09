import {FreelanceComponent} from "@/app/components/Freelance/FreelanceComponent";

export default function Freelance() {
    return(
        <div>
            <h1 className="font-semibold text-gray-400 text-sm mt-3 tracking-widest">
                FREELANCE WORK
            </h1>
            <div
                className="flex flex-col items-center space-y-4 sm:flex-row sm:space-y-0 sm:gap-x-5 sm:overflow-x-auto mt-6">
                <FreelanceComponent
                    text="Kerry Xiao"
                    imagePath="/freelance/kerry_website.PNG"
                    linkTo="/kerry-xiao-portfolio"
                    imageWidth={150}
                    imageHeight={100}
                />
                <FreelanceComponent
                    text="Wildscape"
                    imagePath="/freelance/wildscape_logo_green.png"
                    linkTo="/sasehack"
                    imageWidth={75}
                    imageHeight={75}
                />
            </div>


            <hr className={"mt-10"}/>
        </div>
    )
}