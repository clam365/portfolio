'use client';
import React from 'react';
import styles from './style.module.css';
import Image from 'next/image';

// Define the type for the props
interface IndexProps {
    index: number;
    smolImage: string;
    title: string;
    setModal: (modalState: { active: boolean; index: number }) => void;
    link: string;
}

// Use the defined type in the function component
const Index: React.FC<IndexProps> = ({ index, smolImage, title, setModal }) => {
    return (
        <div
            onMouseEnter={() => setModal({ active: true, index })}
            onMouseLeave={() => setModal({ active: false, index })}
            className={styles.project}
        >
            <h2>{title}</h2>
            <div className="flex items-center">
                <Image
                    src={`/images/${smolImage}`}
                    alt="Image"
                    width={87}
                    height={48}
                    className="rounded-md mr-4 drop-shadow-md"
                />
                <p>Full Stack</p>
            </div>
        </div>
    );
};

export default Index;
