import { createPrismicClient } from "../../../services/prismic"
import {RichText} from "prismic-dom"
import styles from "./styles.module.scss"
import Head from "next/head"
import { useRouter } from "next/router"
import { useEffect } from "react"
import { useSession } from "next-auth/react"

interface PostProps{
    post: {
        data: {
            id: string,
            title: string
            content: string
        }
        updatedAt: string
    }
}

export default ({post}: PostProps) =>{
    const router = useRouter()
    const {data: session} = useSession()

    function handleRedirect(){
        router.push('/')
    }

    useEffect(() => {
        if(session?.activeSubscription)
            router.push(`/posts/${post.data.id}`)
    }, [session])

    return (
        <>
            <Head>
                <title>{post.data.title} | ig.news</title>
            </Head>
            <main className={styles.container}>
                <article className={styles.post}>
                    <strong>{post.data.title}</strong>
                    <time>{post.updatedAt}</time>
                    <div
                        className={`
                            ${styles.content} 
                            ${styles.previewContent}
                        `}
                        dangerouslySetInnerHTML={{
                            __html: post.data.content
                        }}
                    >
                    </div>
                    <button onClick={handleRedirect} className={styles.subscribeButton}>
                        Wanna continue reading?&nbsp;
                        <span>Subscribe now</span>&nbsp;🤗</button>
                </article>
            </main>
        </>
    )
}

export async function getStaticPaths(){
    return {
        paths: [],
        fallback: 'blocking'
    }
}

export async function getStaticProps({previewData, params}){
    const client = createPrismicClient({previewData})

    const {id} = params
    const response = await client.getByID(id)
    const post = {}
    
    post['data'] = Object.keys(response)
        .reduce(
            function(acc, key){
                if (key === 'data') 
                    return {
                        ...acc,
                        id: response.id,
                        title: response[key].title,
                        content: RichText.asHtml(response[key].content.splice(0, 2))
                    }
            }
        , {})

    const postTime = new Date(response.last_publication_date).getTime()
    post['updatedAt'] = Intl.DateTimeFormat('pt-BR', {
        day: '2-digit',
        month: 'long',
        year: 'numeric'
    }).format(postTime)
    
    return {
        props: {post}
    }
}