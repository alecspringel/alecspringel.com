import React from "react";
import styled from "styled-components";
import AlecImg from "../../images/tech-icons/alec.png";
// Col 1
import JavascriptImg from "../../images/tech-icons/javascript.png";
import PythonImg from "../../images/tech-icons/python.png";
import HtmlImg from "../../images/tech-icons/html.png";
import CssImg from "../../images/tech-icons/css.png";
// Col 2
import ReactImg from "../../images/tech-icons/react.png";
import ElectronImg from "../../images/tech-icons/electron.png";
import NodeImg from "../../images/tech-icons/node.png";
import GraphQLImg from "../../images/tech-icons/graphql.png";
import MongoDBImg from "../../images/tech-icons/mongodb.png";
// Col 3
import AWSImg from "../../images/tech-icons/aws.png";
import GitImg from "../../images/tech-icons/git.png";
import XDImg from "../../images/tech-icons/xd.png";
import FigmaImg from "../../images/tech-icons/figma.png";

const CirclesFigure = () => {
  return (
    <ShiftWrapper>
      <Container>
        <ProfileImg src={AlecImg} />
        {/* Column 1 */}
        <Icon src={JavascriptImg} top="20" right="20" />
        <Icon src={HtmlImg} top="35" right="30" />
        <Icon src={CssImg} top="55" right="30" />
        <Icon src={PythonImg} top="70" right="20" />
        {/* Column 2 */}
        <Icon src={ReactImg} top="10" right="40" />
        <Icon src={ElectronImg} top="27.5" right="50" />
        <Icon src={NodeImg} top="45" right="57" />
        <Icon src={GraphQLImg} top="62.5" right="50" />
        <Icon src={MongoDBImg} top="80" right="40" />
        {/* Column 3 */}
        <Icon src={AWSImg} top="20" right="70" />
        <Icon src={GitImg} top="35" right="80" />
        <Icon src={XDImg} top="55" right="80" />
        <Icon src={FigmaImg} top="70" right="70" />
      </Container>
    </ShiftWrapper>
  );
};

export default CirclesFigure;

const ShiftWrapper = styled.div`
  margin-left: -100px;
`;

const Container = styled.div`
  height: 527px;
  width: 527px;
  border-radius: 50%;
  background-color: #285f50;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const ProfileImg = styled.img`
  height: 224px;
  width: 224px;
  margin-right: -15%;
  filter: drop-shadow(0px 0px 20px rgba(0, 0, 0, 0.16));
`;

const Icon = styled.img`
  height: 74px;
  width: 74px;
  position: absolute;
  top: ${(props) => props.top + "%"};
  right: ${(props) => props.right + "%"};
`;
