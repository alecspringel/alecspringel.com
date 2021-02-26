import React from "react";
import styled from "styled-components";

const Button = ({ children, href, ...props }) => {
  return (
    <StyledBtn href={href} {...props}>
      {children}
    </StyledBtn>
  );
};

export default Button;

const StyledBtn = styled.a`
  font-size: 16px;
  border: ${(props) => "1px solid " + props.theme.primary};
  color: ${(props) => props.theme.primary};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 9px 10px;
  border-radius: 2px;
  cursor: pointer;
  transition: background-color 200ms;
  width: ${(props) => (props.autoWidth ? "auto" : props.width || "100px")};

  :hover {
    background-color: ${(props) => props.theme.primary + "10"};
  }
`;
