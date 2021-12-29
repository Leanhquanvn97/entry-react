import styled from 'styled-components'

export const PPage = styled.section`
    display: flex;
    justify-content: space-between;
    padding: 5% 15% 0 15%;
    height: 100vh;
    &.toggled{
        opacity: 0.5;
        background: rgba(57, 55, 72, 0.22);
        transition: background 500ms;
    }
    img{
        height: 500px;
        width: 500px;
        object-fit: contain;
    }
    .d-imgs{
        max-width: 700px;
    }
    .d-attributes{
        width: 350px;
    }
    h2{
        margin-bottom: 0px;
        font-size: 2rem;
        
    }
    button{
        width: 100%;
        height: 52px;
        background: #5ECE7B;
        border: 0;
    }
    button:hover{
        background: #24b54a;
    }
    .price{
        font-weight: bold;
        margin-bottom: 25px;
    }
    .els-attributes{
        width: 65px;
        height: 43px;
        box-sizing: border-box;
        text-align: center;
    }
    .selected{
        
    }
`