import Modal from 'react-modal'
import {Container, Title, TransactionOperationContainer} from './styles'
import outcomeImg from '../../assets/outcome.svg'
import incomeImg from '../../assets/income.svg'
import closeImg from '../../assets/close.svg'

interface NewTransactionModalProps{
    isModalOpen: boolean
    handleCloseModal: () => void
}

export function NewTransactionModal({isModalOpen, handleCloseModal}: NewTransactionModalProps){
    return (
        <Modal
            className="react-modal-content"
            overlayClassName="react-modal-overlay"
            isOpen={isModalOpen}
            /* onAfterOpen={afterOpenModal} */
            onRequestClose={handleCloseModal}
            /* style={customStyles} */
            contentLabel="Example Modal"
        >
            <button className="react-modal-close" type="button" onClick={handleCloseModal}>
                <img src={closeImg} alt="fechar" />
            </button>
            <Title>Cadastrar transação</Title>
            <Container>
                <input placeholder="Título" name="title" type="text" />
                <input placeholder="Valor" name="value" type="number" step="0.01" />
                <TransactionOperationContainer>
                    <label htmlFor="gain">
                        <div>
                            <img src={incomeImg} alt="entrada" />
                            <span>Entrada</span>
                        </div>
                    </label>
                    <input hidden type="radio" name="operation" id="gain" />
                    <label htmlFor="expense">
                        <div>
                            <img src={outcomeImg} alt="entrada" />
                            <span>Saída</span>
                        </div>
                    </label>
                </TransactionOperationContainer>
                <input hidden type="radio" name="operation" id="expense" />
                <input placeholder="Tipo" name="type" type="text" />
                <button type="button">Cadastrar</button>
            </Container> 
        </Modal>
    )
}