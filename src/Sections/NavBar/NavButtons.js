import React from 'react';
import styles from './HeaderNavStyle.module.css';

const NavButtons = ({ action = null }) => {
    const navyButtons = ['home', 'about', 'portfolio', 'contact'];
    return (
        <ul className={styles.nav}>
            {
                navyButtons.map((item, index) => {
                    return (
                        <li key={index} onClick={action}>
                            <a href={`#${item}`}>{item}</a>
                        </li>
                    )
                })
            }
        </ul>
    );
};

export default NavButtons;