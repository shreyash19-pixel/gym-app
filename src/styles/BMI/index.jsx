import styled from "styled-components";
import BMIImage from '../../assets/bmi-background.jpg'

export const BMIContainer = styled.div`
    width: 100%;
    min-height:400px; 
    background-image: url(${BMIImage});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

   

`

export const BMIWrap = styled.div`
    width: 100%;
    max-width: 1240px;
    padding: 50px 30px;
    display: flex;
    justify-content: flex-start;

    @media (max-width: 600px)
    {
       padding-inline: 20px;
       background-color: rgba(0, 0, 0, 0.5);
       padding-block: 60px;
    }
`

export const BMICalWrap = styled.div`
    width: 100%;
    max-width: 530px;
    display: flex;
    flex-direction: column;
    gap:30px;

    @media (max-width: 450px) {
        gap: 20px;
    }
`

export const BMIHeadingSpan = styled.span`
    color: #FF0336;
`

export const BMIDesc = styled.p`
    color: #989898;

    @media (max-width: 600px)
    {
        color: white;
    }

    @media (max-width: 450px) {
        font-size: 13px;
    }
`

export const BMIInputContainer = styled.div`
    display: flex;
    gap: 15px;
`

export const BMIInputWrap = styled.div`
    width: 100%;
`

export const BMIInput = styled.input`
    width: 100%;
    padding: 15px;
    color: #939EAA;
    border: 2px solid #989898;
    background-color: transparent;
    font-size: 15px;
    font-weight: 500;
    outline: none;

    @media (max-width: 450px)
    {
        background-color: white;
    }

    @media (max-width: 450px) {
        padding: 10px;
    }
`

export const BMILabelContainer = styled.div`
    display: flex;
`

export const BMILabelWrap = styled.div`
    width: 100%;
    display: flex;
    gap: 10px;
`

export const BMILabel = styled.label`
    color: white;
    font-size: 15px;
    font-weight: 500;
    @media (max-width: 450px) {
        font-size: 12px;
    }
`

export const CalculatedBMI = styled.div`
    color: #FF0336;
    font-weight: 500;

    @media (max-width: 450px) {
        font-size: 12px;
    }
`

export const CalculateBtnWrap = styled.div`
    display: flex;
    justify-content: flex-start;
`

export const CalculateBtn = styled.div`
    background-color: #323232;
    color: white;
    font-weight: 600;
    padding: 15px 25px;
    cursor: pointer;
    transition: all .4s;

    @media (max-width: 450px) {
        padding: 13px 20px;
        font-size: 14px;
    }

    &:hover{
        background-color: #FF0336;
    }
`