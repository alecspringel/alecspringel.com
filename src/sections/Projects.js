import React, { useState } from 'react';
import styled, { css, keyframes } from 'styled-components';
import { MEDIA_QUERY } from '../constants';
import { PROJECTS, NIKE_INTERNAL } from '../content';
import { DIAGRAMS } from '../components/NikeDiagrams';
import StoreLocatorPreview from '../images/projects/store-locator/store-locator.webp';
import StoreSanFrancisco from '../images/projects/store-locator/2-san-francisco.webp';
import StoreSoho from '../images/projects/store-locator/3-soho.webp';
import StoreAtlantic from '../images/projects/store-locator/4-atlantic-center.webp';
import FarmplotPreview from '../images/projects/farmplot/farmplot-preview.webp';
import FarmplotLocations from '../images/projects/farmplot/1-locations.webp';
import FarmplotStrains from '../images/projects/farmplot/2-strains.webp';
import FarmplotHarvests from '../images/projects/farmplot/3-harvests.webp';
import FarmplotUploads from '../images/projects/farmplot/4-uploads.webp';
import FarmplotUsers from '../images/projects/farmplot/5-users.webp';
import BringPreview from '../images/projects/bring/bring-preview.webp';
import ShootEngagement from '../images/projects/shoot/1-team-engagement.webp';
import ShootTimesheets from '../images/projects/shoot/2-timesheets.webp';
import ShootGeo from '../images/projects/shoot/3-geo-dashboard.webp';
import ShootWorkspace from '../images/projects/shoot/4-select-workspace.webp';
import SelectorProductWall from '../images/projects/store-selector/1-product-wall.webp';
import SelectorProductPage from '../images/projects/store-selector/2-product-page.webp';
import SelectorBag from '../images/projects/store-selector/3-bag.webp';
import SelectorGetHelp from '../images/projects/store-selector/4-get-help.webp';
import LemonHero from '../images/projects/lemonlist/1-hero.webp';
import LemonFeatures from '../images/projects/lemonlist/2-features.webp';
import LemonPlans from '../images/projects/lemonlist/3-plans.webp';
import ExternalLinkSVG from '../images/external-link.svg';
import LockSVG from '../images/lock.svg';
import Gallery from '../components/Gallery';

