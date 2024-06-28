import Link from "next/link";

export default function MyPhilosophy() {
    return (
        <div>
            <h1 className="font-semibold text-gray-400 text-sm mb-4 mt-4 tracking-widest">MY PHILOSOPHY</h1>
            <div className="grid grid-cols-2 gap-4 m-auto ">
                <div>
                    <h1 className={"font-bold text-sm mb-2"}>Work Ethic</h1>
                    <p className={"text-sm "}>
                        Great taste defined by
                        <Link
                            href={"https://www.goodreads.com/quotes/309485-nobody-tells-this-to-people-who-are-beginners-i-wish"}><span
                            className={"text-gray-400"}>&nbsp;Ira Glass,&nbsp;</span>
                        </Link>
                        is understanding that though many start out their journeys in creative work, the drive is not there to perfect, master, and love your craft.
                        {/* eslint-disable-next-line react/no-unescaped-entities */}
                        I'm not like that. I have a constant ambition to see how I can improve, scouring for resources to up my game and bring the best designs bring a better world.
                        My entire Instagram reels is ALL about CSS, React, UI/UX laws, you name it.
                    </p>
                </div>
                <div>
                    <h1 className={"font-bold text-sm mb-2"}>Mission Statement</h1>
                    <p className={"text-sm "}>
                        The more time passes, the more technology develops itself. The more AI develops itself, the more value will be put into authentic expression.
                        Creativity is AI proof, originating from the unique essence of human imagination and emotion. I want to bring creative applications to those
                        who seek to harness the power of technology while preserving the soul of human expression, empowering individuals and communities to innovate,
                        connect, and inspire through limitless creativity.
                    </p>
                </div>
            </div>


        </div>

)
}