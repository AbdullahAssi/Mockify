import { image18, image19, image20,  image24, } from '@/data'
import React from 'react'
import Image from 'next/image'
import styles from './hero.module.css'
function Hero() {
    return (
        <div className={styles.container}>
            <div className={styles.text_container}>

            <h1 className={`${styles.heading} ${styles.ppe}`}>We Bring Your Ideas To Life</h1>
            <p className='neue'>Your journey through retirement is unique. Each part of your financial life is just one of many pathways on your personal retirement roadmap. But that roadmap can get a little complicated. It’s ok to stop and ask for directions. Of course, if you ask three people for directions, you’ll probably get three different answers. We’re here to help you make sense of it all. We recognize that the route to retirement is not a single road. It is a journey to the place where all roads converge. We’re here to make sure you reach your destination with confidence.</p>
            </div>
            <div className={styles.image_container}>
                <div className={styles.image1}>
                    <Image src= {image24}  />
                </div>
                <div className={styles.image2}>
                    <Image src= {image20}  />
                </div>
                <div className={styles.image3}>
                    <Image src= {image19} />
                </div>
            </div>
        </div>
    )
}

export default Hero