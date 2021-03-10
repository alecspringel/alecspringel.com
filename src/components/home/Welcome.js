import React from "react";
import styled from "styled-components";
import Button from "../common/Button";
import CodeWindowSvg from "../../images/CodeWindow.svg";
import BrowserFigure from "./BrowserFigure";
import Header from "../Header";
import FadeIn from "../common/animation/FadeIn";

const Welcome = () => {
  return (
    <>
      <Header isClear />
      <Wrapper>
        <Gradient>
          <IFrame
            title="Floating shapes"
            src="https://my.spline.design/alecspringelcomshapescopy-18ef15da76055d032f96b95a113a3ab2/"
            frameBorder="0"
            width="100%"
            height="110%"
            style={{ position: "relative" }}
          ></IFrame>
        </Gradient>
        <Background />
        <SectionWrapper className="flex-row align">
          <TextWrapper className="flex-row align">
            <div style={{ marginTop: 90 }}>
              <h6 className="primary-color margin-b10 margin-t20">Hi, I'm</h6>
              <h1 className="heading-color margin-b10">Alec Springel.</h1>
              <h3 className="heading-color margin-b20">
                A full-stack software engineer.
              </h3>
              <p style={{ maxWidth: 483 }}>
                A full-stack engineer with a passion for creating solutions to
                everyday problems. I enjoy building, designing, and deploying
                scalable software.
              </p>
              <Button style={{ marginTop: 50 }} width="120px" href="/#contact">
                Say Hello
              </Button>
            </div>
          </TextWrapper>
          <Figure>
            <FadeIn delay={300}>
              <CodeWindow src={CodeWindowSvg} />
            </FadeIn>
            <FadeIn
              style={{ position: "absolute", top: "30%", left: "20%" }}
              delay={500}
            >
              <BrowserFigure />
            </FadeIn>
          </Figure>
        </SectionWrapper>
      </Wrapper>
    </>
  );
};

export default Welcome;

const SectionWrapper = styled.section`
  min-height: 100vh;
  max-height: 860px;
  transform: scale(1.2);
  max-width: 1260px;
  margin: auto;
  padding: 2rem 2rem;

  @media (max-width: 1560px) {
    transform: scale(1);
  }
`;

const Gradient = styled.div`
  position: absolute;
  overflow: hidden;
  width: 100%;
  height: 100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    45deg,
    #f17c58,
    #e94584,
    #24aadb,
    #27dbb1,
    #ffdc18,
    #ff3706
  );
  background-size: 600% 100%;
  animation: gradient 16s linear infinite;
  animation-direction: alternate;
  @keyframes gradient {
    0% {
      background-position: 0%;
    }
    100% {
      background-position: 100%;
    }
  }
`;

const Wrapper = styled.div`
  position: relative;
`;

const Background = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  background: linear-gradient(
    9deg,
    rgb(52, 52, 52) 59%,
    #0000005c 59%,
    #00000000 60%,
    transparent 59%
  );
  width: 100%;
  height: 100%;
  @media (max-width: 1200px) {
    background: linear-gradient(
      18deg,
      rgb(52, 52, 52) 63%,
      #0000005c 59%,
      #00000000 60%,
      transparent 63%
    );
  }
  @media (max-width: 725px) {
    background: linear-gradient(9deg, rgb(52, 52, 52) 0%, #00000069 0%);
  }
`;

const TextWrapper = styled.div`
  min-width: 367px;
  margin-right: 60px;
  @media (max-width: 725px) {
    min-width: auto;
    * {
      color: #fff;
      border-color: #fff;
    }
  }
`;

const Figure = styled.figure`
  position: relative;
  transform: scale(1.2);
  @media (max-width: 725px) {
    display: none;
    margin-bottom: 40px;
  }
`;

const CodeWindow = styled.img``;

const IFrame = styled.iframe`
  animation: iframeOpacity 1s;
  animation-fill-mode: forwards;
  animation-delay: 5s;
  opacity: 0;
  @keyframes iframeOpacity {
    0% {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  @media (max-width: 1200px) {
    width: 150%;
    height: 96%;
  }
  @media (max-width: 725px) {
    animation-delay: 1s;
    width: 100%;
    height: 110%;
  }
`;
