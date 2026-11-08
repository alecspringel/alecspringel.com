import { Link } from 'gatsby';
import React, { useEffect, useState } from 'react';
import styled, { css } from 'styled-components';
import LogoSVG from '../images/logo.svg';
import { MEDIA_QUERY } from '../constants';
import MobileNav from '../components/MobileNav';
import Button from '../components/Button';

const SECTIONS = ['about', 'experience', 'projects'];

// Background fades in as soon as the page is scrolled at all.
const useScrolled = () => {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 0);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return scrolled;
};

// Which section is in the middle of the screen, for the active nav link.
const useActiveSection = () => {
  const [active, setActive] = useState(null);
  useEffect(() => {
    if (typeof IntersectionObserver === 'undefined') return undefined;
    const ids = [...SECTIONS, 'contact'];
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) setActive(entry.target.id);
      });
    }, { rootMargin: '-45% 0px -50% 0px' });
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);
  return active;
};

const Navigation = () => {
  const scrolled = useScrolled();
  const active = useActiveSection();

  return (
    <NavigationBar className="flex-row align-c">
      <NavigationContent className="m-auto flex-row align-c mw-padding" $scrolled={scrolled}>
        <Link to="/" className="flex-row align-c text-white heading" style={{ gap: 12, fontFamily: 'var(--heading-font)' }}>
          <img src={LogoSVG} alt="" style={{ height: 30 }} />
          Alec Springel
        </Link>
        <MobileNav active={active} />
        <ul className="desktop-nav flex-row align-c">
          {SECTIONS.map((id) => (
            <li key={id}>
              <NavLink
                href={`/#${id}`}
                $active={active === id}
                aria-current={active === id ? 'location' : undefined}
              >
                {id.charAt(0).toUpperCase() + id.slice(1)}
              </NavLink>
            </li>
          ))}
          <li style={{ paddingLeft: 12 }}>
            <Button small to="/#contact">Contact</Button>
          </li>
        </ul>
      </NavigationContent>
    </NavigationBar>
  );
};

export default Navigation;

// Fixed nav: the content row is a rounded bar within the layout width (see NavigationContent).
const NavigationBar = styled.nav`
  height: var(--nav-height);
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 20;
  pointer-events: none;

  & > * {
    pointer-events: auto;
  }

  .desktop-nav {
    list-style: none;
  }

  ${MEDIA_QUERY.TABLET} {
    .desktop-nav {
      display: none;
    }
  }
`;

// Always the same rounded bar within the layout width; scrolling only fades in its
// navy surface, border, and shadow, so the size never changes.
const NavigationContent = styled.div`
  width: 100%;
  max-width: min(1100px, calc(100% - 32px));
  height: 52px;
  margin-top: 12px;
  padding: 0 12px 0 20px;
  justify-content: space-between;
  position: relative;
  border-radius: var(--radius-md);
  border: 1px solid transparent;
  background: transparent;
  transition: background 200ms ease, border-color 200ms ease, box-shadow 200ms ease;

  ${({ $scrolled }) => $scrolled && css`
    background: rgba(9, 11, 43, 0.88);
    border-color: rgba(174, 172, 255, 0.16);
    box-shadow: 0 10px 30px rgba(9, 11, 43, 0.25);
    -webkit-backdrop-filter: blur(16px);
    backdrop-filter: blur(16px);
  `}

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

const NavLink = styled.a`
  position: relative;
  display: inline-block;
  font-family: var(--heading-font);
  color: ${({ $active }) => ($active ? '#fff' : 'rgba(255, 255, 255, 0.72)')};
  padding: 6px 20px;
  transition: color 150ms ease;

  &:hover {
    color: #fff;
  }

  /* Small indigo underline on the section you're reading */
  &::after {
    content: '';
    position: absolute;
    left: 50%;
    bottom: 0;
    width: 18px;
    height: 2px;
    border-radius: 2px;
    background: var(--primary-2);
    transform: translateX(-50%) scaleX(${({ $active }) => ($active ? 1 : 0)});
    transition: transform 200ms ease;
  }
`;
