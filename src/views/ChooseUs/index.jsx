import React from 'react'
import {ChooseInfoWrap, ChooseHeading, ChooseHeadingContainer, ChooseHeadingWrap, ChooseUsContainer, ChooseUsHeadingImgWrap, ChooseUsImgContainer, ChooseUsImgWrap, ChooseUsWrap, JoinUsBtnWrap, ChooseInfoContainer, ChooseUsImg, ChooseInfoHeadingWrap, ChooseInfoTitleWrap, ChooseInfoDesc, ChooseInfoPerksContainer, ChooseInfoPerksWrap, ChooseInfoIconWrap, ChooseInfoPerks, ChooseInfoBtnWrap, ChooseInfo } from '../../styles/ChooseUs'
import { ClassBtnArrowWrap, ClassesBtn, HeroDesignImg, HeroImgWrap } from '../../styles/Hero'
import { LuArrowRight } from "react-icons/lu";
import ChooseMainImg from '../../assets/main-img.png'
import HeroImage from '../../assets/brush-design.svg'
import { GiMuscleUp } from "react-icons/gi";
import { GiGymBag } from "react-icons/gi";
import { CgGym } from "react-icons/cg";
import { FaBottleWater } from "react-icons/fa6";
import { AboutBtn, AboutBtnIcon } from '../../styles/About';

const ChooseUs = () => {

    const perks = [
        {icon : <GiMuscleUp />, desc : "Free Fitness Training"},
        {icon : <CgGym />, desc : "Modern Gym Equipments"},
        {icon : < GiGymBag/>, desc : "Gym Bag Equipments"},
        {icon : <FaBottleWater />, desc : "Fresh Bottle Watter"},
    ]

  return (
    <ChooseUsContainer>
            <ChooseUsHeadingImgWrap>
                <ChooseHeadingContainer>
                    <ChooseHeadingWrap>
                        <ChooseHeading>
                            We Are Always Providing Best Fitness Service For You
                        </ChooseHeading>
                    </ChooseHeadingWrap>
                    <JoinUsBtnWrap>
                        <ClassesBtn href = "#">JOIN WITH US <ClassBtnArrowWrap><LuArrowRight /> </ClassBtnArrowWrap> </ClassesBtn>
                    </JoinUsBtnWrap>
                </ChooseHeadingContainer>
            </ChooseUsHeadingImgWrap>
        <ChooseUsWrap>
            <ChooseInfoContainer>
                <ChooseUsImgContainer>
                    <ChooseUsImgWrap>
                        <ChooseUsImg src = {ChooseMainImg} />
                    </ChooseUsImgWrap>
                </ChooseUsImgContainer>
                <ChooseInfo>
                <ChooseInfoWrap>
                    <HeroImgWrap>
                        <HeroDesignImg src = {HeroImage} />
                        <ChooseInfoHeadingWrap>
                            WHY CHOOSE US
                        </ChooseInfoHeadingWrap>
                    </HeroImgWrap>
                    <ChooseInfoTitleWrap>
                        We Can Give A Shape Of Your Body Here!
                    </ChooseInfoTitleWrap>
                   <ChooseInfoDesc>
                        At Gymate, we are dedicated to helping you achieve the body of your dreams. 
                        Our expert trainers and nutritionists will work with you to 
                        create a personalized fitness and nutrition plan that helps you reach your specific goals.
                   </ChooseInfoDesc>
                   <ChooseInfoPerksContainer>
                    {perks.map((perk) => (
                        <ChooseInfoPerksWrap>
                            <ChooseInfoIconWrap>
                                {perk.icon}
                            </ChooseInfoIconWrap>
                            <ChooseInfoPerks>
                                {perk.desc}
                            </ChooseInfoPerks>
                        </ChooseInfoPerksWrap>
                    ))}
                   </ChooseInfoPerksContainer>  
                </ChooseInfoWrap>
                <ChooseInfoBtnWrap>
                        <AboutBtn href = "#">OUR CLASSES <AboutBtnIcon><LuArrowRight/></AboutBtnIcon> </AboutBtn>
                   </ChooseInfoBtnWrap>
                </ChooseInfo>
            </ChooseInfoContainer>
        </ChooseUsWrap>
    </ChooseUsContainer>
  )
}

export default ChooseUs