import React from 'react';
import styled, { css } from 'styled-components';
import { MEDIA_QUERY } from '../constants';
import { CAREER, SIDE_HIGHLIGHTS } from '../content';

const MONTHS = ['jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec'];

// Parses "Mon YYYY" (or "present") into a month index; null when only a year is known.
const parseMonth = (text) => {
  if (/present/i.test(text)) {
    const now = new Date();
    return now.getFullYear() * 12 + now.getMonth();
  }
  const m = text.trim().match(/^([a-z]{3})[a-z]*\s+(\d{4})$/i);
  if (!m) return null;
  const month = MONTHS.indexOf(m[1].toLowerCase());
  return month === -1 ? null : Number(m[2]) * 12 + month;
};

// LinkedIn-style length, counting both the first and last month: "6 mos", "4 yrs 11 mos".
export const duration = (dates) => {
  const [from, to] = dates.split(/\s+[–-]\s+/);
  if (!to) return null;
  const start = parseMonth(from);
  const end = parseMonth(to);
  if (start === null || end === null || end < start) return null;
  const total = end - start + 1;
  const years = Math.floor(total / 12);
  const months = total % 12;
  const parts = [];
  if (years) parts.push(`${years} ${years === 1 ? 'yr' : 'yrs'}`);
  if (months) parts.push(`${months} ${months === 1 ? 'mo' : 'mos'}`);
  return parts.join(' ');
};

// Professional history only, newest first. Desktop: a wide Nike card (with its own
// progression) and two smaller earlier cards on a horizontal rail that starts at "Now".
// Smaller screens: a vertical list on a left rail.
const Timeline = () => (
  <Section id="experience">
    <SectionBorder className="max-width">
      <h6 className="text-primary m-b12">Experience</h6>
      <Heading>Where I&apos;ve been</Heading>

      <Track>
        {CAREER.map((item) => (
          <Step key={`${item.org}-${item.role}`} data-reveal>
            <Marker aria-hidden="true">
              <Dot $current={item.current} />
            </Marker>
            <Card $current={item.current}>
              <div className="when">
                <span className="dates">{item.dates}</span>
                {(item.badge || duration(item.dates)) && (
                  <span className="length">{item.badge || duration(item.dates)}</span>
                )}
              </div>
              <div className="top">
                <h5>{item.org}</h5>
                <span className="pill">{item.type}</span>
              </div>
              <p className="role">{item.role}</p>
              {item.detail && <p className="detail">{item.detail}</p>}
              {item.steps && (
                <Progression>
                  {item.steps.map((step) => (
                    <li key={step.when + step.title} className={step.text ? '' : 'milestone'}>
                      <span className="step-when">{step.when}</span>
                      <span className="step-title">{step.title}</span>
                      {step.text && <span className="step-text">{step.text}</span>}
                    </li>
                  ))}
                </Progression>
              )}
            </Card>
          </Step>
        ))}
        <SideBubble data-reveal aria-labelledby="timeline-side-heading">
          <p className="eyebrow">Outside of work</p>
          <h5 id="timeline-side-heading">Personal projects</h5>
          <ul>
            {SIDE_HIGHLIGHTS.map((item) => (
              <li key={item.name}>
                <span className="name">{item.name}</span>
                <span className="text">{item.text}</span>
                <span className="year">{item.year}</span>
              </li>
            ))}
          </ul>
          <a href="/#personal-projects" className="more">See personal projects ↓</a>
        </SideBubble>
      </Track>
    </SectionBorder>
  </Section>
);

export default Timeline;

const DOT = 16;
const MARKER_H = 44;

const Section = styled.section`
  background: #F9F9FF;
  box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.12);
  position: relative;
`;

const SectionBorder = styled.div`
  border-left: 1px solid #DEDEDE;
  border-right: 1px solid #DEDEDE;
  margin: auto;
  padding: 120px 30px;

  ${MEDIA_QUERY.PHONE} {
    padding: 80px 16px;
  }
`;

const Heading = styled.h3`
  margin-left: -31px;
  padding-left: 27px;
  border-left: 3px solid var(--primary);

  ${MEDIA_QUERY.PHONE} {
    margin-left: -17px;
    padding-left: 14px;
  }
`;

const Track = styled.ol`
  list-style: none;
  padding: 0;
  margin: 56px 0 0;
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  /* Row 1 fits the smaller cards; the Nike card's extra height goes to row 2, so the
     personal-projects bubble sits one normal gap below them. */
  grid-template-rows: auto 1fr;
  align-items: start;
  gap: 20px;
  position: relative;

  /* Horizontal rail through the markers, strongest at "now" on the left */
  &::before {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    top: ${MARKER_H / 2 - 1}px;
    height: 3px;
    border-radius: 2px;
    background: linear-gradient(to right, var(--primary), #DDDCF6);
  }

  /* The Nike card spans both rows; the personal-projects bubble sits under the smaller cards */
  & > li:first-child {
    grid-row: 1 / span 2;
  }

  ${MEDIA_QUERY.SMALL_LAPTOPS} {
    & > li:first-child {
      grid-row: auto;
    }

    grid-template-rows: none;
    grid-template-columns: 1fr;
    gap: 16px;
    padding-left: 36px;
    margin-top: 40px;

    &::before {
      left: 11px;
      right: auto;
      top: 0;
      bottom: 0;
      width: 3px;
      height: auto;
      background: linear-gradient(to bottom, var(--primary), #DDDCF6);
    }
  }
`;

const Step = styled.li`
  display: flex;
  flex-direction: column;
  position: relative;

  ${MEDIA_QUERY.SMALL_LAPTOPS} {
    display: block;
  }
`;

