import React from "react";
import styled from "styled-components";
import Button from "../components/common/Button";
import Layout from "../components/layout";
import Img404 from "../images/404.svg";
const Page404 = () => {
  return (
    <Layout>
      <View className="flex-col align">
        <Icon src={Img404} />
        <h6 className="heading-color">
          Uh oh! The page you're looking for could not be found.
        </h6>
        <Button href="/#" style={{ marginTop: 40 }} width="200px">
          Go Back Home
        </Button>
      </View>
    </Layout>
  );
};

export default Page404;

const View = styled.div`
  height: calc(100vh - 140px);
  justify-content: center;
  text-align: center;
`;

const Icon = styled.img`
  width: 80%;
`;
