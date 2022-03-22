import { useSession } from "next-auth/react";
import Head from "next/head"
import Link from "next/link";
import { createPrismicClient } from "../../services/prismic";
import styles from './styles.module.scss'

interface PostsProps {
    posts: {
        id: string
        title: string
        summary: string
        updatedAt: string 
    }[]
}

export default ({ posts }: PostsProps) => {
    const {data: session} = useSession()

    return (
        <>
            <Head>
                <title>Posts | ig.news</title>
            </Head>
            <main className={styles.container}>
                {posts.map(post => (
                    <Link href={`/posts/${post.id}`}>
                        <a className={styles.post}>
                            <time>{post.updatedAt}</time><br />
                            <strong>{post.title}</strong>
                            <p>{post.summary}</p>
                        </a>
                    </Link>
                ))}
            </main>
        </>
    )
}

export async function getStaticProps({previewData}) {
    const client = createPrismicClient({previewData})

    const response = await client.getByType('2', {
        fetch: ['post.title', 'post.content']
    })

    const posts = response.results.map(item => {
        return {
            id: item.id,
            title: item.data.title,
            summary: item.data.content.find(
                text => text.type === 'paragraph'
            )?.text ?? '',
            updatedAt: new Date(item.last_publication_date)
                .toLocaleDateString('pt-BR', {
                    day: '2-digit',
                    month: 'long',
                    year: 'numeric'
                })
        }
    })

    return {
        props: { posts }
    }
}