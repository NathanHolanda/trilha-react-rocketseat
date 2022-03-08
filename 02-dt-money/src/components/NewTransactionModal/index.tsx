import Modal from 'react-modal'
import {Container, Title, TransactionTypeButton, TransactionTypeContainer} from './styles'
import outcomeImg from '../../assets/outcome.svg'
import incomeImg from '../../assets/income.svg'
import closeImg from '../../assets/close.svg'
import { FormEvent, useState } from 'react'
import{useTransactions} from '../../context/TransactionsContext'

interface NewTransactionModalProps{
    isModalOpen: boolean
    handleCloseModal: () => void
}

export function NewTransactionModal({isModalOpen, handleCloseModal}: NewTransactionModalProps){
    const [title, setTitle] = useState<string>('')
    const [value, setValue] = useState<number>(0)
    const [type, setType] = useState<'gain' | 'expense'>('gain')
    const [category, setCategory] = useState<string>('')

    const {createTransaction} = useTransactions()

    const handleFormSubmit = async (event: FormEvent) => {
        event.preventDefault()

        const success = await createTransaction({title, value, type, category})

        if(success){
            setTitle('')
            setValue(0)
            setCategory('')

            handleCloseModal()
        }
    }

    return (
        <Modal
            className="react-modal-content"
            overlayClassName="react-modal-overlay"
            isOpen={isModalOpen}
            onRequestClose={handleCloseModal}
            contentLabel="Example Modal"
        >
            <button className="react-modal-close" type="button" onClick={handleCloseModal}>
                <img src={closeImg} alt="fechar modal" />
            </button>
            <Title>Cadastrar transação</Title>
            <Container onSubmit={handleFormSubmit}>
                <input 
                    placeholder="Título" 
                    type="text" 
                    onChange={event => setTitle(event.target.value)}
                    value={title}
                />
                <input 
                    placeholder="Valor" 
                    type="number" 
                    min='0.01'
                    step="0.01" 
                    onChange={event => setValue(Number(event.target.value))}
                    value={value !== 0 ? value : ''}
                />

                <TransactionTypeContainer>
                    <TransactionTypeButton 
                        type="button" 
                        className="gain" 
                        isActive={type === 'gain'} 
                        onClick={() => setType('gain')}
                        activeColor='green'
                    >
                        <img src={incomeImg} alt="entrada" />
                        <span>Entrada</span>
                    </TransactionTypeButton>
                    <TransactionTypeButton 
                        type="button" 
                        className="expense"
                        isActive={type === 'expense'} 
                        onClick={() => setType('expense')}
                        activeColor='red'
                    >
                        <img src={outcomeImg} alt="entrada" />
                        <span>Saída</span>
                    </TransactionTypeButton>
                </TransactionTypeContainer>

                <input 
                    placeholder="Tipo" 
                    type="text" 
                    onChange={event => setCategory(event.target.value)}
                    value={category}
                />
                <button className="confirm" type="submit">Cadastrar</button>
            </Container> 
        </Modal>
    )
}