import styled from 'styled-components';

export const NavStyle = styled.ul`
    display: flex;
    background-color: #FFFFFF;
    list-style: none;
    padding: 0px;
    margin: 0 87px 0 87px;
    height: 80px;
    top: 0;
    left: 0;

    >li:nth-last-child(2) {
        margin-left: auto;
    }
    >li:nth-last-child(2):hover {
        cursor: pointer;
    }
    >li{
        border: 1px solid white;
        border-top: none;
    }
    li a,
    .dCart,
    .dCur{
        line-height: 120%;
        height: 20px;
        text-decoration: none;
        display: block;
        padding: 28px 16px 32px 16px;
        top: calc(50% - 20px/2 - 16px);
        height: 20px;
    }
     
    >li.clicked{
        border-bottom: 1px solid green;
    }
    >li.clicked a{
        color: green;
    }
    >li a:hover{
        color: green;
    }
    >li:nth-last-child(1):hover{
        border: 1px solid green;
        border-top: none;
        border-bottom: none;
    }  

    .toggled{
        z-index: 10;
        visibility: visible;
        opacity: 1;
    }
    .toggled > div{
        max-height: 540px;
        height: 300px;
        transition: max-height 500ms;
        overflow: auto;
        
    }
    .toggled >div >div{
        margin-bottom: 20px;
    }
    .dcur-toggled{
        z-index: 10;
        visibility: visible;
        opacity: 1;
        
    }
    .dcur-toggled > div{
        padding: 5px 0px 5px 0px;
        box-shadow: 0px 0px 5px 1px rgba(57, 55, 72, 0.22), 0px 0px 5px 1px rgba(57, 55, 72, 0.22) ;
        max-height: 540px;
        transition: max-height 500ms;
        
    }
    .dcur-toggled >div >div{
        margin-bottom: 20px;
    }
    
    
    
    .not-toggled > div{
        max-height: 0;
        visibility: hidden;
        opacity: 0;
    }
    .dcur-not-toggled > div{
        max-height: 0;
        visibility: hidden;
        opacity: 0;
    }
    .cart-icon{
        width: 20px;
        color: #43464E;
    }
    .total-items{
        position: absolute;
        border-radius: 100%;
        background: black;
        color: white;
        width: 15px;
        height: 15px;
        font-size: 0.7rem;
        text-align: center;
        line-height: 15px;
        top: 20px;
        right: 15px;
    }
`

