import React from 'react';
import styles from './AboutUsStyle.module.css';

const AboutUsItem = ({ title, text }) => {

    return (
        <div className={styles.itemContainer}>
            <div className={styles.logoBlock}>
                <div className={styles[title]}></div>
            </div>
            <h3>{title}</h3>
            <p>{text}</p>
        </div>
    );
};

export default AboutUsItem;