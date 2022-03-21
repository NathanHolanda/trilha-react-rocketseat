import {FaGithub} from 'react-icons/fa'
import {FiX} from 'react-icons/fi'
import styles from './styles.module.scss'
import {useSession, signIn, signOut} from 'next-auth/react'

export function SignInButton(){
    const {data: session, status} = useSession()

    return status === 'authenticated' ? (
        <button 
            className={styles.signInButton}
            onClick={() => signOut()}
        >
            <div>
                <FaGithub 
                    className={`
                        ${styles.githubIcon} ${styles.active}
                    `}
                />
                <span>{session.user.name}</span>
                <FiX className={styles.closeIcon} />
            </div>
        </button>
    ) : (
        <button 
            className={styles.signInButton}
            onClick={() => signIn('github')}
        >
            <div>
                <FaGithub className={styles.githubIcon} />
                <span>Sign In With GitHub</span>
            </div>
        </button>
    )
}