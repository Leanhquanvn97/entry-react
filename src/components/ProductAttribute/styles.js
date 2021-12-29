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
        line-height: 43px;
        box-sizing: border-box;
    }
    
    .selected{
        opacity: 0.7;
        border: 3px solid #221c45;
    }
    
    
}  
`
