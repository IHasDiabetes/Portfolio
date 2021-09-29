import Head from 'next/head'
import styles from '../styles/projects.module.css'

export default function Projects() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Projects</title>
        {/* <meta name="description" content="Generated by create next app" /> */}
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <div className={styles.text}>
        <div className={styles.title}>Projects</div>
        <div className={styles.projects_container}>
          <div className={styles.projects_contents}>
            <div className={styles.projects_logo}>logo</div>
            <div className={styles.line}></div>
            <div className={styles.projects_title}>Title</div>
            <div className={styles.projects_description}>Description</div>
          </div>
          <div className={styles.note}>- Got Room For More -</div>
        </div>
      </div>
      
    </div>
  )
}