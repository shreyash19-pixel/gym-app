import React from 'react'
import GymLogo from '../../assets/footer-logo.svg'
import { DaysWrap, Footer1DescWrap, Footer1Wrap, Footer2Perk, Footer2Title, Footer2Wrap, FooterContainer, FooterCopyrightWrap, FooterIcon, FooterIconWrap, FooterWrap, TimeWrap } from '../../styles/Footer'
import { LogoImg, LogoWrap } from '../../styles/Nav'
import { BlogDesc } from '../../styles/Blog'
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaPinterestP } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

const Footer = () => {

    const currentYear = new Date().getFullYear()

    const icons = [
        {icon: <FaFacebookF />},
        {icon: <FaTwitter />},
        {icon: <FaPinterestP />},
        {icon: <FaYoutube />}  
    ]

    const perks = [
        {perk : "Fitness Classes"},
        {perk : "Aerobics Classes"},
        {perk : "Power Yoga"},
        {perk : "Learn Machines"},
        {perk : "Full-body Strength"}
    ]

  return (
    <FooterContainer>
        <FooterWrap>
            <Footer1Wrap>
                <LogoWrap>
                    <LogoImg src = {GymLogo} />
                </LogoWrap>
                <Footer1DescWrap>
                    <BlogDesc style={{fontWeight: "500", lineHeight: "1.4", fontSize: "15px"}}>
                        Take your health and body to the next level with our comprehensive program designed to 
                        help you reach your fitness goals.
                    </BlogDesc>
                </Footer1DescWrap>
                <FooterIconWrap>
                    {icons.map((i) => (
                    <FooterIcon>
                        {i.icon}
                    </FooterIcon>
                    ))}
                </FooterIconWrap>
                <FooterCopyrightWrap>
                    <BlogDesc style={{fontWeight: "500", lineHeight: "1.4", fontSize: "15px"}}>
                        Privacy Policy | © {currentYear} Gymate Design by RadiusTheme
                    </BlogDesc>
                </FooterCopyrightWrap>
            </Footer1Wrap>
            <Footer2Wrap>
                <Footer2Title>
                    Our Classes
                </Footer2Title>
                {perks.map((p) => (
                <Footer2Perk>
                    {p.perk}
                </Footer2Perk>
                ))}
            </Footer2Wrap>
            <Footer2Wrap>
                <Footer2Title>
                Working Hours
                </Footer2Title>
                <DaysWrap>
                    Monday - Friday:
                </DaysWrap>
                <TimeWrap>
                    7:00am - 21:00pm
                </TimeWrap>
                <DaysWrap>
                    Saturday:
                </DaysWrap>
                <TimeWrap>
                    7:00am - 21:00pm
                </TimeWrap>
                <DaysWrap>
                    Sunday - Closed
                </DaysWrap>
            </Footer2Wrap>
        </FooterWrap>
    </FooterContainer>
  )
}

export default Footer