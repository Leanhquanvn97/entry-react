import styled from 'styled-components'

export const PageCart = styled.section`
padding: 0 87px 0 87px;
&.toggled{
    opacity: 0.5;
    background: rgba(57, 55, 72, 0.22);
    transition: background 500ms;
}
>ul>li{
    margin-left: 0px;
    height: 226px;
    width: 100%;
    border-top: 1px solid #E5E5E5;
}
>ul{
    padding-left: 0px;
}
img{
    position: absolute;
    object-fit: contain;
    width: 141px;
    height: 70%;  
    top: 20%;
    right: 0px;
}
button{
    width: 45px;
    height: 45px;
    background: white;
    border: 1px solid black;
}
button:hover{
    background: rgb(230, 230, 230);
}
.add-button{
    position: absolute;
    right: 150px;
    top: 20%;
}
.remove-button{
    position: absolute;
    bottom: 28px;
    right: 150px;
}
.quantity{
    position: absolute;
    right: 150px;  
    top: 50%;
}
.cart-attributes{
    position: absolute;
    left: 0;  
    bottom: 3%;
    padding: 0px;
    margin-left: 0px;
    
}
.cart-attributes li{
    background: black;
    color: white;
    border: 1px solid white;
    width: 65px;
        height: 43px;
}

.price{
    position: absolute;
    left: 0;  
    bottom: 30%;
}
.brand{
    position: absolute;
    left: 0;  
    top: 20%;
    margin: 0px;
}
.product-name{
    position: absolute;
    left: 0;  
    top: 40%;
}
.swift{
    
    width: 145px;
}
.
`