import React from "react";
import styled from "styled-components";
import Button from "../common/Button";
import CodeWindowSvg from "../../images/CodeWindow.svg";
import BrowserFigure from "./BrowserFigure";

const Welcome = () => {
  return (
    <SectionWrapper className="flex-row">
      <div style={{ flex: 1.1 }}>
        <h6 className="primary-color margin-b10">Hi, I'm</h6>
        <h1 className="heading-color margin-b10">Alec Springel.</h1>
        <h3 className="margin-b20">Full-stack software engineer.</h3>
        <p style={{ maxWidth: 483 }}>
          A full-stack engineer with a passion for creating solutions to
          everyday problems. I enjoy building, designing, and deploying scalable
          software.
        </p>
        <Button style={{ marginTop: 50 }} width="120px">
          Say Hello
        </Button>
      </div>
      <div style={{ flex: 1 }}>
        <FigureWrapper>
          <Figure>
            <CodeWindow src={CodeWindowSvg} />
            <BrowserFigure />
          </Figure>
        </FigureWrapper>
      </div>
    </SectionWrapper>
  );
};

export default Welcome;

const SectionWrapper = styled.section`
  padding: 170px 0;
`;

const Figure = styled.figure`
  position: relative;
`;

const FigureWrapper = styled.div`
  position: absolute;
`;

const CodeWindow = styled.img`
  position: absolute;
`;
