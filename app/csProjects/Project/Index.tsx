'use client';
import React from 'react';
import styles from './style.module.css';


// Define the type for the props
interface IndexProps {
    index: number;
    title: string;
    setModal: (modalState: { active: boolean; index: number }) => void;
    link: string;
}

// Use the defined type in the function component
const Index: React.FC<IndexProps> = ({ index, title, setModal }) => {
    return (
        <div
            onMouseEnter={() => setModal({ active: true, index })}
            onMouseLeave={() => setModal({ active: false, index })}
            className={styles.project}
        >
            <h2>{title}</h2>
            <div className="flex items-center">

                <p>Full Stack</p>
            </div>
        </div>
    );
};

export default Index;
