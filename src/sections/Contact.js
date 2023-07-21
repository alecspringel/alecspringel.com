import React from 'react';
import styled from 'styled-components';
import Linkedin from '../images/linkedin-primary.svg';
import GitHub from '../images/github-primary.svg';
import Phone from '../images/call-primary.svg';
import Email from '../images/email-primary.svg';

const Contact = () => (
  <Section id="contact">
    <SectionBorder className="mw-padding max-width" style={{ padding: '100px 30px' }}>
      <h3>Reach Out</h3>
      <Description className="margin-tb20">
        Thanks for stopping by! I always enjoy meeting fellow developers and
        hearing about new projects. Feel free to contact me by text, phone, or
        email and I will get back to you as soon as possible.
      </Description>
      <FlexWrapper className="flex-row" style={{ marginTop: 80 }}>
        <ContactCard href="tel:702-290-0858">
          <Icon src={Phone} />
          <h6>Cell Phone</h6>
          <p>+1 (702)-290-0858</p>
        </ContactCard>
        <ContactCard href="mailto:alecspringel@gmail.com">
          <Icon src={Email} />
          <h6>Email</h6>
          <p>alecspringel@gmail.com</p>
        </ContactCard>
        <ContactCard
          href="https://www.linkedin.com/in/alec-springel/"
          target="_blank"
        >
          <Icon src={Linkedin} />
          <h6>LinkedIn</h6>
          <p>alec-springel</p>
        </ContactCard>
        <ContactCard href="https://github.com/alecspringel" target="_blank">
          <Icon src={GitHub} />
          <h6>GitHub</h6>
          <p>@alecspringel</p>
        </ContactCard>
      </FlexWrapper>
    </SectionBorder>
  </Section>
);

export default Contact;

const Section = styled.section`
  text-align: center;
`;

const FlexWrapper = styled.div`
  flex-wrap: wrap;
`;

const ContactCard = styled.a`
  color: var(--text-color);
  flex: 1;
  margin: 20px;
  border-radius: 6px;
  box-shadow: 0px 1px 4px rgb(0 0 0 / 16%);
  border: 1px solid #e4e4e4;
  padding: 40px 20px;
  width: 226px;
  transition: 150ms ease;
  @media (max-width: 1256px) {
    flex: 43%;
  }

  :hover {
    transform: translateY(-4px);
    img {
      transition: 150ms ease;
      transform: translateY(-4px);
      transform: scale(1.1);
    }
  }
`;

const Icon = styled.img`
  height: 34px;
  width: 34px;
  margin: 25px 0;
`;

const Description = styled.p`
  max-width: 800px;
  margin: 20px auto;
`;

const SectionBorder = styled.div`
  border-left: 1px solid #E5E5E5;
  border-right: 1px solid #E5E5E5;
  margin: auto;
  height: 100%;
`;
