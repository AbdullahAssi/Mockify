import { image10, image21 } from '@/data'
import React from 'react'
import Image from 'next/image'
import styles from './hero.module.css'
function Hero() {
    return (
        <div className={styles.container}>
            <h1 className={styles.heading}>This is hero
                <span className={styles.span}>
                    component
                    <image 
                    src={image10}
                    className={styles.span_image}
                    />
                </span>
            component</h1>
            {/* <Image src= {image10} /> */}
        </div>
    )
}

export default Hero