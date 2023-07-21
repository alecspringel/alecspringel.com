import React, { useState } from 'react';
import styled from 'styled-components';
import Question from '../components/Question';
import { MEDIA_QUERY } from '../constants';
import DryingPlantsJPG from '../images/drying-plants.jpg';

const FREQUENTLY_ASKED_QESTIONS = {
  1: {
    question: 'What lease durations does Sungrown Farms offer?',
    answer: "Sungrown farms offers flexible leases that are dependent on each tenant's needs. Contact us by phone or email to discuss your lease.",
  },
  2: {
    question: 'What is the largest tier grow you support?',
    answer: 'We support any size grow and can work with tenants who have multiple licenses. Sungrown Farms is home to multiple tier 3 grows, as well as tier 1 and 2 grows.',
  },
  3: {
    question: 'What security is in place at Sungrown Farms?',
    answer: 'Security is our number one priority at Sungrown Farms and we work with each of our tenants to put proper security in place for their business. The entire property sits within a gated development, with surveillance cameras and staff on site to monitor the property.',
  },
  4: {
    question: 'What are the benefits of industrial zoning?',
    answer: 'Industrial zoning allows our tenants to use the property with fewer restrictions from the county. Our tenants have fewer restrictions when handling nutrients and plant run-off, and are able to setup facilities faster than they would be able to in commercial zoning.',
  },
};

const FAQ = () => {
  const [selectedQuestion, setSelectedQuestion] = useState(1);
  return (
    <Section id="faq" className="max-width m-auto flex-row align-c mw-padding section-p-b">
      <SplitContent>
        <h3 className="m-b20">Frequently Asked Questions</h3>
        <Question
          isActive={selectedQuestion === 1}
          onClick={() => setSelectedQuestion(1)}
        >
          {FREQUENTLY_ASKED_QESTIONS[1].question}
        </Question>
        <Question
          isActive={selectedQuestion === 2}
          onClick={() => setSelectedQuestion(2)}
        >
          {FREQUENTLY_ASKED_QESTIONS[2].question}
        </Question>
        <Question
          isActive={selectedQuestion === 3}
          onClick={() => setSelectedQuestion(3)}
        >
          {FREQUENTLY_ASKED_QESTIONS[3].question}

        </Question>
        <Question
          isActive={selectedQuestion === 4}
          onClick={() => setSelectedQuestion(4)}
        >
          {FREQUENTLY_ASKED_QESTIONS[4].question}
        </Question>
        <div style={{ marginTop: 32 }}>
          <h4>Answer</h4>
          <p className="m-t8">
            {FREQUENTLY_ASKED_QESTIONS[selectedQuestion].answer}
          </p>
        </div>
      </SplitContent>
      <SplitContent>
        <Image src={DryingPlantsJPG} alt="person harvesting and drying plants" width="100%" />
      </SplitContent>
    </Section>
  );
};

export default FAQ;

const SplitContent = styled.div`
  width: 50%;
  position: relative;
`;

const Image = styled.img`
  width: 100%;
`;

const Section = styled.section`
  overflow: hidden;
  padding-top: 100px;

  & ${SplitContent}:nth-child(1) {
    margin-right: 32px;
  }

  ${MEDIA_QUERY.SMALL_LAPTOPS} {
    align-items: stretch;
    & ${Image} {
      object-fit: cover;
      object-position: left;
      width: 100%;
      height: 100%;
    }
  }

  ${MEDIA_QUERY.TABLET} {
    flex-direction: column-reverse;

    & ${SplitContent} {
      width: 100%;
      margin-left: 0;
      padding: 0;
    }
    & ${SplitContent}:nth-child(1) {
      margin-top: 80px;
      margin-right: 0;
    }
    & ${SplitContent}:nth-child(2) {
      margin-left: 0;
    }
    & ${Image} {
      width: 100%;
    }
  }
`;
