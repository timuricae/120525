import React, { useState } from "react";
import styles from "./PreTask.module.css";

interface PreTaskProps {
    onStart: () => void;
    text?: string;
}

const PreTask: React.FC<PreTaskProps> = ({ onStart, text }) => {
    const [isActive, setIsActive] = useState(false);

    const handleClick = () => {
        setIsActive(true);
        onStart();
    };

    return (
        <div className={styles.preTask}>
            <div className={styles.preTask_text}>
                <span>{text || "Когда вы готовы, нажмите “Начать задание”"}</span>
            </div>
            <button
                className={`${styles.preTask_btn} ${isActive ? styles.preTask_btn_active : ""}`}
                onClick={handleClick}
            >
                {isActive ? "Задание начато" : "Начать задание"}
            </button>
        </div>
    );
};

export default PreTask;
