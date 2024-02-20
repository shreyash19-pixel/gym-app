import React from 'react'
import { ClassesContainer, ClassesHeadingText, ClassesIcon, ClassesIconWrap, ClassesImageContainer, ClassesImgContainer1, ClassesImgContainer2, ClassesImgContainer3, ClassesImgContainer4, ClassesImgContainer5, ClassesImgContainer6, ClassesImgWrap1, ClassesImgWrap2, ClassesImgWrap3, ClassesImgWrap4, ClassesImgWrap5, ClassesImgWrap6, ClassesWrap, HeadingWrap, ProgramHeading, ProgramsWrap, TimingsWrap } from '../../styles/Classes'
import {HeroDesignImg, HeroImgWrap } from '../../styles/Hero';
import HeroImage from '../../assets/brush-design.svg'
import { AboutHeading } from '../../styles/About';
import { GiCycling } from "react-icons/gi";
import { TbKarate } from "react-icons/tb";
import { CgGym } from "react-icons/cg";
import { GiMeditation } from "react-icons/gi";
import { MdSportsMartialArts } from "react-icons/md";
import { GiWeightLiftingUp } from "react-icons/gi";

const Classes = () => {
  return (
    <ClassesContainer id = "Classes">
        <ClassesWrap>
            <HeadingWrap>
                <HeroImgWrap>
                    <HeroDesignImg src = {HeroImage} />
                    <ClassesHeadingText>
                        OUR FEATURED CLASS
                    </ClassesHeadingText>
                </HeroImgWrap>
                <AboutHeading>We Are Offering Best Flexible Classes</AboutHeading>
            </HeadingWrap>
            <ClassesImageContainer>
               <ClassesImgWrap1>
                    <ClassesImgContainer1>
                           
                    </ClassesImgContainer1>
                    
                    <ClassesIconWrap>
                       
                    </ClassesIconWrap>
                    <ClassesIcon>
                            <GiCycling />
                     </ClassesIcon>
                     <ProgramsWrap>
                        <ProgramHeading>
                            Cycling
                        </ProgramHeading>
                        <TimingsWrap>Wednesday: 9:00am-10:00am</TimingsWrap>
                    </ProgramsWrap>
               </ClassesImgWrap1>
               <ClassesImgWrap2>
                    <ClassesImgContainer2>
                        
                    </ClassesImgContainer2>
                    <ClassesIconWrap>
                       
                       </ClassesIconWrap>
                       <ClassesIcon>
                        <TbKarate />
                        </ClassesIcon>
                        <ProgramsWrap>
                        <ProgramHeading>
                        Karate
                        </ProgramHeading>
                        <TimingsWrap>Friday: 10:00am-11:00am</TimingsWrap>
                    </ProgramsWrap>
               </ClassesImgWrap2>
               <ClassesImgWrap3>
                    <ClassesImgContainer3></ClassesImgContainer3>
                    <ClassesIconWrap>
                       
                       </ClassesIconWrap>
                       <ClassesIcon>
                               <CgGym />
                        </ClassesIcon>
                        <ProgramsWrap>
                        <ProgramHeading>
                        Power
                        </ProgramHeading>
                        <TimingsWrap>Saturday: 9:00am-10:00am</TimingsWrap>
                    </ProgramsWrap>
               </ClassesImgWrap3>
               <ClassesImgWrap4>
                    <ClassesImgContainer4></ClassesImgContainer4>
                    <ClassesIconWrap>
                       
                       </ClassesIconWrap>
                       <ClassesIcon>
                               <GiMeditation />
                        </ClassesIcon>
                        <ProgramsWrap>
                        <ProgramHeading>
                        Meditation
                        </ProgramHeading>
                        <TimingsWrap>Friday: 1:00pm-2:00pm</TimingsWrap>
                    </ProgramsWrap>
               </ClassesImgWrap4>
               <ClassesImgWrap5>
                    <ClassesImgContainer5></ClassesImgContainer5>
                    <ClassesIconWrap>
                       
                       </ClassesIconWrap>
                       <ClassesIcon>
                       <MdSportsMartialArts />
                        </ClassesIcon>
                        <ProgramsWrap>
                        <ProgramHeading>
                        Martial Arts
                        </ProgramHeading>
                        <TimingsWrap>Sunday: 6:00pm-7:00pm</TimingsWrap>
                    </ProgramsWrap>
               </ClassesImgWrap5>
               <ClassesImgWrap6>
                    <ClassesImgContainer6>

                    </ClassesImgContainer6>
                    <ClassesIconWrap>
                       
                       </ClassesIconWrap>
                       <ClassesIcon>
                        <GiWeightLiftingUp />
                        </ClassesIcon>
                        <ProgramsWrap>
                        <ProgramHeading>
                        Workout
                        </ProgramHeading>
                        <TimingsWrap>Monday: 4:00pm-5:00pm</TimingsWrap>
                    </ProgramsWrap>
               </ClassesImgWrap6>
            </ClassesImageContainer>
        </ClassesWrap>
    </ClassesContainer>
  )
}

export default Classes