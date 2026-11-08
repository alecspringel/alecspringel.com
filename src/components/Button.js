import { Link } from 'gatsby';
import React from 'react';
import styled, { css } from 'styled-components';

// Style flags are passed as transient ($) props so they don't leak onto the DOM element.
const Button = ({
  to, href, children, small, outline, light, ...rest
}) => {
  const styleProps = { $small: small, $outline: outline, $light: light };
  // Gatsby's Link doesn't scroll to a hash on the current page, so use a plain anchor for those.
  return to && !to.includes('#')
    ? (
      <ButtonLink to={to} {...styleProps} {...rest}>
        {children}
      </ButtonLink>
    )
    : (
      <ALink href={href || to} {...styleProps} {...rest}>
        {children}
      </ALink>
    );
};

export default Button;

const styles = css`
  display: inline-block;
  font-family: var(--heading-font);
  padding: 10px 30px;
  border-radius: var(--radius-sm);
  text-align: center;

  ${(props) => (props.$outline
    ? css`
    color: ${props.$light ? '#fff' : 'var(--text-color)'};
    background-color: transparent;
    border: 2px solid ${props.$light ? 'var(--primary-2)' : 'var(--text-color)'};
    padding: 8px 28px;
    :hover {
      opacity: 0.8;
    }
  `
    : css`
    background-color: var(--primary);
    color: #fff;
    border: 2px solid var(--primary);
    padding: 8px 28px;
    :hover {
      background-color: #4F4BFA;
    }
  `
  )};

  ${(props) => props.$small && css`
    padding: 6px 18px;
    font-size: 15px;
  `}
`;

const ButtonLink = styled(Link)`${styles}`;

const ALink = styled.a`${styles}`;
