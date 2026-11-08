import React from 'react';
import styled from 'styled-components';
import DesignSVG from '../images/design-glass.svg';
import SystemDesignSVG from '../images/code-fork-glass.svg';
import BetterLunchPNG from '../images/betterlunch-design.png';
import AWSSystemPNG from '../images/aws-system.png';
import { MEDIA_QUERY } from '../constants';
import DevelopmentProcess from '../images/development-process.png';
import DevelopmentProcessMobile from '../images/development-process-mobile.png';

const Design = () => (
  <section style={{ overflow: 'hidden', background: '#F9F9FF', boxShadow: '0px 2px 4px 2px rgba(0, 0, 0, 0.12)' }}>
    <SectionBorder className="mw-padding max-width section-p-t section-p-b" style={{ gap: 40 }}>
      <h6 className="text-primary m-b12">End-to-end Services</h6>
      <h4 className="m-b8">Complete Solutions for the Web</h4>
      <p style={{ maxWidth: 900, marginBottom: 40 }}>
        Developing successful software is all about planning. Before beginning any
        project, it is important to discuss the application&apos;s requirements. The
        goals, purpose, and desired audience for the application play an important role
        in the development process.
      </p>
      <img src={DevelopmentProcess} alt="development process diagram" style={{ width: '100%', maxWidth: 900 }} className="design-dev-img" />
      <img src={DevelopmentProcessMobile} alt="development process diagram" style={{ width: '100%', maxWidth: 400 }} className="design-mobile-dev-img" />
      <div className="skills-flex-wrapper flex-row jstfy-c" style={{ gap: 60, marginTop: 120 }}>
        <div className="flex-col">
          <div className="flex-row align-c m-b16" style={{ gap: 10 }}>
            <img src={DesignSVG} alt="design icon" />
            <h4>UI Design</h4>
          </div>
          <p>
            After discussing the purpose of the project and covering requirements,
            a design of the project helps visualize the look and feel. Creating a design
            that aligns with current business branding and identity is key--the design
            will impact how users will feel while using the application.
          </p>
          <Photo src={BetterLunchPNG} alt="code fork icon" />
          <ul>
            <li>
              <ListCircle />
              Designs paint a picture of the app before it&apos;s completed
            </li>
            <li>
              <ListCircle />
              <div>
                Check out my favorite design tool,
                <a href="https://www.figma.com/about/" target="_blank" rel="noreferrer"> Figma</a>
                , the industry leading iterative design tool
              </div>
            </li>
          </ul>
        </div>
        <div className="flex-col">
          <div className="flex-row align-c m-b16" style={{ gap: 10 }}>
            <img src={SystemDesignSVG} alt="code fork icon" />
            <h4>System Design</h4>
          </div>
          <p>
            Apps today are made up of many moving pieces.
            Laying out these pieces and designing an overall system is key for
            maintainability and scalability. System design helps identify the smallest
            parts of an application to make development and planning easier.
          </p>
          <Photo src={AWSSystemPNG} alt="code fork icon" />
          <ul>
            <li>
              <ListCircle />
              <a href="https://aws.amazon.com/what-is-aws/" target="_blank" rel="noreferrer">AWS</a>
              &nbsp;is my preferred computing & infrastructure provider
            </li>
            <li>
              <ListCircle />
              Amazon Web Services offers a wide range of services for all types of applications
            </li>
          </ul>
        </div>
      </div>
    </SectionBorder>
  </section>
);

export default Design;

const SectionBorder = styled.div`
  border-left: 1px solid #DEDEDE;
  border-right: 1px solid #DEDEDE;
  margin: auto;
  height: 100%;
  position: relative;

  .design-mobile-dev-img {
    display: none;
  }
  ul {
    list-style-type: none;
  }
  li {
    display: flex;
    align-items: top;
    margin: 10px 0;
    font-family: var(--body-font)
  }

  ${MEDIA_QUERY.PHONE} {
    .design-dev-img {
      display: none;
    }
    .design-mobile-dev-img {
      display: block;
    }
  }

  ${MEDIA_QUERY.PHONE} {
    .skills-flex-wrapper {
      flex-direction: column;
    }
  }
`;

const Photo = styled.img`
  width: 100%;
  max-width: 400px;
  margin: 60px 0;
`;

const ListCircle = styled.div`
  min-height: 12px;
  min-width: 12px;
  height: 12px;
  width: 12px;
  border-radius: 50px;
  border: 4px solid #C5C4FA;
  margin-right: 10px;
  margin-top: 4px;
`;
