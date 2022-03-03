import {Container} from './styles'

export function TransactionsTable(){
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
                    <tr>
                        <td>Desenvolvimento de website</td>
                        <td className="gain">R$ 12000,00</td>
                        <td>Desenvolvimento</td>
                        <td>20/02/2021</td>
                    </tr>
                    <tr>
                        <td>Aluguel</td>
                        <td className="expense">- R$ 1100,00</td>
                        <td>Casa</td>
                        <td>05/02/2021</td>
                    </tr>
                </tbody>
            </table>
        </Container>
    )
}