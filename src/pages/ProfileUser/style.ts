import styled from "styled-components";

export const UserPerfil = styled.div`
    margin-top: 1.5rem;
    color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-family: 'Inter', sans-serif;
    margin: 3rem 0;

    h1{
        font-size: 1.5rem;
    }

    p{
        color: #7F35FF;
    }
    h2{
        font-size: 1.5rem;
        text-align: center;
        color: #7F35FF;

    }

`

export const BoxFilter = styled.div`
    display: flex;
    justify-content: center;
    gap: 20px;
    margin-bottom: 2rem;
`


export const FilterButtonUser = styled.button<{ $isSelected: boolean }>`
    background: ${({ $isSelected }) => $isSelected ? "#39186D" : "transparent"};
    border: none;
    color: white;
    cursor: pointer;
    padding: 0.5rem;
    border-radius: 10px;
    transition: background 0.3s ease;

    &:hover {
        background: #555;
    }
`

export const BoardTaskUser = styled.div`
    color: white;
    text-align: center;
`

export const BoardItensUser = styled.div`
    min-width: 368px;
    padding: 1rem;
    align-items: center;
    justify-content: space-between;
    color: white;
    font-family: 'Inter', sans-serif;
    display: flex;
    height: 50px;
    cursor: pointer;
    width: 100%;
    background: #39186D;
    border-radius: 11.513px;
    margin-bottom: 2px;

    span {
        display: flex;
        width: calc(75%);
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        margin-right: 40px;
        max-width: 6.25rem;
        justify-content: space-around;
    }
`
