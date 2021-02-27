import React from "react";
import styled from "styled-components";

const MobileOption = ({ children }) => {
  return <Item>{children}</Item>;
};

export default MobileOption;

const Item = styled.li`
  width: 100%;
  padding: 15px;
  a {
    :hover {
      color: ${(props) => props.theme.primary};
    }
  }
`;
