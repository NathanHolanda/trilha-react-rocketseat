import {createContext, ReactNode, useContext, useEffect, useState} from 'react'
import { Transaction } from '../interfaces/Transaction'
import { api } from '../services/api'

interface TransactionProviderProps{
    children: ReactNode
}

interface TransactionContextValue{
    transactions: Transaction[]
    createTransaction: (transaction: TransactionInputs) => Promise<boolean>
}

type TransactionInputs = Omit<Transaction, 'id' | 'createdAt'>

const TransactionsContext = createContext<TransactionContextValue>(
    {} as TransactionContextValue
)

export function TransactionsProvider({children}: TransactionProviderProps){
    const [transactions, setTransactions] = useState<Transaction[]>([])

    async function createTransaction(transactionInputs: TransactionInputs){
        const hasEmptyInput = Object.values(transactionInputs).some(input => input === '' || input === 0)
        
        if( !hasEmptyInput ){
            const response = await api.post('transactions', transactionInputs)
            const {transaction} = response.data

            setTransactions([
                ...transactions,
                transaction
            ])

            return true
        }

        return false
    }

    useEffect(() => {
        api.get('transactions')
        .then(response => response.data.transactions)
        .then(data => setTransactions(data))
    }, [])

    return (
        <TransactionsContext.Provider value={{transactions, createTransaction}}>
            {children}
        </TransactionsContext.Provider>
    )
}

export function useTransactions(){
    const context = useContext(TransactionsContext)

    return context
}