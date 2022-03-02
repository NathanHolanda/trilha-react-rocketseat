interface RepositoryItemProps {
    repository: {
        name: string
        description: string
        url: string
    }
}

export default function RepositoryItem(props: RepositoryItemProps){
    const {repository} = props

    return (
        <li className="repository-item">
            <strong>{repository.name}</strong>
            <p>{repository.description}</p>
            <a href={repository.url}>Acessar</a>
        </li>
    )
}