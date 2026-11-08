import React, { useState } from 'react';
import styled from 'styled-components';
import { MEDIA_QUERY } from '../constants';
import {
  MailIcon, PhoneIcon, PinIcon, LinkedInIcon, GitHubIcon, CopyIcon, CheckIcon,
} from '../components/Icons';

const EMAIL = 'alecspringel@gmail.com';

const CHANNELS = [
  {
    label: 'Email', value: EMAIL, href: `mailto:${EMAIL}`, icon: MailIcon,
  },
  {
    label: 'Phone', value: '+1 (702) 290-0858', href: 'tel:+17022900858', icon: PhoneIcon,
  },
  {
    label: 'LinkedIn', value: 'in/alec-springel', href: 'https://www.linkedin.com/in/alec-springel/', icon: LinkedInIcon, external: true,
  },
  {
    label: 'GitHub', value: '@alecspringel', href: 'https://github.com/alecspringel', icon: GitHubIcon, external: true,
  },
];

const Contact = () => {
  const [copied, setCopied] = useState(false);

  // Older copy method for browsers or frames that block the async Clipboard API.
  const legacyCopy = () => {
    const field = document.createElement('textarea');
    field.value = EMAIL;
    field.setAttribute('readonly', '');
    field.style.position = 'fixed';
    field.style.opacity = '0';
    document.body.appendChild(field);
    field.select();
    const ok = document.execCommand('copy');
    document.body.removeChild(field);
    return ok;
  };

  const copyEmail = async () => {
    let ok = false;
    try {
      await navigator.clipboard.writeText(EMAIL);
      ok = true;
    } catch (e) {
      ok = legacyCopy();
    }
    if (ok) {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <Section id="contact">
      <SectionBorder className="max-width">
        <Intro>
          <h6 className="eyebrow">Contact</h6>
          <h3>Let&apos;s talk</h3>
          <p className="lede">
            I&apos;m always happy to talk about frontend platforms, full-stack internal tools,
            consumer-facing applications, or whatever you&apos;re building. Email is the fastest
            way to reach me.
          </p>
          <p className="location">
            <PinIcon />
            Portland, OR · open to relocation
          </p>
          <div className="actions">
            <PrimaryButton href={`mailto:${EMAIL}`}>Email me</PrimaryButton>
          </div>
        </Intro>

        <Channels>
          {CHANNELS.map(({
            label, value, href, icon: ChannelIcon, external,
          }) => (
            <li key={label}>
              <Tile
                href={href}
                target={external ? '_blank' : undefined}
                rel={external ? 'noreferrer' : undefined}
                $hasCopy={label === 'Email'}
              >
                <span className="badge"><ChannelIcon /></span>
                <span className="text">
                  <span className="label">{label}</span>
                  <span className="value">{value}</span>
                </span>
                {label !== 'Email' && <span className="arrow" aria-hidden="true">↗</span>}
              </Tile>
              {label === 'Email' && (
                <CopyButton
                  type="button"
                  onClick={copyEmail}
                  aria-label={copied ? 'Email address copied' : 'Copy email address'}
                  title={copied ? 'Copied!' : 'Copy email address'}
                  $copied={copied}
                >
                  {copied ? <CheckIcon /> : <CopyIcon />}
                  <span className="tip" aria-live="polite">{copied ? 'Copied!' : ''}</span>
                </CopyButton>
              )}
            </li>
          ))}
        </Channels>
      </SectionBorder>
    </Section>
  );
};

export default Contact;

const Section = styled.section`
  background:
    radial-gradient(60% 70% at 85% 20%, rgba(76, 72, 239, 0.22) 0%, rgba(76, 72, 239, 0) 70%),
    #090B2B;
  color: #fff;
  border-bottom: 1px solid #1B1E52;
`;

const SectionBorder = styled.div`
  border-left: 1px solid #11143D;
  border-right: 1px solid #11143D;
  margin: auto;
  padding: 120px 30px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 64px;
  align-items: center;

  ${MEDIA_QUERY.SMALL_LAPTOPS} {
    grid-template-columns: 1fr;
    gap: 48px;
  }

  ${MEDIA_QUERY.PHONE} {
    padding: 80px 16px;
  }
`;

const Intro = styled.div`
  .eyebrow {
    color: var(--primary-2);
    margin-bottom: 12px;
  }

  h3 {
    color: #fff;
  }

  .lede {
    color: #C5C4FA;
    margin-top: 16px;
    max-width: 520px;
  }

  .location {
    display: flex;
    align-items: flex-start;
    gap: 10px;
    margin-top: 20px;
    font-size: 16px;
    color: #AEACFF;
    max-width: 520px;

    svg {
      flex-shrink: 0;
      width: 18px;
      height: 18px;
      margin-top: 3px;
    }
  }

  .actions {
    display: flex;
    flex-wrap: wrap;
    gap: 12px;
    margin-top: 32px;
  }
`;

const buttonBase = `
  font-family: var(--heading-font);
  font-size: 16px;
  border-radius: var(--radius-sm);
  padding: 10px 24px;
  cursor: pointer;
  transition: background 150ms ease, border-color 150ms ease;
`;

const PrimaryButton = styled.a`
  ${buttonBase}
  background: var(--primary);
  border: 2px solid var(--primary);
  color: #fff;

  &:hover {
    background: #5F5BFF;
    border-color: #5F5BFF;
  }
`;

const Channels = styled.ul`
  list-style: none;

  li {
    position: relative;
  }

  display: grid;
  grid-template-columns: 1fr;
  gap: 12px;
  max-width: 520px;
  width: 100%;
  justify-self: end;

  ${MEDIA_QUERY.SMALL_LAPTOPS} {
    justify-self: start;
  }
`;

const Tile = styled.a`
  display: flex;
  ${({ $hasCopy }) => $hasCopy && 'padding-right: 64px !important;'}
  align-items: center;
  gap: 14px;
  height: 100%;
  padding: 14px 18px;
  border-radius: var(--radius-md);
  background: #121540;
  border: 1px solid #1F2360;
  color: #fff;
  transition: transform 150ms ease, border-color 150ms ease, background 150ms ease;

  .badge {
    flex-shrink: 0;
    width: 44px;
    height: 44px;
    border-radius: var(--radius-sm);
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(76, 72, 239, 0.18);
    color: #AEACFF;
    transition: background 150ms ease, color 150ms ease;
  }

  .text {
    display: flex;
    flex-direction: column;
    min-width: 0;
  }

  .label {
    font-family: var(--heading-font);
    font-size: 12px;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: #AEACFF;
  }

  .value {
    font-family: var(--body-font);
    font-size: 16px;
    color: #fff;
    overflow-wrap: break-word;
  }

  .arrow {
    margin-left: auto;
    color: #AEACFF;
    opacity: 0;
    transform: translate(-4px, 4px);
    transition: opacity 150ms ease, transform 150ms ease;
  }

  &:hover,
  &:focus-visible {
    transform: translateY(-2px);
    border-color: var(--primary);
    background: #161A4C;

    .badge {
      background: var(--primary);
      color: #fff;
    }

    .arrow {
      opacity: 1;
      transform: translate(0, 0);
    }
  }
`;

const CopyButton = styled.button`
  position: absolute;
  top: 50%;
  right: 14px;
  transform: translateY(-50%);
  width: 38px;
  height: 38px;
  border-radius: var(--radius-sm);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: ${({ $copied }) => ($copied ? '#7CF0B0' : '#AEACFF')};
  background: ${({ $copied }) => ($copied ? 'rgba(52, 199, 120, 0.16)' : 'rgba(76, 72, 239, 0.14)')};
  border: 1px solid ${({ $copied }) => ($copied ? 'rgba(124, 240, 176, 0.5)' : '#2A2E6E')};
  transition: background 150ms ease, color 150ms ease, border-color 150ms ease;

  svg {
    width: 18px;
    height: 18px;
  }

  &:hover,
  &:focus-visible {
    color: #fff;
    background: var(--primary);
    border-color: var(--primary);
  }

  .tip {
    position: absolute;
    bottom: calc(100% + 8px);
    right: 0;
    font-family: var(--heading-font);
    font-size: 12px;
    color: #090B2B;
    background: #7CF0B0;
    border-radius: var(--radius-sm);
    padding: 3px 8px;
    white-space: nowrap;
    pointer-events: none;
  }

  .tip:empty {
    display: none;
  }
`;
