import { navLinks } from '@/data'
import styles from './page.module.css'
import React from 'react'

function header() {
    return (
        <div className={styles.container}>
            <header className={styles.header}>
                {navLinks.map((link, index) => (
                    <a className={styles.link} key={index}>{link.heading}</a>
                ))
                }
            </header>
        </div>
    )
}

export default header