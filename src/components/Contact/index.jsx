import React from 'react'
import { SignupContainer, SignupHeader } from '../../styles/SignUp'
import Nav from '../Nav'
import { ContactContainer, ContactForm, ContactFormWrap, ContactIconWrap, ContactInfoTitle, ContactInfoWrap, ContactInputWrap, ContactTitle, ContactWrap, GymComment, GymFeaturesOption, GymFeaturesSelect, LocationContainer, MapContainer, MapIFrame, NameInput, SubmitBtn, SubmitBtnWrap } from '../../styles/Contact'
import { AboutDesc } from '../../styles/Slider'
import { Footer2Perk,  Footer2Wrap, FooterIcon,TimeWrap } from '../../styles/Footer'
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import Footer from '../Footer'

const Contact = () => {

    const icons = [
        {icon: <FaFacebookF />},
        {icon: <FaTwitter />},
        {icon: <FaPinterestP />},
        {icon: <FaYoutube />}  
    ]

    const gymFeatures = [
        {feature : "Body Building"},
        {feature : "Boxing"},
        {feature : "Running"},
        {feature : "Fitness"},
        {feature : "Yoga"},
        {feature : "Workout"},
        {feature : "Karate"},
        {feature : "Meditation"},
        {feature : "Cycling"},
    ]
  return (
    <SignupContainer>
        <Nav/>
        <SignupHeader>
            Contact Us
        </SignupHeader>
        <ContactContainer>
            <ContactWrap>
                <ContactInfoWrap>
                    <ContactInfoTitle>
                    We are here for help you! To Shape Your Body.
                    </ContactInfoTitle>
                    <AboutDesc>
                            At Gymate, we are dedicated to helping you achieve the body of your dreams. Our expert trainers and nutritionists will work with you to create a personalized fitness and nutrition plan that helps you reach your specific goals.
                    </AboutDesc>
                    <LocationContainer>
                        <Footer2Wrap>
                            <ContactTitle >New York City, USA</ContactTitle>
                            <Footer2Perk>85 Briston Mint Street, London, E1 8LG, USA</Footer2Perk>
                        </Footer2Wrap>
                        <Footer2Wrap>
                            <ContactTitle >Opening Hours</ContactTitle>
                            <div style={{display: "flex", flexDirection: "column", gap: "10px"}}>
                                <TimeWrap>
                                    Mon to Fri: 7:30 am — 1:00 am
                                </TimeWrap>
                                <TimeWrap>
                                    Mon to Fri: 7:30 am — 1:00 am
                                </TimeWrap>
                            </div>
                        </Footer2Wrap>
                        <Footer2Wrap>
                            <ContactTitle >Information</ContactTitle>
                            <div style={{display: "flex", flexDirection: "column", gap: "10px"}}>
                                <TimeWrap>
                                    +800-123-4567
                                </TimeWrap>
                                <TimeWrap>
                                    gymat@gymail.com
                                </TimeWrap>
                            </div>
                        </Footer2Wrap>
                        <Footer2Wrap>
                            <ContactTitle contact = "true">Follow Us On</ContactTitle>
                            <ContactIconWrap>
                                {icons.map((i) => (
                                <FooterIcon >
                                    {i.icon}
                                </FooterIcon>
                                ))}
                            </ContactIconWrap>
                        </Footer2Wrap>
                    </LocationContainer>
                </ContactInfoWrap>
                <ContactFormWrap>
                    <ContactForm>
                        <ContactTitle style={{fontSize: "30px"}}>Leave Us Your Info</ContactTitle>
                        <ContactInputWrap>
                            <NameInput type = "text" placeholder='Full Name'/>
                            <NameInput type = "email" placeholder='Email Address'/>
                            <GymFeaturesSelect>
                                <GymFeaturesOption disabled value="" selected>Select</GymFeaturesOption>
                                {gymFeatures.map((features) => (
                                <GymFeaturesOption >{features.feature}</GymFeaturesOption>
                                ))}
                            </GymFeaturesSelect>
                            <GymComment placeholder='Comment'>

                            </GymComment>
                        </ContactInputWrap>
                        <SubmitBtnWrap>
                            <SubmitBtn>SUBMIT NOW</SubmitBtn>
                        </SubmitBtnWrap>
                    </ContactForm>         
                </ContactFormWrap>
            </ContactWrap>
        </ContactContainer>
        <MapContainer>
            <MapIFrame src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3762.2496846846575!2d72.80684677396157!3d19.444798840293668!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7a97f40f0d919%3A0xebeec7d2f5d5098!2sYashwant%20Nagar%20Rd%2C%20Virar%20East%2C%20Virar%2C%20Maharashtra%20401303!5e0!3m2!1sen!2sin!4v1708424699801!5m2!1sen!2sin" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></MapIFrame>
        </MapContainer>
        <Footer/>
    </SignupContainer>
  )
}

export default Contact