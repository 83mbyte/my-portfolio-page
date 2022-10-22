import React, { useState } from 'react';
import styles from './HeaderNavStyle.module.css';
import NavButtons from './NavButtons';

const HeaderNav = ({ navyBtns }) => {

    const [openMenu, setOpenMenu] = useState(false);

    const handleMenu = () => {
        setOpenMenu(!openMenu);
    }
    return (
        <>
            <div className={styles.container}>
                <div className={styles.logoContainer}>
                    <a href={'/'} className={styles.brand}><span className='bold'>83mbyte</span></a>
                </div>
                <div className={styles.navyContainer}>
                    <NavButtons navyBtns={navyBtns} />

                    <div className={styles.burgerMenu} onClick={handleMenu}>
                        <div className={styles.burgerIcon}></div>
                    </div>

                </div>
            </div>
            <div className={styles.menuExpanded} style={{ display: `${openMenu ? 'flex' : 'none'}` }}>
                <NavButtons navyBtns={navyBtns} action={handleMenu} />
            </div>
        </>
    );
};

export default HeaderNav;