const Marker = styled.div`
  height: ${MARKER_H}px;
  display: flex;
  align-items: center;
  padding-left: 20px;

  ${MEDIA_QUERY.SMALL_LAPTOPS} {
    position: absolute;
    left: -36px;
    top: 18px;
    height: auto;
    padding-left: 5px;
  }
`;

const Dot = styled.span`
  width: ${DOT}px;
  height: ${DOT}px;
  border-radius: 50%;
  background: #F9F9FF;
  border: 3px solid var(--primary);
  position: relative;
  z-index: 1;

  ${({ $current }) => $current && css`
    background: var(--primary);
    box-shadow: 0 0 0 6px rgba(76, 72, 239, 0.18);
  `}
`;

const Card = styled.div`
  position: relative;
  flex: 1;
  margin-top: 12px;
  background: #fff;
  border: 1px solid #E5E5F5;
  border-radius: var(--radius-md);
  padding: 18px 20px 20px;
  transition: border-color 150ms ease, box-shadow 150ms ease, transform 150ms ease;

  ${({ $current }) => $current && css`
    border-color: #C5C4FA;
    box-shadow: var(--shadow-sm);
  `}

  &:hover {
    border-color: #C5C4FA;
    transform: translateY(-2px);
  }

  .when {
    margin-bottom: 8px;
  }

  .dates {
    font-family: var(--heading-font);
    font-size: 13px;
    color: var(--primary);
  }

  /* Length of the role, as a tab sitting on the card's top-right corner */
  .length {
    position: absolute;
    top: -11px;
    right: 14px;
    font-family: var(--heading-font);
    font-size: 12px;
    line-height: 1;
    color: #3A3D63;
    background: #fff;
    border: 1px solid #DDDCF6;
    border-radius: 100px;
    padding: 5px 10px;
    white-space: nowrap;
  }

  .top {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 6px 10px;
  }

  h5 {
    line-height: 1.3;
    font-size: 19px;
  }

  .pill {
    font-family: var(--heading-font);
    font-size: 12px;
    color: var(--primary);
    background: #F4F4FF;
    border: 1px solid #DDDCF6;
    border-radius: 100px;
    padding: 2px 10px;
  }

  .role {
    font-size: 15px;
    color: #3A3D63;
    margin-top: 4px;
  }

  .detail {
    font-size: 15px;
    color: #5E6079;
    margin-top: 10px;
  }

  ${MEDIA_QUERY.SMALL_LAPTOPS} {
    margin-top: 0;
  }
`;

// Progression inside the Nike card: a small vertical rail, newest first.
const Progression = styled.ol`
  list-style: none;
  margin: 18px 0 0;
  padding: 4px 0 0 20px;
  border-top: 1px solid #EEEEF8;
  position: relative;
  display: grid;
  gap: 4px;

  li {
    position: relative;
    padding: 12px 0 2px;
    display: flex;
    flex-direction: column;
  }

  /* Small dot for each step, on a faint left rail */
  li::before {
    content: '';
    position: absolute;
    left: -20px;
    top: 17px;
    width: 9px;
    height: 9px;
    border-radius: 50%;
    background: var(--primary);
  }

  li::after {
    content: '';
    position: absolute;
    left: -16px;
    top: 26px;
    bottom: -14px;
    width: 1px;
    background: #DDDCF6;
  }

  li.milestone::before {
    background: #fff;
    border: 2px solid var(--primary);
    width: 7px;
    height: 7px;
  }

  .step-when {
    font-family: var(--heading-font);
    font-size: 12px;
    color: var(--primary);
  }

  .step-title {
    font-family: var(--heading-font);
    font-size: 15px;
    color: var(--text-color);
    line-height: 1.35;
  }

  .step-text {
    font-family: var(--body-font);
    font-size: 14px;
    color: #5E6079;
    line-height: 1.45;
    margin-top: 2px;
  }

  li:last-child::after {
    display: none;
  }
`;

// One filled card for personal work, visibly different from the white job cards
const SideBubble = styled.li`
  grid-column: 2 / 4;
  grid-row: 2;
  align-self: start;
  background: #EEEDFF;
  border: 1px solid #DDDCF6;
  border-radius: var(--radius-md);
  padding: 18px 20px 20px;

  .eyebrow {
    font-family: var(--heading-font);
    font-size: 12px;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: var(--primary);
  }

  h5 {
    font-size: 19px;
    line-height: 1.3;
    margin-top: 2px;
  }

  ul {
    list-style: none;
    margin-top: 12px;
    display: flex;
    flex-direction: column;
  }

  li {
    display: grid;
    grid-template-columns: auto 1fr auto;
    align-items: baseline;
    gap: 4px 12px;
    padding: 10px 0;
    border-top: 1px solid #DDDCF6;
  }

  .name {
    font-family: var(--heading-font);
    font-size: 15px;
    color: var(--text-color);
  }

  .text {
    font-family: var(--body-font);
    font-size: 14px;
    color: var(--muted);
  }

  .year {
    font-family: var(--heading-font);
    font-size: 13px;
    color: var(--primary);
    font-variant-numeric: tabular-nums;
  }

  .more {
    display: inline-block;
    margin-top: 8px;
    font-family: var(--heading-font);
    font-size: 14px;
  }

  ${MEDIA_QUERY.SMALL_LAPTOPS} {
    grid-column: auto;
    grid-row: auto;
  }

  ${MEDIA_QUERY.PHONE} {
    li {
      grid-template-columns: 1fr auto;
    }

    .text {
      grid-column: 1 / -1;
      grid-row: 2;
    }
  }
`;
