import Link from 'next/link'
import { SignInButton } from './SignInButton'
import styles from './styles.module.scss'
import {useRouter} from 'next/router'

export function Header(){
    const router = useRouter()

    return (
        <header className={styles.headerContainer}>
            <div className={styles.headerContent}>
                <img src="/images/logo.svg" alt="ig.news" />
                <nav>
                    <Link href="/">
                        <a className={
                            router.asPath === '/' ?
                            styles.active :
                            ''
                        }>Home</a>
                    </Link>
                    <Link href="/posts">
                        <a className={
                            router.asPath.substring(0, 6) === '/posts' ?
                            styles.active :
                            ''
                        }>Posts</a>
                    </Link>
                </nav>
                <SignInButton />
            </div>
        </header>
    )
}