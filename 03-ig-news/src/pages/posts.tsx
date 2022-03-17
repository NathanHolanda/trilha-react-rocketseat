import Head from "next/head"
import { createClient } from "../services/prismic";
import { Posts } from './../components/Posts/index';


export default (props) => {
    console.log(props)

    return(
        <>
            <Head>
                <title>Posts | ig.news</title>
            </Head>
            <Posts />
        </>   
    )
}

export async function getStaticProps() {
    const client = createClient({
        accessToken: process.env.PRISMIC_ACCESS_TOKEN
    })
  
    const page = await client.getByType('1', {
        fetch: ['post.title', 'post.content']
    })
  
    return {
      props: { page }
    }
}