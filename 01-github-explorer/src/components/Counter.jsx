import {useState} from 'react'

export default function Counter(){
    const [counter, setCounter] = useState(0)

    return (
        <>
            <h2>{counter}</h2>
            <button type="button" onClick={() => setCounter(counter + 1)}>Add +1</button>
        </>
    )
}