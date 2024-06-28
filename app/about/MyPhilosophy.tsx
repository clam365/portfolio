import Link from "next/link";

export default function MyPhilosophy() {
    return (
        <div className=" mx-auto">
            <h1 className="font-semibold text-green-600 text-sm mb-4 mt-4 tracking-widest">MY PHILOSOPHY</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 ">
                <div className="mb-6 sm:mb-0 lg:pr-4">
                    <h1 className="font-bold text-sm mb-2">Work Ethic</h1>
                    <p className="text-sm">
                        Great taste, as defined by{" "}
                        <Link href={"https://www.goodreads.com/quotes/309485-nobody-tells-this-to-people-who-are-beginners-i-wish"} className="text-green-600">
                            Ira Glass
                        </Link>, is understanding that though many start their journeys in creative work, the drive to perfect, master, and love your craft is essential.
                        {/* eslint-disable-next-line react/no-unescaped-entities */}
                        I'm not like that. I have a constant ambition to improve, scouring for resources to elevate my game and bring the best designs to create a better world.
                        My entire Instagram reels is ALL about CSS, React, UI/UX laws, you name it.
                    </p>
                </div>
                <div className="lg:pl-4">
                    <h1 className="font-bold text-sm mb-2">Mission Statement</h1>
                    <p className="text-sm">
                        As technology advances and AI develops, the value of authentic expression grows. Creativity, rooted in human imagination and emotion, remains AI-proof.
                        {/* eslint-disable-next-line react/no-unescaped-entities */}
                        I aim to bring creative applications to those who harness technology while preserving human expression's essence, empowering individuals and communities to innovate, connect, and inspire through limitless creativity.
                    </p>
                </div>
            </div>
        </div>
    );
}
