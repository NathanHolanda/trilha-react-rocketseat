import Modal from 'react-modal'
import {Container, Title, TransactionOperationButton, TransactionOperationContainer} from './styles'
import outcomeImg from '../../assets/outcome.svg'
import incomeImg from '../../assets/income.svg'
import closeImg from '../../assets/close.svg'
import { FormEvent, useState } from 'react'
import { api } from '../../services/api'

interface NewTransactionModalProps{
    isModalOpen: boolean
    handleCloseModal: () => void
}

export function NewTransactionModal({isModalOpen, handleCloseModal}: NewTransactionModalProps){
    const [title, setTitle] = useState<string>('')
    const [value, setValue] = useState<number>(0)
    const [operation, setOperation] = useState<'gain' | 'expense'>('gain')
    const [category, setCategory] = useState<string>('')

    const handleFormSubmit = (event: FormEvent) => {
        event.preventDefault()

        const data = {title, value, operation, category}

        api.post('/transactions', data)
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
                    name="title" 
                    type="text" 
                    onChange={event => setTitle(event.target.value)}
                />
                <input 
                    placeholder="Valor" 
                    name="value" 
                    type="number" 
                    step="0.01" 
                    onChange={event => setValue(Number(event.target.value))}
                />

                <TransactionOperationContainer>
                    <TransactionOperationButton 
                        type="button" 
                        className="gain" 
                        isActive={operation === 'gain'} 
                        onClick={() => setOperation('gain')}
                        activeColor='green'
                    >
                        <img src={incomeImg} alt="entrada" />
                        <span>Entrada</span>
                    </TransactionOperationButton>
                    <TransactionOperationButton 
                        type="button" 
                        className="expense"
                        isActive={operation === 'expense'} 
                        onClick={() => setOperation('expense')}
                        activeColor='red'
                    >
                        <img src={outcomeImg} alt="entrada" />
                        <span>Saída</span>
                    </TransactionOperationButton>
                </TransactionOperationContainer>

                <input 
                    placeholder="Tipo" 
                    name="type" 
                    type="text" 
                    onChange={event => setCategory(event.target.value)}
                />
                <button className="confirm" type="submit">Cadastrar</button>
            </Container> 
        </Modal>
    )
}