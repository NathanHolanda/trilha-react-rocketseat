import {Container} from './styles'
import { TransactionItem } from '../TransactionItem';
import { useTransactions } from '../../context/TransactionsContext';

export function TransactionsTable(){
    const {transactions} = useTransactions()

    return (
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Título</th>
                        <th>Valor</th>
                        <th>Categoria</th>
                        <th>Data</th>
                    </tr>
                </thead>
                <tbody>
                   {transactions.map(transaction => <TransactionItem key={transaction.id} transaction={transaction} />)} 
                </tbody>
            </table>
        </Container>
    )
}