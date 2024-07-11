import Link from "next/link";
import Image from "next/image";
import "./Sidebar.css";
const Sidebar = () => {
    return (
        <div>
            {/* Mobile View */}
            <div className="lg:hidden p-10 pt-6  flex justify-between m-auto items-center w-screen blur-gradient">

                <div className="relative z-10 flex justify-between w-full">
                    <div>
                        <Link href="/">
                            <Image src="/choso2.png" alt="logo" width={87} height={48}
                                   className="rounded-lg mb-4 items-center"/>
                        </Link>
                    </div>
                    <div className="flex items-center justify-end gap-3">
                        <Link href="/about">
                            <h1 className="font-semibold text-md mb-4 hover:text-gray-400 transition">About</h1>
                        </Link>
                        <Link href="/photography">
                            <h1 className="font-semibold text-md mb-4 hover:text-gray-400 transition">Photos</h1>
                        </Link>
                        <a href="/resume.pdf" target="_blank" rel="opener referrer"
                           className="font-semibold text-md mb-4 hover:text-gray-400 transition ">Resume</a>
                    </div>
                </div>
            </div>


            {/* Sidebar on Desktop/Laptop */}
            <aside className="w-64 h-full p-12 border-r border-neutral-200 lg:block hidden fixed ">
                <nav>
                    <div>
                        <Link href={"/"}><Image src={"/choso2.png"} alt={"logo"} width={87} height={48}
                                                className={"rounded-lg mb-6"}/></Link>

                        <Link href={"/about"}>
                            <h1 className="font-semibold text-xl mb-4 hover:text-gray-400 transition">About</h1>
                        </Link>
                        <Link href={"/photography"}>
                            <h1 className="font-semibold text-xl mb-4 hover:text-gray-400 transition ">Photography</h1>
                        </Link>
                        <a href={"/resume.pdf"} target={"_blank"} rel={"opener referrer"}
                           className="font-semibold text-xl mb-6 hover:text-gray-400 transition ">Resume</a>

                    </div>
                    <hr className={"mt-6 mb-6"}/>
                    <div>
                    <h1 className="text-gray-400 text-sm mb-3 font-semibold tracking-widest">PROJECTS</h1>
                        <Link href={"/iqpDCT"}><p
                            className="text-sm mb-2 transition  hover:text-gray-400">IQP
                            DCT</p>
                        </Link>
                        <Link href={"/mgb-kiosk"}><p
                            className="text-sm mb-2 transition hover:text-gray-400">MGB
                            Kiosk</p>
                        </Link>
                        <Link href={"/spotify-clone"}><p
                            className="text-sm mb-6 transition hover:text-gray-400">Spotify
                            Clone</p></Link>
                    </div>
                    <hr className={"mb-6"}/>
                    <div>
                        <h1 className="text-gray-400 text-sm mb-2 font-semibold tracking-widest">CONTACT</h1>
                        <a href="mailto:christopherlam110@gmail.com"><p className="text-sm mb-2 transition  transform hover:translate-x-1 hover:text-gray-400">Email</p></a>
                        <Link href={"https://www.linkedin.com/in/chrislam365"}><p
                            className="text-sm mb-2 transition   hover:text-gray-400">LinkedIn</p>
                        </Link>
                        <Link href={"https://github.com/clam365"}>
                            <p className="text-sm mb-2 transition hover:text-gray-400">
                                Github
                            </p>
                        </Link>

                    </div>
                </nav>
            </aside>
        </div>

    );
};

export default Sidebar;
