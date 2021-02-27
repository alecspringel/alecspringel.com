import React from "react";
import styled from "styled-components";
import Button from "../common/Button";
import CodeWindowSvg from "../../images/CodeWindow.svg";
import BrowserFigure from "./BrowserFigure";

const Welcome = () => {
  return (
    <SectionWrapper className="flex-row align">
      <TextWrapper className="flex-row align">
        <div>
          <h6 className="primary-color margin-b10">Hi, I'm</h6>
          <h1 className="heading-color margin-b10">Alec Springel.</h1>
          <h3 className="margin-b20">Full-stack software engineer.</h3>
          <p style={{ maxWidth: 483 }}>
            A full-stack engineer with a passion for creating solutions to
            everyday problems. I enjoy building, designing, and deploying
            scalable software.
          </p>
          <Button style={{ marginTop: 50 }} width="120px">
            Say Hello
          </Button>
        </div>
      </TextWrapper>
      <Figure>
        <CodeWindow src={CodeWindowSvg} />
        <BrowserFigure />
      </Figure>
    </SectionWrapper>
  );
};

export default Welcome;

const SectionWrapper = styled.section`
  padding: 0;
  min-height: 90vh;
  transform: scale(1.2);
  padding-top: 0;

  @media (max-width: 1560px) {
    transform: scale(1);
  }
  /* @media (max-width: 725px) {
    flex-direction: column-reverse;
    align-items: center;
    justify-content: center;
  } */
`;

const TextWrapper = styled.div`
  min-width: 367px;
  @media (max-width: 725px) {
    min-width: auto;
  }
`;

const Figure = styled.figure`
  position: relative;
  @media (max-width: 725px) {
    display: none;
    margin-bottom: 40px;
  }
`;

const CodeWindow = styled.img``;
