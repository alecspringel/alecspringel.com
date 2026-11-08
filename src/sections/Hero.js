import React from 'react';
import styled from 'styled-components';
import Button from '../components/Button';
import { MEDIA_QUERY } from '../constants';
import AlecPNG from '../images/alec-portrait.webp';
import LinkedinSVG from '../images/linkedin-opaque.svg';
import EmailSVG from '../images/email-opaque.svg';
import GithubSVG from '../images/github-opaque.svg';

const Hero = () => (
  <Background className="flex-col jstfy-c align-c">
    <SectionBorder className="max-width mw-padding flex-col jstfy-c align-c">
      <HeroInner>
        <div className="hero-content flex-row jstfy-c align-c" style={{ gap: 40 }}>
          <Portrait>
            <img src={AlecPNG} alt="Alec Springel" />
          </Portrait>
          <div className="text-white" style={{ maxWidth: 600 }}>
            <p className="text-primary-2 m-b8">Hi, I&apos;m</p>
            <h1>Alec Springel</h1>
            <h2>A full-stack software engineer.</h2>
            <p className="m-t16">
              Currently working for Nike, my team and I develop consumer facing experiences
              and develop the infrastructure and tooling used across teams working
              on nike.com. I specialize in building and designing
              web applications for businesses of all shapes and sizes.
            </p>
            <div className="hero-actions flex-row m-t20" style={{ gap: 16 }}>
              <Button to="/#projects">See my work</Button>
              <Button outline light to="/#contact">Get in touch</Button>
            </div>
          </div>
        </div>
        <div className="hero-quick-links flex-row jstfy-c" style={{ gap: 16, width: '100%' }}>
          <QuickLink href="https://www.linkedin.com/in/alec-springel/" target="_blank" rel="noreferrer">
            <div className="flex-row align-c" style={{ gap: 15 }}>
              <img src={LinkedinSVG} alt="" />
              <h5 className="text-primary-2">LinkedIn</h5>
            </div>
            <p className="text-primary-2 m-t16">
              View experience, work history &amp; connect with me
            </p>
          </QuickLink>
          <QuickLink href="https://github.com/alecspringel" target="_blank" rel="noreferrer">
            <div className="flex-row align-c" style={{ gap: 15 }}>
              <img src={GithubSVG} alt="" />
              <h5 className="text-primary-2">GitHub</h5>
            </div>
            <p className="text-primary-2 m-t16">
              Explore projects, source code &amp; contributions
            </p>
          </QuickLink>
          <QuickLink href="mailto:alecspringel@gmail.com">
            <div className="flex-row align-c" style={{ gap: 15 }}>
              <img src={EmailSVG} alt="" />
              <h5 className="text-primary-2">Email</h5>
            </div>
            <p className="text-primary-2 m-t16">
              Contact me about a new project or opportunity
            </p>
          </QuickLink>
        </div>
      </HeroInner>
    </SectionBorder>
  </Background>
);

export default Hero;

// Shrink-wraps the photo + text row so the quick links below match its width exactly.
const HeroInner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  width: fit-content;
  max-width: 100%;
  gap: 64px;

  ${MEDIA_QUERY.TABLET} {
    gap: 48px;
    width: 100%;
  }
`;

const Portrait = styled.div`
  flex-shrink: 0;
  img {
    max-width: 100%;
    width: 340px;
  }
`;

const QuickLink = styled.a`
  flex: 1;
  background: radial-gradient(127.16% 127.16% at 50% 50%, #070821 84.38%, #040517 100%);
  box-shadow: var(--shadow-sm);
  border-radius: var(--radius-md);
  padding: 20px;
  :hover {
    background: radial-gradient(127.16% 127.16% at 50% 50%, #16183A 84.38%, #040517 100%);
  }
  p {
    font-size: 16px;
  }
`;

const SectionBorder = styled.div`
  border-left: 1px solid #11143D;
  border-right: 1px solid #11143D;
  width: 100%;
  height: 100%;
  gap: 64px;

  ${MEDIA_QUERY.TABLET} {
    gap: 48px;
    .hero-content {
      flex-direction: column;
    }
  }
`;

const Background = styled.section`
  min-height: 100vh;
  width: 100%;
  position: relative;
  background: #090B2B;
  padding: 120px 0 80px;

  ${MEDIA_QUERY.PHONE} {
    padding: 96px 0 60px;

    h2 {
      font-size: 28px;
      line-height: 1.3;
    }

    .hero-actions {
      flex-wrap: wrap;
    }

    .hero-quick-links {
      flex-direction: column;
      width: 100%;
    }

    ${QuickLink} {
      width: 100%;
    }
  }
`;
