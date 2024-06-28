"use client";
import styles from './page.module.css'
import { useState } from 'react';
import Project from './Project';
import Modal from './Modal';

const projects = [
    {
        title: "IQP DCT",
        src: "dct.png",
        color: "#0D0D0D"
    },
    {
        title: "MGB Kiosk",
        src: "cs3733.JPG",
        color: "#e0e0e0"
    },
    {
        title: "Spotify Clone",
        src: "spotify.JPG",
        color: "#22c55e"
    },
]


export default function Page() {

    const [modal, setModal] = useState({active: false, index: 0})

    return (
        <main className={styles.main}>
            <div className={styles.body}>
                {
                    projects.map( (project, index) => {
                        return <Project index={index} title={project.title} setModal={setModal} key={index}/>
                    })
                }
            </div>
            <Modal modal={modal} projects={projects}/>
        </main>
    )
}
