import React from 'react'
import { ClassesWrap, HeadingWrap } from '../../styles/Classes'
import { HeroDesignImg, HeroImgWrap } from '../../styles/Hero'
import HeroImage from '../../assets/brush-design.svg'
import { CoachesContainer, CoachesDescWrap, CoachesHeadingText, ShapeIconWrap, ShapeImg, ShapeImgWrap, SocialIcons, SocialLinksWrap, TrainerBgImg, TrainerBgImgWrap, TrainerDesc, TrainerImg, TrainerImgContainer, TrainerImgWrap, TrainerInfo, TrainerInfoWrap, TrainerName, TrainerNameDescWrap, TrainersCardContainer, TrainersCardWrap } from '../../styles/Coaches'
import { ABoutDesc, AboutHeading } from '../../styles/About'
import TrainerImg1 from '../../assets/trainer1.png'
import TrainerImg2 from '../../assets/trainer2.png'
import TrainerImg3 from '../../assets/trainer3.png'
import TrainerBg from '../../assets/trainer-bg.png'
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaRegEnvelope } from "react-icons/fa";
import ShapeImage from '../../assets/shape.png'
import { MdKeyboardArrowUp } from "react-icons/md";

const Coaches = () => {

    const coaches = [
        {img: TrainerImg1, name: "John Lewis", desc : "Yoga Trainer"},
        {img: TrainerImg2, name: "Jonathan Doe", desc : "Crossfit Trainer"},
        {img: TrainerImg3, name: "Ana June", desc : "Personal Trainer"}
    ]

  return (
    <CoachesContainer>
        <ClassesWrap coach = "true">
            <HeadingWrap>
                <HeroImgWrap>
                    <HeroDesignImg src = {HeroImage} />
                   <CoachesHeadingText>
                        GYM TRAINERS
                   </CoachesHeadingText>
                </HeroImgWrap>
                <AboutHeading>Team Of Expert Coaches</AboutHeading>
                <CoachesDescWrap>
                    <ABoutDesc>Expert team of coaches helps you succeed in any goal,personalized guidance and motivation provided!     
                </ABoutDesc>
                </CoachesDescWrap>
            </HeadingWrap>
           <TrainersCardContainer>
            {coaches.map((coach) => (
            <TrainersCardWrap>
                <TrainerImgContainer>
                    <TrainerImgWrap>
                        <TrainerImg src = {coach.img} />
                    </TrainerImgWrap>
                    <TrainerBgImgWrap>
                        <TrainerBgImg src = {TrainerBg} />
                    </TrainerBgImgWrap>
                </TrainerImgContainer>
                <TrainerInfoWrap>
                    <TrainerInfo>
                        <ShapeImgWrap>
                            <ShapeImg src = {ShapeImage} />
                            <ShapeIconWrap>
                                <MdKeyboardArrowUp />
                            </ShapeIconWrap>
                        </ShapeImgWrap>
                        <TrainerNameDescWrap>
                            <TrainerName>
                                {coach.name}
                            </TrainerName>
                            <TrainerDesc>
                                {coach.desc}
                            </TrainerDesc>
                        </TrainerNameDescWrap>
                        <SocialLinksWrap>
                            <SocialIcons>
                                <FaFacebookF />
                            </SocialIcons>
                            <SocialIcons>
                                <FaTwitter />
                            </SocialIcons>
                            <SocialIcons>
                                <FaInstagram />
                            </SocialIcons>
                            <SocialIcons>
                                <FaRegEnvelope />
                            </SocialIcons>
                        </SocialLinksWrap>
                    </TrainerInfo>
                </TrainerInfoWrap>
            </TrainersCardWrap>
           ))}
           </TrainersCardContainer>
        </ClassesWrap>
        </CoachesContainer>
  )
}

export default Coaches