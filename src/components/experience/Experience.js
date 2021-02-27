import React from "react";
import styled from "styled-components";

const Experience = () => {
  return (
    <section className="flex-col align justify section" id="experience">
      <h3 style={{ marginBottom: 60 }} className="heading-color">
        Experience
      </h3>
      {/* NIKE */}
      <Tile>
        <Date>
          <p>March 2021 - Present</p>
        </Date>
        <TitleBar className="flex-row align">
          <h6 className="heading-color">Nike,&nbsp;</h6>
          <p>Software Engineer</p>
          <MobileDate>
            <p>March 2021 - Present</p>
          </MobileDate>
        </TitleBar>
        <TextPadding>
          <p>
            Write and test code for internal systems, utilizing frontend and
            backend technologies including NodeJS, ReactJS, AWS Lambda,
            DynamoDB, and more.
            <br />
            <br />
            Contracted by ProUnlimited.
          </p>
        </TextPadding>
      </Tile>
      <Line className="dashed-vertical" />
      {/* BRING RECYCLING */}
      <Tile>
        <Date>
          <p>October 2020 - Present</p>
        </Date>
        <TitleBar className="flex-row align">
          <h6 className="heading-color">BRING Recycling,&nbsp;</h6>
          <p>Software Engineer (Volunteer)</p>
          <MobileDate>
            <p>October 2020 - Present</p>
          </MobileDate>
        </TitleBar>
        <TextPadding>
          <p>
            Responsible for designing, developing, deploying, and maintaining
            the BRING Recycling
            <span className="primary-color">
              &nbsp;Virtual Donation Manager
            </span>
            .
          </p>
        </TextPadding>
      </Tile>
      <Line className="dashed-vertical" />
      {/* LAST LAYER LLC */}
      <Tile>
        <Date>
          <p>February 2019 - Present</p>
        </Date>
        <TitleBar className="flex-row align">
          <h6 className="heading-color">Last Layer LLC,&nbsp;</h6>
          <p>Founder &amp; Software Engineer</p>
          <MobileDate>
            <p>February 2019 - Present</p>
          </MobileDate>
        </TitleBar>
        <TextPadding>
          <p>
            Last Layer was founded after
            <span className="primary-color">&nbsp;farmPlot</span> gained
            traction. Last Layer serves as the parent company for farmPlot and
            any future software that will be available publicly.
          </p>
        </TextPadding>
      </Tile>
      <Line className="dashed-vertical" />
      {/* 209 & MoCap */}
      <Tile>
        <Date>
          <p>June 2017 - September 2017</p>
        </Date>
        <TitleBar className="flex-row align">
          <h6 className="heading-color">
            209 Group &amp; Mocap Solutions,&nbsp;
          </h6>
          <p>Engineering Intern</p>
          <MobileDate>
            <p>June 2017 - September 2017</p>
          </MobileDate>
        </TitleBar>
        <TextPadding>
          <p>
            Last Layer was founded after
            <span className="primary-color">&nbsp;farmPlot</span> gained
            traction. Last Layer serves as the parent company for farmPlot and
            any future software that will be available publicly.
          </p>
        </TextPadding>
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
  text-align: left;
  max-width: 800px;
`;

const TitleBar = styled.div`
  border-radius: 6px 6px 0 0;
  width: 100%;
  padding: 10px 29px;
  background-color: ${(props) => props.theme.background3};
  @media (max-width: 665px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const TextPadding = styled.div`
  padding: 25px 29px;
`;

const Date = styled.div`
  position: absolute;
  top: -33px;
  left: 29px;
  display: block;
  @media (max-width: 665px) {
    display: none;
  }
`;

const MobileDate = styled.div`
  display: none;
  margin-top: 12px;
  @media (max-width: 665px) {
    display: block;
  }
`;

const Line = styled.div`
  height: 100px;
`;
