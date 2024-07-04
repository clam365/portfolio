import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import Link from "next/link";

export default function ProjectSection2() {
    const imageRefs = useRef<(HTMLDivElement | null)[]>([]);

    useEffect(() => {
        imageRefs.current.forEach((image) => {
            if (!image) return;

            gsap.fromTo(
                image,
                { scale: 1, transformOrigin: "top left" },
                { scale: 1.1, transformOrigin: "top left", duration: 0.3, paused: true }
            );

            const onMouseEnter = () => {
                gsap.to(image, { scale: 1.1, transformOrigin: "top left", duration: 0.3 });
            };

            const onMouseLeave = () => {
                gsap.to(image, { scale: 1, transformOrigin: "top left", duration: 0.3 });
            };

            image.addEventListener("mouseenter", onMouseEnter);
            image.addEventListener("mouseleave", onMouseLeave);

            return () => {
                image.removeEventListener("mouseenter", onMouseEnter);
                image.removeEventListener("mouseleave", onMouseLeave);
            };
        });
    }, []);

    return (
        <div>
            <h1 className="font-semibold text-gray-400 text-sm mt-3 tracking-widest">
                CRAFT
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-6 relative justify-between">
                <Link href={"iqpDCT"}>
                    <div>
                        <h1 className={" text-2xl mb-3 tracking-wide font-light"}>IQP Data Tool</h1>
                        <div className="drop-shadow-xl relative" ref={(el) => {
                            if (el) imageRefs.current[0] = el;
                        }}>
                            <Image src="/dctCard.png" alt="DCT" width={500} height={650}/>
                        </div>
                    </div>
                </Link>
                <Link href={"mgb-kiosk"}>
                    <div>
                        <h1 className={" text-2xl mb-3 tracking-wide font-light"}>MGB Kiosk</h1>
                        <div className="drop-shadow-xl relative" ref={(el) => {
                            if (el) imageRefs.current[1] = el;
                        }}>
                            <Image src="/mgbCard.png" alt="DCT" width={500} height={650}/>
                        </div>
                    </div>
                </Link>
                <Link href={"spotify-clone"}>
                    <div>
                        <h1 className={" text-2xl mb-3 tracking-wide font-light"}>Spotify Clone</h1>
                        <div className="drop-shadow-xl relative" ref={(el) => {
                            if (el) imageRefs.current[2] = el;
                        }}>
                            <Image src="/spotifyCard.png" alt="DCT" width={500} height={650}/>
                        </div>
                    </div>
                </Link>
            </div>
            <hr className="mt-16"/>
        </div>
    );
}