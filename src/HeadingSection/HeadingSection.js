import React from 'react';
import styles from './HeadingSectionStyle.module.css';

const HeadingSection = ({ title, subtitle, }) => {
    return (
        <div className={styles.container} >
            <h1>{title}</h1>
            <h2>{subtitle}</h2>
        </div>
    );
};

export default HeadingSection;