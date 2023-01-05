import React, { useEffect, useState } from 'react';
import Button from '../../Buttons/Button';
import styles from './HomeStyle.module.css';

const Home = () => {
    const [active, setActive] = useState(null);

    useEffect(() => {
        setActive(styles.act)
    }, [])

    return (
        <div className={styles.homeWrapper} id={'home'} >
            <div className={active ? `${styles.container} ${active}` : `${styles.container}`} >
                <div className={styles.content}  >
                    <hr />
                    <h3>
                        <span className='bold'>I'm a frontend </span>
                    </h3>
                    <h1 className='heading'>DEVELOPER</h1>
                    <Button text={'Process'} path={'about'} />

                </div>
            </div>
        </div >
    );
};

export default Home;