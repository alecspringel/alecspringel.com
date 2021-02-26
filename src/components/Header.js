import React from "react";
import styled from "styled-components";
import Logo from "../images/logo.svg";
import { Link } from "gatsby";
import Button from "./common/Button";

const Header = () => {
  return (
    <HeaderContainer>
      <Navigation className="flex-row align">
        <div className="flex-row">
          <LogoImg src={Logo} alt="Alec Logo" />
          <h6 className="heading-color">Alec Springel</h6>
        </div>
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
              <NavButton href="/#" autoWidth>
                Resume
              </NavButton>
            </li>
          </NavList>
        </div>
      </Navigation>
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
`;

const Navigation = styled.nav`
  padding: 0 29px;
  height: 100%;
  justify-content: space-between;
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
