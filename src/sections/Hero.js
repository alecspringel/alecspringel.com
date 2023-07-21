import React from 'react';
import styled from 'styled-components';
// import Button from '../components/Button';
import { MEDIA_QUERY } from '../constants';
import AlecPNG from '../images/alec-portrait.png';
import LinkedinSVG from '../images/linkedin-opaque.svg';
import EmailSVG from '../images/email-opaque.svg';
import GithubSVG from '../images/github-opaque.svg';

const Hero = () => (
  <Background className="flex-col jstfy-c align-c">
    <SectionBorder className="max-width mw-padding flex-col jstfy-c align-c" style={{ gap: 100 }}>
      <div className="hero-content flex-row jstfy-c align-c" style={{ gap: 40 }}>
        <div>
          <img src={AlecPNG} alt="alec springel" style={{ maxWidth: '100%' }} />
        </div>
        <div className="text-white" style={{ maxWidth: 560 }}>
          <p className="text-primary m-b8">Hi I&apos;m</p>
          <h1>Alec Springel</h1>
          <h2>A full-stack software engineer.</h2>
          <p className="m-t16">
            Currently working for Nike, my team and I develop consumer facing experiences
            and develop the infrastructure and tooling used across teams working
            on nike.com. I specialize in building and designing
            web applications for businesses of all shapes and sizes.
          </p>
          {/* <Button className="m-t20" to="/#contact">Contact Me</Button> */}
        </div>
      </div>
      <div className="hero-quick-links flex-row jstfy-c align-c" style={{ gap: 16, maxWidth: 950 }}>
        <QuickLink href="https://www.linkedin.com/in/alec-springel/" target="_blank">
          <div className="flex-row align-c" style={{ gap: 15 }}>
            <img src={LinkedinSVG} alt="linkedin icon" />
            <h5 className="text-primary-2">Linkedin</h5>
          </div>
          <p className="text-primary-2 m-t16">
            View experience, work history &

            connect with me
          </p>
        </QuickLink>
        <QuickLink href="https://github.com/alecspringel" target="_blank">
          <div className="flex-row align-c" style={{ gap: 15 }}>
            <img src={GithubSVG} alt="github icon" />
            <h5 className="text-primary-2">GitHub</h5>
          </div>
          <p className="text-primary-2 m-t16">
            Explore projects, source code &

            contributions
          </p>
        </QuickLink>
        <QuickLink href="mailto:alecspringel@gmail.com" target="_blank">
          <div className="flex-row align-c" style={{ gap: 15 }}>
            <img src={EmailSVG} alt="email icon" />
            <h5 className="text-primary-2">Email</h5>
          </div>
          <p className="text-primary-2 m-t16">
            Contact me about a new project

            or opportunity
          </p>
        </QuickLink>
      </div>
    </SectionBorder>
  </Background>
);

export default Hero;

const FloatingContent = styled.div`
  margin-bottom: 180px;
  margin-left: 120px;
`;

const QuickLink = styled.a`
  background: radial-gradient(127.16% 127.16% at 50% 50%, #070821 84.38%, #040517 100%);
  box-shadow: 0px 0px 3.6848px 0.921201px rgba(0, 0, 0, 0.25);
  border-radius: 20.2664px;
  padding: 20px;
  :hover {
    background: radial-gradient(127.16% 127.16% at 50% 50%, #16183A 84.38%, #040517 100%);
  }
`;

const SectionBorder = styled.div`
  border-left: 1px solid #11143D;
  border-right: 1px solid #11143D;
  width: 100%;
  height: 100%;
  ${MEDIA_QUERY.TABLET} {
    .hero-content {
      flex-direction: column;
    }
  }
`;

const Background = styled.section`
  height: 100vh;
  max-height: 1440px;
  width: 100%;
  position: relative;
  background: #090B2B;
  padding: 100px 0;

  ${MEDIA_QUERY.TABLET} {
    height: auto;
    max-height: fit-content;
    & ${FloatingContent} {
      margin: 0;
      padding: var(--max-width-padding);
      padding-bottom: 60px;
    }
  }

  ${MEDIA_QUERY.PHONE} {
    .hero-quick-links {
      flex-direction: column;
      width: 100%;
    }

    ${QuickLink} {
      width: 100%;
    }
  }
`;
