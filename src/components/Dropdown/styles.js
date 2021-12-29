import styled from 'styled-components';

export const DCart = styled.div`
    display: flex;
    flex-direction: column;
    top: 75px;
    width: 325px;
    right: 5%;
    
    z-index: 10;
    background: white;
    position: absolute;
    font-size: 0.8rem;
    border: 0.5px solid grey;
    >ul{
        padding: 0px 10px 10px 10px;
    }
    >h4{
        box-sizing: border-box;
        z-index: 20;
        position: sticky;
        top: 0px;
        background: white;
        width: 100%;
        padding: 10px 0px 10px 10px;
        margin: 0px;
    }
    >ul>li{
        padding: 5px;
        margin: 0;
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
        right: 40%;
        top: 20%;
    }
    .remove-button{
        position: absolute;
        bottom: 16px;
        right: 40%;
    }
    .quantity{
        position: absolute;
        right: 43%;  
        top: 50%;
        font-size: 1rem;
    }
    .cart-attributes{
        display: none;
    }
    // .cart-attributes{
    //     position: absolute;
    //     left: 0;  
    //     bottom: 16px;
    //     padding: 0px;
    //     margin: 0px;
        
    // }
    // .cart-attributes li{
    //     overflow: hidden;
    //     width: 24px;
    //     height: 24px;
    //     padding: 0px;
    //     line-height: 24px;
    //     border: 1px solid;
    // }
    .price{
        position: absolute;
        left: 0;  
        bottom: 10%;
    }
    .brand{
        margin: 0;
        position: absolute;
        left: 0;  
        top: 20%;
    }
    .product-name{
        position: absolute;
        left: 0;  
        top: 30%;
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
    .add-button,
    .remove-button{
        background: white;
        border: 1px solid black;
        width: 24px;
        height: 24px;
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
    font-size: 0.8rem;
    z-index: 13;
    ul{
        list-style: none;
    }
    text-align: left;
    top: 65px;
    width: auto;
    position: absolute;
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
