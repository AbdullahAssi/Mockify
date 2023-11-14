import { footerLinks } from '@/data';
import React from 'react';
import {FaFacebookSquare, FaLinkedin} from 'react-icons/fa'
import styles from './page.module.css'

function Footer() {
    return (
        <>
            <div className={styles.footer_Container} >
                <div>
                    <h1 className='ppe'>Mockify</h1>
                    <p className='neue'>Get directions</p>
                </div>

                {footerLinks.map((section, index) => (
                    <div key={index} className={styles.titles}>
                        <h3 className='ppe_italic'>{section.title}</h3>
                        <div className={styles.line}></div>
                        <ul className={styles.list_Container}>
                            {section.links.map((link, linkIndex) => (
                                <li className='neue' key={linkIndex}>
                                    {link.name}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
            <div className={styles.Footer}>
                <p className='neue'>CopyRight  © 2023, Mockify.</p>
                <p className='neue'>All rights reserved. <FaFacebookSquare /> <FaLinkedin /></p>
            </div>
            </>
    );
}

export default Footer;
