import styled from "styled-components";
import ChooseUsHeadingBg from '../../assets/choose-us-heading.png'
import ChooseUsBg from '../../assets/choose-bg.jpg'


export const ChooseUsContainer = styled.div`
    width: 100%;
    height: 100%;
    background-image: url(${ChooseUsBg});
    background-position: center;
    background-size: cover;
    display: flex;
    flex-direction: column;
    gap: 60px;
`

export const ChooseUsWrap = styled.div`
    width: 100%;
    padding-block: 60px;
    display: flex;
    justify-content: center;
    gap: 30px;

    @media (max-width: 500px)
    {
        padding-top: 20px;
    }
   
`
export const ChooseInfoContainer = styled.div`
    width: 100%;
    max-width: 1240px;
    padding-inline: 30px;
    display: flex;
    gap: 70px;

    @media (max-width: 1000px)
    {
        flex-direction: column;
        gap: 50px;
        text-align: center;
      
    }
`

export const ChooseUsHeadingImgWrap = styled.div`
    width: 100%;
    height: 200px;
    background-image: url(${ChooseUsHeadingBg});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    display: flex;
    justify-content: center;
    align-items: center;

    @media (max-width: 1000px)
    {
        background-image: none;
        background-color: #FF0336;
    }
    
`

export const ChooseHeadingContainer = styled.div`
    width: 100%;
    max-width: 1240px;
    display: flex;
    padding-inline: 45px;

    @media (max-width: 1000px)
    {
        flex-direction: column;
        text-align: center;
        padding-inline: 20px;
        align-items: center;
        gap: 30px;
    }
`

export const ChooseHeadingWrap = styled.div`
    width: 100%;
    max-width: 580px;

    @media (max-width: 1000px)
    {
        max-width: 700px;
    }
`
export const ChooseHeading = styled.h1`
    color: white;
    font-size: 35px;

    @media (max-width: 1000px)
    {
        font-size: 30px;
    }

    @media (max-width: 500px)
    {
        font-size: 25px;
    }
`

export const JoinUsBtnWrap = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`


export const ChooseUsImgContainer = styled.div`
    width: 100%;
    position: relative;
    display: flex;
    justify-content: center;

    &::before{
        content: "";
        width: 10px;
        height: 300px;
        background-color: #FF0336;
        position: absolute;
        bottom: 5px;
        left: -3%;
    }

    
    &::after{
        content: "";
        width: 10px;
        height:500px;
        background-color: #FF0336;
        position: absolute;
        top: 85px;
        right: -1%;
        transform: rotate(-6deg);
    }
  

    @media (max-width: 1000px)
    {
        display: flex;
        justify-content: center;

        &::before,
        &::after{
            display: none;
        }

        
    }
`

export const ChooseUsImgWrap = styled.div`

`
export const ChooseUsImg = styled.img`

    width: 100%;
`

export const ChooseInfo = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 60px;
`

export const ChooseInfoWrap = styled.div`
    width:100%;
    display: flex;
    flex-direction: column;
    gap: 30px;

    @media (max-width: 1000px)
    {
        align-items: center;
    }
`
export const ChooseInfoHeadingWrap = styled.div`
    position: absolute;
    color: white;
    font-weight: 700;
    top: 8px;
    left: 35px;
`

export const ChooseInfoTitleWrap = styled.div`
    color: white;
    font-size: 40px;
    font-weight: 700;

    @media (max-width: 1000px)
    {
        width: 100%;
        max-width: 600px;
    }

    @media (max-width: 480px)
    {
        font-size: 30px;
    }
`
export const ChooseInfoDesc = styled.div`
      width: 100%;
      max-width: 500px;
      color: #b8b8b8;
      line-height: 1.5;

      @media (max-width: 480px)
    {
        font-size: 14px;
    }
`

export const ChooseInfoPerksContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 15px;
    row-gap: 40px;

    @media (max-width: 500px)
    {
        grid-template-columns: 1fr;
    }
`

export const ChooseInfoPerksWrap = styled.div`
    display: flex;
    gap: 10px;
    align-items: center;

    @media (max-width: 500px)
    {
        flex-direction: column;
    }
`

export const ChooseInfoIconWrap = styled.div`
    font-size: 40px;
    color: white;
    display: flex;
    align-items: center;
    background-color: #2B2B2B;
    border-radius: 50%;
    padding: 10px;
    transition: all .6s;
    cursor: pointer;

    &:hover{
        background-color: #FF0336;
    }

    @media (max-width: 500px)
    {
        font-size: 50px;
    }
`

export const ChooseInfoPerks = styled.div`
    width: 100%;
    max-width: 160px;
    font-size: 20px;
    color: white;
    font-weight: 600;
    @media (max-width: 500px)
    {
        font-size: 22px;
    }
    
`

export const ChooseInfoBtnWrap = styled.div`
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    @media (max-width: 1000px)
    {
        justify-content: center;
    }
`