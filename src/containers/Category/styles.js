import styled from 'styled-components';

export const CategoryStyle = styled.div.attrs(props => {
    return {
    className: props.clasName,
}})`
    display: flex;
    flex-direction: column;
    text-align: center;
    padding: 0 87px 0 87px;

    h1{
        text-align: left;
    }
    &.toggled{
        opacity: 0.5;
        background: rgba(57, 55, 72, 0.22);
        transition: background 500ms;
    }
    
    #filter-name{
        height: 30px;
        width: 70px;
        border: 1px solid grey;
        position: relative;
        line-height: 30px;
    }
    #filter-name:hover{
        cursor: pointer;
    }
    li:hover{
        border-bottom: 1px solid green;
        border-top: 1px solid green;
        background: grey;
    }
    li{
        background: white;
        padding: 0px;
    }
    .f-toggled{
        visibility: visible;
        opacity: 1;
    }
    .f-toggled ul{
        width: 70px;
        display: flex;
        flex-direction: column;
        box-shadow: 0px 0px 5px 1px rgba(57, 55, 72, 0.22), 0px 0px 5px 1px rgba(57, 55, 72, 0.22);
        max-height: 200px;
        transition: max-height 500ms;
        padding: 0;
        position: absolute;
        top: 10px;
    }
    .f-not-toggled ul{
        max-height: 0;
        visibility: hidden;
        opacity: 0;
    }
    
}
`

