// Site copy lives here. Facts come from ../resume/Career_Context_Master.md
// (Nike, Shoot, farmPlot, BRING) and lemonlist.io.

// Shown in the footer; bump when you publish meaningful changes.
export const LAST_UPDATED = 'November 2026';

export const OVERVIEW = [
  'I’m a frontend platform and full-stack engineer at Nike, based in Portland, Oregon. For the last six years I’ve built consumer-facing React and TypeScript apps for Nike.com shoppers and full-stack internal applications for Nike store employees spanning thousands of stores around the globe.',
  'I’ve also spent my most recent years as a platform engineer, building the future of engineering for Nike.com, and then for Nike’s Retail Stores Software Platform. As a platform engineer, my work has spanned across dozens of teams, creating the shared tools other Nike teams build on.',
  'Outside of work, I love building full-stack applications that create value for consumers and businesses, with a particular focus on creating designs & UX that feel great and perform well at scale.',
];

// Shown in one "Outside of work" bubble under the earlier timeline cards.
export const SIDE_HIGHLIGHTS = [
  { name: 'LemonList', year: '2026', text: 'A shared grocery list for iPhone and Android, coming soon.' },
  { name: 'Shoot', year: '2023', text: 'Remote workforce software, piloted at a medical records company.' },
  { name: 'farmPlot', year: '2020', text: 'A desktop app for Oregon cannabis farms and state reporting.' },
];

// Professional timeline, newest first. Nike is one card with its own progression
// (newest first) so five-plus years read as one continuous run.
export const CAREER = [
  {
    org: 'Nike',
    role: 'Software Engineer II',
    dates: 'Mar 2021 – present',
    type: 'Full time',
    current: true,
    steps: [
      {
        when: '2025 – present',
        title: 'Nike Stores Engineering',
        text: 'Project owner on the Retail Stores Platform, plus Store Operations Reporting and Nike CASH.',
      },
      {
        when: '2024 – 2025',
        title: 'Nike.com Platform Team',
        text: 'The shared code and tooling every Nike.com page runs on.',
      },
      {
        when: 'Nov 2022',
        title: 'Promoted to Software Engineer II',
      },
      {
        when: '2022 – 2023',
        title: 'Nike.com retail',
        text: 'Project owner on the nike.com/retail rebuild, then Store Selector.',
      },
      {
        when: 'Jan 2022',
        title: 'Converted to full time',
      },
      {
        when: 'Mar 2021',
        title: 'Software Engineer (Contract)',
        text: 'Internal tools for store employees and the core store-location API.',
      },
    ],
  },
  {
    org: 'University of Oregon',
    role: 'B.S. Computer Science, minor in Chemistry',
    dates: '2021',
    badge: 'Graduated',
    type: 'Education',
    detail: 'Published Pipeline Trees at ITISE 2021, the International Conference on Time Series and Forecasting.',
  },
  {
    org: 'BRING Recycling',
    role: 'Full-Stack Engineer & UI Designer',
    dates: 'Oct 2020 – Mar 2021',
    // Corner badge; overrides the length worked out from the dates.
    badge: '6 mos · maintained to 2025',
    type: 'Volunteer',
    detail: 'Won the 2020 Oregon Technology Association “Hack for a Cause” with the prototype, then took the app to production and maintained it until 2025.',
  },
];

