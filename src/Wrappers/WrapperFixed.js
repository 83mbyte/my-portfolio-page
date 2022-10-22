import React, { useState, useEffect } from 'react';
import styles from './WrapperStyle.module.css';
const WrapperFixed = ({ children }) => {
    const [scroll, setScroll] = useState('containerFixed');
    useEffect(() => {
        const handleScroll = () => {
            switch (window.scrollY) {
                case 0:
                    setScroll('containerFixed')
                    break;
                default:
                    if (scroll === 'containerFixed') {
                        setScroll('containerFixedScroll')
                    }
            }
        }
        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [scroll])

    return (
        <div className={styles[scroll]}
            style={{
                backgroundColor: `${scroll === 'containerFixedScroll' ? '#FFF' : 'transparent'}`
            }}
        >
            <div className={styles.contentWrapper}>
                {children}
            </div>
        </div>
    );
};

export default WrapperFixed;