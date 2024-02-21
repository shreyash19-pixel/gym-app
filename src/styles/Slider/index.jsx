import styled from "styled-components";


export const SliderContainer = styled.div`
    width: 100%;
    max-width: 400px;
    height: 100vh;
    height: 100dvh;
    background-color: white;
    position: fixed;
    left: 0;
    top: 0;
    animation : left .4s ease-out;
    padding: 40px;
    overflow-y: auto;
    z-index: 80;

    @media (max-width: 450px)
    {
        max-width: 450px;
    }
    @keyframes left {
        from {
            transform: translate(-100%);
        }
        to {
            transform: translate(0);
        }
        }
`

export const SliderWrap = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 65px;
`

export const SliderHeading = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const SliderImg = styled.img`
    width: 100%;
    max-width: 130px;
`

export const CloseSliderWrap = styled.div`
    color: #FF0336;
    font-size: 30px;
    font-weight: 800;
    cursor: pointer;
`

export const AboutDescWrap = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
`

export const AboutTitle = styled.h2`
    font-size: 20px;
`

export const AboutDesc = styled.p`
    color: #353535;
    line-height: 1.5;
    font-weight: 500;
`

export const GalleryWrap = styled.div`
    display: grid;
    grid-template-columns: repeat(3,minmax(0,1fr));
    grid-template-rows: repeat(2,minmax(0,1fr));
    grid-gap:8px;
`
export const GalleryImg = styled.img`
    height: auto;
    max-width: 100%;
    border-radius: 10px;
`

export const ContactWrap = styled.div`
    display: flex;
    flex-direction: column;
    gap: 15px;
`

export const ContactContainer = styled.div`
    display: flex;
    gap: 10px;
`

export const ContactIcon = styled.div`
    color: #FF0336;
    font-size: 20px;
`

export const ContactDesc = styled.p`
    color: #222222;
    cursor: pointer;


    &:hover{
        color: #FF0336;
    }
`

export const SocialIconWrap = styled.div`
    display: flex;
    gap: 15px;
`

export const SocialIcons = styled.div`
    background-color: #FF0336;
    color: white;
    padding: 15px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
    cursor: pointer;
`