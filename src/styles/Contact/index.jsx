import styled from "styled-components";

export const ContactContainer = styled.div`
    width: 100%;
    padding: 100px 50px;
    display: flex;
    justify-content: center;

    @media (max-width: 425px)
    {
        padding-inline: 20px;
    }
`

export const ContactWrap = styled.div`
    width: 100%;
    max-width: 1240px;
    display: flex;
    justify-content: center;
    gap: 30px;

    @media (max-width: 1000px)
    {
        flex-direction: column;
    }
`

export const ContactIconWrap = styled.div`
    display: flex;
    gap: 15px;
    justify-content: flex-start;

    @media (max-width: 620px)
    {
        justify-content: center;
    }
`


export const ContactInfoWrap = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 30px;

    @media (max-width: 620px)
    {
        text-align: center;
        align-items: center;
    }
`

export const ContactInfoTitle = styled.h1`

`


export const ContactFormWrap = styled.div`
    width: 100%;
`

export const LocationContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(2,minmax(0,1fr));
    grid-template-rows: repeat(2, minmax(0,1fr));
    row-gap: 30px;
    grid-gap: 30px;

    @media (max-width: 620px)
    {
        grid-template-columns: 1fr;
    }
`

export const ContactTitle = styled.div`
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

        @media (max-width: 620px)
        {
            display: none;
        }
    }

   
`

export const ContactForm = styled.div`
    width: 100%;
    height: 100%;
    background-color: #F8F8F8;
    display: flex;
    flex-direction: column;
    gap: 30px;
    padding: 45px;

    @media (max-width: 450px)
    {
        padding-inline: 20px;
    }
`

export const ContactInputWrap = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 15px;
`

export const NameInput = styled.input`
    width: 100%;
    padding: 15px;
    border: 1px solid #E4E4E4;
    background-color: white;

    &::placeholder{
        color: grey;
    }
`

export const GymFeaturesSelect = styled.select`
    padding: 15px;
    outline: none;
    border: 1px solid #E4E4E4;
    background-color: white;
    font-size: 15px;
` 

export const GymFeaturesOption = styled.option`

`

export const GymComment = styled.textarea`
    padding: 20px;
    outline: none;
    border: 1px solid #E4E4E4;
    background-color: white;
    min-height: 150px;
`

export const SubmitBtnWrap = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

export const SubmitBtn = styled.div`
    padding: 20px;
    text-align: center;
    color: white;
    font-weight: 600;
    background-color: #FF0336;
`

export const MapContainer = styled.div`
    width: 100%;
`

export const MapIFrame = styled.iframe`
    width: 100%; 
    min-height : 450px;
    border: none;
`