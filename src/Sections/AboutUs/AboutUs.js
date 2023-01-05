import React, { useEffect, useState } from 'react';

import styles from './AboutUsStyle.module.css';

import HeadingSection from '../../HeadingSection/HeadingSection';
import Section from '../Section';
import AboutUsItem from './AboutUsItem';
import AboutUsProgress from './AboutUsProgress';

const AboutUs = ({ data, focus }) => {
    const [reactProjects, setReactProjects] = useState({ count: 0, percents: 0 });
    const [htmlCssProjects, setHtmlCssProjects] = useState({ count: 0, percents: 0 });
    const [reactNativeProjects, setReactNativeProjects] = useState({ count: 0, percents: 0 });

    useEffect(() => {
        const countProjects = () => {
            let reactCount = 0;
            let reactNativeCount = 0;
            let htmlCssCount = 0;
            let projectsProportionPercent = 100 / focus.length;

            focus.forEach(item => {
                switch (item.tech[0]) {
                    case 'react':
                        reactCount++;
                        break;
                    case 'html/css/js':
                        htmlCssCount++;
                        break;
                    case 'react-native':
                        reactNativeCount++;
                        break;
                    default:
                        break;
                }
            });

            setHtmlCssProjects(
                {
                    count: htmlCssCount,
                    percents: htmlCssCount * projectsProportionPercent
                }
            );
            setReactNativeProjects(
                { count: reactNativeCount, percents: reactNativeCount * projectsProportionPercent }
            );
            setReactProjects(
                { count: reactCount, percents: reactCount * projectsProportionPercent }
            );
        }
        countProjects();
    }, [focus]);

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
                    {
                        reactProjects.count > 0
                        && <AboutUsProgress logo={'react'} title={'React'} width={`${reactProjects.percents}`} projectsReady={reactProjects.count} />
                    }

                    {
                        htmlCssProjects.count > 0
                        && <AboutUsProgress logo={'html'} title={'HTML/CSS/JS'} width={`${htmlCssProjects.percents}`} projectsReady={htmlCssProjects.count} />
                    }

                    {
                        reactNativeProjects.count > 0
                        && <AboutUsProgress logo={'mobile'} title={'Mobile App (React-Native)'} width={`${reactNativeProjects.percents}`} projectsReady={reactNativeProjects.count} />
                    }
                </div>
            </div>
        </Section>
    );
};

export default AboutUs;