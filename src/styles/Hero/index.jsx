import styled from "styled-components";
import HeroImg from '../../assets/hero-img.jpg'

export const HeroContainer = styled.div`
    width: 100%;
    height: 110vh;
    background-image: url(${HeroImg});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    
`
export const HeroInfoContainer = styled.div`
    
    display: flex;
    flex-direction: column;
    gap: 50px;
    position: absolute;
    top: 30%;
    right: 9%;
    padding-inline: 20px;

    @media (max-width: 800px)
    {
        position: unset;
        text-align: center;
        align-items: center;
    }
`

export const HeroInfoWrap = styled.div`
    height: 100%;
    width: 100%;
    max-width: 600px;
    display: flex;
    flex-direction: column;
    gap: 15px;
    display: flex;
    justify-content: center;
`

export const HeroImgWrap = styled.div`
    position: relative;

`
export const HeroImgTextWrap = styled.div`
    position: absolute;
    top: 8px;
    left: 35px;
    color : white;
    font-weight: 500;
    font-size: 14px;

    @media (max-width: 800px)
    {
        left: 38%;
    }

    @media (max-width: 450px)
    {
        left: 30%;
    }
`

export const HeroDesignImg = styled.img`
  
`


export const HeroHeadingWrap = styled.div`
    width: 100%;
    max-width: 590px;
`

export const HeroHeading = styled.h1`
    color: white;
    font-size: 55px;

    @media (max-width: 500px)
    {
        font-size: 43px;
    }
`

export const HeroHeadingSpan = styled.span`
    color: white;
    font-weight: 400;
`

export const ClassesBtnWrap = styled.div`
    width: 100%;    
    display: flex;
    justify-content: flex-start;

    @media (max-width: 800px)
    {
        justify-content: center;
    }
`

export const ClassesBtn = styled.a`
    display: flex;
    align-items: center;
    gap: 5px;
    background-color: white;
    font-weight: 600;
    padding: 15px 20px;
    text-decoration: none;
    color: black;
    position: relative;
    z-index: 2;
    outline: none;

    &::after {
        content: "";
        outline: none;
        height: 47px;
        width: 176px;
        position: absolute;
        left: 12px;
        bottom: 15px;
        border: 1px solid #fefefe;
        z-index: 1;
        transition: left 0.3s ease, bottom 0.3s ease; /* Add transition property */
    }

    &:hover::after {
        left: 0px; /* Adjust the left position on hover */
        bottom: 1px; /* Adjust the bottom position on hover */
    }
`;



export const ClassBtnArrowWrap = styled.div`
    color: #FF0336;
    font-size: 17px;
`

export const SocialLinksWrap = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 50px;
    position: absolute;
    right: 30px;

    @media (max-width: 800px)
    {
        display: none;
    }
`

export const ShareWrap = styled.div`
    color: white;
    font-weight: 600;
    font-size: 22px;
    transform: rotate(270deg);
`

export const LineWrap = styled.div`
    width: 35px;
    background-color: #FF0336;
    height:5px;
`

export const SocialLinksIconWrap = styled.div`
 display: flex;
    flex-direction: column;
    gap: 20px;
`

export const SocialLinksIcon = styled.div`
   cursor: pointer;
    color: white;
    font-size: 24px;

    &:hover{
        color: #FF0336;
        transition: all .4s ease-in-out;
    }
`