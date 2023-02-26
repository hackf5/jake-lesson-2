import styles from "./website-number-1.module.scss";

export default function Home() {
    return (
        <>
            <div className={styles.body}>
                <header className={styles.header}>
                    <h1 className={styles.title}>
                        Welcome to Jake's Site
                    </h1>
                </header>
                <div className={styles.content}>
                    another day another slay
                    <img 
                        src='https://cdn.dribbble.com/userupload/3874595/file/original-64a1e8643f9a6137e67733ae606733f5.jpeg?compress=1&resize=1200x901' />
                </div>
                <footer className={styles.footer}>
                    <div className={styles.footer_content}>
                        Copyright © 2023 Jake's Site
                    </div>
                </footer>
            </div>
        </>
    )
}