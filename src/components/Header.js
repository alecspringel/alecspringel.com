import React, { useEffect, useState } from "react";
import styled, { css } from "styled-components";
import Logo from "../images/logo.svg";
import WhiteLogo from "../images/logo-white.svg";
import { Link } from "gatsby";
import Button from "./common/Button";
import MobileNav from "./mobileNav/MobileNav";
import MobileOption from "./mobileNav/MobileOption";

/* isClear prop is used to separate the clear header/navigation
used in the hero section, from the header/nav that dropsdown after
scrolling. isVisible variable determines wether or not to display
the global navigation bar (which appears after scrolling down the page) */

const Header = ({ isClear }) => {
  const [isVisible, toggleVisibility] = useState(isClear ? true : false);
  const handleScroll = () => {
    if (window.pageYOffset > 500) {
      toggleVisibility(true);
    } else {
      toggleVisibility(false);
    }
  };

  useEffect(() => {
    if (!isClear) {
      window.addEventListener("scroll", handleScroll);
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }
  }, [isClear]);

  return (
    <HeaderContainer isVisible={isVisible} isClear={isClear}>
      <Navigation className="flex-row align">
        <a className="flex-row align" href="/#">
          <LogoImg src={isClear ? WhiteLogo : Logo} alt="Alec Logo" />
          <h6 className="heading-color">Alec Springel</h6>
        </a>
        <div className="flex-row align">
          <NavList className="flex-row" isClear={isClear}>
            <li>
              <Link to="/#about">About</Link>
            </li>
            <li>
              <Link to="/#experience">Experience</Link>
            </li>
            <li>
              <Link to="/#contact">Contact</Link>
            </li>
            <li>
              <NavButton href="/resume.pdf" target="_blank" autoWidth>
                Resume
              </NavButton>
            </li>
          </NavList>
        </div>
      </Navigation>
      <MobileNavigation className="flex-row align">
        <a className="flex-row align" href="/#">
          <LogoImg src={isClear ? WhiteLogo : Logo} alt="Alec Logo" />
          <h6 className="heading-color">Alec Springel</h6>
        </a>
        <MobileNav height="214px" isClear={isClear}>
          <MobileOption>
            <Link to="/#about">About</Link>
          </MobileOption>
          <MobileOption>
            <Link to="/#experience">Experience</Link>
          </MobileOption>
          <MobileOption>
            <Link to="/#contact">Contact</Link>
          </MobileOption>
          <MobileOption>
            <NavButton href="/resume.pdf" target="_blank" width="100px">
              Resume
            </NavButton>
          </MobileOption>
        </MobileNav>
      </MobileNavigation>
    </HeaderContainer>
  );
};

export default Header;

const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.25);
  background-color: ${(props) =>
    props.isClear ? "transparent" : props.theme.background};
  height: 70px;
  z-index: 10;
  transition: all 0.4s ease;
  ${(props) =>
    !props.isVisible &&
    css`
      transform: translateY(-100%);
    `}

  ${(props) =>
    props.isClear &&
    css`
      position: absolute;
      box-shadow: none;
      * {
        color: white;
        font-weight: 600;
        border-color: white;
      }
    `}
`;

const Navigation = styled.nav`
  padding: 0 29px;
  height: 100%;
  justify-content: space-between;
  @media (max-width: 655px) {
    display: none;
  }
`;

const MobileNavigation = styled.nav`
  display: none;
  padding: 0 29px;
  height: 100%;
  justify-content: space-between;
  @media (max-width: 655px) {
    display: flex;
  }
`;

const LogoImg = styled.img`
  height: 29px;
  width: 29px;
  margin-right: 14px;
`;

const NavList = styled.ul`
  list-style: none;
  margin: none;
  display: flex;
  align-items: center;

  li {
    margin: 0 23px;
  }

  li:last-child {
    margin: 0 0 0 23px;
  }

  a {
    :hover {
      color: ${(props) => props.theme.primary};
    }
    ${(props) =>
      props.isClear &&
      css`
        :hover {
          color: ${(props) => "#fff"};
          opacity: ${(props) => "0.8"};
        }
      `}
  }
`;

const NavButton = styled(Button)`
  padding: 7px 10px;
`;
