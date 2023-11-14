'use client'
import React from 'react'
import { MdDesignServices } from "react-icons/md";
import styles from './page.module.css'
import { products } from '@/data';
function Products() {
    return (
        <div>
        <p >Our Products</p>
        <div className={styles.products_container}>
            <div className={styles.hello}>
                <h1>
                    It’s ok to stop and ask for directions.
                </h1>
                <p className='neue'>Don't confuse a portfolio with an actual plan. A few vague directions from an advisor just won't cut it. What you need is a true financial guide–someone who's traveled this road many times and knows the best routes to success. There is no simple path to this destination. That’s why we’ll travel by your side the whole way, making sure that all roads lead to the retirement you imagine.</p>
            </div>
            {products.map((section, index) => (
                    <div className={styles.product_box_container} key={index}>
                        <div className={styles.titles}>
                            <h3>{section.title}</h3>
                            <section.Icon className={styles.icon} />
                            <p>{section.desc}</p>
                        </div>
                    </div>
                ))}
        </div>
        </div>
    )
}

export default Products
