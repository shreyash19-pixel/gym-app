import styled from "styled-components";
import Pricebg from '../../assets/background.jpg'
import BgShape1Img from '../../assets/bg-text.png'
import BgShape2Img from '../../assets/bg-dumbell.png'

export const PriceContainer = styled.div`
    width: 100%;
    padding: 120px 25px;
    display: flex;
    justify-content: center;
    background-image: url(${Pricebg});
    position: relative;

    &::before
    {
        content: url(${BgShape1Img});
        position: absolute;
        top:130px;
        left:0;
        z-index: 0;
    }

    &::after
    {
        content: url(${BgShape2Img});
        position: absolute;
        bottom:0;
        right:0;
        z-index: 0;
    }

    @media (max-width: 500px)
    {
        padding-inline: 20px;
    }
`

export const PriceCardContainer = styled.div`
    display: grid;
    grid-gap: 20px;
    grid-template-columns: 1fr 1fr 1fr;
    place-items: center;
    z-index: 2;

    @media (max-width: 1000px)
    {
        grid-template-columns: 1fr;
    }
`

export const PricingCardWrap = styled.div`
    width: 100%;
    max-width: 380px;
    min-height: 400px;
    display: flex;
    flex-direction: column;
    
`

export const BeginnerWrap = styled.div`
    width: 100%;
    max-width: 250px;
    text-align: center;
    background-color: white;
    padding: 15px;
    bottom: -30px;
    position: absolute;
    color: #3C3C3C;
    font-size: 22px;
    font-weight: 700;
    cursor: pointer;
    margin: 0 41px;
`

export const PricingImg = styled.img`
    width: 100%;
    filter: grayscale(100%);
    transition: all .5s;
    cursor: pointer;

`

export const PricingImgContainer = styled.div`
     position: relative;
     display: flex;
     justify-content: center;
     align-items: center;
    &:hover{
        > ${BeginnerWrap} {
            color: #FF0336;
        }
        > ${PricingImg} {
            filter: grayscale(0);
        }
    }
`


export const PricingInfoWrap = styled.div`
    width: 100%;
    min-height: 500px;
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 35px;
    box-shadow: 0 20px 20px 0 rgba(0,0,0,.1);
   

`



export const PriceWrap = styled.div`
    font-weight: 700;
    font-size: 65px;
    position: relative;
    &::before
    {
        content: "$";
        position: absolute;
        color: grey;
        font-size: 35px;
        left:-30px;
        top:10px;
        font-weight: 400;
    }

    &::after
    {
        content: "p/m";
        position: absolute;
        color: grey;
        font-size: 26px;
        right:-70px;
        bottom:10px;
        font-weight: 400;
    }

    @media (max-width: 400px)
    {
        font-size: 55px;
    }
`

export const PricePerksContainer = styled.div`
     display: flex;
    flex-direction: column;
    text-align: center;
    gap: 25px;
`

export const PricePerksWrap = styled.div`
   color: grey;
   font-weight: 500;
   font-size: 17px;

   @media (max-width: 400px)
    {
        font-size: 15px;
    }
`

export const PriceBtn = styled.a`
    display: flex;
    align-items: center;
    gap: 10px;
    background-color: #FF0336;
    font-weight: 600;
    padding: 15px 20px;
    text-decoration: none;
    color: white;
    position: relative;
    z-index: 2;
    outline: none;

    &::after {
        content: "";
        outline: none;
        height: 47px;
        width: 200px;
        position: absolute;
        left: 14px;
        bottom: 12px;
        border: 1px solid #FF0336;
        z-index: 1;
        transition: left 0.3s ease, bottom 0.3s ease; /* Add transition property */
    }

    &:hover::after {
        left: 0px; /* Adjust the left position on hover */
        bottom: 1px; /* Adjust the bottom position on hover */
    }
`;