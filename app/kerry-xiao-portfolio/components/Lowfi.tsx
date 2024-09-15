import Image from "next/image";

export default function Lowfi() {
    return (
        <div className="flex flex-wrap justify-between m-auto gap-4 mb-6">

                <div className="m-auto flex justify-center drop-shadow-md">
                    <Image
                        src="/freelance/kerryMockup.png"
                        className="rounded-lg drop-shadow-xl"
                        alt="Mockup"
                        layout="responsive"
                        width={250}
                        height={150}
                    />
                </div>
        </div>
    );
}
