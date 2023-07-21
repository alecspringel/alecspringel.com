import React from 'react';
import styled from 'styled-components';
import { MEDIA_QUERY } from '../constants';
import PhonePNG from '../images/phone.png';
import ServerPNG from '../images/server.png';

const Skills = () => (
  <section style={{ overflow: 'hidden' }} id="about">
    <SectionBorder className="mw-padding max-width" style={{ padding: '300px 30px' }}>
      <div className="skills-flex-wrapper flex-row align-c jstfy-c">
        <div style={{ flex: 1 }}>
          <h6 className="text-primary m-b12">Skills & Specialization</h6>
          <Heading className="m-b20">Web development & beyond</Heading>
          <p>
            As a developer, I have dedicated my time to creating tools for the web.
            With over 5 years of experience with web technologies, I&apos;m focused on
            helping businesses generate revenue, grow new customers, and simplify processes in
            the workplace.
            <br />
            <br />
            Some of my past projects include customer portals,
            tools for tracking product inventory and business metrics, and even
            a message board for students and teachers.
          </p>
        </div>
        <div style={{ flex: 1, maxWidth: '100%' }}>
          <DeviceWrapper className="flex-row jstfy-e">
            <PhoneImg src={PhonePNG} alt="phone with different apps, languages and software frameworks" />
            <ServerImg src={ServerPNG} alt="server building an application" />
          </DeviceWrapper>
        </div>
      </div>
      <CircleContainer>
        <Circle1 />
        <Circle2 />
        <Circle3 />
      </CircleContainer>
    </SectionBorder>
  </section>
);

export default Skills;

const Heading = styled.h3`
  margin-left: -31px;
  padding-left: 27px;
  border-left: 3px solid var(--primary);
`;

const DeviceWrapper = styled.div`
  position: absolute;
  top: 23%;
  ${MEDIA_QUERY.PHONE} {
    position: relative;
    margin-bottom: 40px;
  }
`;

const PhoneImg = styled.img`
  margin-right: 10px;
  z-index: 1;
  object-fit: contain;
  width: 290px;
`;

const ServerImg = styled.img`
  margin-right: 0px;
  z-index: 1;
  object-fit: contain;
  width: 450px;
`;

const Circle1 = styled.div`
  background: radial-gradient(50% 50% at 50% 50%, #D7D6FF 0%, #A6A4F7 100%);
  height: 500px;
  width: 500px;
  border-radius: 1000px;
`;

const Circle2 = styled.div`
  background: linear-gradient(90deg, rgba(215, 214, 255, 0) 0%, rgba(190, 188, 251, 0) 50%, #CFCEFF 50%, #CFCEFF 100%);
  height: 600px;
  width: 600px;
  border-radius: 1000px;
  position: absolute;
  left: -50px;
  z-index: -1;
`;

const Circle3 = styled.div`
  background: linear-gradient(90deg,rgba(215,214,255,0) 0%,rgba(190,188,251,0) 50%,#DFDEFF 50%,#dfdeff73 20%);
  height: 700px;
  width: 700px;
  border-radius: 1000px;
  position: absolute;
  left: -100px;
  z-index: -2;
`;

const CircleContainer = styled.div`
  position: absolute;
  height: 100%;
  width: 500px;
  top: 0;
  right: -250px;
  display: flex;
  align-items: center;
`;

const SectionBorder = styled.div`
  border-left: 1px solid #E5E5E5;
  border-right: 1px solid #E5E5E5;
  margin: auto;
  height: 100%;
  position: relative;

  ${MEDIA_QUERY.PHONE} {
    padding: 200px 30px;

    .skills-flex-wrapper {
      flex-direction: column-reverse;
    }

    ${CircleContainer} {
      height: auto;
      top: 20%;
      transform: rotate(180deg);
      z-index: -1;
    }

    ${DeviceWrapper} {
      align-items: baseline;
      justify-content: flex-start;
    }
  }
`;
