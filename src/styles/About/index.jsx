import styled from "styled-components";
import InfoCardImg from '../../assets/info-card-bg.jpg'
import AboutUsImage from '../../assets/choose-us-img.png'
import AboutUsRedImg from '../../assets/girl-redbg.svg'
import AboutUsText from '../../assets/girl-side-text.png'
import AboutbgImg from '../../assets/background.jpg'

export const AboutContainer = styled.div`
    width: 100%;

    padding: 80px 50px;
    background-image: url(${AboutbgImg});
    display: flex;
    justify-content: center;

    @media (max-width: 768px)
    {
        padding-inline: 25px;
    }
`

export const AboutWrap = styled.div`
    width: 100%;
    max-width: 1200px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const AboutCardsContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    gap: 30px;
    position: relative;
    top: -140px;

    @media (max-width: 1000px)
    {
        flex-direction: column;
    }
`

export const AboutCardsWrap = styled.div`
    width: 100%;
    max-width: 380px;
    min-height: 340px;
    background-color: white;
    padding: 15px;
    display: flex;
    flex-direction: column;
    gap: 20px;
    align-items: center;
    justify-content: center;
    box-shadow: 0 20px 20px 0 rgba(0,0,0,.1);
    border-top-left-radius: 40px;
    border-bottom-right-radius: 40px;
    cursor: pointer;
    transition: all .3s ease-in-out;

    &:hover{
        background-image: url(${InfoCardImg});
        color: white;
    }

    @media (max-width: 1000px)
    {
        max-width: 1000px;
        min-height: 260px;
    }
`

export const CardsIconWrap = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: center;
`

export const CardsIcon = styled.div`
    font-size: 60px;
    color : #FF0336;
`

export const CardsIconTitle = styled.h2`
    font-size: 28px;
    
`

export const CardsDesc = styled.p`
    text-align: center;
`

export const AboutInfoContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    gap: 80px;
   
`

export const AboutInfo = styled.div`
    display: flex;
    flex-direction: column;
    gap: 60px;

    @media (max-width: 1000px)
    {
        align-items: center;
        gap: 70px;
    }
`

export const AboutInfoWrap = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 25px;

    @media (max-width: 1000px)
    {
        text-align: center;
        align-items: center;
        gap: 30px;
    }
`



export const AboutInfoTitle = styled.div`
    position: absolute;
    left: 50px;
    top:8px;
    color: white;
    font-weight: 600;
`

export const AboutHeadingWrap = styled.div`
    width: 100%;

`

export const AboutHeading = styled.h1`
    font-weight: 800;
    font-size: 35px;
`

export const AboutDescWrap = styled.div`
    
`

export const ABoutDesc = styled.p`
    color: grey;
    font-weight: 500;
`

export const PerksContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    @media (max-width: 620px)
    {
        grid-template-columns: 1fr;
        row-gap: 30px;
    }

`

export const PerksWrap = styled.div`
    width: 100%;
    max-width: 300px;
    display: flex;
    align-items: center;
    padding: 15px 20px;
    justify-content: center;
    flex-direction: column;
    font-size: 20px;
    font-weight: 700;
    text-align: center;
    border-left : ${(props) => (props.border ? "1px solid grey" : "none")};
    border-right : ${(props) => (props.border ? "1px solid grey" : "none")};

    @media (max-width: 620px)
    {
        border: none;
    }
`

export const AboutUsImgContainer = styled.div`
    position: relative;
    width: 100%;
    height: 100%;

    @media (max-width: 1000px)
    {
        display: none;
    }
`

export const AboutBtnWrap = styled.div`
    display: flex;
    justify-content: flex-start;
`

export const AboutBtn = styled.a`
    display: flex;
    align-items: center;
    gap: 10px;
    background-color: #3F3F3F;
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
        width: 176px;
        position: absolute;
        left: 12px;
        bottom: 15px;
        border: 1px solid #3F3F3F;
        z-index: 1;
        transition: left 0.3s ease, bottom 0.3s ease; /* Add transition property */
    }

    &:hover::after {
        left: 0px; /* Adjust the left position on hover */
        bottom: 1px; /* Adjust the bottom position on hover */
        border : 1px solid #FF0336;
    }

    &:hover{
        transition: all .4s ease-in-out;
        background-color: #FF0336;
        
    }
`;

export const AboutBtnIcon = styled.div`
    color: white;
`

export const AboutUsImgWrap = styled.div`
    position: absolute;
    width: 100%;
    min-height: 480px;
    background-image: url(${AboutUsImage});
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
    z-index: 2;
    
`;

export const ABoutUsImgText = styled.div`
     position: absolute;
     width: 100%;
    min-height: 480px;
    background-image: url(${AboutUsText});
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
    z-index: 2;
`

export const ABoutUsRedBg = styled.div`
     position: absolute;
     right: -10px;
     width: 100%;
    min-height: 480px;
    background-image: url(${AboutUsRedImg});
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
    z-index: 1;
`


