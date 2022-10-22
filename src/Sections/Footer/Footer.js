import React from 'react';
import styles from './FooterStyle.module.css';

const Footer = () => {
    const socialArray = [
        { sm: 'github', lnk: 'https://github.com/83mbyte' },
        { sm: 'twitter', lnk: 'https://twitter.com' },
        { sm: 'frontendmentor', lnk: 'https://www.frontendmentor.io/profile/83mbyte' }
    ]
    return (
        <div className={styles.container}>
            <div className={styles.socialContainer}>
                <div className={styles.iconsRow}>
                    {
                        socialArray.map((item, index) => {
                            return (
                                <div className={styles.iconItem} key={index}>
                                    <a href={item.lnk} className={styles[item.sm]}>&nbsp;</a>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    );
};

export default Footer;