import styled from 'styled-components'

export const CSlideStyles = styled.div`
display: flex;
justify-content: space-between;
>img{
    margin-left: 15%;
}
.p-slide{
    display: flex;
    flex-direction: column;
}
.p-slide img{
    width: 80px;
    height: 80px;
    object-fit: contain;
}
.active{
    border: 1px solid black;
}
`

export const PSlideStyles = styled.div`
.swift{
    z-index: 2;
    position: absolute;
    display: flex;
    justify-content: space-between;
    right: 0px;
    top: 50%;
}
.swift div{
    width: 10px;
    height: 100%;
    opacity: 0.5;
}
.swift div:hover{
    cursor: pointer;
}

`