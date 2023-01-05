import React from "react";
import styles from './PortfolioStyle.module.css';



const PortfolioItem = ({ data }) => {


    return (
        <div className={styles.flipContainer}>
            <div className={styles.flipBody}>
                <div className={styles.flipFront}>
                    <img src={data.image} alt={`${data.title}_image_project`} />
                </div>
                <div className={styles.flipBack}>
                    <p>Project: <span className="bold">{data.title}</span></p>
                    {
                        data.online && <p>Live Version: <a href={data.online} target={"_blank"} rel={"noreferrer"}>Online</a></p>
                    }
                    {
                        data.git && <p>Source Code: <a href={data.git} target={"_blank"} rel={"noreferrer"}>GitHub</a></p>
                    }
                </div >
            </div >
        </div >
    )
}

export default PortfolioItem;