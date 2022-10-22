import React from 'react';
import styles from './SectionStyle.module.css';

const Section = ({ scrollId, children }) => {
    return (

        <div className={styles.container} id={scrollId}>
            {children}
        </div>

    );
};

export default Section;