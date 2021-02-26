import React from "react";
import styled from "styled-components";
import CirclesFigure from "./CirclesFigure";

const About = () => {
  return (
    <a id="about">
      <Section className="flex-row justify">
        <Line />
        <div style={{ position: "relative", flex: 1 }}>
          <CirclesFigure />
        </div>
        <TextWrapper className="flex-col">
          <h4 className="heading-color margin-b10">About Me</h4>
          <AboutP>
            Alec Springel
            <br />
            B.S. Computer &amp; Information Science, <br />
            with a minor in Chemistry at the University of Oregon
          </AboutP>

          <SkillsDiv className="flex-row">
            <Line className="dashed-horizontal" />
            <SkillsTitle>
              <h6 className="heading-color">Skills</h6>
            </SkillsTitle>
            <ul>
              JavaScript
              <br />
              Python
              <br />
              NodeJS
              <br />
              Git
              <br />
              REST
            </ul>
            <ul>
              HTML 5<br />
              CSS 3<br />
              ReactJS
              <br />
              React Native
              <br />
              GraphQL
            </ul>
            <ul>
              MongoDB
              <br />
              AWS
              <br />
              AdobeXD
              <br />
              Figma
              <br />
              ElectronJS
            </ul>
          </SkillsDiv>
        </TextWrapper>
      </Section>
    </a>
  );
};

export default About;

const Section = styled.section`
  align-items: center;
  position: relative;
`;

const Line = styled.div`
  position: absolute;
  width: 100%;
  left: -100%;
  z-index: -1;
`;

const TextWrapper = styled.div`
  margin-left: 20px;
  margin-top: 100px;
`;

const SkillsTitle = styled.div`
  background-color: ${(props) => props.theme.background3};
  padding: 10px 29px;
  border-radius: 6px 6px 0 0;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
`;

const SkillsDiv = styled.div`
  background-color: ${(props) => props.theme.background2};
  padding: 66px 29px 25px 29px;
  border-radius: 0 0 6px 6px;
  position: relative;
  align-items: center;
  justify-content: space-between;
  margin-top: 30px;
  box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.25);
`;

const AboutP = styled.p`
  line-height: 26px;
`;
