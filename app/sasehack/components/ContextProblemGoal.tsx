import Image from "next/image";

export default function ContextProblemGoal() {
    return (
        <div className="mb-10">
            <h1 className="font-semibold text-gray-400 text-sm mt-3 tracking-widest">CONTEXT</h1>
            <p className={"text-sm mt-3"}>
                {/* eslint-disable-next-line react/no-unescaped-entities */}
                SASE Hack 2024's theme was LifeHacks, focused on the 4 stages of growth: Childhood, Adolescence, Adult,
                and Elderly. Teams could choose ONE track,
                and then come up with an idea following its sub-topic guidelines. We decided to go with the Adolescence
                track with an environmental social impact side.
            </p>

            <div className="mt-8">
                <div className="mb-3">
                    <p className="text-sm text-[#949494] mb-1">Tracks with detailed sub topics</p>
                </div>
                <div className="bg-[#f2f2f2] rounded-lg p-4 md:p-10 max-w-fit ">
                    <Image
                        alt="old"
                        src="/freelance/prompt.png"
                        className="rounded-lg w-fit h-full drop-shadow-xl"
                        width={750}
                        height={500}
                    />
                </div>
            </div>

            <h1 className="font-semibold text-gray-400 text-sm mt-8 tracking-widest">IDEA & PITCH</h1>
            <p className={"text-sm mt-3"}>
                Wildspace is a dynamic photo-sharing platform designed for adventurous adolescents passionate about the
                environment. Have a
                favorite outdoor spot that you just know is special? With Wildspace, you can showcase your secret nature
                havens by uploading
                stunning photos and creating personal “spot” locations on a visually immersive homepage.
                <br/>
                <br/>
                But it’s more than just about sharing—Wildspace empowers young users to make an impact. Every spot you
                create can include a
                personal description and, for those passionate about conservation, an option to add a donation link to
                help protect that area.
                Whether it’s a hidden waterfall, a secluded hiking trail, or a breathtaking overlook, Wildspace gives
                you the tools to inspire
                others and protect the places you love.
            </p>

        </div>
    )
}
