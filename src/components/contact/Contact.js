import React from "react";
import styled from "styled-components";
import Linkedin from "../../images/contact/linkedin.svg";
import GitHub from "../../images/contact/github.svg";
import Phone from "../../images/contact/phone.svg";
import Email from "../../images/contact/email.svg";

const Contact = () => {
  return (
    <Section className="section" id="contact">
      <h3 className="heading-color">Contact</h3>
      <Description className="margin-tb20">
        Thanks for stopping by! I always enjoy meeting fellow developers and
        hearing about new projects. Feel free to contact me by text, phone, or
        email and I will get back to you as soon as possible.
      </Description>
      <FlexWrapper className="flex-row" style={{ marginTop: 80 }}>
        <ContactCard>
          <Icon src={Phone} />
          <h6 className="heading-color">Cell Phone</h6>
          <p className="primary-color">+1 (702)-290-0858</p>
        </ContactCard>
        <ContactCard>
          <Icon src={Email} />
          <h6 className="heading-color">Email</h6>
          <p className="primary-color">alecspringel@gmail.com</p>
        </ContactCard>
        <ContactCard>
          <Icon src={Linkedin} />
          <h6 className="heading-color">Linkedin</h6>
          <p className="primary-color">alec-springel</p>
        </ContactCard>
        <ContactCard>
          <Icon src={GitHub} />
          <h6 className="heading-color">GitHub</h6>
          <p className="primary-color">@alecspringel</p>
        </ContactCard>
      </FlexWrapper>
    </Section>
  );
};

export default Contact;

const Section = styled.section`
  text-align: center;
`;

const FlexWrapper = styled.div`
  flex-wrap: wrap;
`;

const ContactCard = styled.a`
  flex: 1;
  background-color: ${(props) => props.theme.background2};
  margin: 20px;
  border-radius: 6px;
  box-shadow: 0px 4.59773px 22.9887px rgba(0, 0, 0, 0.25);
  padding: 40px;
  width: 226px;
  @media (max-width: 1256px) {
    flex: 40%;
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
