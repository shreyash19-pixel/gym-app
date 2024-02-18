import React from 'react'
import { NavigationWrap,NavigationContainer, PeoplesTestiWrap, PersonDesignation, PersonName, PersonNameWrap, Quotes, QuotesWrap, TestiContainer, TestiWrap, TestimonialImg, TestimonialImgWrap, TestimonialInfoWrap, TestimonialsContainer, TestimonialsWrap, Navigation, SponsorContainer, SponsorWrap, SponsorLogo } from '../../styles/Testimonial'
import { HeadingWrap } from '../../styles/Classes'
import { HeroDesignImg, HeroImgWrap } from '../../styles/Hero'
import { CoachesHeadingText } from '../../styles/Coaches'
import HeroImage from '../../assets/brush-design.svg'
import TestimonialImage from '../../assets/testimonial-new.jpg'
import { RiDoubleQuotesR } from "react-icons/ri";
import { GoArrowLeft } from "react-icons/go";
import { GoArrowRight } from "react-icons/go";
import Sponsor1 from '../../assets/logo1.png'
import Sponsor2 from '../../assets/logo2.png'
import Sponsor3 from '../../assets/logo3.png'
import Sponsor4 from '../../assets/logo4.png'
import Sponsor5 from '../../assets/logo5.png'

const Testimonial = () => {

    const sponsors = [
        {img: Sponsor1},
        {img: Sponsor2},
        {img: Sponsor3},
        {img: Sponsor4},
        {img: Sponsor5}
    ]

  return (
    <TestiContainer>
        <TestiWrap>
            <HeadingWrap>
                <HeroImgWrap>
                    <HeroDesignImg src = {HeroImage} />
                    <CoachesHeadingText>
                        TESTIMONIALS
                    </CoachesHeadingText>
                </HeroImgWrap>
            </HeadingWrap>
            <TestimonialsContainer>
                <TestimonialsWrap>
                    <TestimonialImgWrap>
                        <TestimonialImg src = {TestimonialImage} />
                    </TestimonialImgWrap>
                    <TestimonialInfoWrap>
                        <PeoplesTestiWrap>
                            <QuotesWrap>
                                <RiDoubleQuotesR />
                            </QuotesWrap>
                            <Quotes>
                            I've been a member of Gymate for the past 6 months and it has been an amazing experience. 
                            The trainers are knowledgeable and supportive, the equipment is top-notch, and the community of members is friendly and encouraging.
                            </Quotes>
                        </PeoplesTestiWrap>
                        <PersonNameWrap>
                            <PeoplesTestiWrap>
                                <PersonName>
                                Harry Potter
                                </PersonName>
                                <PersonDesignation>
                                    CEO of Hogwarts
                                </PersonDesignation>
                            </PeoplesTestiWrap>
                            <NavigationContainer>
                                <NavigationWrap>
                                    <Navigation>
                                        <GoArrowLeft />
                                    </Navigation>
                                    <Navigation>
                                        <GoArrowRight />
                                    </Navigation>
                                </NavigationWrap>
                            </NavigationContainer>
                        </PersonNameWrap>
                    </TestimonialInfoWrap>
                </TestimonialsWrap>
            </TestimonialsContainer>
            <SponsorContainer>
                {sponsors.map((sponsor) => (
                <SponsorWrap>
                    <SponsorLogo src = {sponsor.img} />
                </SponsorWrap>
                ))}
            </SponsorContainer>
        </TestiWrap>
    </TestiContainer>
  )
}

export default Testimonial