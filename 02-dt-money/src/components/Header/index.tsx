import logoImg from '../.././assets/logo.svg'
import { Container, Content } from './styles'

interface HeaderProps{
    onModalOpen: () => void
}

export function Header({onModalOpen}: HeaderProps){
    return (
        <Container>
            <Content>
                <img src={logoImg} alt="dt money" />
                <button onClick={onModalOpen} type="button">Nova transação</button>
            </Content>
        </Container>
    )
}