import React from 'react'
import { SocialLinksIcon, SocialLinksIconWrap ,ClassBtnArrowWrap, ClassesBtn, ClassesBtnWrap, HeroContainer, HeroDesignImg, HeroHeading, HeroHeadingSpan, HeroHeadingWrap, HeroImgTextWrap, HeroImgWrap, HeroInfoContainer, HeroInfoWrap, LineWrap, ShareWrap, SocialLinksWrap } from '../../styles/Hero'
import HeroImage from '../../assets/brush-design.svg'
import { LuArrowRight } from "react-icons/lu";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { MdFacebook } from "react-icons/md";

const Hero = () => {
  return (
    <HeroContainer id = "Home">
        <HeroInfoContainer>
        <HeroInfoWrap>
            <HeroImgWrap>
                <HeroDesignImg src = {HeroImage} />
               <HeroImgTextWrap>
                    FIND YOUR ENERGY
               </HeroImgTextWrap>
            </HeroImgWrap>
            <HeroHeadingWrap>
                <HeroHeading>MAKE YOUR BODY
                    &nbsp;
                    <HeroHeadingSpan>FIT & PERFECT</HeroHeadingSpan>
                </HeroHeading>
            </HeroHeadingWrap>       
        </HeroInfoWrap>
        <ClassesBtnWrap>
                <ClassesBtn href = "#">OUR CLASSES <ClassBtnArrowWrap><LuArrowRight /></ClassBtnArrowWrap></ClassesBtn>
            </ClassesBtnWrap>
        </HeroInfoContainer>
        <SocialLinksWrap>
            <ShareWrap>
                SHARE
            </ShareWrap>
            <ShareWrap>
            <LineWrap></LineWrap>
            </ShareWrap>
            <SocialLinksIconWrap>
            <SocialLinksIcon>
                <FaLinkedinIn />
            </SocialLinksIcon>
            <SocialLinksIcon>
                <FaTwitter />
            </SocialLinksIcon>
            <SocialLinksIcon>
                <MdFacebook />
            </SocialLinksIcon>
            </SocialLinksIconWrap>
        </SocialLinksWrap>
    </HeroContainer>
  )
}

export default Hero