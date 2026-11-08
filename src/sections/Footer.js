import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { MEDIA_QUERY } from '../constants';
import { LAST_UPDATED } from '../content';
import LogoSVG from '../images/logo.svg';
import {
  MailIcon, LinkedInIcon, GitHubIcon, ArrowUpIcon,
} from '../components/Icons';

const NAV = [
  { label: 'About', href: '/#about' },
  { label: 'Experience', href: '/#experience' },
  { label: 'Projects', href: '/#projects' },
  { label: 'Contact', href: '/#contact' },
];

const SOCIAL = [
  {
    label: 'LinkedIn', href: 'https://www.linkedin.com/in/alec-springel/', icon: LinkedInIcon, external: true,
  },
  {
    label: 'GitHub', href: 'https://github.com/alecspringel', icon: GitHubIcon, external: true,
  },
  { label: 'Email', href: 'mailto:alecspringel@gmail.com', icon: MailIcon },
];

// Current time in Portland, filled in after mount so the static build and the browser agree.
const usePortlandTime = () => {
  const [time, setTime] = useState(null);
  useEffect(() => {
    const format = () => new Intl.DateTimeFormat('en-US', {
      hour: 'numeric', minute: '2-digit', timeZone: 'America/Los_Angeles',
    }).format(new Date());
    setTime(format());
    const id = setInterval(() => setTime(format()), 30000);
    return () => clearInterval(id);
  }, []);
  return time;
};

const Footer = () => {
  const time = usePortlandTime();

  return (
    <StyledFooter>
      <Glow aria-hidden="true" />
      <Inner className="max-width">
        <Top>
          <Brand>
            <a href="/#" className="name">
              <img src={LogoSVG} alt="" />
              Alec Springel
            </a>
            <p className="tagline">Frontend platform &amp; full-stack engineer</p>
            <p className="local">
              <span className="pulse" aria-hidden="true" />
              {time ? `It's ${time} in Portland, OR` : 'Portland, OR · Pacific Time'}
            </p>
            <Social>
              {SOCIAL.map(({
                label, href, icon: SocialIcon, external,
              }) => (
                <li key={label}>
                  <a
                    href={href}
                    aria-label={label}
                    title={label}
                    target={external ? '_blank' : undefined}
                    rel={external ? 'noreferrer' : undefined}
                  >
                    <SocialIcon />
                  </a>
                </li>
              ))}
            </Social>
          </Brand>

          <Columns>
            <div>
              <h6>Navigate</h6>
              <ul>
                {NAV.map((item) => (
                  <li key={item.label}><a href={item.href}>{item.label}</a></li>
                ))}
              </ul>
            </div>
            <div>
              <h6>Elsewhere</h6>
              <ul>
                <li><a href="https://www.linkedin.com/in/alec-springel/" target="_blank" rel="noreferrer">LinkedIn ↗</a></li>
                <li><a href="https://github.com/alecspringel" target="_blank" rel="noreferrer">GitHub ↗</a></li>
                <li><a href="mailto:alecspringel@gmail.com">Email</a></li>
              </ul>
            </div>
          </Columns>

          <BackToTop href="/#" aria-label="Back to top">
            <ArrowUpIcon />
            <span>Back to top</span>
          </BackToTop>
        </Top>

        <Wordmark aria-hidden="true">Alec Springel</Wordmark>

        <Bottom>
          <span>
            ©
            {' '}
            {new Date().getFullYear()}
            {' '}
            Alec Springel · Designed and built by me with React and Gatsby · Last updated
            {' '}
            {LAST_UPDATED}
          </span>
          <a href="https://github.com/alecspringel/alecspringel.com" target="_blank" rel="noreferrer">
            View this site&apos;s source on GitHub ↗
          </a>
        </Bottom>
      </Inner>
    </StyledFooter>
  );
};

export default Footer;

const StyledFooter = styled.footer`
  position: relative;
  overflow: hidden;
  background: #05061C;
  color: #fff;
`;

