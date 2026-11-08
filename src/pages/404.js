import React from 'react';
import styled from 'styled-components';
import SEO from '../sections/seo';
import Button from '../components/Button';
import Logo from '../images/logo.svg';
import '../index.css';
import '../fonts.css';

// Styled to match the hero and contact sections so a wrong link still feels on-brand.
const Page404 = () => (
  <Wrapper>
    <SEO title="Page not found · Alec Springel" />
    <main>
      <a href="/" className="brand">
        <img src={Logo} alt="" />
        Alec Springel
      </a>
      <p className="code">404</p>
      <h1>This page doesn&apos;t exist.</h1>
      <p className="lede">
        The link may be old, or the address has a typo. Everything worth seeing is on the home page.
      </p>
      <Button to="/">Back to home</Button>
    </main>
  </Wrapper>
);

export default Page404;

const Wrapper = styled.div`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px 24px;
  color: #fff;
  background:
    radial-gradient(55% 60% at 80% 15%, rgba(76, 72, 239, 0.3) 0%, rgba(76, 72, 239, 0) 70%),
    #090B2B;

  main {
    max-width: 520px;
    text-align: center;
  }

  .brand {
    display: inline-flex;
    align-items: center;
    gap: 12px;
    font-family: var(--heading-font);
    font-size: 18px;
    color: #fff;

    img {
      height: 28px;
    }
  }

  .code {
    margin-top: 48px;
    font-family: var(--heading-font);
    font-size: 96px;
    line-height: 1;
    background: linear-gradient(to bottom, #AEACFF, rgba(174, 172, 255, 0.25));
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
  }

  h1 {
    margin-top: 16px;
    font-size: 30px;
  }

  .lede {
    margin: 12px 0 32px;
    color: #C5C4FA;
  }
`;
