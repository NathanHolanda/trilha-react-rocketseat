import styles from './styles.module.scss'

export function Posts() {
    return (
        <main className={styles.container}>
            <a className={styles.post}>
                <time>17 de março de 2022</time><br />
                <strong>Lorem ipsum dolor sit amet</strong>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur auctor sed leo non euismod. </p>
            </a>
            <a className={styles.post}>
                <time>17 de março de 2022</time><br />
                <strong>Lorem ipsum dolor sit amet</strong>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur auctor sed leo non euismod. </p>
            </a>
            <a className={styles.post}>
                <time>17 de março de 2022</time><br />
                <strong>Lorem ipsum dolor sit amet</strong>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur auctor sed leo non euismod. </p>
            </a>
        </main>
    )
}