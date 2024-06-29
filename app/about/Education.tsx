import Image from "next/image";

export default function Education() {
    return (
        <div>
            <h1 className="font-semibold text-violet-600 text-sm mb-4 mt-4 tracking-widest">EDUCATION</h1>
            <div className={" flex justify-between m-auto items-center"}>
                <div className={""}>
                    <h1 className={"font-semibold text-3xl"}>Worcester Polytechnic Institute</h1>
                    <h1 className={"font-semibold text-3xl text-gray-400"}>Computer Science</h1>
                    <p className={"text-sm mt-4"}>B.S/M.S. in Computer Science (In Progress)</p>
                </div>

                <div className="relative flex-shrink-0 w-[450px] h-[300px] mb-8 hidden xl:block">
                    <Image src="/wpi.png" alt="WPI!" layout="fill"
                           className="rounded-lg object-cover drop-shadow-sm"/>
                    <div
                        className="absolute inset-0 bg-gradient-to-br from-white/100 to-transparent rounded-lg"></div>
                </div>
            </div>
            <hr className={"mt-6"}/>
        </div>
    );
}
