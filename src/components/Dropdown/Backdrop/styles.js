import styled from 'styled-components'

export const DropdownStyles = styled.div`
display: flex;
justify-content: center;
button{
    width: 100%;
    margin-top:  5px;
    background: white;
    border: 1px solid black;
}
button:active{
    background: rgb(230,230,230);
}
button:hover{
    opacity: 0.7;
}
.add-button{
    background: #5ECE7B;
    color: white;
}
.dropdown-product{
    padding: 15px;
    top: 10%;
    position: absolute;
    background:  white;        
    z-index:1000;
    width: 318px;
    max-height: 350px;
    overflow: auto;
    text-align: left;
}
.els-attributes{
    width: auto;
    min-width: 40px;
    height: 40px;
    box-sizing: border-box;
}
`   