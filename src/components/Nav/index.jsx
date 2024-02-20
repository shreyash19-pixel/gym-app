import React,{useContext, useState} from 'react'
import {CrossWrap, ResponsiveWrap,Hamburger,ContactUsWrap, IconWrap, JoinNowWrap, LogoImg, LogoWrap, NavBar, NavLinks, NavLinksWrap, NavbarWrap, JoinUsIcon } from '../../styles/Nav'
import { IoPersonOutline } from "react-icons/io5";
import { BsTextParagraph } from "react-icons/bs";
import { FaPlus } from "react-icons/fa6";
import GymLogo from '../../assets/Logo.svg'
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
import Slider from '../Slider';
import AppContext from '../../utils/AppContext';
import { useNavigate } from 'react-router-dom'

const Nav = () => {

    const navigate = useNavigate()
    const navLinks = [
        {title : "Home", link : "#Home"},
        {title : "About", link : "#About"},
        {title : "Blog", link : "#Blog"},
        {title : "Pricing", link : "#Pricing"},
        {title : "Classes", link : "#Classes"},
        {title : "Contact", link : "/Contact"}
    ]

    const [nav, setNav] = useState(false)
    const [stickyNav, setStickyNav] = useState(false)
    const {slider, setSlider} = useContext(AppContext)

    nav?document.body.style.overflow="hidden":document.body.style.overflow="auto";

    const handleStickyNav = () => {
        if(window.scrollY > 40)
        {
          setStickyNav(true)
        }
        else
        {
          setStickyNav(false)
        }
      }
  
      window.addEventListener("scroll",handleStickyNav)

  return (
    <NavbarWrap sticky = {stickyNav}>
        <NavBar>
            <LogoWrap>
                <LogoImg src = {GymLogo} />
            </LogoWrap>
            <NavLinksWrap>
                {navLinks.map((links) =>(
                <NavLinks href = {links.link}>{links.title}</NavLinks>
                ))}
            </NavLinksWrap>
           
            {nav &&
            (<ResponsiveWrap>
              <CrossWrap onClick = {() => setNav(!nav)}>
                  <RxCross2 />
              </CrossWrap>
                     
                {navLinks.map((links) => (
                  <NavLinks onClick = {() => setNav(false)} href = {links.link}>{links.title}</NavLinks>
              ))}
            </ResponsiveWrap>)
                }
            <ContactUsWrap>
            <Hamburger onClick = {() => setNav(!nav)}>
              <GiHamburgerMenu />
            </Hamburger>
                <IconWrap onClick = {() => navigate("/SignUp")}>
                    <IoPersonOutline />
                </IconWrap>
                <IconWrap onClick={() => setSlider(!slider)}>
                    <BsTextParagraph />
                </IconWrap>
                <JoinNowWrap onClick={() => navigate("/Contact")}>
                    <JoinUsIcon>
                      <FaPlus />
                    </JoinUsIcon>
                    JOIN CLASS NOW
                </JoinNowWrap>
            </ContactUsWrap>
        </NavBar>
       {slider && <Slider />}
    </NavbarWrap>
  )
}

export default Nav