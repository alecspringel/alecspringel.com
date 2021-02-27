import React from "react";
import styled from "styled-components";

const BrowserFigure = () => {
  return (
    <Wrapper>
      <Background>
        <TopBar></TopBar>
        <SearchBar></SearchBar>
        <Control1></Control1>
        <Control2></Control2>
        <Control3></Control3>
        <GridWrapper>
          <ItemBg>
            <ItemOutline>
              <Square />
            </ItemOutline>
            <ItemName></ItemName>
            <Description></Description>
          </ItemBg>
          <ItemBg>
            <ItemOutline>
              <Circle />
            </ItemOutline>
            <ItemName></ItemName>
            <Description></Description>
          </ItemBg>
          <ItemBg>
            <ItemOutline>
              <Triangle />
            </ItemOutline>
            <ItemName></ItemName>
            <Description></Description>
          </ItemBg>
          <ItemBg>
            <ItemOutline>
              <Square />
            </ItemOutline>
            <ItemName></ItemName>
            <Description></Description>
          </ItemBg>
          <ItemBg>
            <ItemOutline>
              <Circle />
            </ItemOutline>
            <ItemName></ItemName>
            <Description></Description>
          </ItemBg>
          <ItemBg>
            <ItemOutline>
              <Triangle />
            </ItemOutline>
            <ItemName></ItemName>
            <Description></Description>
          </ItemBg>
        </GridWrapper>
      </Background>
    </Wrapper>
  );
};

export default BrowserFigure;

const GridWrapper = styled.div`
  display: grid;
  position: absolute;
  top: 57px;
  left: 30px;
  height: 247.11px;
  width: 436.96px;
  grid-gap: 18px;
  grid-template-rows: 113.64px 113.64px;
  grid-template-columns: 133.36px 133.36px 133.36px;
`;

const Wrapper = styled.div`
  position: absolute;
  top: 30%;
  left: 20%;
`;

const Background = styled.div`
  width: 496px;
  height: 319px;
  background: rgba(255, 255, 255, 0.4099999964237213);
  border-radius: 5px;
  backdrop-filter: blur(2px);
  position: relative;
`;

const TopBar = styled.div`
  width: 496px;
  height: 24px;
  background: rgba(255, 255, 255, 0.5899999737739563);
  position: absolute;
  top: 0px;
  left: 0px;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
`;

const SearchBar = styled.div`
  width: 411px;
  height: 13px;
  background: rgba(255, 255, 255, 0.5899999737739563);
  position: absolute;
  top: 5px;
  left: 55px;
  border-radius: 2px;
`;

const WindowControl = styled.div`
  width: 6px;
  height: 6px;
  background: rgba(255, 255, 255, 1);
  position: absolute;
  border-radius: 50%;
`;

const Control1 = styled(WindowControl)`
  top: 9px;
  left: 11px;
`;

const Control2 = styled(WindowControl)`
  top: 9px;
  left: 22px;
`;

const Control3 = styled(WindowControl)`
  top: 9px;
  left: 32px;
`;

const ItemBg = styled.div`
  width: 133px;
  height: 113px;
  background: rgba(225, 225, 225, 1);
  border-radius: 6px;
`;

const ItemOutline = styled.div`
  border-radius: 6px;
  border: 1px solid #fff;
  width: 112.48px;
  height: 74.22px;
  margin: 9px auto 7px auto;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ItemName = styled.div`
  height: 6px;
  width: 112.48px;
  height: 5.8px;
  border-radius: 6px;
  background: #fff;
  margin: auto;
`;

const Description = styled.div`
  height: 4px;
  width: 67.2px;
  border-radius: 6px;
  background: #fff;
  margin-left: 10.26px;
  margin-top: 4px;
`;

const Square = styled.div`
  height: 50px;
  width: 50px;
  background-color: #fff;
`;

const Circle = styled.div`
  height: 50px;
  width: 50px;
  background-color: #fff;
  border-radius: 50%;
`;

const Triangle = styled.div`
  width: 0;
  height: 0;
  border-left: 32px solid transparent;
  border-right: 32px solid transparent;
  border-bottom: 50px solid #fff;
`;
