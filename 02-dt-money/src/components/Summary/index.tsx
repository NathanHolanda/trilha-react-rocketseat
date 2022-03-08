import incomeImg from '../.././assets/income.svg'
import outcomeImg from '../.././assets/outcome.svg'
import totalImg from '../.././assets/total.svg'
import { Container } from './styles';
import { useTransactions } from '../../context/TransactionsContext';
import { toBRL } from './../../helpers/currency';

export function Summary(){
    const {transactions} = useTransactions()

    const summary = transactions.reduce((accum, transaction) => {
        if(transaction.type === 'gain'){ 
            accum.gains += transaction.value
            accum.total += transaction.value
        }else{
            accum.expenses += transaction.value
            accum.total -= transaction.value
        }

        return accum
    },
    {
        gains: 0,
        expenses: 0,
        total: 0
    })

    return (
        <Container>
            <div>
                <header>
                    <p>Entradas</p>
                    <img src={incomeImg} alt="entradas" />
                </header>
                <strong>{toBRL(summary.gains)}</strong>
            </div>
            <div>
                <header>
                    <p>Saídas</p>
                    <img src={outcomeImg} alt="saídas" />
                </header>
                <strong>{toBRL(-summary.expenses)}</strong>
            </div>
            <div className={
                summary.total >= 0 ? 'highlight-green' : 'highlight-red'
            }>
                <header>
                    <p>Total</p>
                    <img src={totalImg} alt="total" />
                </header>
                <strong>{toBRL(summary.total)}</strong>
            </div>
        </Container>
    )
}