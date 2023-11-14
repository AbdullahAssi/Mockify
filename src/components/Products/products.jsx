'use client'
import React from 'react'
import { MdDesignServices } from "react-icons/md";
import styles from './page.module.css'
import { products } from '@/data';
function Products() {
    return (
        <div>
        <p className='ppe'>Our Products</p>
        <div className={styles.products_container}>
            <div className={styles.hello}>
                <h1 className={styles.heading}>
                    It’s ok to stop and ask for directions.
                </h1>
                <p className='neue'>Don't confuse a portfolio with an actual plan. A few vague directions from an advisor just won't cut it. What you need is a true financial guide–someone who's traveled this road many times and knows the best routes to success. There is no simple path to this destination. That’s why we’ll travel by your side the whole way, making sure that all roads lead to the retirement you imagine.</p>
            </div>
            <div className={styles.product_box_container} >
                    {products.map((pro, index) => (
                                <div className={styles.titles} key={index}>
                                    <h3 className='ppe'>{pro.title}</h3>
                                    <pro.icon className={styles.icon} />
                                    <p className='neue'>{pro.desc}</p>
                                </div>
                        ))}
                </div>
        </div>
        </div>
    )
}

export default Products
