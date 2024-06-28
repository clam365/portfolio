import Image from "next/image";

export default function InfoSection() {
    return (
        <div className="flex mt-10">
            <div className="relative flex-shrink-0 w-[200px] h-[300px] mb-8">
                <Image src="/vietnam.jpg" alt="Vietnam!" layout="fill"
                       className="rounded-lg object-cover drop-shadow-sm"/>
                <div
                    className="absolute inset-0 bg-gradient-to-br from-white/100 to-transparent rounded-lg"></div>
            </div>
            <div className="ml-12 flex-1">
                <h1 className="font-semibold text-gray-400 text-sm mb-4 tracking-widest">INFO</h1>
                <p className="text-sm">
                    I am a software engineer in Greater Boston, Massachusetts, specializing in frontend and
                    UI/UX development.
                    Since owning a laptop for the first time when I was a little kid, I have always been
                    fascinated with the
                    world of design and art, constantly drawing things that I love such as clone troopers from
                    Star Wars, and manipulating online tools like Photoshop.
                </p>
                <br/>
                <p className={"text-sm"}>
                    In my sophomore year of college, I became the lead frontend developer of my team in Software
                    Engineering, spearheading an
                    {/* eslint-disable-next-line react/no-unescaped-entities */}
                    entire project's UI, thus blossoming my passion and allowing myself to see how important user
                    interface is to our modern world.
                    Improving designs holistically through emotion, functionality, and aesthetics is my dream and goal.
                </p>
            </div>
        </div>
    )
}