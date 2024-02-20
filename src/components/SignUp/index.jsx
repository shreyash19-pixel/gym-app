import React, { useState } from 'react'
import { EmailInput, EmailLabel, FormContainer,  FormWrap,  InputContainer,  InputWrap,  SignUpButton,  SignUpDesc,  SignupContainer, SignupHeader, SignupSpan } from '../../styles/SignUp'
import Nav from '../Nav'
import Footer from '../Footer'
import { useNavigate } from 'react-router-dom'

const SignUp = () => {

    const navigate = useNavigate()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleForm = () => {

        if(email !== ""  && password !== "")
        {
            alert("Login Successfull")
            navigate("/")
        }
        else
        {
            alert("All Fields are Required!!!!")
        }
    }

  return (
    <SignupContainer>
        <Nav />
        <SignupHeader>
            Sign Up
        </SignupHeader>
        <FormContainer>
           <FormWrap>
                <InputContainer>
                    <InputWrap>
                        <EmailLabel>
                            Email
                        </EmailLabel>
                        <EmailInput type='email' placeholder='gymate@gmail.com' id = "email" value = {email} onChange={(e) => setEmail(e.target.value)} />
                    </InputWrap>
                    <InputWrap>
                        <EmailLabel>
                            Password
                        </EmailLabel>
                        <EmailInput type = "password" placeholder='password' id = "email" value = {password} onChange={(e) => setPassword(e.target.value)} />
                    </InputWrap>
                </InputContainer>
                <SignUpButton onClick = {handleForm} >Sign Up</SignUpButton>
                <SignUpDesc>Already have account? <SignupSpan onClick={() => (navigate("/SignIn"))} >Sign In</SignupSpan> </SignUpDesc>
           </FormWrap>
        </FormContainer>
        <Footer/>
    </SignupContainer>
  )
}

export default SignUp