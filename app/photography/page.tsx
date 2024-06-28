import Sidebar from "@/app/components/Sidebar";
import Image from "next/image";

export default function page() {
    return (
        <div className="lg:flex">
            <Sidebar />
            <div className="flex-1 p-10 lg:pl-32 lg:ml-64 flex flex-col items-center lg:items-start">
                <h1 className="font-semibold text-4xl text-neutral-700">Photography</h1>
                <p className="mt-6 mb-16 text-gray-400 text-center lg:text-left">
                    I like to take photos everywhere I travel to embody the beauty of the world. I am traveling next to Kyoto, Japan soon to study aboard!
                </p>
                <div className="flex flex-col items-center lg:items-start">
                    <Image src="/venice.jpeg" alt="Photos" width={500} height={350} className="mb-8 rounded-md drop-shadow-md" />
                    <Image src="/venice2.jpeg" alt="Photos" width={500} height={350} className="mb-8 rounded-md drop-shadow-md" />
                    <Image src="/venice3.jpeg" alt="Photos" width={500} height={350} className="mb-8 rounded-md drop-shadow-md" />
                    <Image src="/grad.jpeg" alt="Photos" width={500} height={350} className="mb-8 rounded-md drop-shadow-md" />
                </div>
            </div>
        </div>
    );
}
