import incomeImg from '../.././assets/income.svg'
import outcomeImg from '../.././assets/outcome.svg'
import totalImg from '../.././assets/total.svg'
import { Container } from './styles';
import {useEffect} from 'react'
import {api} from '../../services/api'

export function Summary(){
    useEffect(() => {
        api.get('transactions')
            .then(data => console.log(data))
    }, [])

    return (
        <Container>
            <div>
                <header>
                    <p>Entradas</p>
                    <img src={incomeImg} alt="entradas" />
                </header>
                <strong>R$ 1000,00</strong>
            </div>
            <div>
                <header>
                    <p>Saídas</p>
                    <img src={outcomeImg} alt="saídas" />
                </header>
                <strong>- R$ 500,00</strong>
            </div>
            <div className="highlight-background">
                <header>
                    <p>Total</p>
                    <img src={totalImg} alt="total" />
                </header>
                <strong>R$ 500,00</strong>
            </div>
        </Container>
    )
}