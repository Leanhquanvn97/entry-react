import styled from 'styled-components';

export const ProductStyle = styled.div`
    position: relative;
    z-index: 0;
    .product-card{
        box-sizing: border-box;
        max-width: 386px;
        max-height: 444px;
        padding: 11px 16px 95px 16px;
        margin: 16px;
    }
    .product-card div{
        text-align: left;
    }
    a{
        text-decoration: none;
        color: #1D1F22;
    }
    img{
        height: 356px;
        width: 338px;
        object-fit: cover;
    }
    :hover{
        cursor: pointer;
        box-shadow: 0px 4px 35px rgba(168, 172, 176, 0.19);
    }
    :hover .disabled{
        display: block;
    }
    .disabled{
        z-index: 100;    
        display: none;
        position: absolute;
        width: 52px;
        height: 52px;
        top: 357px;
        right: 60px;
        border: 0px;
        border-radius: 50%;
        background: #5ECE7B;
    }
    
    #out-of-stock{
        opacity: 0.3;
    }
    span{
        text-align: center;
        position: absolute;
        top: 50%;
        left: 130px;
    }
    .cart-icon{
        width: 25px;
        background: #5ECE7B;
        color: white;
        
    }
    
  
}  
`
