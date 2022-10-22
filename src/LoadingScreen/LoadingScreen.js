import React from "react";

import styles from './LoadingScreenStyle.module.css';

const LoadingScreen = () => {
    return (
        <div className={styles.container}>

            <div className={styles.content}>
                <h1>Loading data.. Please wait.</h1>
            </div>
        </div>
    )
}

export default LoadingScreen;