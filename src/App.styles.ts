import styled, { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    html {
        height: 100%;
    }

    body {
        background-color: #383e56;
        margin: 0;
        padding: 0 20px;
        display: flex;
        justify-content: center;
        color: #f4f9f9
    }

    * {
        box-sizing: border-box;
        font-family: 'Oswald', sans-serif;
    }
`

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    >p {
        color: #fff;
    }

    .score {
        color: #fff;
        font-size: 2rem;
        margin:0;
    }

    h1 {
        font-size: 70px;
        text-align: center;
        margin: 20px;
    }

    .start, .next {
        cursor: pointer;
        background: linear-gradient(180deg, #fff, #a7c5eb);
        border: 2px solid #a7c5eb;
        box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);
        border-radius: 10px;
        margin: 20px 0;
        padding: 0 40px;
    }

    .start {
        max-width: 200px;
    }
`