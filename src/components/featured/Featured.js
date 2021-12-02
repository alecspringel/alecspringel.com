import React from 'react';
import styled, { css } from 'styled-components';
import FarmplotPreview from '../../images/projects/farmplot/farmplot-preview.png';
import InquirePreview from '../../images/projects/inquire/inquire-preview.png';
import BringPreview from '../../images/projects/bring/bring-preview.png';
import LockSvg from '../../images/lock.svg';
import ExternalLinkSvg from '../../images/external-link.svg';

const Featured = () => (
  <Section className="section" id="projects">
    <h3 className="heading-color text-center">Featured Projects</h3>
    <Article className="flex-row">
      <div>
        <ProjectImg src={FarmplotPreview} alt="farmPlot app screenshot" />
      </div>
      <Description className="margin-auto">
        <h5 className="heading-color">farmPlot</h5>
        <p>Cannabis compliance, reporting, tools, &amp; analytics</p>
        <TextBox>
          <p className="heading-color">
            farmPlot allows farms to track their operations with
            data, and assists reporting to state agancies through the Metrc API.
            The app provides a simple interface and helpful tools  for managing
            a Cannabis farm.
          </p>
        </TextBox>
        <p className="p-small margin-t20">
          <img src={LockSvg} alt="lock icon" style={{ marginRight: 5, verticalAlign: 'text-top', height: 19 }} />
          Private Repository
        </p>
      </Description>
    </Article>
    <Article className="flex-row" reverse>
      <div>
        <ProjectImg src={InquirePreview} alt="Inquire app screenshot" />
      </div>
      <Description className="margin-auto">
        <h5 className="heading-color">Inquire</h5>
        <p>Message board and forum for students and instructors</p>
        <TextBox leftAlign>
          <p className="heading-color">
            Inquire enables students and teachers to connect via a feature-packed
            message board to ask questions, make announcements, and have discussions.
            Inquire is used in CIS classrooms at the University of Oregon and is now an
            open source project that allows new students to learn about software engineering.
          </p>
        </TextBox>
        <div className="margin-t20">
          <a className="primary-color" href="https://github.com/5-Bits-in-a-Byte/inquiremb" target="_blank" rel="noreferrer">
            Open in GitHub
            <img src={ExternalLinkSvg} alt="external link icon" style={{ marginLeft: 5, verticalAlign: 'text-top' }} />
          </a>
        </div>
      </Description>
    </Article>
    <Article className="flex-row">
      <div>
        <ProjectImg src={BringPreview} alt="BRING app screenshot" />
      </div>
      <Description className="margin-auto">
        <h5 className="heading-color">BRING Virtual Dontaions Manager</h5>
        <p>&quot;Tinder&quot; for reviewing and responding to donations</p>
        <TextBox>
          <p className="heading-color">
            The BRING Virtual Donations Manager was a winning solution at the
            Technology Association of Oregon&apos;s &quot;Hack for a Cause&quot; event in 2020.
            The Virtual Donations Manager allows BRING Recycling to
            respond to donations via photo uploads from potential donors.
          </p>
        </TextBox>
        <div className="margin-t20">
          <a className="primary-color" href="https://github.com/alecspringel/bring-client" target="_blank" rel="noreferrer">
            Open in GitHub
            <img src={ExternalLinkSvg} alt="external link icon" style={{ marginLeft: 5, verticalAlign: 'text-top' }} />
          </a>
        </div>
      </Description>
    </Article>
  </Section>
);

export default Featured;

const Section = styled.section`
`;

const ProjectImg = styled.img`
  width: 600px;
  box-shadow: 0 10px 30px #00000025;
  @media (max-width: 850px) {
    width: 100%;
    box-shadow: none;
  }
`;

const TextBox = styled.div`
  margin-left: -90px;
  background-color: #3f3f3f;
  padding: 20px;
  border-radius: 3px;
  margin-top: 25px;
  box-shadow: 0 10px 30px #00000025;
  ${({ leftAlign }) => leftAlign && css`
    margin-left: 0;
    margin-right: -90px;
  `}
  @media (max-width: 850px) {
    margin: 25px 0 0 0;
    padding: 0;
    box-shadow: none;
  }
`;

const Article = styled.article`
  flex-direction: ${({ reverse }) => (reverse ? 'row-reverse' : 'row')};
  text-align: ${({ reverse }) => (reverse ? 'left' : 'right')};
  margin-top: 60px;

  @media (max-width: 850px) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #3F3F3F;
    text-align: left;
    box-shadow: 0 10px 30px #00000025;
  }
`;

const Description = styled.div`
  @media (max-width: 850px) {
    padding: 20px;
  }
`;
