import React, { useEffect, useRef, useState } from 'react';
import styled, { css } from 'styled-components';
import { MEDIA_QUERY } from '../constants';

const LINKS = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
];

// Mobile menu: a button whose bars morph into an "x", and a rounded panel that fades
// and slides in under the nav. Closes on link click, Escape, or a tap outside.
const MobileNav = ({ active }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    if (!open) return undefined;
    const onKey = (e) => { if (e.key === 'Escape') setOpen(false); };
    const onPointer = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener('keydown', onKey);
    document.addEventListener('pointerdown', onPointer);
    return () => {
      document.removeEventListener('keydown', onKey);
      document.removeEventListener('pointerdown', onPointer);
    };
  }, [open]);

  const close = () => setOpen(false);

  return (
    <Wrapper ref={ref}>
      <MenuButton
        type="button"
        aria-expanded={open}
        aria-controls="mobile-menu"
        aria-label={open ? 'Close menu' : 'Open menu'}
        onClick={() => setOpen(!open)}
        $open={open}
      >
        <span />
        <span />
        <span />
      </MenuButton>

      <Panel id="mobile-menu" $open={open} aria-hidden={!open}>
        <ul>
          {LINKS.map((link, i) => (
            <li key={link.id} style={{ transitionDelay: open ? `${60 + i * 40}ms` : '0ms' }}>
              <a
                href={`/#${link.id}`}
                onClick={close}
                tabIndex={open ? 0 : -1}
                className={active === link.id ? 'is-active' : ''}
                aria-current={active === link.id ? 'location' : undefined}
              >
                {link.label}
                <span className="dot" aria-hidden="true" />
              </a>
            </li>
          ))}
        </ul>
        <a
          href="/#contact"
          className="contact"
          onClick={close}
          tabIndex={open ? 0 : -1}
        >
          Contact
        </a>
      </Panel>
    </Wrapper>
  );
};

export default MobileNav;

const Wrapper = styled.div`
  display: none;

  ${MEDIA_QUERY.TABLET} {
    display: block;
  }
`;

const MenuButton = styled.button`
  position: relative;
  width: 40px;
  height: 40px;
  border-radius: var(--radius-sm);
  background: ${({ $open }) => ($open ? 'rgba(76, 72, 239, 0.35)' : 'rgba(255, 255, 255, 0.06)')};
  border: 1px solid rgba(174, 172, 255, 0.18);
  cursor: pointer;
  transition: background 200ms ease;

  span {
    position: absolute;
    left: 11px;
    width: 16px;
    height: 2px;
    border-radius: 2px;
    background: #fff;
    transition: transform 250ms ease, opacity 150ms ease, top 250ms ease;
  }

  span:nth-child(1) { top: 13px; }
  span:nth-child(2) { top: 18px; }
  span:nth-child(3) { top: 23px; }

  /* Bars morph into an "x" */
  ${({ $open }) => $open && css`
    span:nth-child(1) { top: 18px; transform: rotate(45deg); }
    span:nth-child(2) { opacity: 0; }
    span:nth-child(3) { top: 18px; transform: rotate(-45deg); }
  `}

  @media (prefers-reduced-motion: reduce) {
    span {
      transition: none;
    }
  }
`;

const Panel = styled.div`
  position: absolute;
  top: calc(100% + 8px);
  left: 8px;
  right: 8px;
  z-index: 30;
  padding: 10px;
  border-radius: var(--radius-md);
  background: rgba(9, 11, 43, 0.96);
  border: 1px solid rgba(174, 172, 255, 0.16);
  box-shadow: 0 16px 40px rgba(9, 11, 43, 0.35);
  -webkit-backdrop-filter: blur(16px);
  backdrop-filter: blur(16px);
  transform-origin: top right;

  opacity: ${({ $open }) => ($open ? 1 : 0)};
  visibility: ${({ $open }) => ($open ? 'visible' : 'hidden')};
  transform: ${({ $open }) => ($open ? 'none' : 'translateY(-6px) scale(0.98)')};
  transition:
    opacity 180ms ease,
    transform 220ms cubic-bezier(0.2, 0.8, 0.2, 1),
    visibility 0s linear ${({ $open }) => ($open ? '0s' : '220ms')};

  ul {
    list-style: none;
    display: flex;
    flex-direction: column;
  }

  li {
    opacity: ${({ $open }) => ($open ? 1 : 0)};
    transform: ${({ $open }) => ($open ? 'none' : 'translateY(-4px)')};
    transition: opacity 200ms ease, transform 200ms ease;
  }

  li a {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 12px 14px;
    border-radius: var(--radius-sm);
    font-family: var(--heading-font);
    font-size: 17px;
    color: rgba(255, 255, 255, 0.8);
    transition: background 150ms ease, color 150ms ease;
  }

  li a:hover,
  li a:focus-visible {
    background: rgba(174, 172, 255, 0.08);
    color: #fff;
  }

  li a.is-active {
    color: #fff;
  }

  .dot {
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: var(--primary-2);
    opacity: 0;
    transition: opacity 150ms ease;
  }

  li a.is-active .dot {
    opacity: 1;
  }

  .contact {
    display: block;
    margin-top: 8px;
    padding: 12px;
    border-radius: var(--radius-sm);
    background: var(--primary);
    color: #fff;
    text-align: center;
    font-family: var(--heading-font);
    font-size: 16px;
  }

  .contact:hover {
    background: #5F5BFF;
  }

  @media (prefers-reduced-motion: reduce) {
    &,
    li {
      transition: none;
      transform: none;
    }
  }
`;
