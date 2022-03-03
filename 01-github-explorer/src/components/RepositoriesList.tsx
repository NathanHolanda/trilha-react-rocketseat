import {useState, useEffect} from 'react'
import {RepositoryItem} from './RepositoryItem'
import './../styles/repositories.scss'

interface Repository{
    name: string
    description: string
    html_url: string
    node_id: string
}

export function RepositoryList(){
    const [repositories, setRepositories] = useState<Repository[]>([])

    useEffect(() => {
        fetch('https://api.github.com/users/nathanholanda/repos')
            .then(response => response.json())
            .then(data => setRepositories(data))
    }, [])

    return (
        <section className="repositories-list">
            <h1>Lista de repositórios</h1>

            <ul>
                {repositories.map((repository) => <RepositoryItem key={repository.node_id} repository={repository}/>
                )} 
            </ul>
        </section>
        
    )
}