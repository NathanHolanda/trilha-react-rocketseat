import { createPrismicClient } from "../../services/prismic"
import {RichText} from "prismic-dom"
import styles from "./post.module.scss"
import Head from "next/head"
import { getSession, useSession } from "next-auth/react"

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
                        className={styles.content}
                        dangerouslySetInnerHTML={{
                            __html: post.data.content
                        }}
                    >
                    </div>
                </article>
            </main>
        </>
    )
}

export async function getServerSideProps({previewData, params, req}){
    const client = createPrismicClient({previewData})

    const {id} = params

    const session = await getSession({req})
    if(!session?.activeSubscription){
        return {
            redirect: {
                permanent: false,
                destination: `/posts/preview/${id}`
            }
        }
    }

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
                        content: RichText.asHtml(response[key].content)
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