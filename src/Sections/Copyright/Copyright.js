import React from 'react';
import styles from './CopyrightStyle.module.css';

const Copyright = () => {
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <p>Copyright #2022. All rights reserved.</p>
                <a href='#home'>&#9650;</a>
            </div>
        </div>
    );
};

export default Copyright;