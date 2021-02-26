import React from "react";
import styled from "styled-components";

const Experience = () => {
  return (
    <section className="flex-col align justify section" id="experience">
      <h3 style={{ marginBottom: 60 }}>Experience</h3>
      {/* NIKE */}
      <Tile>
        <Date>
          <p>March 2021 - Present</p>
        </Date>
        <TitleBar className="flex-row align">
          <h6 className="heading-color">Nike,</h6>
          <p>&nbsp;Software Engineer</p>
        </TitleBar>
        <p>
          Write and test code for internal systems, utilizing frontend and
          backend technologies including NodeJS, ReactJS, AWS Lambda, DynamoDB,
          and more.
          <br />
          <br />
          Contracted by ProUnlimited.
        </p>
      </Tile>
      <Line className="dashed-vertical" />
      {/* BRING RECYCLING */}
      <Tile>
        <Date>
          <p>October 2020 - Present</p>
        </Date>
        <TitleBar className="flex-row align">
          <h6 className="heading-color">BRING Recycling,</h6>
          <p>&nbsp;Software Engineer (Volunteer)</p>
        </TitleBar>
        <p>
          Responsible for designing, developing, deploying, and maintaining the
          BRING Recycling
          <span className="primary-color">Virtual Donation Manager</span>.
        </p>
      </Tile>
      <Line className="dashed-vertical" />
      {/* LAST LAYER LLC */}
      <Tile>
        <Date>
          <p>February 2019 - Present</p>
        </Date>
        <TitleBar className="flex-row align">
          <h6 className="heading-color">Last Layer LLC,</h6>
          <p>&nbsp;Founder &amp; Software Engineer</p>
        </TitleBar>
        <p>
          Last Layer was founded after
          <span className="primary-color">&nbsp;farmPlot</span> gained traction.
          Last Layer serves as the parent company for farmPlot and any future
          software that will be available publicly.
        </p>
      </Tile>
      <Line className="dashed-vertical" />
      {/* 209 & MoCap */}
      <Tile>
        <Date>
          <p>June 2017 - September 2017</p>
        </Date>
        <TitleBar className="flex-row align">
          <h6 className="heading-color">209 Group &amp; Mocap Solutions,</h6>
          <p>&nbsp;Engineering Intern</p>
        </TitleBar>
        <p>
          Last Layer was founded after
          <span className="primary-color">&nbsp;farmPlot</span> gained traction.
          Last Layer serves as the parent company for farmPlot and any future
          software that will be available publicly.
        </p>
      </Tile>
    </section>
  );
};

export default Experience;

const Tile = styled.div`
  position: relative;
  border-radius: 6px;
  background-color: ${(props) => props.theme.background2};
  box-shadow: 0px 6px 30px rgba(0, 0, 0, 0.25);
  padding: 66px 29px 25px 29px;
  text-align: left;
  max-width: 800px;
`;

const TitleBar = styled.div`
  position: absolute;
  border-radius: 6px 6px 0 0;
  width: 100%;
  top: 0;
  left: 0;
  padding: 10px 29px;
  background-color: ${(props) => props.theme.background3};
`;

const Date = styled.div`
  position: absolute;
  top: -33px;
  left: 29px;
`;

const Line = styled.div`
  height: 100px;
`;
