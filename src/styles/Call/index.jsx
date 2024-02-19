import styled from "styled-components";
import CallBg from '../../assets/call-background.jpg'

export const CallContainer = styled.div`
    width: 100%;
    min-height: 280px;
    background-image: url(${CallBg});
    background-position: 100%;
    background-repeat: no-repeat;
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const CallNumberContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`

export const CallNumber = styled.h1`
    color: white;

    @media (max-width: 330px)
    {
        font-size: 24px;
    }
`

export const CallNumberSpan = styled.span`
    color: #FF0336;
`

