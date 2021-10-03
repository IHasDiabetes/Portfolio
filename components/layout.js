import Link from 'next/link'
import styles from '../styles/layout.module.css'

export default function Layout({ children }) {
    return(
        <>
            <div className={styles.container}>
                <div className={styles.github}>logo</div>
                <div className={styles.navigator}>
                        <Link href="/"><a>Home</a></Link>
                        <Link href="/about"><a>About</a></Link>
                        <Link href="/skills"><a>Skills</a></Link>
                        <Link href="/projects"><a>Portfolio</a></Link>
                        <Link href="/contacts"><a>Contacts</a></Link>
                </div>
                <div className={styles.sidebar}></div>
            </div>
            {children}
        </>
    )
}