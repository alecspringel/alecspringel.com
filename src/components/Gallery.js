import React, { useEffect, useRef, useState } from 'react';
import styled, { css } from 'styled-components';

// Screenshot carousel. Per image: `position` sets the crop anchor, `zoom` crops in.
// Click the image or use the arrows/dots to move through it.
// With one image it renders as a plain screenshot with no controls.
// onIndexChange lets the parent follow along (e.g. to show a link for the current slide).
const Gallery = ({ images, name, onIndexChange }) => {
  const [index, setIndex] = useState(0);
  const count = images.length;
  const go = (next) => setIndex((next + count) % count);
  const current = images[index];

  useEffect(() => {
    if (onIndexChange) onIndexChange(index);
  }, [index]);

  // Arrow keys (while focus is inside the gallery) and horizontal swipes on touch screens
  const touchStart = useRef(null);
  const onKeyDown = (e) => {
    if (e.key === 'ArrowRight') { e.preventDefault(); go(index + 1); }
    if (e.key === 'ArrowLeft') { e.preventDefault(); go(index - 1); }
  };
  const onTouchStart = (e) => { touchStart.current = e.touches[0].clientX; };
  const onTouchEnd = (e) => {
    if (touchStart.current === null) return;
    const dx = e.changedTouches[0].clientX - touchStart.current;
    touchStart.current = null;
    if (Math.abs(dx) > 40) go(index + (dx < 0 ? 1 : -1));
  };

  if (count === 1) {
    return (
      <Shot
        src={current.src}
        alt={current.alt}
        $position={current.position}
        $zoom={current.zoom}
      />
    );
  }

  return (
    <Wrapper
      role="group"
      aria-roledescription="carousel"
      aria-label={`${name} screenshots`}
      onKeyDown={onKeyDown}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      <ShotButton
        type="button"
        onClick={() => go(index + 1)}
        aria-label={`Next screenshot (${index + 1} of ${count})`}
      >
        <Shot
          src={current.src}
          alt={current.alt}
          $position={current.position}
          $zoom={current.zoom}
        />
      </ShotButton>

      <Arrow type="button" $side="left" onClick={() => go(index - 1)} aria-label="Previous screenshot">
        <Chevron $flip />
      </Arrow>
      <Arrow type="button" $side="right" onClick={() => go(index + 1)} aria-label="Next screenshot">
        <Chevron />
      </Arrow>

      <Bar>
        {current.caption && <span className="caption">{current.caption}</span>}
        <Dots>
          {images.map((image, i) => (
            <li key={image.src}>
              <Dot
                type="button"
                $active={i === index}
                aria-label={`Show screenshot ${i + 1}${image.caption ? `: ${image.caption}` : ''}`}
                aria-current={i === index}
                onClick={() => go(i)}
              />
            </li>
          ))}
        </Dots>
      </Bar>
    </Wrapper>
  );
};

export default Gallery;

// Screenshots are below the fold, so let the browser load them as they approach.
const Shot = styled.img.attrs({ loading: 'lazy', decoding: 'async' })`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: ${({ $position }) => $position || 'top left'};
  transform: scale(${({ $zoom }) => $zoom || 1});
  transform-origin: center;
`;

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
`;

const ShotButton = styled.button`
  display: block;
  width: 100%;
  height: 100%;
  cursor: pointer;
`;

const Arrow = styled.button`
  position: absolute;
  top: 50%;
  ${({ $side }) => ($side === 'left' ? 'left: 12px;' : 'right: 12px;')}
  transform: translateY(-50%);
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: rgba(9, 11, 43, 0.72);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  opacity: 0;
  transition: opacity 150ms ease, background 150ms ease;

  ${Wrapper}:hover &,
  &:focus-visible {
    opacity: 1;
  }

  &:hover {
    background: var(--primary);
  }

  @media (hover: none) {
    opacity: 1;
  }
`;

const Chevron = styled.span`
  width: 10px;
  height: 10px;
  border-top: 2px solid #fff;
  border-right: 2px solid #fff;
  transform: ${({ $flip }) => ($flip ? 'translateX(2px) rotate(-135deg)' : 'translateX(-2px) rotate(45deg)')};
`;

const Bar = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
  padding: 10px 14px;
  background: linear-gradient(to top, rgba(9, 11, 43, 0.78), rgba(9, 11, 43, 0));
  pointer-events: none;

  .caption {
    color: #fff;
    font-family: var(--body-font);
    font-size: 14px;
  }
`;

const Dots = styled.ul`
  list-style: none;
  display: flex;
  gap: 4px;
  margin-left: auto;
  pointer-events: auto;
`;

const Dot = styled.button`
  width: 24px;
  height: 24px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  &::after {
    content: '';
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.5);
    transition: background 150ms ease, transform 150ms ease;
    ${({ $active }) => $active && css`
      background: #fff;
      transform: scale(1.25);
    `}
  }
`;
