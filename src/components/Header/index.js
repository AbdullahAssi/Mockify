import { navLinks } from '@/data'
import styles from './page.module.css'
import React from 'react'
import Link from 'next/link'

function header() {
    return (
        <div className={styles.container}>
            <header className={styles.header}>
                {navLinks.map((link, index) => (
                    <Link href={link.link} className={styles.link} key={index}>{link.heading}</Link>
                ))
                }
            </header>
        </div>
    )
}

export default header 