import React from 'react';
import Button from '../components/Button';
import Logo from '../images/logo.svg';

const Page404 = () => (
  <div className="text-center section-p-t mw-padding">
    <div className="flex-row align-c" style={{ gap: 15, margin: 'auto', width: 'fit-content' }}>
      <img alt="sungrown farms logo" src={Logo} style={{ maxWidth: 50 }} />
      <h1>404</h1>
    </div>
    <p className="m-b20 m-t16">Uh oh! The page you&apos;re looking for doesn&apos;t exist.</p>
    <Button to="/" style={{ marginTop: 40 }}>Back to Home</Button>
  </div>
);

export default Page404;
