import React, { useEffect, useState } from 'react';
import styles from './AboutUsStyle.module.css';

const AboutUsProgress = ({ logo, title, width, projectsReady }) => {
    const [animate, setAnimate] = useState(true);
    const [currentWidth, setCurrentWidth] = useState(3);

    useEffect(() => {
        let timer;
        if (animate) {
            timer = setTimeout(() => {
                setCurrentWidth(width);
                setAnimate(false);
            }, 1500)
        }
        return () => {
            clearTimeout(timer);
        }
    }, [width, animate]);

    return (
        <div className={styles.progressContainer}>

            <div className={styles.progressLogoBlock}>
                <div className={styles[logo]}></div>
                <div>{title}</div>
                <div style={{ fontSize: "8px", marginTop: "-7px" }}>({projectsReady})</div>
            </div>


            <div className={styles.progressLineBlock}>
                <div className={styles.progressLine} style={{ width: `${currentWidth}%` }}></div>
            </div>
        </div >
    );
};

export default AboutUsProgress;