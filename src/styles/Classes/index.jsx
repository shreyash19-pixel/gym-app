import styled from "styled-components";
import CyclingImg from '../../assets/cycling.jpg'
import KarateImg from '../../assets/karate.jpg'
import PowerImg from '../../assets/powerlifting.jpg'
import Meditation from '../../assets/meditation.jpg'
import MMA from '../../assets/mma.jpg'
import Workout from '../../assets/workout.jpg'

export const ClassesContainer = styled.div`
    width: 100%;
    padding: 120px 25px;
    display: flex;
    justify-content: center;

    @media (max-width: 500px)
    {
        padding-block: 50px;
    }
`

export const ClassesWrap = styled.div`
    width: 100%;
    max-width: 1240px;
    display: flex;
    flex-direction: column;
    gap: ${(props) => (props.coach ? "80px" : "40px")};
`

export const HeadingWrap = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    gap: 15px;
`

export const ClassesHeadingText = styled.div`
    position: absolute;
    color: white;
    font-weight: 600;
    top:10px;
    left: 20px;
    font-size: 14px;
`

export const ClassesImageContainer = styled.div`
    width: 100%;
    height: 100%;
    display: grid;
    grid-gap: 20px;
    grid-template-columns: repeat(4,minmax(0,1fr));
    grid-template-rows: repeat(2,minmax(0,1fr));

    @media (max-width: 1000px)
    {
        display: flex;
        flex-direction: column;
        gap: 20px;
    }
`;

export const ClassesIconWrap = styled.div`
    width: 120px;
    height: 75px;
    background-color: white;
    opacity: 0.3;
    position: absolute;
    left: -40px;
    top:100px;
    transform: rotate(34deg);
    border-bottom-right-radius: 40px;
    border-top-right-radius: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const ClassesIcon = styled.div`
    color: white;
    z-index: 5;
    position: absolute;
    left: 20px;
    top:120px;
    font-size: 50px;
`

export const ClassesImgWrap1 = styled.div`
    width: 100%;
    height: 19rem;
    cursor: pointer;
    grid-row-end: 2;
    grid-row-start: 1;
    grid-column-end: 3;
    grid-column-start: 1;
    overflow: hidden;
    position: relative;

    &:hover {
        > ${ClassesIconWrap} {
            opacity: 1;
            transition: all .4s;
            
        }

        > ${ClassesIcon}{
            color: #FF0336;
        }
    }

`;


export const ClassesImgContainer1 = styled.div`
    background-image: url(${CyclingImg});
    filter: grayscale(100%);
    background-position: 50%;
    background-size: 610px 405px;
    width: 100%;
    height: 100%;
    transition: transform .5s ease-in-out;
    
    &:hover{
        transform: scale(1.3);
        filter: grayscale(0);
    
    @media (max-width: 550px)
    {
        background-size: contain;
        background-repeat: no-repeat;
    }
}
`

export const ProgramsWrap = styled.div`
    position: absolute;
    left: 25px;
    bottom: 20px;
    display: flex;
    flex-direction: column;
    gap: 10px;
`
export const TimingsWrap = styled.div`
    padding: 5px 10px;
    background-color: #FF0336;
    color: white;
    font-weight: 400;

    @media (max-width: 340px)
    {
        font-size: 14px;
    }
`

export const ProgramHeading = styled.h1`
    color: white;
`

export const ClassesImgWrap2 = styled(ClassesImgWrap1)`
    grid-column-end: 4;
    grid-column-start: 3;
    grid-row-end: 2;
    grid-row-start: 1;
   
`;

export const ClassesImgContainer2 = styled(ClassesImgContainer1)`
    background-image: url(${KarateImg});
    background-size: cover;
`

export const ClassesImgWrap3 = styled(ClassesImgWrap1)`
    grid-column-end: 5;
    grid-column-start: 4;
    grid-row-end: 2;
    grid-row-start: 1;
 
`;

export const ClassesImgContainer3 = styled(ClassesImgContainer1)`
    background-image: url(${PowerImg});
    background-size: cover;
    
`

export const ClassesImgWrap4 = styled(ClassesImgWrap1)`
    grid-row-end: 3;
    grid-row-start: 2;
    grid-column-end: 2;
    grid-column-start: 1;
 
`;

export const ClassesImgContainer4 = styled(ClassesImgContainer1)`
   background-image: url(${Meditation});
   background-size: cover;
`

export const ClassesImgWrap5 = styled(ClassesImgWrap1)`
    grid-row-end: 3;
    grid-row-start: 2;
    grid-column-end: 3;
    grid-column-start: 2;

`;

export const ClassesImgContainer5 = styled(ClassesImgContainer1)`
    background-image: url(${MMA});
    background-size: cover;
`

export const ClassesImgWrap6 = styled(ClassesImgWrap1)`
    grid-column-end: 5;
    grid-column-start: 3;
    grid-row-end: 3;
    grid-row-start: 2;

`;

export const ClassesImgContainer6 = styled(ClassesImgContainer1)`
    background-image: url(${Workout});
    background-size: 610px 430px;

    @media (max-width: 1000px)
    {
        background-size: 1000px 400px;
    }

    @media (max-width: 450px)
    {
        background-size: 400px 400px;
    }
    
`



