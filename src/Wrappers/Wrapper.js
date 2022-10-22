import React from 'react';
import styles from './WrapperStyle.module.css';
const Wrapper = ({ bgColor, children }) => {


    return (
        <div className={styles.container}
            style={{ backgroundColor: `${bgColor ? bgColor : 'transparent'}` }}
        >
            <div className={styles.contentWrapper}>
                {children}
            </div>
        </div>
    );
};

export default Wrapper;