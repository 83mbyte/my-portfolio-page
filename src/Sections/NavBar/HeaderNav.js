import React, { useState } from 'react';
import styles from './HeaderNavStyle.module.css';
import NavButtons from './NavButtons';

const HeaderNav = () => {

    const [openMenu, setOpenMenu] = useState(false);

    const handleMenu = () => {
        setOpenMenu(!openMenu);
    }
    return (
        <>
            <div className={styles.container}>
                <div className={styles.logoContainer}>
                    <a href={'#'} className={styles.brand}><span className='bold'>83mbyte</span></a>
                </div>
                <div className={styles.navyContainer}>
                    <NavButtons />

                    <div className={styles.burgerMenu} onClick={handleMenu}>
                        <div className={styles.burgerIcon}></div>
                    </div>

                </div>
            </div>
            <div className={styles.menuExpanded} style={{ display: `${openMenu ? 'flex' : 'none'}` }}>
                <NavButtons action={handleMenu} />
            </div>
        </>
    );
};

export default HeaderNav;