import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body{
    background: #1b1b1b;
    font-family: 'Inter', sans-serif;
    overflow-x: hidden;
}

html {
    @media (max-width: 1700px){
        font-size: 80%;
    }

    
}

button{
    font-weight: bold;
    cursor: pointer;
    font-size: 1.1rem;
    padding: 1rem 2rem;
    margin-top: 1rem;
    border: 3px solid #23d997;
    background: transparent;
    color: white;
    transition: all 0.5s ease;
    font-family: 'Inter', sans-serif;
    &:hover{
        background-color: #23d997;
        color: white;
    }

   
}

    h2{
        font-weight: lighter;
        font-size: 3rem;
    }

    h3{
        color: white;

    }

    a{
        font-size: 1rem;
    }

    h4{
        font-weight: bold;
        font-size: 2rem;
        
    }

    span{
        font-weight: bold;
        color: #23d997;
    }

    p{
        padding: 3rem 0rem;
        color: #ccc;
        font-size: 1rem;
        line-height: 150%;
    }




`;

export default GlobalStyle;
