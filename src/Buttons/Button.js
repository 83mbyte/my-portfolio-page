import React from 'react';
import styles from './ButtonStyle.module.css';
const Button = ({ text, path, type }) => {
    let typeToLower;
    if (type) {
        typeToLower = type.toLowerCase()
    }
    return (
        <div className={styles.container}>
            {typeToLower !== 'submit'
                ? <a className={styles.btn} href={`#${path}`}>{text}</a>
                : <button className={styles.btn}>{text}</button>}
        </div>
    );
};

export default Button;