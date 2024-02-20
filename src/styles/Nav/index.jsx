import styled from 'styled-components'

export const NavbarWrap = styled.div`
    width: 100%;
    padding: 20px;
    background-color: ${(props) => (props.sticky ? "black" : "transparent")};
    position: fixed;
    top:0;
    z-index: 99;

    @media (max-width: 1200px)
    {
        padding-inline: 15px;
    }
`

export const NavBar = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const LogoWrap = styled.div`
    
`

export const LogoImg = styled.img`
    @media (max-width: 450px)
    {
        width: 120px;
    }
`

export const NavLinksWrap = styled.div`
    display: flex;
    align-items: center;
    gap: 30px;

    @media (max-width: 1200px)
    {
        display: none;
    }
`

export const NavLinks = styled.a`
    text-decoration: none;
    color: white;
    font-size: 16px;
    font-weight: 500;
    transition: all .4s ease-in-out;

    &:hover{
        color: #FF0336;
    }

    @media (max-width: 1200px)
    {
        color: black;
    }
`

export const Hamburger = styled.div`
    display: none;

    @media (max-width: 1200px)
    {
        display: flex;
        color: white;
        font-size: 25px;
        cursor: pointer;
    }

    @media (max-width: 450px)
    {
        font-size: 20px;
    }
`

export const CrossWrap = styled.div`
     display: none;

    @media (max-width: 1200px)
    {
        display: flex;
        font-size: 30px;
        cursor: pointer;
        position: absolute;
        z-index: 4;
        right: 20px;
        top: 40px;
        color: #FF0336;
    }
`

export const ResponsiveWrap = styled.div`
    display: none;

    @media (max-width: 1200px)
    {
        width: 100%;
        height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        gap: 40px;
        background-color: white;
        position: absolute;
        top: 0;
        left:0px;
        animation : left .4s ease-out;
        font-size: 22px;
        z-index: 99999;

        @keyframes left {
        from {
            transform: translate(-100%);
        }
        to {
            transform: translate(0);
        }
        }
    }
`

export const ContactUsWrap = styled.div`
    display: flex;
    align-items: center;
    gap: 7px;
`

export const IconWrap = styled.div`
    color: white;
    font-size: 25px;
    padding: 8px;
    font-weight: 600;
    cursor: pointer;
    background-color: transparent;
    height: 40px;
    border-radius: 5px;
    transition: all .5s;

    @media (max-width: 450px)
    {
        font-size: 20px;
    }

    &:hover{
        color: #FF0336;
    }
`


export const JoinUsIcon = styled.div`
    color: white;
    font-size: 25px;
    padding: 8px;
    font-weight: 600;
    cursor: pointer;
    background-color: #FF0336;
    height: 40px;
    border-radius: 5px;
    transition: all .5s;

    @media (max-width: 450px) {
        font-size: 20px;
    }

    &:hover {
        transform: rotate(360deg); /* Rotate 360 degrees when hovered */
    }
`;


export const JoinNowWrap = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    border: 2px solid #929292;
    border-radius: 3px;
    padding: 3px 10px 3px 4px;
    color: white;
    font-size: 14px;
    font-weight: 600;
    cursor: pointer;

    @media (max-width: 620px)
    {
        display: none;
    }
   
`


