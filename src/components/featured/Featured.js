import React from 'react';
import styled from 'styled-components';
import FarmplotPreview from '../../images/projects/farmplot/farmplot-preview.png';

const Featured = () => (
  <Section className="section" id="contact">
    <h3 className="heading-color text-center">Featured Projects</h3>
    <article className="flex-row">
      <div>
        <ProjectImg src={FarmplotPreview} alt="farmPlot app screenshot" />
      </div>
      <div className="text-right margin-auto">
        <h5 className="heading-color">farmPlot</h5>
        <p>Cannabis compliance, reporting, tools, &amp; analytics.</p>
        <TextBox>
          <p className="heading-color">
            farmPlot allows farms to track their operations with
            data, and assists reporting to state agancies through the Metrc API.
            The app provides a simple interface and helpful tools  for managing
            a Cannabis farm.
          </p>
        </TextBox>
      </div>
    </article>
  </Section>
);

export default Featured;

const Section = styled.section`
  padding-top: 20px;
`;

const ProjectImg = styled.img`
  width: 600px;
  box-shadow: 0 10px 30px #00000025;
`;

const TextBox = styled.div`
  margin-left: -90px;
  background-color: #3c3c3c;
  padding: 20px;
  border-radius: 3px;
  margin-top: 25px;
  box-shadow: 0 10px 30px #00000025;
`;