// To add screenshots: drop them in src/images/projects/<name>/, import them here,
// list them under a key, and set `image` on the project in content.js.
// More than one image turns into a clickable gallery.
const IMAGES = {
  storeLocator: [
    {
      src: StoreLocatorPreview,
      alt: 'Nike store finder at nike.com/retail with an Apple Maps view of New York stores',
      caption: 'Store finder',
    },
    {
      src: StoreSanFrancisco,
      alt: 'Nike San Francisco store page on nike.com/retail',
      caption: 'Store page: San Francisco',
    },
    {
      src: StoreSoho,
      alt: 'Nike Soho store page with address, hours, and directions',
      caption: 'Store page: Soho',
    },
    {
      src: StoreAtlantic,
      alt: 'Nike Atlantic Center store page with hours and in-store services like order pickup',
      caption: 'Store page: Atlantic Center',
    },
  ],
  storeSelector: [
    {
      src: SelectorProductWall,
      alt: 'Store Selector as a “Filter by Store” dialog on the Nike.com product wall',
      caption: 'Product wall: filter by store',
      zoom: 1.6,
      position: 'center',
      live: { href: 'https://www.nike.com/w', label: 'nike.com/w', hint: 'Pickup Today (top left)' },
    },
    {
      src: SelectorProductPage,
      alt: 'Store Selector as a pickup location picker on a Nike.com product page, showing availability by store',
      caption: 'Product page: pickup',
      position: 'center',
      live: {
        href: 'https://www.nike.com/t/air-force-1-07-mens-shoes-DZejrQoC/CW2288-111',
        label: 'Air Force 1 ’07 product page',
        hint: 'Free Pickup (below Add to Bag)',
      },
    },
    {
      src: SelectorBag,
      alt: 'Store Selector choosing a pickup store from the Nike.com bag',
      caption: 'Bag: pickup',
      position: 'center',
      live: { href: 'https://www.nike.com/cart', label: 'nike.com/cart', hint: 'Free Pickup (below an item)' },
    },
    {
      src: SelectorGetHelp,
      alt: 'Store Selector listing stores that accept returns on the Nike Get Help page',
      caption: 'Get Help: returns',
      position: 'center top',
      live: { href: 'https://www.nike.com/help/a/store-return-finder', label: 'Nike store return finder' },
    },
  ],
  lemonlist: [
    {
      src: LemonHero,
      alt: 'LemonList site hero with a shared grocery list sorted by aisle',
      caption: 'Shared list',
    },
    {
      src: LemonFeatures,
      alt: 'LemonList features: shared list, live sync, quick add, Build mode, shopping mode',
      caption: 'Features',
    },
    {
      src: LemonPlans,
      alt: 'LemonList free and Plus plans',
      caption: 'Plans',
    },
  ],
  shoot: [
    { src: ShootEngagement, alt: 'Shoot team engagement dashboard showing each member’s daily activity timeline', caption: 'Team engagement' },
    { src: ShootTimesheets, alt: 'Shoot timesheets view with weekly hours, activity levels, and screenshots', caption: 'Timesheets' },
    { src: ShootGeo, alt: 'Shoot geo dashboard showing an employee’s location history on a map', caption: 'Geo dashboard' },
    { src: ShootWorkspace, alt: 'Shoot workspace picker', caption: 'Select a workspace' },
  ],
  farmplot: [
    { src: FarmplotPreview, alt: 'farmPlot desktop app', caption: 'farmPlot' },
    {
      src: FarmplotLocations,
      alt: 'farmPlot home dashboard with plant totals by growth phase and a tile for each grow room',
      caption: 'Grow rooms',
    },
    {
      src: FarmplotStrains,
      alt: 'farmPlot strain table with immature, vegetative, and flowering counts',
      caption: 'Strains',
    },
    {
      src: FarmplotHarvests,
      alt: 'farmPlot active harvests table with wet weight, waste, and packages',
      caption: 'Harvests',
    },
    {
      src: FarmplotUploads,
      alt: 'farmPlot list of uploads to the state Metrc system with their status',
      caption: 'Metrc uploads',
    },
    {
      src: FarmplotUsers,
      alt: 'farmPlot facility users and permissions settings',
      caption: 'Users & permissions',
    },
  ],
  bring: [{ src: BringPreview, alt: 'BRING Virtual Donation Manager' }],
};

const ProjectRow = ({ project, reverse }) => {
  const images = IMAGES[project.image];
  const [slide, setSlide] = useState(0);
  const live = images && images[slide] && images[slide].live;
  return (
    <Row key={project.name} $reverse={reverse} data-reveal>
      <Frame>
        {images
          ? <Gallery images={images} name={project.name} onIndexChange={setSlide} />
          : (
            <Placeholder aria-hidden="true">
              <span className="heading">{project.name}</span>
            </Placeholder>
          )}
      </Frame>
      <Body>
        <div className="eyebrow-row">
          <p className="eyebrow">
            {project.org}
            {' · '}
            {project.dates}
          </p>
          {project.note && <span className="note">{project.note}</span>}
        </div>
        <h4>{project.name}</h4>
        <p className="role">{project.role}</p>
        <p className="description">{project.description}</p>
        <Stack aria-label="Tech stack">
          {project.stack.map((item) => <li key={item}>{item}</li>)}
        </Stack>
        {(project.links || project.privateRepo) && (
          <div className="flex-row" style={{ gap: 20, marginTop: 20 }}>
            {(project.links || []).map((link) => (
              <a key={link.href} href={link.href} target="_blank" rel="noreferrer" className="ext-link">
                {link.label}
                <img src={ExternalLinkSVG} alt="" />
              </a>
            ))}
            {project.privateRepo && (
              <span className="private-repo">
                <img src={LockSVG} alt="" />
                Private repository
              </span>
            )}
          </div>
        )}
        {live && (
          <LiveLink key={live.href} aria-live="polite" className="flex-row" style={{ gap: 20, marginTop: 20 }}>
            <a href={live.href} target="_blank" rel="noreferrer" className="ext-link">
              {live.label}
              <img src={ExternalLinkSVG} alt="" />
            </a>
            {live.hint && (
              <span className="live-hint">
                <span className="caret" aria-hidden="true">›</span>
                {live.hint}
              </span>
            )}
          </LiveLink>
        )}
      </Body>
    </Row>
  );
};

