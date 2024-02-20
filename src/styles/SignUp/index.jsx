import styled from "styled-components";
import SignupBg from '../../assets/signup-login.jpg'
import FormBg from '../../assets/background.jpg'

export const SignupContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
`

export const SignupHeader = styled.div`
    width: 100%;
    height: 45vh;
    background-image: url(${SignupBg});
    background-position: 50%;
    background-repeat: no-repeat;
    background-size: cover;
    object-fit: cover;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    color: white;
    padding-bottom: 20px;
    font-size: 30px;
    font-weight: 600;
`

export const FormContainer = styled.div`
    width: 100%;
    padding: 100px 20px;
    background-image: url(${FormBg});
    background-position: 50%;
    background-size: cover;
    background-repeat: no-repeat;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const FormWrap = styled.div`
    width: 100%;
    max-width: 510px;
    min-height: 580px;
    background-color: black;
    padding: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 60px;

    @media (max-width: 425px)
    {
        padding-inline: 20px;
    }
`

export const InputContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 30px;
`

export const InputWrap = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 10px;
`

export const EmailLabel = styled.label`
    color: white;
    font-size: 20px;
    font-weight: 500;
`

export const EmailInput = styled.input`
    width: 100%;
    padding: 15px;
    border: none;
    outline: none;
    
    &::placeholder{
        font-weight: 500;
        font-size: 16px;
    }
`

export const SignUpButton = styled.div`
    background-color: #FF0336;
    padding: 20px;
    text-align: center;
    width: 100%;
    color: white;
    font-size: 18px;
    font-weight: 600;
    cursor: pointer;
`

export const SignUpDesc = styled.p`
    color: white;

    @media (max-width: 425px)
    {
        font-size: 13px;
    }
`
export const SignupSpan = styled.span`
    color: #FF0336;
    font-weight: 600;
    cursor: pointer;
`