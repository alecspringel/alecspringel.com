import React from "react";
import styled from "styled-components";
import Button from "../common/Button";
import CodeWindowSvg from "../../images/CodeWindow.svg";
import BrowserFigure from "./BrowserFigure";

const Welcome = () => {
  return (
    <SectionWrapper className="flex-row">
      <div style={{ flex: 1.1 }} className="flex-row align">
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
      </div>
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
  @media (max-width: 989px) {
    flex-direction: column-reverse;
    align-items: center;
  }
`;

const Figure = styled.figure`
  display: flex;
  align-items: center;
  flex: 1;
  position: relative;
  @media (max-width: 1060px) {
    transform: scale(0.8);
  }
`;

const CodeWindow = styled.img`
  position: absolute;
`;
