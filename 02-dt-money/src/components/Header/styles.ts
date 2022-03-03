import styled from 'styled-components'

export const Container = styled.header`
    width: 100%;
    background-color: var(--blue);
`

export const Content = styled.div`
    max-width: 1120px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 2rem 1rem 12rem;
    margin: 0 auto;
    
    button{
        font-size: 1rem;
        background-color: var(--light-blue);
        color: #fff;
        border: 0;
        padding: 0 2rem;
        height: 3rem;
        border-radius: 0.25rem;
        transition: filter 0.2s;

        &:hover{
            filter: brightness(0.9);
        }
    }
`