export default function RepositoryItem(props){
    const {repository} = props

    return (
        <li className="repository-item">
            <strong>{repository?.name}</strong>
            <p>{repository?.description}</p>
            <a href={repository?.url}>Acessar</a>
        </li>
    )
}