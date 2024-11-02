import { image18, image19, image20,  image23,  image24, image25, image26, image27, image29, image30, } from '@/data'
import React from 'react'
import Image from 'next/image'
import styles from './hero.module.css'
function Hero() {
    return (
        <div className={styles.container}>
            <div className={styles.text_container}>

            <h1 className={`${styles.heading} ${styles.ppe}`}>We Bring Your Ideas To Life</h1>
            <p className='neue'>Your Ideas and everything mean very much to us, so we could help to change the world a bit for sure. Everythign is better with you.</p>
                <div className={styles.image2}>
                    <Image src= {image26}  />
                </div>
            </div>
            <div className={styles.image_container}>
                <div className={styles.image1}>
                    <Image src= {image25}  />
                </div>
                <div className={styles.image3}>
                    <Image src= {image27} />
                </div>
            </div>
        </div>
    )
}

export default Hero