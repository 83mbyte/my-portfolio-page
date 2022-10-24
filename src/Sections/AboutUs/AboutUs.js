import React from 'react';

import styles from './AboutUsStyle.module.css';

import HeadingSection from '../../HeadingSection/HeadingSection';
import Section from '../Section';
import AboutUsItem from './AboutUsItem';
import AboutUsProgress from './AboutUsProgress';

const AboutUs = ({ data }) => {

    // const itemsData = [
    //     {
    //         title: 'Planning',
    //         text: 'Amet mattis vulputate enim nulla. Vel facilisis volutpat est velit egestas dui id ornare arcu. Varius morbi enim nunc faucibus a. Ipsum faucibus vitae aliquet nec ullamcorper. Risus nec feugiat in fermentum posuere urna. Fames ac turpis egestas integer eget.'
    //     },
    //     {
    //         title: 'Developing',
    //         text: 'Varius vel pharetra vel turpis nunc eget. Massa sed elementum tempus egestas. Lorem ipsum dolor sit amet. Iaculis nunc sed augue lacus viverra vitae congue eu.'
    //     },
    //     {
    //         title: 'Launching',
    //         text: 'Parturient montes nascetur ridiculus mus mauris vitae. Aliquet enim tortor at auctor urna nunc id cursus. Vel pharetra vel turpis nunc. Suspendisse in est ante in nibh mauris cursus mattis. Sociis natoque penatibus et magnis dis parturient.'
    //     },
    // ]
    return (
        <Section bgColor={'white'} scrollId={'about'}>
            <HeadingSection title={'About'} subtitle={'Our Process. Our Focus'} />
            <div className={styles.aboutUsContainer}>

                {
                    data.steps.map((item, index) => {
                        return <AboutUsItem title={item.title} key={index} text={item.text} />
                    })
                }


            </div>
            <div className={styles.aboutUsOurFocus}>
                <div className={styles.imgContainer}>
                    <img src={'images/about-img.png'} alt={'about-img'} />
                </div>
                <div>
                    <h3>Our Focus</h3>
                    <p>{data.focus.text}</p>
                    <AboutUsProgress logo={'react'} title={'React'} width={'75'} />
                    <AboutUsProgress logo={'mobile'} title={'Mobile App (React-Native)'} width={'35'} />
                    <AboutUsProgress logo={'html'} title={'HTML/CSS/JS'} width={'65'} />
                </div>
            </div>
        </Section>
    );
};

export default AboutUs;