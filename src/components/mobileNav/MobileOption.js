import React from 'react';
import styled from 'styled-components';

const MobileOption = ({ children }) => <Item>{children}</Item>;

export default MobileOption;

const Item = styled.li`
  width: 100%;
  padding: 15px;
  a {
    -webkit-text-size-adjust: 100%; /* Prevent font scaling in landscape */
    :hover {
      color: ${(props) => props.theme.primary};
    }
  }
`;
