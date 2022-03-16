import { GetStaticProps } from 'next'
import Head from 'next/head'
import { Product } from '../interfaces/Product'
import { stripe } from '../services/stripe'
import { Home } from './../components/Home';


interface IndexProps{
  product: Product
}

export default function index({product}: IndexProps) {
  return (
    <>
      <Head>
        <title>Home | ig.news</title>
      </Head>
      <Home product={product} />
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
      props: {product},
      revalidate: 60 * 60 * 24 // 24 hours
  }
}