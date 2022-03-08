import { toBrazilianDateFormat } from '../../helpers/date';
import { Transaction } from '../../interfaces/Transaction';
import { TransactionsTableRow } from './styles';
import { toBRL } from './../../helpers/currency';

interface TransactionItemProps{
    transaction: Transaction
}

export function TransactionItem(props: TransactionItemProps){
    const {transaction} = props

    return (
        <TransactionsTableRow>
            <td>{transaction.title}</td>
            <td className={transaction.type}>
                {
                    transaction.type === 'expense' ? '-' : ''
                }
                {
                    toBRL(transaction.value)
                }
            </td>
            <td>{transaction.category}</td>
            <td>
                {
                    toBrazilianDateFormat(new Date(transaction.createdAt))
                }
            </td>
        </TransactionsTableRow>
    )
}