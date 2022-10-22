import React from 'react';
import Button from '../../Buttons/Button';
import HeadingSection from '../../HeadingSection/HeadingSection';
import Section from '../Section';
import ContactItem from './ContactItem';

import styles from './ContactStyle.module.css';

const Contact = ({ data }) => {
    const submitHandler = (event) => {
        event.preventDefault();
        const { name, email, subj, message } = event.target.elements;
        let formData = {
            name: name.value,
            email: email.value,
            subject: subj.value,
            message: message.value,
        }
        alert('Form Submitted');
        console.log(formData)
    }
    return (
        <Section scrollId={'contact'}>
            <HeadingSection title={'Get in Touch'} subtitle={'WE LOVE PRETTY MUCH TO HEAR FROM YOU'} />
            <div className={styles.contactItemsContainer}>
                <ContactItem icon={'phone'} text={data.phone} />
                <ContactItem icon={'email'} text={data.email} />
                <ContactItem icon={'location'} text={data.address} />
            </div>
            <form onSubmit={submitHandler}>
                <div className={styles.formContainer}>

                    <div className={styles.formLeft}>
                        <input type={'text'} placeholder='Name' className={styles.formItems} id="name" />
                        <input type={'text'} placeholder='Email' className={styles.formItems} id="email" />
                        <input type={'text'} placeholder='Subject' className={styles.formItems} id="subj" />
                    </div>
                    <div>
                        <textarea name={"message"} rows={7} id={"message"} />
                    </div>

                </div>
                <div style={{ textAlign: 'center' }}>
                    <Button text={'Submit'} type={'sUbmit'} />
                </div>
            </form>
        </Section>
    );
};

export default Contact;