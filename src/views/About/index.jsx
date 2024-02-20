import React from 'react'
import { ABoutDesc, ABoutUsImgText, ABoutUsRedBg, AboutBtn, AboutBtnIcon, AboutBtnWrap, AboutCardsContainer, AboutCardsWrap, AboutContainer, AboutDescWrap, AboutHeading, AboutHeadingWrap, AboutInfo, AboutInfoContainer, AboutInfoTitle, AboutInfoWrap,AboutUsImgContainer, AboutUsImgWrap, AboutWrap, CardsDesc, CardsIcon, CardsIconTitle, CardsIconWrap, PerksContainer, PerksWrap } from '../../styles/About'
import { GiProgression } from "react-icons/gi";
import { GiWeightLiftingUp } from "react-icons/gi";
import { LiaListAlt } from "react-icons/lia";
import {HeroDesignImg, HeroImgWrap } from '../../styles/Hero';
import HeroImage from '../../assets/brush-design.svg'
import { CgGym } from "react-icons/cg";
import { FaRunning } from "react-icons/fa";
import { GiSkippingRope } from "react-icons/gi";
import { LuArrowRight } from "react-icons/lu";

const About = () => {

    const cards = [
        {icon : <GiProgression />, title : "PROGRESSION", desc : "Our team of experts will work with you to create a customized plan that helps you achieve success one step at a time."},
        {icon : <GiWeightLiftingUp />, title : "WORKOUT", desc : "With a variety of workouts to choose from, you'll have everything you need to get into the best shape of your life."},
        {icon : <LiaListAlt />, title : "NUTRITIONS", desc : "Our team will work with you to create a personalized meal plan that helps you reach your specific health goals."}
    ]

  return (
    <AboutContainer id = "About">
        <AboutWrap>
            <AboutCardsContainer>
                {cards.map((card) => (
                <AboutCardsWrap>
                    <CardsIconWrap>
                        <CardsIcon>
                            {card.icon}
                        </CardsIcon>
                        <CardsIconTitle>{card.title}</CardsIconTitle>
                    </CardsIconWrap>
                    <CardsDesc>
                        {card.desc}
                    </CardsDesc>
                    </AboutCardsWrap>
                    ))}
            </AboutCardsContainer>
            <AboutInfoContainer>
                <AboutInfo>
                <AboutInfoWrap>
                    <HeroImgWrap>
                        <HeroDesignImg src = {HeroImage} />
                        <AboutInfoTitle>
                            WHO WE ARE
                        </AboutInfoTitle>
                    </HeroImgWrap>
                    <AboutHeadingWrap>
                        <AboutHeading>Take Your Health And Body To Next Level</AboutHeading>
                    </AboutHeadingWrap>
                    <AboutDescWrap>
                        <ABoutDesc>Take your health and body to the next level with our comprehensive program designed to help you reach your fitness goals.</ABoutDesc>
                    </AboutDescWrap>
                    <PerksContainer>
                        <PerksWrap>
                            <CardsIcon>
                                <FaRunning />
                            </CardsIcon>
                            PROFESSIONAL TRAINERS
                        </PerksWrap>
                        <PerksWrap border = "true">
                            <CardsIcon>
                                <CgGym />
                            </CardsIcon>
                            MODERN EQUIPMENTS
                        </PerksWrap>
                        <PerksWrap>
                            <CardsIcon>
                                <GiSkippingRope />
                            </CardsIcon>
                            FANCY GYM MACHINES
                        </PerksWrap>
                    </PerksContainer>           
                </AboutInfoWrap>
                <AboutBtnWrap>
                        <AboutBtn href = "#">TAKE A TOUR
                            <AboutBtnIcon>
                                <LuArrowRight />
                            </AboutBtnIcon>
                        </AboutBtn>
                    </AboutBtnWrap>
                </AboutInfo>
                <AboutUsImgContainer>
                    <ABoutUsImgText>

                    </ABoutUsImgText>
                    <AboutUsImgWrap>
                       
                    </AboutUsImgWrap>
                    <ABoutUsRedBg>

                    </ABoutUsRedBg>
                </AboutUsImgContainer>
            </AboutInfoContainer>
        </AboutWrap>
    </AboutContainer>
  )
}

export default About