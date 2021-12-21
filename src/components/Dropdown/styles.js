import styled from 'styled-components';

export const DCart = styled.div`
    display: flex;
    flex-direction: column;
    top: 80px;
    width: 325px;
    right: 5%;
    z-index: 10;
    background: white;
    position: absolute;
    >ul{
        padding: 0px 10px 10px 10px;
    }
    >h4{
        margin: 10px 10px 0px 10px;
    }
    >ul>li{
        padding: 5px;
        margin: 10px 0px 10px 0px;
        height: 160px;
        
    }
    img{
        object-fit: contain;
        position: absolute;
        width: 105px;
        height: 70%;  
        top: 20%;
        right: 0;
    }

    .add-button{
        position: absolute;
        right: 110px;
        top: 20%;
    }
    .remove-button{
        position: absolute;
        bottom: 16px;
        right: 110px;
    }
    .quantity{
        position: absolute;
        right: 115px;  
        top: 50%;
    }
    .cart-attributes{
        position: absolute;
        left: 0;  
        bottom: 16px;
        padding: 0px;
        margin: 0px;
        
    }
    .cart-attributes li{
        overflow: hidden;
        width: 24px;
        height: 24px;
        padding: 0px;
    }
    .price{
        position: absolute;
        left: 0;  
        bottom: 25%;
    }
    .brand{
        position: absolute;
        left: 0;  
        top: 0;
    }
    .product-name{
        position: absolute;
        left: 0;  
        top: 25%;
        font-size: 14px;
    }
    .dcart-button{
        display: flex;
        width: 100%;
    }

    .to-cart-button{
        background: white;
        margin: 10px;
        border: 1px solid black;
        width: 50%;
        height: 41px;
        text-align: center;
        padding: 0px;
        line-height: 41px;
    }
    .dcart-button button{
        background: #5ECE7B;
        border:0;
        color: white;
        width: 50%;
        margin: 10px;
        height: 43px;
    }
    
    button:hover{
        background: rgb(230, 230, 230);
    }
    .swift{
        width: 105px;
    }
}  
`

export const DCur = styled.div`
    ul{
        list-style: none;
    }
    text-align: left;
    top: 65px;
    width: auto;
    position: absolute;
    right: 10%;
    z-index: 10;
    background: white;
    .dropdown-menu{
        padding-left: 11px;
        width: 65px;
        text-align: left;
    }
    li:hover{
        background: grey;
    }
}  
`
