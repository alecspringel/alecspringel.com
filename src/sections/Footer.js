import React from 'react';
import styled from 'styled-components';
import { MEDIA_QUERY } from '../constants';
import LogoSVG from '../images/logo.svg';

const Footer = () => (
  <footer style={{ padding: 40, background: '#090B2B' }} className="text-white">
    <FlexContainer className="max-width m-auto flex-row">
      <div className="flex-row" style={{ justifyContent: 'space-around' }}>
        <div>
          <h6 className="text-bold m-b8">Location</h6>
          <SmallText className="m-b4">Beaverton, Portland & Eugene</SmallText>
          <SmallText>Oregon, United States</SmallText>
        </div>
        <div>
          <h6 className="text-bold m-b8">Contact</h6>
          <SmallLink className="m-b8" href="mailto:alecspringel@gmail.com">alecspringel@gmail.com</SmallLink>
          <SmallLink href="tel:702-290-0858">+1 702 290-0858</SmallLink>
        </div>
      </div>
      <div className="text-left">
        <div className="heading flex-row align-c" style={{ gap: 10, fontSize: 20 }}>
          <img src={LogoSVG} alt="Sungrown Farms logo" style={{ height: 40 }} />
          <div>
            Alec Springel
            <p style={{ fontSize: 12 }}>
              ©
              {new Date().getFullYear()}
              {' '}
              Alec Springel
            </p>
          </div>
        </div>
      </div>
    </FlexContainer>
  </footer>
);

export default Footer;

const SmallText = styled.p`
  font-size: 15px;
`;

const SmallLink = styled.a`
  font-size: 15px;
  display: block;
  color: #fff;
`;

const FlexContainer = styled.div`
  flex-direction: row-reverse;
  justify-content: space-around;

  & > div:nth-child(2) {
    flex: 1;
  }
  & > div:nth-child(1) {
    flex: 2;
  }

  ${MEDIA_QUERY.TABLET} {
    flex-direction: column-reverse;
    align-items: center;

    & > div:nth-child(2) {
      text-align: center;
    }

    & > div:nth-child(1) {
      text-align: center;
      width: 100%;
      margin-top: 30px;
      flex-wrap: wrap;
      gap: 20px;
    }

    img {
      height: 26px;
    }
  }
`;
