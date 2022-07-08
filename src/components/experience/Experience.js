import React from 'react';
import styled from 'styled-components';

const Experience = () => (
  <section className="flex-col align justify section" id="experience">
    <h3 style={{ marginBottom: 60 }} className="heading-color">
      Experience
    </h3>
    {/* NIKE */}
    <Tile>
      <Date>
        <p>January 2022 - Present</p>
      </Date>
      <TitleBar className="flex-row align">
        <h6 className="heading-color">Nike,&nbsp;</h6>
        <p>Senior Software Engineer I</p>
        <MobileDate>
          <p>January 2022 - Present</p>
        </MobileDate>
      </TitleBar>
      <TextPadding>
        <ul className="list">
          <li>Acted as the product lead for the Nike Store Locator and Store pages under nike.com/retail</li>
          <ul>
            <li className="indent">The web experience receives ~2.9M page views/month</li>
            <li className="indent">Rebuilt product from ground up, transitioning development from 3rd party vendor to in-house at Nike</li>
            <li className="indent">Helped define and develop major features, design changes, SEO improvements, global/localizations, and more</li>
          </ul>
          <li>Developed reusable components for use across Nike’s web teams</li>
          <ul>
            <li className="indent">Acted as lead developer on Apple Maps (MapkitJS) integration, creating a map component for use across teams</li>
          </ul>
          <li>Developed the Store Selector</li>
          <ul>
            <li className="indent">Worked with the requirements of multiple teams to create a flexible component that would work across nike.com</li>
            <li className="indent">The store selector featured location search of Nike retail locations, allowing consumers to find retail locations within different nike.com web experiences</li>
          </ul>
        </ul>
      </TextPadding>
    </Tile>
    <Line className="dashed-vertical" />
    {/* NIKE */}
    <Tile>
      <Date>
        <p>March 2021 - January 2022</p>
      </Date>
      <TitleBar className="flex-row align">
        <h6 className="heading-color">Nike,&nbsp;</h6>
        <p>Software Engineer (ETW/Contract)</p>
        <MobileDate>
          <p>March 2021 - January 2022</p>
        </MobileDate>
      </TitleBar>
      <TextPadding>
        <ul className="list">
          <li>Developed company facing web applications and APIs</li>
          <ul>
            <li className="indent">Developed an application connecting employees within retail locations across 3 different continents with mission critical product information and pricing info</li>
            <li className="indent">Maintained and developed Nike’s core retail location information API &amp; the connected UI for updating store operations info and data</li>
            <li className="indent">Maintained application for receipt printing within retail locations</li>
          </ul>
        </ul>
      </TextPadding>
    </Tile>
    <Line className="dashed-vertical" />
    {/* BRING RECYCLING */}
    <Tile>
      <Date>
        <p>October 2020 - March 2021</p>
      </Date>
      <TitleBar className="flex-row align">
        <h6 className="heading-color">BRING Recycling,&nbsp;</h6>
        <p>Full Stack Software Engineer &amp; UI Designer (Volunteer)</p>
        <MobileDate>
          <p>October 2020 - March 2021</p>
        </MobileDate>
      </TitleBar>
      <TextPadding>
        <ul className="list">
          <li>Winner of 2020 Oregon Technology Association “Hack for a Cause” Hackathon by creating the “Virtual Donation Manager” prototype</li>
          <ul>
            <li className="indent">Project was continued after hackathon until production ready--launched in January 2021</li>
          </ul>
          <li>The Virtual Donation Manager connects potential donors with BRING Recycling, allowing employees to approve, decline, and communicate with donors after uploading images of items they would like to donate</li>
          <ul>
            <li className="indent">The project has helped manage ~600 donations and has received over 1500 images of potential donations</li>
          </ul>
        </ul>
      </TextPadding>
    </Tile>
    <Line className="dashed-vertical" />
    {/* LAST LAYER LLC */}
    <Tile>
      <Date>
        <p>September 2019 - March 2021</p>
      </Date>
      <TitleBar className="flex-row align">
        <h6 className="heading-color">farmPlot,&nbsp;</h6>
        <p>Sole Proprietor</p>
        <MobileDate>
          <p>September 2019 - March 2021</p>
        </MobileDate>
      </TitleBar>
      <TextPadding>
        <ul className="list">
          <li>Leveraged my passion for gardening and background in agriculture to build a desktop application (in a web view) for cannabis farm analytics, reporting, and regulation compliance</li>
          <ul>
            <li className="indent">Integration with Metrc API, the selected software for cannabis compliance and tracking in Oregon</li>
            <li className="indent">Featured offline mode, notifications, integration with barcode scanners to record plant IDs for lifecycle tracking, automatic and forced updates</li>
          </ul>
          <li>Used by largest cannabis producer in the state (2020), Fox Hollow Flora</li>
          <ul>
            <li className="indent">Worked alongside Fox Hollow Flora to gather product requirements and create new features</li>
          </ul>
        </ul>
      </TextPadding>
    </Tile>
    {/* <Line className="dashed-vertical" /> */}
    {/* 209 & MoCap */}
    {/* <Tile>
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
        <ul>
          Streamlined workflows for fellow employees
          Managed and found new accounts, created marketing campaigns, advertised customer products
          at events, and managed client data.
        </ul>
      </TextPadding>
    </Tile> */}
  </section>
);

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
