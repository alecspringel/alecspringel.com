import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';
import LogoSVG from '../images/logo.svg';
import { MEDIA_QUERY } from '../constants';
import MobileNav from '../components/MobileNav';
import Button from '../components/Button';

const DesktopNav = () => (
  <ul className="desktop-nav">
    <NavLink to="/#">Home</NavLink>
    <NavLink to="/#about" style={{ paddingRight: 40 }}>About</NavLink>
    <Button small href="https://billing.stripe.com/p/login/00g9Ds9ql7f73W8144" target="_blank">Client Portal</Button>
  </ul>
);

const Navigation = () => (
  <NavigationBar className="flex-row align-c">
    <NavigationContent className="m-auto flex-row align-c p-t8 p-b8 mw-padding">
      <div className="flex-row align-c text-white heading" style={{ gap: 12 }}>
        <img src={LogoSVG} alt="alecspringel.com logo" style={{ height: 30 }} />
        Alec Springel
      </div>
      <MobileNav height="180px" />
      <DesktopNav />
    </NavigationContent>
  </NavigationBar>
);

export default Navigation;

const NavigationBar = styled.nav`
  height: 64px;
  position: absolute;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 1;

  ${MEDIA_QUERY.TABLET} {
    .desktop-nav {
      display: none;
    }
  }
`;

const NavigationContent = styled.div`
  max-width: 1440px;
  width: 100%;
  justify-content: space-between;
  position: relative;

  & > img {
    height: 36px;
    margin-right: 12px;
  }

  @media only screen and (max-width: 400px) {
    & > img {
      height: 28px;
    }
  }

  @media only screen and (max-width: 300px) {
    & > img {
      display: none;
    }
  }
`;

const NavLink = styled(Link)`
  font-family: "Poppins";
  color: #fff;
  padding: 0 20px;
`;
