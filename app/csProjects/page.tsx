"use client";
import styles from './page.module.css'
import { useState } from 'react';
import Project from './Project';
import Modal from './Modal';
import Link from "next/link";

const projects = [
    {
        title: "IQP DCT",
        src: "dct.png",
        color: "#121212",
        linkTo: "/iqpDCT"
    },
    {
        title: "MGB Kiosk",
        src: "cs3733.JPG",
        color: "#e0e0e0",
        linkTo: "/mgb-kiosk"
    },
    {
        title: "Spotify Clone",
        src: "spotify.JPG",
        color: "#22c55e",
        linkTo: "/spotify-clone"
    },
]

export default function Page() {

    const [modal, setModal] = useState({active: false, index: 0})

    return (
        <main className={styles.main}>
            <div className={styles.body}>
                {
                    projects.map( (project, index) => {
                        return (
                                <Link href={project.linkTo} key={index}>
                                    <Project index={index} title={project.title} link={project.linkTo} setModal={setModal} key={index}/>
                                </Link>
                            );
                    })
                }
            </div>
            <Modal modal={modal} projects={projects}/>
        </main>
    )
}
