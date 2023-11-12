import styles from './globals.css'
export default function Loading(){
    return (
        <div className={styles.loader_container}>
            <h1>Loading</h1>
            <span className={styles.loader}></span>
        </div>
    )
}