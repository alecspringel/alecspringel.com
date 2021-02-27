import React from "react";
import styled from "styled-components";
import Logo from "../images/logo.svg";
import { Link } from "gatsby";
import Button from "./common/Button";
import MobileNav from "./mobileNav/MobileNav";
import MobileOption from "./mobileNav/MobileOption";

const Header = () => {
  return (
    <HeaderContainer>
      <Navigation className="flex-row align">
        <a className="flex-row align" href="/#">
          <LogoImg src={Logo} alt="Alec Logo" />
          <h6 className="heading-color">Alec Springel</h6>
        </a>
        <div className="flex-row align">
          <NavList className="flex-row">
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
          <LogoImg src={Logo} alt="Alec Logo" />
          <h6 className="heading-color">Alec Springel</h6>
        </a>
        <MobileNav height="214px">
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
  background-color: ${(props) => props.theme.background};
  height: 70px;
  z-index: 10;
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
    /* color: ${(props) => props.theme.bodyColor}; */
    :hover {
      color: ${(props) => props.theme.primary};
    }
  }
`;

const NavButton = styled(Button)`
  padding: 7px 10px;
`;
