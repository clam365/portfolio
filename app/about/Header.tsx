export default function Header() {
    return (
        <div className={"text-transparent bg-clip-text bg-gradient-to-r from-gray-400 to-[#121212]  md:text-left"}>
            <h1 className={"font-bold text-5xl md:text-7xl lg:text-7xl xl:text-9xl sm:text-5xl "}>
                Christopher
            </h1>
            <div className={"flex flex-col md:flex-row "}>
                <h1 className={"font-bold text-5xl md:text-7xl lg:text-7xl xl:text-9xl sm:text-7xl"}>
                    Lam&nbsp;
                </h1>
                <h1 className={"font-bold text-2xl md:text-2xl lg:text-3xl xl:text-4xl sm:text-3xl flex items-center"}>
                    クリス
                </h1>
            </div>
        </div>
    )
}
