import styled from 'styled-components';

export const PAtt = styled.div`
    ul{
        list-style: none;
        display: flex;
        margin: 10px 10px 10px 0px;
        column-gap: 10px;
        padding: 0px;
    }
    li{
        border: 1px solid;
        text-align: center;
        padding-top: 17%;
        box-sizing: border-box;
    }
    li:hover{
        cursor: pointer;
    }
    .selected{
        background: black;
        color: white;
    }
    h4{
        font-size: 1.1rem;
    }
    
}  
`
