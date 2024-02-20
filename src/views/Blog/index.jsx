import React from 'react'
import { BlogBtn, BlogBtnWrap, BlogCard, BlogContainer, BlogDateContainer, BlogDateWrap, BlogDesc, BlogTitle, BlogTitleContainer, BlogWrap } from '../../styles/Blog'
import { HeadingWrap } from '../../styles/Classes'
import { HeroDesignImg, HeroImgWrap } from '../../styles/Hero'
import { CoachesDescWrap, CoachesHeadingText, TrainersCardContainer } from '../../styles/Coaches'
import PricingTitleImg from '../../assets/titlebg.svg'
import { ABoutDesc, AboutBtnIcon, AboutHeading } from '../../styles/About'
import { LuArrowRight } from "react-icons/lu";

const Blog = () => {

    const blogs = [
        {dte : "22.03.2024", title : "Yoga For Everyone in 2024", desc : "This is program designed to make the practice of yoga beneficial for people of all ages, abilities, and backgrounds."},
        {dte : "13.09.2024", title : "Getting Back Into CrossFit After Vacation", desc : "Learn how to ease back into your CrossFit routine after a vacation with tips and strategies for success."},
        {dte : "28.06.2024", title : "Meet Fitness Ambassador Grace", desc : "Get to know Grace, a fitness enthusiast and dedicated ambassador who is passionate about helping others reach their fitness goals."},
    ]

  return (
    <BlogContainer id = "Blog">
        <BlogWrap>
            <HeadingWrap>
                <HeroImgWrap>
                    <HeroDesignImg src = {PricingTitleImg} />
                    <CoachesHeadingText>
                            LATEST BLOG
                    </CoachesHeadingText>
                </HeroImgWrap>
                <AboutHeading>
                    Our Recent News
                </AboutHeading>
                <CoachesDescWrap>
                    <ABoutDesc>Gymat an unknown printer took a galley of type and scrambled make a type specimen book.</ABoutDesc>
                </CoachesDescWrap>
            </HeadingWrap>
            <TrainersCardContainer price = "true">
                {blogs.map((blog) => (
                <BlogCard>
                    <BlogDateContainer>
                        <BlogDateWrap>
                            {blog.dte}
                        </BlogDateWrap>
                    </BlogDateContainer>
                        <BlogTitleContainer>
                            <BlogTitle>
                                {blog.title}
                            </BlogTitle>
                            <BlogDesc>
                               {blog.desc}
                            </BlogDesc>
                        </BlogTitleContainer>
                        <BlogBtnWrap>
                            <BlogBtn>READ MORE <AboutBtnIcon><LuArrowRight/></AboutBtnIcon></BlogBtn>
                        </BlogBtnWrap>                
                </BlogCard>
                ))}
            </TrainersCardContainer>
        </BlogWrap>
    </BlogContainer>
  )
}

export default Blog