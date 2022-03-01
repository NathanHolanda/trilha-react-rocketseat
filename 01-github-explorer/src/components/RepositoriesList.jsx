import RepositoryItem from './RepositoryItem'

export default function RepositoryList(){
    const repository = {
        name: 'test',
        url: 'https://github.com/NathanHolanda',
        description: 'Lorem ipsum dolor sit amet'
    }

    return (
        <section className="repositories-list">
            <h1>Lista de repositórios</h1>

            <ul>
                <RepositoryItem repository={repository} />
            </ul>
        </section>
        
    )
}