import { Product } from '../../interfaces/Product'
import { SubscribeButton } from '../SubscribeButton'
import styles from './styles.module.scss'

interface HomeProps{
    product: Product
}

export function Home({product}: HomeProps){
    return (
        <main className={styles.mainContent}>
            <section className={styles.mainMessage}>
            <strong>👏 Hey, welcome</strong>
            <h1>News about the <span>React</span> world</h1>
            <p>
                Get access to all the publications<br/>
                <span>for {
                    Intl.NumberFormat('EN-us', {
                        style: 'currency',
                        currency: 'USD'
                    }).format(product.amount)
                } month</span>
            </p>
            <SubscribeButton priceId={product.priceId}/>
            </section>
            <figure>
            <img src="/images/avatar.svg" alt="Girl coding" />
            </figure>
        </main>
    )
}