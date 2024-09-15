import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import Link from "next/link";
import { motion } from "framer-motion";

export default function ProjectSection2() {
    const imageRefs = useRef<(HTMLDivElement | null)[]>([]);

    useEffect(() => {
        imageRefs.current.forEach((image) => {
            if (!image) return;

            gsap.fromTo(
                image,
                { scale: 1, transformOrigin: "top left" },
                { scale: 1.05, transformOrigin: "top left", duration: 0.3, paused: true }
            );

            const onMouseEnter = () => {
                gsap.to(image, { scale: 1.05, transformOrigin: "top left", duration: 0.3 });
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

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6, // Smooth fade-up duration
                ease: "easeOut", // Smoother easing
            },
        },
    };

    return (
        <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
        >
            <h1 className="font-semibold text-gray-400 text-sm mt-3 tracking-widest">
                CRAFT
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-2 mt-6 justify-between">
                <Link href={"iqpDCT"}>
                    <motion.div variants={itemVariants}>
                        <h1 className="text-2xl mb-3 tracking-wide font-light">IQP Data Tool</h1>
                        <div className="drop-shadow-xl max-w-full mx-auto" ref={(el) => {
                            if (el) imageRefs.current[0] = el;
                        }}>
                            <Image src="/dctCard2.png" alt="DCT" width={450} height={600} className="drop-shadow-xl" />
                        </div>
                    </motion.div>
                </Link>
                <Link href={"mgb-kiosk"}>
                    <motion.div variants={itemVariants}>
                        <h1 className="text-2xl mb-3 tracking-wide font-light">MGB Kiosk</h1>
                        <div className="drop-shadow-xl max-w-full mx-auto" ref={(el) => {
                            if (el) imageRefs.current[1] = el;
                        }}>
                            <Image src="/mgbCard.png" alt="MGB Kiosk" width={450} height={600} />
                        </div>
                    </motion.div>
                </Link>
                <Link href={"spotify-clone"}>
                    <motion.div variants={itemVariants}>
                        <h1 className="text-2xl mb-3 tracking-wide font-light">Spotify Clone</h1>
                        <div className="drop-shadow-xl max-w-full mx-auto" ref={(el) => {
                            if (el) imageRefs.current[2] = el;
                        }}>
                            <Image src="/spotifyCard.png" alt="Spotify Clone" width={450} height={600} />
                        </div>
                    </motion.div>
                </Link>
            </div>
            <hr className="mt-16"/>
        </motion.div>
    );
}
