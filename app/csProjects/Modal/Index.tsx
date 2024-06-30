import { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import styles from './style.module.css';
import gsap from 'gsap';

const scaleAnimation = {
    initial: {scale: 0, x: "-50%", y: "-50%"},
    enter: {scale: 1, x: "-50%", y: "-50%", transition: {duration: 0.4, ease: [0.76, 0, 0.24, 1]}},
    closed: {scale: 0, x: "-50%", y: "-50%", transition: {duration: 0.4, ease: [0.32, 0, 0.67, 0]}}
};

// Define the type for the props
interface Project {
    src: string;
    color: string;
}

interface IndexProps {
    modal: {
        active: boolean;
        index: number;
    };
    projects: Project[];
}

// Use the defined type in the function component
export default function Index({ modal, projects }: IndexProps) {
    const { active, index } = modal;
    const modalContainer = useRef<HTMLDivElement>(null);
    const cursor = useRef<HTMLDivElement>(null);
    const cursorLabel = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (modalContainer.current && cursor.current && cursorLabel.current) {
            // Move Container
            let xMoveContainer = gsap.quickTo(modalContainer.current, "left", {duration: 0.8, ease: "power3"});
            let yMoveContainer = gsap.quickTo(modalContainer.current, "top", {duration: 0.8, ease: "power3"});
            // Move cursor
            let xMoveCursor = gsap.quickTo(cursor.current, "left", {duration: 0.5, ease: "power3"});
            let yMoveCursor = gsap.quickTo(cursor.current, "top", {duration: 0.5, ease: "power3"});
            // Move cursor label
            let xMoveCursorLabel = gsap.quickTo(cursorLabel.current, "left", {duration: 0.45, ease: "power3"});
            let yMoveCursorLabel = gsap.quickTo(cursorLabel.current, "top", {duration: 0.45, ease: "power3"});

            const mouseMoveHandler = (e: MouseEvent) => {
                const { pageX, pageY } = e;
                xMoveContainer(pageX);
                yMoveContainer(pageY);
                xMoveCursor(pageX);
                yMoveCursor(pageY);
                xMoveCursorLabel(pageX);
                yMoveCursorLabel(pageY);
            };

            window.addEventListener('mousemove', mouseMoveHandler);

            return () => {
                window.removeEventListener('mousemove', mouseMoveHandler);
            };
        }
    }, []);

    return (
        <>
            <motion.div ref={modalContainer} variants={scaleAnimation} initial="initial" animate={active ? "enter" : "closed"} className={styles.modalContainer}>
                <div style={{ top: index * -100 + "%" }} className={styles.modalSlider}>
                    {
                        projects.map((project, idx) => {
                            const { src, color } = project;
                            return (
                                <div className={styles.modal} style={{ backgroundColor: color }} key={`modal_${idx}`}>
                                    <Image
                                        src={`/images/${src}`}
                                        width={300}
                                        height={0}
                                        alt="image"
                                    />
                                </div>
                            );
                        })
                    }
                </div>
            </motion.div>
            <motion.div ref={cursor} className={styles.cursor} variants={scaleAnimation} initial="initial" animate={active ? "enter" : "closed"}></motion.div>
            <motion.div ref={cursorLabel} className={styles.cursorLabel} variants={scaleAnimation} initial="initial" animate={active ? "enter" : "closed"}>View</motion.div>
        </>
    );
}
