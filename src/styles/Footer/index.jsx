import styled from "styled-components";


export const FooterContainer = styled.div`
    width: 100%;
    padding: 70px 30px;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const FooterWrap = styled.div`
    width: 100%;
    max-width: 1240px;
    display: flex;
    justify-content: space-between;


    @media (max-width: 900px)
    {
        flex-direction: column;
        align-items: center;
        text-align: center;
        gap: 60px;
    }
`

export const Footer1Wrap = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 380px;
    gap: 20px;
`

export const Footer1DescWrap = styled.div`
    width: 100%;
`

export const FooterIconWrap = styled.div`
    display: flex;
    gap: 15px;

    @media (max-width: 900px)
    {
        justify-content: center;
    }
`

export const FooterIcon = styled.div`
    color: grey;
    background-color: #EFEFEF;
    padding: 10px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    font-size: 18px;

    &:hover{
        background-color: #FF0336;
        color: white;
    }
`

export const FooterCopyrightWrap = styled.div`
    width: 100%;
    max-width: 300px;

    @media (max-width: 900px)
    {
        max-width: 1000px;
    }
`

export const Footer2Wrap = styled.div`
    display: flex;
    flex-direction: column;
    gap: 24px;
`

export const Footer2Title = styled.div`
    color: black;
    font-weight: 700;
    font-size: 24px;
    position: relative;

    &::after{
        content: "";
        width: 77px;
        height: 4px;
        background-color: #FF0336;
        position: absolute;
        bottom: -5px;
        left:0;
    }

   
`

export const Footer2Perk = styled.div`
    color: grey;
    font-size: 17px;
    font-weight: 500;
    cursor: pointer;

    &:hover{
        color: #FF0336;
        font-weight: 600;
    }
`

export const DaysWrap = styled.div`
    color: grey;
    font-weight: 700;
    font-size: 17px;
`

export const TimeWrap = styled.div`
    color: grey;
    font-weight: 500;
`