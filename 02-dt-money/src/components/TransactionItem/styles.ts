import styled from 'styled-components'

export const TransactionsTableRow = styled.tr`
    td{
        border: 0;
        padding: 1rem 2rem;
        background-color: var(--shape);
        color: var(--text-body);
        border-radius: 0.25rem;

        &:first-child{
            color: var(--text-title)
        }

        &.expense{
            color: var(--red);
        }

        &.gain{
            color: var(--green);
        }
    }
`