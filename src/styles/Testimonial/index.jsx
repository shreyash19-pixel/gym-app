import styled from "styled-components";

export const TestiContainer = styled.div`
    width: 100%;
    padding: 60px 30px;
    display: flex;
    justify-content: center;

    @media (max-width: 540px)
    {
        padding-inline: 15px;
    }
`

export const TestiWrap = styled.div`
    width: 100%;
    max-width: 1200px;
    display: flex;
    flex-direction: column;
    gap: 130px;

    @media (max-width: 1000px)
    {
        gap: 70px;
    }
`
export const TestimonialsContainer = styled.div`
    width: 100%;
    padding: 30px;
    border: 10px solid #EFEFEF;

    @media (max-width: 540px)
    {
        padding-inline: 10px;
    }
`

export const TestimonialsWrap = styled.div`
    width: 100%;
    height: 23rem;
    display: flex;
    justify-content: space-between;
    padding: 15px;
    background-color: black;
`

export const TestimonialImgWrap = styled.div`
    width: 100%;
    position: relative;

    @media (max-width: 1000px)
    {
        display: none;
    }
`

export const TestimonialImg = styled.img`
    position: absolute;
    border-top-right-radius: 50%;
    bottom: -15px;
    left:-15px;
`
export const TestimonialInfoWrap = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 30px;

    @media (max-width: 540px)
    {
        justify-content: space-between;
    }
`
export const PeoplesTestiWrap = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`

export const QuotesWrap = styled.div`
    color: white;
    font-size: 50px;
    display: flex;
    align-items: center;
`
export const Quotes = styled.div`
    color: #cfcfcf;
    line-height: 2;

    @media (max-width: 540px)
    {
        font-size: 13px;
    }

    @media (max-width: 380px)
    {
        font-size: 12px;
    }
`
export const PersonNameWrap = styled.div`
    display: flex;
    justify-content: space-between;


`

export const NavigationContainer = styled.div`
    display: flex;
    align-items: flex-end;
`

export const NavigationWrap = styled.div`
    display: flex;
    gap: 15px;
`

export const Navigation = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 15px;
    font-size: 20px;
    font-weight: 600;
    background-color: white;
    cursor: pointer;
    transition: all .5s;

    &:hover{
        color: white;
        background-color: #FF0336;
    }

    @media (max-width: 380px)
    {
        padding: 10px;
        font-size: 12px;
    }
`

export const PersonName = styled.h2`
    color: white;

    @media (max-width: 540px)
    {
        font-size: 20px;
    }

    @media (max-width: 380px)
    {
        font-size: 16px;
    }
`

export const PersonDesignation = styled.h5`
    color: #dddddd;
    font-weight: 500;
    font-size: 15px;

    @media (max-width: 540px)
    {
        font-size: 13px;
    }

    @media (max-width: 380px)
    {
        font-size: 10px;
    }

`

export const SponsorContainer = styled.div`
    width: 100%;
    max-width: 1240px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 30px;
    row-gap: 30px;
`

export const SponsorWrap = styled.div`

`

export const SponsorLogo = styled.img`
    width: 100%;
    max-width: 180px;
`