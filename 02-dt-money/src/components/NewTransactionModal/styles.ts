import styled from 'styled-components'
import {darken} from 'polished'

export const Title = styled.h2`
    color: var(--text-title);
    font-size: 1.5rem;
`

export const Container = styled.form`
    padding: 2.5rem 1rem;
    color: var(--text-title);

    input{
        background-color: #e7e9ee;
        width: 100%;
        height: 4rem;
        font-size: 1.2rem;
        font-weight: 400;
        border: 0;
        box-sizing: border-box;
        padding: 0 1.5rem;
        margin-bottom: 2rem;
        transition: outline 0.2s;
        border-radius: 0.25rem;

        &:focus{
            outline: #acf 3px solid;
        }

        &::placeholder{
            color: var(--text-body);
        }
    }

    button{
        font-size: 1.2rem;
        background-color: var(--green);
        color: #fff;
        border: 0;
        border-radius: 0.25rem;
        width: 100%;
        height: 4rem;
        transition: filter 0.1s, transform 0.1s;

        &:hover{
            filter: opacity(0.8)
        }

        &:active{
            transform: scale(0.99, 0.99);
        }
    }
`

export const TransactionOperationContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1rem;
    margin-bottom: 2rem;

    label{
        padding: 1rem 0;
        border-radius: 0.25rem;
        cursor: pointer;
        transition: transform 0.1s;
        border: 1px solid #fff;
        user-select: none;
        -webkit-user-select: none;
        color: var(--text-title);
        transition: border-color 0.2s;

        &:active{
            transform: scale(0.97, 0.97);
        }

        &:hover{
            border-color: ${darken(0.2, '#fff')};
        }

        img{
            margin-right: 1rem;
        }

        div{
            display: flex;
            align-items: center;
            justify-content: center;
        }
    }
`