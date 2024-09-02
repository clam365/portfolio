import {FreelanceComponent} from "@/app/components/Freelance/FreelanceComponent";

export default function Freelance() {
    return(
        <div>
            <h1 className="font-semibold text-gray-400 text-sm mt-3 tracking-widest">
                FREELANCE WORK
            </h1>
            <div className={"flex gap-x-5 mt-6"}>
                <FreelanceComponent text={"Kerry Xiao"} imagePath={"/freelance/kerry_website.PNG"} linkTo={"/kerry-xiao-portfolio"}/>

            </div>
            <hr className={"mt-10"}/>
        </div>
    )
}