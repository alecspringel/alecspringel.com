import React from "react";
import styled, { css } from "styled-components";

const BrowserFigure = () => {
  return (
    <Wrapper>
      <Background>
        <TopBar></TopBar>
        <SearchBar></SearchBar>
        <Control1></Control1>
        <Control2></Control2>
        <Control3></Control3>
        <SlideWrapper>
          <GridWrapper>
            <ItemBg delay={1}>
              <ItemOutline>
                <Square delay={1.6} />
              </ItemOutline>
              <ItemName delay={1.6}></ItemName>
              <Description delay={1.8}></Description>
            </ItemBg>
            <ItemBg delay={1.2}>
              <ItemOutline>
                <Circle delay={1.8} />
              </ItemOutline>
              <ItemName delay={1.8}></ItemName>
              <Description delay={2}></Description>
            </ItemBg>
            <ItemBg delay={1.4}>
              <ItemOutline>
                <Triangle delay={2} />
              </ItemOutline>
              <ItemName delay={2}></ItemName>
              <Description delay={2.2}></Description>
            </ItemBg>
            {/* Row 2 */}
            <ItemBg delay={3}>
              <ItemOutline>
                <Square delay={3.6} />
              </ItemOutline>
              <ItemName delay={3.6}></ItemName>
              <Description delay={3.8}></Description>
            </ItemBg>
            <ItemBg delay={3.2}>
              <ItemOutline>
                <Circle delay={3.8} />
              </ItemOutline>
              <ItemName delay={3.8}></ItemName>
              <Description delay={4}></Description>
            </ItemBg>
            <ItemBg delay={3.4}>
              <ItemOutline>
                <Triangle delay={4} />
              </ItemOutline>
              <ItemName delay={4}></ItemName>
              <Description delay={4.2}></Description>
            </ItemBg>
          </GridWrapper>
        </SlideWrapper>
      </Background>
    </Wrapper>
  );
};

export default BrowserFigure;

const GridWrapper = styled.div`
  display: grid;
  position: absolute;
  top: 0;
  left: 0;
  height: 247.11px;
  width: 436.96px;
  grid-gap: 18px;
  grid-template-rows: 113.64px 113.64px;
  grid-template-columns: 133.36px 133.36px 133.36px;

  /* animation: slideup 1s infinite;
  animation-fill-mode: forwards;
  animation-delay: 4s;
  @keyframes slideup {
    0% {
      transform: translateY(0%);
    }
    to {
      transform: translateY(-54%);
    }
  } */
`;

const SlideWrapper = styled.div`
  position: absolute;
  top: 57px;
  left: 30px;
  height: 247.11px;
  width: 436.96px;
  overflow: hidden;
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
  background: #d4d4d4a3;
  border-radius: 6px;

  ${(props) =>
    props.delay &&
    css`
      transform: scale(0);
      animation: appear 1s;
      animation-fill-mode: forwards;
      animation-delay: ${(props) => props.delay + "s"};
      @keyframes appear {
        0% {
          transform: scale(0);
        }
        to {
          transform: scale(1);
        }
      }
    `}
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
  margin-left: 10.26px;
  margin-right: auto;
  ${(props) =>
    props.delay &&
    css`
      width: 0;
      animation: grow 1s;
      animation-fill-mode: forwards;
      animation-delay: ${(props) => props.delay + "s"};
      @keyframes grow {
        0% {
          width: 0;
        }
        to {
          width: 112.48px;
        }
      }
    `}
`;

const Description = styled.div`
  height: 4px;
  width: 67.2px;
  border-radius: 6px;
  background: #fff;
  margin-left: 10.26px;
  margin-top: 4px;
  ${(props) =>
    props.delay &&
    css`
      width: 0;
      animation: growDescription 1s;
      animation-fill-mode: forwards;
      animation-delay: ${(props) => props.delay + "s"};
      @keyframes growDescription {
        0% {
          width: 0;
        }
        to {
          width: 67.2px;
        }
      }
    `}
`;

const Shape = styled.div`
  ${(props) =>
    props.delay &&
    css`
      transform: scale(0);
      animation: appear 1s;
      animation-fill-mode: forwards;
      animation-delay: ${(props) => props.delay + "s"};
      @keyframes appear {
        0% {
          transform: scale(0);
        }
        to {
          transform: scale(1);
        }
      }
    `}
`;

const Square = styled(Shape)`
  height: 50px;
  width: 50px;
  background-color: #fff;
`;

const Circle = styled(Shape)`
  height: 50px;
  width: 50px;
  background-color: #fff;
  border-radius: 50%;
`;

const Triangle = styled(Shape)`
  width: 0;
  height: 0;
  border-left: 32px solid transparent;
  border-right: 32px solid transparent;
  border-bottom: 50px solid #fff;
`;