const NikeWork = () => (
  <NikeSection aria-labelledby="nike-work-heading">
    <h5 id="nike-work-heading">Platforms and internal applications at Nike</h5>
    <p className="intro">
      Internal tools and platforms, so no public screenshots. These diagrams show the idea.
    </p>
    <NikeGrid>
      {NIKE_INTERNAL.map((item) => {
        const Diagram = DIAGRAMS[item.diagram];
        return (
          <NikeCard key={item.name} data-reveal>
            <DiagramFrame>
              <Diagram />
            </DiagramFrame>
            <div className="card-body">
              <p className="eyebrow">
                Nike
                {' · '}
                {item.dates}
              </p>
              <div className="flex-row align-c" style={{ gap: 10, flexWrap: 'wrap' }}>
                <h5>{item.name}</h5>
                <span className="pill">{item.role}</span>
              </div>
              <p className="description">{item.description}</p>
              <Stack aria-label="Tech stack">
                {item.stack.map((tech) => <li key={tech}>{tech}</li>)}
              </Stack>
            </div>
          </NikeCard>
        );
      })}
    </NikeGrid>
  </NikeSection>
);

const nikeProjects = PROJECTS.filter((p) => p.org === 'Nike');
const otherProjects = PROJECTS.filter((p) => p.org !== 'Nike');

const Projects = () => (
  <section id="projects">
    <SectionBorder className="max-width">
      <h6 className="text-primary m-b12">Projects</h6>
      <Heading>Things I&apos;ve built</Heading>
      <p className="intro">
        Work from Nike, plus the products I&apos;ve built on my own and with small teams.
      </p>

      <List>
        <NikeWork />
        <NikePublic aria-labelledby="nike-public-heading">
          <div>
            <h5 id="nike-public-heading">Public Nike.com work</h5>
            <p className="intro">Public Nike.com experiences you can try today.</p>
          </div>
          {nikeProjects.map((project, i) => (
            <ProjectRow key={project.name} project={project} reverse={i % 2 === 1} />
          ))}
        </NikePublic>
        <SideHeading id="personal-projects" aria-labelledby="personal-projects-heading">
          <h5 id="personal-projects-heading">Personal projects</h5>
          <p className="intro">Products I&apos;ve built on my own time.</p>
        </SideHeading>
        {otherProjects.map((project, i) => (
          <ProjectRow
            key={project.name}
            project={project}
            reverse={(i + nikeProjects.length) % 2 === 1}
          />
        ))}
      </List>
    </SectionBorder>
  </section>
);

export default Projects;

const SectionBorder = styled.div`
  border-left: 1px solid #E5E5E5;
  border-right: 1px solid #E5E5E5;
  margin: auto;
  padding: 120px 30px;

  .intro {
    max-width: 720px;
  }

  ${MEDIA_QUERY.PHONE} {
    padding: 80px 16px;
  }
`;

const Heading = styled.h3`
  margin-left: -31px;
  padding-left: 27px;
  border-left: 3px solid var(--primary);
  margin-bottom: 16px;

  ${MEDIA_QUERY.PHONE} {
    margin-left: -17px;
    padding-left: 14px;
  }
`;

const List = styled.div`
  display: flex;
  flex-direction: column;
  gap: 96px;
  margin-top: 72px;

  ${MEDIA_QUERY.PHONE} {
    gap: 64px;
    margin-top: 48px;
  }
`;

const Row = styled.article`
  display: grid;
  grid-template-columns: 7fr 5fr;
  gap: 56px;
  align-items: center;

  ${({ $reverse }) => $reverse && css`
    grid-template-columns: 5fr 7fr;
    & > :first-child {
      order: 2;
    }
  `}

  ${MEDIA_QUERY.SMALL_LAPTOPS} {
    grid-template-columns: 1fr;
    gap: 28px;
    & > :first-child {
      order: 0;
    }
  }
`;

const Frame = styled.div`
  border-radius: var(--radius-md);
  overflow: hidden;
  background: #F4F4FF;
  border: 1px solid #E5E5F5;
  box-shadow: var(--shadow-lg);
  aspect-ratio: 16 / 10;
`;

