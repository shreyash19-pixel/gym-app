import React,{useContext} from 'react'
import { AboutDesc, AboutDescWrap, AboutTitle, CloseSliderWrap, ContactContainer, ContactDesc, ContactIcon, ContactWrap, GalleryImg, GalleryWrap, SliderContainer, SliderHeading, SliderImg, SliderWrap, SocialIconWrap, SocialIcons } from '../../styles/Slider'
import { LogoWrap } from '../../styles/Nav'
import GymLogo from '../../assets/footer-logo.svg'
import { RxCross2 } from "react-icons/rx";
import AppContext from '../../utils/AppContext';
import SliderImg1 from '../../assets/gallery-img1.jpg'
import SliderImg2 from '../../assets/gallery-img2.jpg'
import SliderImg3 from '../../assets/gallery-img3.jpg'
import SliderImg4 from '../../assets/gallery-img4.jpg'
import SliderImg5 from '../../assets/gallery-img5.jpg'
import SliderImg6 from '../../assets/gallery-img6.jpg'
import { IoLocation } from "react-icons/io5";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaEnvelope } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";


const Slider = () => {

  const {setSlider} = useContext(AppContext)

  const galleryImg = [
    {img : SliderImg1},
    {img : SliderImg2},
    {img : SliderImg3},
    {img : SliderImg4},
    {img : SliderImg5},
    {img : SliderImg6}
  ]

  return (
    <SliderContainer>
        <SliderWrap>
          <SliderHeading>
            <LogoWrap>
              <SliderImg src = {GymLogo} />
            </LogoWrap>
            <CloseSliderWrap onClick={() => setSlider(false)}>
              <RxCross2 />
            </CloseSliderWrap>
          </SliderHeading>
          <AboutDescWrap>
            <AboutTitle>
              About Us
            </AboutTitle>
            <AboutDesc>
            Find out who we are and what makes us unique. We are a community-driven gym committed to providing personalized fitness experiences for all levels of fitness enthusiasts in a welcoming and supportive environment.
            </AboutDesc>
          </AboutDescWrap>
          <AboutDescWrap>
            <AboutTitle>
              Gallery
            </AboutTitle>
            <GalleryWrap>
              {galleryImg.map((g) => (
                <GalleryImg src = {g.img} />
                ))}
            </GalleryWrap>
          </AboutDescWrap>
          <AboutDescWrap>
            <AboutTitle>
              Contact Info
            </AboutTitle> 
            <ContactWrap>
              <ContactContainer>
                <ContactIcon>
                   <IoLocation />
                </ContactIcon>
                <ContactDesc>
                 59 Street, House Newyork City
                </ContactDesc>
              </ContactContainer>
              <ContactContainer>
                <ContactIcon>
                  <BsFillTelephoneFill />
                </ContactIcon>
                <ContactDesc>
                  +123-678800090
                </ContactDesc>
              </ContactContainer>
              <ContactContainer>
                <ContactIcon>
                  <FaEnvelope />
                </ContactIcon>
                <ContactDesc>
                  gymate@gymail.com
                </ContactDesc>
              </ContactContainer>
            </ContactWrap>
          </AboutDescWrap>
          <AboutDescWrap>
            <AboutTitle>
               Follow Us
            </AboutTitle>
            <SocialIconWrap>
              <SocialIcons>
                <FaFacebookF />
              </SocialIcons>
              <SocialIcons>
                  <FaTwitter />
              </SocialIcons>
              <SocialIcons>
                <FaInstagram />
              </SocialIcons>
            </SocialIconWrap>
          </AboutDescWrap>
        </SliderWrap>
    </SliderContainer>
  )
}

export default Slider