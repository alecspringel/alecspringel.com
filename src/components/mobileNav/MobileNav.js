import React, { useState } from "react";
import styled, { css } from "styled-components";
import ClickAway from "../common/ClickAway";

const MobileNav = ({ children, height }) => {
  const [open, toggle] = useState(false);
  return (
    <ClickAway
      style={{ display: "inline-block", height: "fit-content" }}
      onClick={() => toggle(!open)}
      onClickAway={() => toggle(false)}
      contents={
        <>
          <Wrapper>
            <MenuIcon src={require("../../images/hamburger-menu.svg")} />
            <Options open={open} height={height}>
              <ul>{children}</ul>
            </Options>
          </Wrapper>
        </>
      }
    />
  );
};

export default MobileNav;

const MenuIcon = styled.img`
  height: 30px;
  opacity: 0.7;
`;

const Wrapper = styled.div`
  display: inline-block;
`;

const Options = styled.div`
  max-height: 0;
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  z-index: 2;
  background: ${(props) => props.theme.background};
  overflow: hidden;
  transition: max-height 0ms ease-in-out;

  ${(props) =>
    props.open &&
    css`
      transition: max-height 150ms ease-in-out;
      max-height: ${(props) => props.height};
      box-shadow: 2px 3px 3px #00000033;
    `}
`;
