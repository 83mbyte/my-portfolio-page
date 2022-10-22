import React from 'react';
import Button from '../../Buttons/Button';
import styles from './HomeStyle.module.css';

const Home = () => {

    return (
        <div className={styles.homeWrapper} id={'home'}>
            <div className={styles.container} >
                <div className={styles.content}  >
                    <hr />
                    <h3>
                        <span className='bold'>WE ARE a DIGITAL</span>
                    </h3>
                    <h1 className='heading'>from California</h1>
                    <Button text={'Our Process'} path={'about'} />

                </div>
            </div>
        </div >
    );
};

export default Home;