const Placeholder = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px;
  text-align: center;
  background:
    radial-gradient(60% 80% at 80% 20%, rgba(76, 72, 239, 0.45) 0%, rgba(76, 72, 239, 0) 70%),
    radial-gradient(127% 127% at 50% 50%, #14175A 0%, #090B2B 70%);

  span {
    color: #C5C4FA;
    font-size: 28px;
    opacity: 0.9;
  }
`;

const Body = styled.div`
  .eyebrow {
    font-family: var(--heading-font);
    font-size: 14px;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    color: var(--primary);
    margin-bottom: 6px;
  }

  .eyebrow-row {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 6px 10px;
    margin-bottom: 6px;

    .eyebrow {
      margin-bottom: 0;
    }
  }

  /* Small bubble next to the dates, e.g. "Maintained until 2025" */
  .note {
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

  h4 {
    line-height: 1.25;
  }

  .role {
    color: #5E6079;
    font-size: 16px;
    margin-top: 4px;
  }

  .description {
    margin-top: 16px;
    font-size: 17px;
  }

  .ext-link {
    font-size: 16px;
    display: inline-flex;
    align-items: center;
    gap: 6px;
  }

  .private-repo {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    font-family: var(--body-font);
    font-size: 16px;
    color: #5E6079;

    img {
      height: 18px;
    }
  }
`;

const Stack = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-top: 20px;

  li {
    font-family: var(--body-font);
    font-size: 14px;
    color: #3A3D63;
    background: #F4F4FF;
    border: 1px solid #DDDCF6;
    border-radius: 100px;
    padding: 4px 12px;
  }
`;

const NikeSection = styled.div`
  padding: 56px 0 8px;
  border-top: 1px solid #E5E5F5;
  padding-bottom: 0;

  h5 {
    line-height: 1.3;
  }

  .intro {
    margin-top: 8px;
    font-size: 17px;
    color: #3A3D63;
  }
`;

const NikeGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 32px;
  margin-top: 36px;

  ${MEDIA_QUERY.TABLET} {
    grid-template-columns: 1fr;
  }
`;

const NikeCard = styled.article`
  background: #fff;
  border: 1px solid #E5E5F5;
  border-radius: var(--radius-md);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  box-shadow: var(--shadow-sm);

  .card-body {
    padding: 22px 24px 26px;
  }

  .eyebrow {
    font-family: var(--heading-font);
    font-size: 13px;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    color: var(--primary);
    margin-bottom: 6px;
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

  .description {
    margin-top: 12px;
    font-size: 16px;
  }

  ${MEDIA_QUERY.PHONE} {
    .card-body {
      padding: 18px 18px 22px;
    }
  }
`;

const DiagramFrame = styled.div`
  aspect-ratio: 16 / 10;
  background: #090B2B;
`;

// Public Nike.com projects, grouped under their own heading after the internal-work cards.
const NikePublic = styled.div`
  display: flex;
  flex-direction: column;
  gap: 56px;

  h5 {
    line-height: 1.3;
  }

  .intro {
    margin-top: 8px;
    font-size: 17px;
    color: #3A3D63;
  }

  ${MEDIA_QUERY.PHONE} {
    gap: 40px;
  }
`;

// Heading for personal projects; same treatment as the Nike section headings
const SideHeading = styled.div`
  padding-top: 56px;
  border-top: 1px solid #E5E5F5;
  /* the list puts 96px between items; match the 56px heading gap used above */
  margin-bottom: -40px;

  ${MEDIA_QUERY.PHONE} {
    margin-bottom: -24px;
  }

  h5 {
    line-height: 1.3;
  }

  .intro {
    margin-top: 8px;
    font-size: 17px;
    color: #3A3D63;
  }
`;

const liveIn = keyframes`
  from { opacity: 0; transform: translateY(4px); }
  to { opacity: 1; transform: translateY(0); }
`;

// Link that changes with the gallery slide; same look as other project links
const LiveLink = styled.div`
  align-items: center;
  flex-wrap: wrap;
  row-gap: 4px !important;

  /* Where to find it on the page: muted, not part of the link */
  .live-hint {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    font-family: var(--body-font);
    font-size: 15px;
    color: #5E6079;
  }

  /* Points from the link to the step to take on that page */
  .caret {
    font-size: 20px;
    line-height: 1;
    color: #AEACFF;
    margin-top: -2px;
  }

  animation: ${liveIn} 250ms ease-out;

  @media (prefers-reduced-motion: reduce) {
    animation: none;
  }
`;
