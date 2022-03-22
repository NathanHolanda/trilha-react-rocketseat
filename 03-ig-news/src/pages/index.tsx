import { GetStaticProps } from 'next'
import Head from 'next/head'
import { SubscribeButton } from '../components/SubscribeButton'
import { stripe } from '../services/stripe'

import styles from './styles.module.scss'


interface HomeProps {
  product: {
    priceId: string
    amount: number
  }
}

export default ({ product }: HomeProps) => {
  return (
    <>
      <Head>
        <title>Home | ig.news</title>
      </Head>
      <main className={styles.mainContent}>
        <section className={styles.mainMessage}>
          <strong>👏 Hey, welcome</strong>
          <h1>News about the <span>React</span> world</h1>
          <p>
            Get access to all the publications<br />
            <span>for {
              Intl.NumberFormat('EN-us', {
                style: 'currency',
                currency: 'USD'
              }).format(product.amount)
            } month</span>
          </p>
          <SubscribeButton />
        </section>
        <figure>
          <img src="/images/avatar.svg" alt="Girl coding" />
        </figure>
      </main>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const price = await stripe.prices.retrieve(process.env.STRIPE_SUBSCRIBE_PRICE_ID)

  const product = {
    priceId: price.id,
    amount: (price.unit_amount / 100)
  }

  return {
    props: { product },
    revalidate: 60 * 60 * 24 // 24 hours
  }
}