import React from 'react';
import HeadingSection from '../../HeadingSection/HeadingSection';
import Section from '../Section';
import styles from './PortfolioStyle.module.css';
const Portfolio = ({ data }) => {
    // const filters = ['all', 'react', 'react-native', 'html/css']

    // const projects = [

    //     {
    //         title: 'rpsls',
    //         image: 'rpsls.png',
    //         tech: 'react'
    //     },
    //     {
    //         title: 'calculator',
    //         image: 'calc.png',
    //         tech: 'html/css'
    //     },

    //     {
    //         title: 'countries',
    //         image: 'countries.png',
    //         tech: 'react-native'
    //     },
    // ] 
    const [filterValue, setFilterValue] = React.useState('all');
    const filterClick = (e) => {
        setFilterValue(e.target.innerHTML);
    }
    return (
        <Section scrollId={'portfolio'}>
            <HeadingSection title={'portfolio'} subtitle={'Web and Mobile development'} />
            <div className={styles.filterContainer}>
                {
                    data.filters.map((item, index) => {
                        let res = null;
                        if (item) {
                            res = <div className={styles.filterItem} key={index + '_fltr'} onClick={filterClick}>{item}</div>
                        }
                        return (
                            res
                        )
                    })
                }

            </div>
            <div className={styles.projectsContainer}>
                {
                    data.projects.filter(project => {
                        let res = null;
                        if (filterValue === 'all') {
                            // return project
                            res = project;
                        } else if ((project.tech).indexOf(filterValue) !== -1) {
                            // return project
                            res = project;
                        }
                        // } else if (project.tech === filterValue) {
                        //     // return project
                        //     res = project;
                        // }
                        return res
                    }).map((item, index) => {
                        return (

                            <div className={styles.projectsItem} key={index + '_prjct'}
                            >
                                <div className={styles.projectsItemImage} style={{ 'backgroundImage': `url('${item.image}')` }} ></div>
                            </div>
                        )
                    })
                }

            </div>

        </Section >
    );
};

export default Portfolio;