import React from 'react';
import styles from './HeaderNavStyle.module.css';

const NavButtons = ({ navyBtns, action = null }) => {
    // const navyButtons = ['home1', 'about1', 'portfolio1', 'contact1'];

    return (

        !navyBtns
            ? 'Please wait..'
            : <ul className={styles.nav}>
                {
                    navyBtns.map((item, index) => {
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