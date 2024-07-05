import Image from "next/image";

export default function InfoSection() {
    return (
        <div>
            <div className="flex flex-col sm:flex-row mt-10 mb-10">
                {/* Image Section */}
                <div className="relative flex-shrink-0 w-[200px] h-[300px] mr-12 mb-8 hidden xl:block">
                    <Image
                        src="/chrisLam.jpeg"
                        alt="Vietnam!"
                        layout="fill"
                        className="rounded-lg object-cover drop-shadow-sm"
                    />

                </div>

                {/* Text Section */}
                <div className="flex-1">
                    <h1 className="font-semibold text-[#D5B895] text-sm mb-4 tracking-widest">INFO</h1>
                    <p className="text-sm">
                        I am a software engineer in Greater Boston, Massachusetts, specializing in frontend and
                        UI/UX development.
                        Since owning a laptop for the first time when I was a little kid, I have always been
                        fascinated with the
                        world of design and art, constantly drawing things that I love such as clone troopers from
                        Star Wars, and manipulating online tools like Photoshop.
                    </p>
                    <br/>
                    <p className="text-sm">
                        During my sophomore year of college, I took on the role of lead frontend developer for my
                        Software
                        Engineering team.
                        This opportunity allowed me to spearhead the UI design for an entire project, which ignited my
                        passion for user
                        interface design. This experience highlighted the critical role of UI in our modern world. My
                        dream
                        and goal are to
                        improve designs holistically, focusing on emotion, functionality, and aesthetics.
                    </p>
                    <br/>
                    <p className="text-sm">I also like to olympic weightlift, watch anime, and go on adventures!</p>
                </div>
            </div>
            <hr/>
        </div>
    );
}
