import styled from 'styled-components'
import BgDotImg from '../../assets/dot-bg.png'
import BgShapeImg from '../../assets/bg-attachment.png'

export const CoachesContainer = styled.div`
    width: 100%;
    padding: 120px 25px;
    display: flex;
    justify-content: center;
    background-image: url(${BgDotImg});
    position: relative;

    &::after
    {
        content: url(${BgShapeImg});
        position: absolute;
        top:0;
        right:0;
    }

    @media (max-width: 500px)
    {
        padding: 50px 15px;
    }
`

export const CoachesHeadingText = styled.div`
    position: absolute;
    top: 7px;
    left: 45px;
    color: white;
    font-weight: 700;
`

export const CoachesDescWrap = styled.div`
    width: 100%;
    max-width: 500px;
`

export const TrainersCardContainer = styled.div`
    width: 100%;
    max-width: 1240px;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    row-gap: 30px;
    gap: ${(props) => (props.price ? "20px" : "0")};
`

export const TrainersCardWrap = styled.div`
    width: 100%;
    max-width: 400px;
    min-height: 350px;
    padding-inline: 25px;

    @media (max-width: 500px)
    {
        padding-inline: 5px;
    }
`

export const TrainerImgContainer = styled.div`
    width: 100%;
    height: 270px;
    display: flex;
    justify-content: center;
    overflow: hidden;
    position: relative;
`

export const TrainerImgWrap = styled.div`
   z-index: 3;
`

export const TrainerImg = styled.img`
      width: 14rem;
    filter: grayscale(100%);
    cursor: pointer;
    transition: all .5s;

    &:hover{
        filter: grayscale(0);
    }
`

export const TrainerBgImgWrap = styled.div`
     position: absolute;
     z-index: -1;
   
`


export const TrainerBgImg = styled.img`
  
`



export const TrainerInfoWrap = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: white;
    padding: 15px;
    border-radius: 5px;
    width: 100%;
    min-height: 150px;
    z-index: 10;
    box-shadow: 0 20px 20px 0 rgba(0,0,0,.1);
    position: relative;
    cursor: pointer;
   

    &::after{
        position: absolute;
        content: "";
        width: 13%;
        height: 4px;
        background-color: #FF0336;
        bottom:0px;
        transition: all .4s;
    }

    &:hover::after{
        width: 100%;
    }
`

export const ShapeImgWrap = styled.div`
    position: absolute;
    top:-26px;
    left: 120px;
`

export const ShapeImg = styled.img`
    
`

export const ShapeIconWrap = styled.div`
    font-size: 36px;
    position: absolute;
    top: 0px;
    left: 35px;
`

export const TrainerInfo = styled.div`
    display: flex;
    flex-direction: column;
    gap: 17px;
    text-align: center;
`
export const TrainerNameDescWrap = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
`

export const TrainerName = styled.h2`
    font-size: 27px;
`

export const TrainerDesc = styled.h4`
    color: grey;
    font-weight: 500;
`

export const SocialLinksWrap = styled.div`
    display: flex;
    gap: 15px;
    justify-content: center;
`

export const SocialIcons = styled.div`
    font-size: 18px;
    color: grey;
`