// Soft indigo light along the top edge
const Glow = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  width: 80%;
  height: 1px;
  transform: translateX(-50%);
  background: linear-gradient(to right, transparent, #4C48EF 30%, #AEACFF 50%, #4C48EF 70%, transparent);

  &::after {
    content: '';
    position: absolute;
    left: 10%;
    right: 10%;
    top: 0;
    height: 120px;
    background: radial-gradient(50% 100% at 50% 0%, rgba(76, 72, 239, 0.25), transparent);
  }
`;

const Inner = styled.div`
  position: relative;
  margin: auto;
  padding: 72px 30px 28px;

  ${MEDIA_QUERY.PHONE} {
    padding: 56px 16px 24px;
  }
`;

const Top = styled.div`
  display: grid;
  grid-template-columns: 1.3fr 1fr auto;
  gap: 48px;
  align-items: start;

  ${MEDIA_QUERY.TABLET} {
    grid-template-columns: 1fr;
    gap: 40px;
  }
`;

const Brand = styled.div`
  .name {
    display: inline-flex;
    align-items: center;
    gap: 12px;
    font-family: var(--heading-font);
    font-size: 22px;
    color: #fff;

    img {
      height: 34px;
    }
  }

  .tagline {
    margin-top: 10px;
    font-size: 16px;
    color: #C5C4FA;
  }

  .local {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    margin-top: 16px;
    font-family: var(--heading-font);
    font-size: 13px;
    color: #AEACFF;
    background: rgba(76, 72, 239, 0.12);
    border: 1px solid #1F2360;
    border-radius: 100px;
    padding: 6px 14px 6px 12px;
  }

  .pulse {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: #7CF0B0;
    box-shadow: 0 0 0 0 rgba(124, 240, 176, 0.6);
    animation: footer-pulse 2.4s ease-out infinite;
  }

  @keyframes footer-pulse {
    0% { box-shadow: 0 0 0 0 rgba(124, 240, 176, 0.55); }
    70% { box-shadow: 0 0 0 8px rgba(124, 240, 176, 0); }
    100% { box-shadow: 0 0 0 0 rgba(124, 240, 176, 0); }
  }

  @media (prefers-reduced-motion: reduce) {
    .pulse {
      animation: none;
    }
  }
`;

const Social = styled.ul`
  list-style: none;
  display: flex;
  gap: 10px;
  margin-top: 22px;

  a {
    width: 40px;
    height: 40px;
    border-radius: var(--radius-sm);
    display: flex;
    align-items: center;
    justify-content: center;
    color: #AEACFF;
    background: #0D0F33;
    border: 1px solid #1F2360;
    transition: transform 150ms ease, background 150ms ease, color 150ms ease, border-color 150ms ease;

    svg {
      width: 18px;
      height: 18px;
    }

    &:hover,
    &:focus-visible {
      color: #fff;
      background: var(--primary);
      border-color: var(--primary);
      transform: translateY(-2px);
    }
  }
`;

const Columns = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 32px;

  h6 {
    font-size: 12px;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: #7E7CC9;
    margin-bottom: 14px;
  }

  ul {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  a {
    font-size: 15px;
    color: #DCDBFF;
    overflow-wrap: anywhere;
    transition: color 150ms ease;

    &:hover,
    &:focus-visible {
      color: #fff;
      text-decoration: underline;
      text-decoration-color: var(--primary);
      text-underline-offset: 4px;
    }
  }
`;

const BackToTop = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-family: var(--heading-font);
  font-size: 14px;
  color: #fff;
  border: 1px solid #2A2E6E;
  border-radius: 100px;
  padding: 8px 16px 8px 12px;
  transition: border-color 150ms ease, background 150ms ease;

  svg {
    width: 16px;
    height: 16px;
    transition: transform 150ms ease;
  }

  &:hover,
  &:focus-visible {
    border-color: var(--primary);
    background: rgba(76, 72, 239, 0.15);

    svg {
      transform: translateY(-2px);
    }
  }

  ${MEDIA_QUERY.TABLET} {
    justify-self: start;
  }
`;

// Oversized faded name across the bottom
const Wordmark = styled.div`
  margin-top: 56px;
  font-family: var(--heading-font);
  font-weight: 500;
  font-size: clamp(56px, 13vw, 190px);
  line-height: 0.9;
  letter-spacing: -0.03em;
  white-space: nowrap;
  text-align: center;
  background: linear-gradient(to bottom, rgba(174, 172, 255, 0.22), rgba(174, 172, 255, 0));
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  user-select: none;
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 8px 24px;
  padding-top: 20px;
  border-top: 1px solid #14174A;
  font-family: var(--body-font);
  font-size: 13px;
  color: #7E7CC9;

  a {
    color: #7E7CC9;

    &:hover {
      color: #AEACFF;
    }
  }
`;
