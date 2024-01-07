import React from 'react'
import styles from './about.module.css'
function About() {
    return (
        <div>
            <div className={styles.container}>
                <h1 className='ppe'>This is all About Design</h1>
            </div>

            <div className={styles.About}>
                <div className={styles.about1}>   
                    <h1>This is our Agancy</h1>
                </div>
                <div className={styles.about_container}>
                    <div className={styles.about2}>
                        <h2>Offer a Coffee</h2>
                    </div>
                    <div className={styles.about2}>
                        <h2>Contact Us</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About