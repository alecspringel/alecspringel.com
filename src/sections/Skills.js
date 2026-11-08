import React from 'react';
import styled from 'styled-components';
import { MEDIA_QUERY } from '../constants';
import PhonePNG from '../images/phone.webp';
import ServerPNG from '../images/server.webp';
import { OVERVIEW } from '../content';

const Skills = () => (
  <section style={{ overflow: 'hidden', position: 'relative', isolation: 'isolate' }} id="about">
    <SectionBorder className="max-width">
      <div className="skills-flex-wrapper flex-row align-c jstfy-c">
        <div style={{ flex: 1 }}>
          <h6 className="text-primary m-b12">About</h6>
          <Heading className="m-b20">A bit about me</Heading>
          {OVERVIEW.map((paragraph, i) => (
            <p key={paragraph} className={i ? 'm-t16' : ''}>{paragraph}</p>
          ))}
        </div>
        <div style={{ flex: 1, maxWidth: '100%' }}>
          <DeviceWrapper className="flex-row jstfy-e">
            <SmallCircle aria-hidden="true" />
            <PhoneImg src={PhonePNG} alt="" />
            <ServerImg src={ServerPNG} alt="" />
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
  ${MEDIA_QUERY.SMALL_LAPTOPS} {
    position: relative;
    top: 0;
    margin-top: 56px;
    width: 100%;
    max-width: 600px;
  }
`;

const PhoneImg = styled.img.attrs({ loading: 'lazy', decoding: 'async' })`
  margin-right: 10px;
  z-index: 1;
  object-fit: contain;
  width: 290px;
`;

const ServerImg = styled.img.attrs({ loading: 'lazy', decoding: 'async' })`
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

// Circle for stacked layouts (992px and below). It lives inside the image group, so it
// is sized and centered relative to the images at any width and bleeds off the right edge.
const SmallCircle = styled.div`
  display: none;
  position: absolute;
  z-index: 0; /* the images are z-index 1 */
  top: 50%;
  right: -16%;
  width: 72%;
  aspect-ratio: 1 / 1;
  transform: translateY(-50%);
  border-radius: 50%;
  background: radial-gradient(50% 50% at 50% 50%, #D7D6FF 0%, #A6A4F7 100%);
  pointer-events: none;

  ${MEDIA_QUERY.SMALL_LAPTOPS} {
    display: block;
  }

  ${MEDIA_QUERY.PHONE} {
    right: -20%;
    width: 78%;
  }
`;

// z-index -1 keeps the circle behind the text; the section's isolation keeps it
// above the page background.
const CircleContainer = styled.div`
  position: absolute;
  z-index: -1;
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
  padding: 160px 30px;

  ${MEDIA_QUERY.SMALL_LAPTOPS} {
    .skills-flex-wrapper {
      flex-direction: column;
      align-items: stretch;
    }

    /* Once text and images stack, SmallCircle (inside the image group) takes over */
    ${CircleContainer} {
      display: none;
    }

    ${PhoneImg} {
      width: 38%;
    }

    ${ServerImg} {
      width: 60%;
    }
  }

  ${MEDIA_QUERY.PHONE} {
    padding: 100px 16px;

    ${DeviceWrapper} {
      align-items: baseline;
      justify-content: flex-start;
    }
  }
`;
