import React from 'react'
import { CoachesDescWrap, CoachesHeadingText} from '../../styles/Coaches'
import { ClassesWrap, HeadingWrap } from '../../styles/Classes'
import {HeroDesignImg, HeroImgWrap } from '../../styles/Hero'
import PricingTitleImg from '../../assets/titlebg.svg'
import { BeginnerWrap, PriceBtn, PriceCardContainer, PriceContainer, PricePerksContainer, PricePerksWrap, PriceWrap, PricingCardWrap, PricingImg, PricingImgContainer, PricingInfoWrap } from '../../styles/Pricing'
import { ABoutDesc, AboutBtnIcon, AboutHeading } from '../../styles/About'
import PricingImg1 from '../../assets/img1.jpg'
import PricingImg2 from '../../assets/img2.jpg'
import PricingImg3 from '../../assets/img3.jpg'
import { LuArrowRight } from "react-icons/lu";

const Pricing = () => {

    const price = [
        {amount : "39", img: PricingImg1},
        {amount : "65", img : PricingImg2},
        {amount : "100", img : PricingImg3}
    ]

  return (
    <PriceContainer id = "Pricing">
        <ClassesWrap coach = "true">
            <HeadingWrap style={{zIndex: "2"}}>
                <HeroImgWrap>
                    <HeroDesignImg src = {PricingTitleImg} />
                    <CoachesHeadingText>
                    PRICING CHART
                    </CoachesHeadingText>
                </HeroImgWrap>
                <AboutHeading>Exclusive Pricing Plan</AboutHeading>
                <CoachesDescWrap>
                    <ABoutDesc>Gymat an unknown printer took a galley of type and scrambled make a type specimen book.</ABoutDesc>
                </CoachesDescWrap>
            </HeadingWrap>
            <PriceCardContainer>
                {price.map((prices) => (
                <PricingCardWrap>
                    <PricingImgContainer>
                        <PricingImg src = {prices.img} />
                        <BeginnerWrap>
                            Beginners
                        </BeginnerWrap>
                    </PricingImgContainer>
                    <PricingInfoWrap>
                        <PriceWrap>
                            {prices.amount}
                        </PriceWrap>
                        <PricePerksContainer>
                            <PricePerksWrap>
                                Free Hand
                            </PricePerksWrap>
                            <PricePerksWrap>
                                Gym Fitness
                            </PricePerksWrap>
                            <PricePerksWrap>
                                Weight Loss
                            </PricePerksWrap>
                            <PricePerksWrap>
                                Personal Trainer
                            </PricePerksWrap>
                            <PricePerksWrap>
                                Cycling
                            </PricePerksWrap>
                        </PricePerksContainer>
                        <PriceBtn href = "#">PURCHASE NOW <AboutBtnIcon><LuArrowRight /></AboutBtnIcon></PriceBtn>
                    </PricingInfoWrap>
                </PricingCardWrap>
                ))}
            </PriceCardContainer>
        </ClassesWrap>
    </PriceContainer>
  )
}

export default Pricing