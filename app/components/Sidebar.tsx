import Link from "next/link";
import Image from "next/image";
const Sidebar = () => {
    return (
        <div>
            <div className="lg:hidden flex justify-between items-center p-5">
                    <div>
                        <Link href="/">
                            <Image src="/choso2.png" alt="logo" width={87} height={48} className="rounded-lg mb-6"/>
                        </Link>
                    </div>
                    <div className="flex">
                        <Link href={"/about"}>
                            <h1 className="font-semibold text-lg mb-4 hover:text-gray-400 transition mr-5">About</h1>
                        </Link>
                        <Link href={"/photography"}>
                            <h1 className="font-semibold text-lg mb-4 hover:text-gray-400 transition mr-5">Photography</h1>
                        </Link>
                        <Link href={"/cv"}>
                            <h1 className="font-semibold text-lg mb-6 hover:text-gray-400 transition">CV</h1>
                        </Link>
                    </div>

            </div>

            {/* Mobile View */}

            {/* Sidebar on Desktop/Laptop */}
            <aside className=" w-64 h-screen p-12 border-r border-neutral-200 lg:block hidden">
                <nav>
                    <div>
                        <Link href={"/"}><Image src={"/choso2.png"} alt={"logo"} width={87} height={48}
                                                className={"rounded-lg mb-6"}/></Link>

                        <Link href={"/about"}>
                            <h1 className="font-semibold text-2xl mb-4 hover:text-gray-400 transition">About</h1>
                        </Link>
                        <Link href={"/cv"}>
                        <h1 className="font-semibold text-2xl mb-6 hover:text-gray-400 transition">CV</h1>
                        </Link>
                    </div>
                    <hr className={"mb-6"}/>
                    <div>
                        <h1 className="text-gray-400 text-sm mb-3 font-semibold">PROJECTS</h1>
                        <Link href={"/iqpDCT"}><p className="text-sm mb-2 hover:text-gray-400 transition">IQP DCT</p>
                        </Link>
                        <Link href={"/mgbKiosk"}><p className="text-sm mb-2 hover:text-gray-400 transition">MGB
                            Kiosk</p>
                        </Link>
                        <Link href={"/spotify-clone"}><p className="text-sm mb-6 hover:text-gray-400 transition">Spotify
                            Clone</p></Link>
                    </div>
                    <hr className={"mb-6"}/>
                    <div>
                        <h1 className="text-gray-400 text-sm mb-2 font-semibold">CONTACT</h1>
                        <p className="text-sm mb-2 hover:text-gray-400 transition">Email</p>
                        <Link href={"https://www.linkedin.com/in/chrislam365"}><p
                            className="text-sm mb-2 hover:text-gray-400 transition">LinkedIn</p></Link>
                        <Link href={"https://github.com/clam365"}><p
                            className="text-sm mb-2 hover:text-gray-400 transition">Github</p></Link>

                    </div>
                </nav>
            </aside>
        </div>

    );
};

export default Sidebar;
