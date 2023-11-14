import styles from './page.module.css'
export default function Loading(){
    return (
        <>
            {/* <h1 className={styles.ppe_italic}>Loading</h1> */}
        <div className={styles.loader_container}>
            <span className={styles.loader}></span>
        </div>
        </>
    )
}