// image: key into IMAGES in sections/Projects.js. Leave it out to show a placeholder panel.
export const PROJECTS = [
  {
    name: 'Nike Store Locator',
    org: 'Nike',
    dates: '2022',
    role: 'Project owner',
    image: 'storeLocator',
    description: 'Nike’s public store finder at nike.com/retail. My team of three rebuilt it in-house so Nike could drop a third-party vendor. I owned all phases of the app build-out from start to finish, SEO setup, the Apple Maps integration, and data-fetching for 3,000+ store pages on four continents. It gets about 2.9M views a month, 70% from organic search traffic.',
    stack: ['React', 'Next.js', 'SSR', 'SEO', 'Apple MapKit JS', 'Localization'],
    links: [{ href: 'https://www.nike.com/retail', label: 'nike.com/retail' }],
  },
  {
    name: 'Store Selector',
    org: 'Nike',
    dates: '2023',
    role: 'Architect',
    image: 'storeSelector',
    description: 'The “choose a store” search on Nike.com. I played a major role in architecting it as one microfrontend that six Nike.com flows embed, including find-in-store, pickup orders, and returns, and ran its A/B test rollout with the data team. It handles about 60K searches a day.',
    stack: ['React', 'Microfrontends', 'A/B testing', 'Analytics instrumentation'],
  },
  {
    // DRAFT (made up for preview): role and stack need Alec's confirmation.
    name: 'LemonList',
    org: 'Personal project',
    dates: '2026',
    role: 'Designer & developer',
    image: 'lemonlist',
    description: 'A shared grocery list for the whole household, coming soon to iPhone and Android. Type “2 lb chicken thighs” and it works out the amount and the aisle; lists sync live between phones and keep working offline; and Build mode drafts your next shop from what you usually buy. I designed and built the app and its site.',
    stack: ['React Native', 'TypeScript', 'Expo', 'Offline sync', 'App Store & Google Play'],
    links: [{ href: 'https://lemonlist.io', label: 'lemonlist.io' }],
  },
  {
    name: 'Shoot',
    org: 'Personal project',
    dates: '2023',
    role: 'Founding engineer',
    image: 'shoot',
    description: 'Software that lets companies in strictly regulated industries confirm their remote employees are productive while working from approved locations. I built the first desktop client, the manager dashboard, and the pipeline between them, then helped hire the founding team. It’s been running at a ~140-person medical records company since the 2023 pilot. The founding team is now launching it to other customers in the United States.',
    stack: ['Electron', 'React', 'Node.js', 'AWS ECS', 'Postgres'],
    links: [{ href: 'https://trustshoot.com', label: 'trustshoot.com' }],
  },
  {
    name: 'farmPlot',
    org: 'Solo product',
    dates: '2020',
    role: 'Sole proprietor',
    image: 'farmplot',
    description: 'A desktop app that helped cannabis farms track their plants and meet Oregon’s state reporting rules. It works offline in greenhouses, tracks plants with a barcode scanner, and forces updates when state rules change. It was adopted by Fox Hollow Flora, Oregon’s largest cannabis producer in 2020.',
    stack: ['Electron', 'Node.js', 'MongoDB', 'AWS ECS'],
    privateRepo: true,
  },
  {
    name: 'BRING Virtual Donation Manager',
    org: 'Volunteer',
    dates: '2020 – 2021',
    note: 'Maintained until 2025',
    role: 'Full-stack & UI design',
    image: 'bring',
    description: 'BRING Recycling, a Eugene nonprofit, reviews donations from photos donors upload instead of sorting texts and emails. A colleague and I built the prototype in about 36 hours and won the 2020 Oregon Technology Association “Hack for a Cause,” then took it to production. It has handled 600+ donations.',
    stack: ['React', 'Node.js', 'Express', 'MongoDB', 'AWS Lambda', 'S3'],
    links: [{ href: 'https://github.com/alecspringel/bring-client', label: 'GitHub' }],
  },
];

// Internal Nike work: no public screenshots, so each card gets a simple diagram
// (see components/NikeDiagrams.js). Keep these to facts already on the resume.
export const NIKE_INTERNAL = [
  {
    name: 'Retail Stores Platform',
    dates: '2025 – present',
    role: 'Project owner',
    diagram: 'retailPlatform',
    description: 'One app for Nike store employees: their separate work tools sit behind one login, as widgets other teams ship as microfrontends. I lead a team of seven, designed the plugin CLI and widget API, and built the bridge that runs it inside Nike’s iOS app. It’s live in 800+ stores across all four Nike geos.',
    stack: ['React', 'TypeScript', 'Node.js', 'AWS Lambda', 'DynamoDB', 'Microfrontends'],
  },
  {
    name: 'Store Operations Reporting',
    dates: '2025 – present',
    role: 'Full-stack',
    diagram: 'sor',
    description: 'Nike’s internal reporting for store operations, used across 2,000+ stores on four continents. I helped build the GraphQL backend on Lambda and the React frontend, then a Cursor-powered framework that cut a new report from about 10 days of work to about 10 minutes.',
    stack: ['GraphQL', 'Node.js', 'OpenSearch', 'AWS Lambda', 'React', 'Visx', 'Cursor'],
  },
  {
    name: 'Nike.com Platform Team',
    dates: '2024 – 2025',
    role: 'Platform engineer',
    diagram: 'platform',
    description: 'The shared code every Nike.com page runs on. I added new shared infrastructure and shared utilities used by all Nike.com teams, made releases safer with canary rollouts, and owned React, Node, and Next.js upgrades for every team. Bundle work cut size 5% across 9 experiences and improved LCP 5.7%.',
    stack: ['Next.js', 'React', 'Webpack', 'Lerna', 'Storybook', 'New Relic'],
  },
  {
    name: 'Nike CASH',
    dates: '2025 – present',
    role: 'Maintainer',
    diagram: 'cash',
    description: 'Nike’s system of record for every dollar of cash in its stores (tills, safes, and bank deposits), checked against what the registers recorded. I maintain it: bug fixes, new features, incident response, and production support.',
    stack: ['React', 'AWS serverless', 'DynamoDB'],
  },
];
