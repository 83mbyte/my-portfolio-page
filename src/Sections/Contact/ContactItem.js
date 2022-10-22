import React from 'react';
import styles from './ContactStyle.module.css';
const ContactItem = ({ icon, text }) => {
    return (
        <div className={styles.contactItem}>
            <div className={styles.logoBlock}>
                <div className={styles[icon]}></div>
            </div>
            <div>
                <h3>{text}</h3>
            </div>
        </div>
    );
};

export default ContactItem;