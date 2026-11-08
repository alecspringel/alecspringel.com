import React from 'react';

// Simple schematic diagrams for internal Nike work that has no public screenshots.
// Deliberately generic: site colors, no Nike marks, no internal names or real UI.
const C = {
  bgTop: '#14175A',
  bgBottom: '#090B2B',
  panel: '#121540',
  panelLight: '#1B1E52',
  line: '#2A2E6E',
  lavender: '#AEACFF',
  lavenderLight: '#C5C4FA',
  indigo: '#4C48EF',
  white: '#FFFFFF',
};

const FONT = 'Poppins, DM Sans, sans-serif';

const Frame = ({ id, label, children }) => (
  <svg viewBox="0 0 480 300" role="img" aria-label={label} style={{ display: 'block', width: '100%', height: '100%' }}>
    <defs>
      <radialGradient id={`${id}-bg`} cx="78%" cy="18%" r="95%">
        <stop offset="0%" stopColor={C.bgTop} />
        <stop offset="70%" stopColor={C.bgBottom} />
      </radialGradient>
      <marker id={`${id}-arrow`} viewBox="0 0 10 10" refX="8" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
        <path d="M 0 0 L 10 5 L 0 10 z" fill={C.lavender} />
      </marker>
    </defs>
    <rect width="480" height="300" fill={`url(#${id}-bg)`} />
    {children}
  </svg>
);

const Text = ({
  x, y, children, size = 13, fill = C.lavenderLight, weight = 400, anchor = 'middle',
}) => (
  <text
    x={x}
    y={y}
    fontSize={size}
    fill={fill}
    fontWeight={weight}
    textAnchor={anchor}
    fontFamily={FONT}
  >
    {children}
  </text>
);

// --- Retail Stores Platform: one shell, one login, widgets from many teams, iOS bridge ---
const TILE_FILLS = ['#4C48EF', '#6E6AF5', '#2F2B9E', '#8C89FF', '#3B37C8', '#5551E0'];

export const RetailPlatformDiagram = () => (
  <Frame id="rsp" label="Diagram: one app shell with a single login holding widgets from several teams, also running inside an iOS app">
    {/* Shell window */}
    <rect x="36" y="34" width="304" height="214" rx="12" fill={C.panel} stroke={C.line} strokeWidth="2" />
    <path d="M 36 46 a 12 12 0 0 1 12 -12 h 280 a 12 12 0 0 1 12 12 v 22 h -304 z" fill={C.panelLight} />
    <rect x="54" y="47" width="10" height="9" rx="2" fill={C.lavender} />
    <path d="M 56 47 v -3 a 3 3 0 0 1 6 0 v 3" stroke={C.lavender} strokeWidth="1.8" fill="none" />
    <Text x={72} y={56} anchor="start" size={12}>One login</Text>
    {/* Side nav */}
    <rect x="36" y="68" width="52" height="180" fill="#0E1036" />
    {[86, 104, 122].map((y) => <rect key={y} x="48" y={y} width="28" height="5" rx="2.5" fill={C.line} />)}
    {/* Widgets */}
    {TILE_FILLS.map((fill, i) => {
      const x = 102 + (i % 3) * 77;
      const y = 82 + Math.floor(i / 3) * 80;
      return (
        <g key={fill}>
          <rect x={x} y={y} width="68" height="70" rx="8" fill={fill} />
          <rect x={x + 10} y={y + 12} width="30" height="5" rx="2.5" fill="rgba(255,255,255,0.75)" />
          <rect x={x + 10} y={y + 24} width="46" height="4" rx="2" fill="rgba(255,255,255,0.35)" />
        </g>
      );
    })}
    <Text x={188} y={274} size={12} fill={C.lavender}>
      Widgets from 5 teams · plugin CLI · widget API
    </Text>
    {/* iOS bridge */}
    <path d="M 344 140 C 360 140, 356 140, 372 140" stroke={C.lavender} strokeWidth="2" strokeDasharray="4 4" fill="none" markerEnd="url(#rsp-arrow)" />
    <rect x="376" y="76" width="70" height="132" rx="12" fill={C.panel} stroke={C.lavender} strokeWidth="2" />
    <rect x="384" y="88" width="54" height="8" rx="3" fill={C.panelLight} />
    {TILE_FILLS.map((fill, i) => (
      <rect key={fill} x={385 + (i % 2) * 27} y={102 + Math.floor(i / 2) * 32} width="24" height="27" rx="4" fill={fill} />
    ))}
    <Text x={411} y={230} size={12}>iOS app</Text>
  </Frame>
);

// --- SOR: data flow (sales data -> OpenSearch -> GraphQL on Lambda -> reports)
// plus two small report UI sketches ---
const FlowNode = ({
  x, y, w = 96, h = 92, title, children,
}) => (
  <g>
    <rect x={x} y={y} width={w} height={h} rx="10" fill={C.panel} stroke={C.line} strokeWidth="2" />
    {children}
    <Text x={x + w / 2} y={y + h - 14} size={12} fill={C.white}>{title}</Text>
  </g>
);

const Arrow = ({
  id, x1, y1, x2, y2, dashed,
}) => (
  <line x1={x1} y1={y1} x2={x2} y2={y2} stroke={C.lavender} strokeWidth="2" strokeDasharray={dashed ? '4 4' : undefined} markerEnd={`url(#${id}-arrow)`} />
);

// A small app window with a title bar, used for the SOR report sketches
const MiniWindow = ({
  x, y, w, h, title, children,
}) => (
  <g>
    <rect x={x} y={y} width={w} height={h} rx="8" fill={C.panel} stroke={C.line} strokeWidth="1.5" />
    <path d={`M ${x} ${y + 8} a 8 8 0 0 1 8 -8 h ${w - 16} a 8 8 0 0 1 8 8 v 12 h ${-w} z`} fill={C.panelLight} />
    {[10, 18, 26].map((dx) => <circle key={dx} cx={x + dx} cy={y + 10} r="2.2" fill={C.line} />)}
    <Text x={x + w / 2} y={y + 14} size={9} fill={C.lavenderLight}>{title}</Text>
    {children}
  </g>
);

const LINE_POINTS = [
  [32, 262], [58, 250], [84, 255], [110, 232], [136, 238], [162, 216], [188, 222], [214, 202],
];

export const SorDiagram = () => (
  <Frame id="sor" label="Diagram: store sales data flows into OpenSearch, through a GraphQL API on Lambda, to React reports such as a sales trend chart and a per-store table">
    <defs>
      <linearGradient id="sor-area" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor={C.indigo} stopOpacity="0.45" />
        <stop offset="100%" stopColor={C.indigo} stopOpacity="0" />
      </linearGradient>
    </defs>

    {/* Data flow (smaller version of the original) */}
    <FlowNode x={16} y={14} h={74} title="Sales data">
      <Text x={64} y={50} size={20} fill={C.lavender} weight={500}>{'{ }'}</Text>
    </FlowNode>
    <FlowNode x={132} y={14} h={74} title="OpenSearch">
      <circle cx="177" cy="40" r="10" fill="none" stroke={C.lavender} strokeWidth="2.5" />
      <line x1="184" y1="47" x2="191" y2="54" stroke={C.lavender} strokeWidth="2.5" strokeLinecap="round" />
    </FlowNode>
    <FlowNode x={248} y={14} h={74} title="GraphQL · Lambda">
      <polygon points="296,28 309,35.5 309,50.5 296,58 283,50.5 283,35.5" fill="none" stroke={C.lavender} strokeWidth="2.5" />
    </FlowNode>
    <FlowNode x={364} y={14} h={74} title="Reports">
      {[[392, 12], [403, 22], [414, 17], [425, 27]].map(([x, h]) => (
        <rect key={x} x={x} y={58 - h} width="8" height={h} rx="2" fill={x === 425 ? C.indigo : C.lavender} />
      ))}
    </FlowNode>
    <Arrow id="sor" x1={114} y1={51} x2={128} y2={51} />
    <Arrow id="sor" x1={230} y1={51} x2={244} y2={51} />
    <Arrow id="sor" x1={346} y1={51} x2={360} y2={51} />
    <line x1="412" y1="90" x2="412" y2="104" stroke={C.lavender} strokeWidth="1.5" strokeDasharray="3 3" />

    {/* Report UI: two small windows */}
    <MiniWindow x={16} y={110} w={214} h={174} title="Sales trend">
      {[[26, 40], [72, 34], [112, 46]].map(([cx, w]) => (
        <rect key={cx} x={cx} y="140" width={w} height="11" rx="5.5" fill={C.panelLight} stroke={C.line} strokeWidth="1" />
      ))}
      {[186, 212, 238, 264].map((y) => (
        <line key={y} x1="28" y1={y} x2="218" y2={y} stroke={C.line} strokeWidth="1" />
      ))}
      <path d={`M ${LINE_POINTS.map(([x, y]) => `${x} ${y}`).join(' L ')} L 214 272 L 32 272 Z`} fill="url(#sor-area)" />
      <polyline
        points={LINE_POINTS.map(([x, y]) => `${x},${y}`).join(' ')}
        fill="none"
        stroke={C.lavender}
        strokeWidth="2"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
      <circle cx="214" cy="202" r="3.5" fill={C.white} stroke={C.indigo} strokeWidth="2" />
    </MiniWindow>

    <MiniWindow x={250} y={110} w={214} h={174} title="By store">
      <rect x="250" y="130" width="214" height="16" fill="#0E1036" />
      {[[156, 120], [180, 92], [204, 104], [228, 70], [252, 56]].map(([y, bar], i) => (
        <g key={y}>
          <rect x="262" y={y} width="48" height="5" rx="2.5" fill={C.line} />
          <rect x="322" y={y - 2} width={bar} height="9" rx="2" fill={i === 0 ? C.indigo : C.lavender} opacity={i === 0 ? 1 : 0.7} />
          {i < 4 && <line x1="258" y1={y + 13} x2="456" y2={y + 13} stroke={C.line} strokeWidth="1" />}
        </g>
      ))}
    </MiniWindow>
  </Frame>
);

// --- Nike.com platform: one shared script feeding every page; flags, canary, packages ---
export const PlatformDiagram = () => {
  const pages = [36, 148, 260, 372];
  return (
    <Frame id="plat" label="Diagram: one shared script loaded on every Nike.com page, with shared utilities, canary rollouts, and versioned packages">
      <rect x="140" y="22" width="200" height="66" rx="10" fill={C.panel} stroke={C.indigo} strokeWidth="2" />
      {[154, 164, 174].map((x) => <circle key={x} cx={x} cy="34" r="3" fill={C.line} />)}
      <Text x={240} y={70} size={15} fill={C.white} weight={500}>{'<script>'}</Text>
      {pages.map((x) => (
        <path key={x} d={`M 240 88 C 240 120, ${x + 36} 112, ${x + 36} 140`} stroke={C.lavender} strokeWidth="1.8" fill="none" markerEnd="url(#plat-arrow)" />
      ))}
      {pages.map((x) => (
        <g key={`p${x}`}>
          <rect x={x} y="146" width="72" height="88" rx="8" fill={C.panel} stroke={C.line} strokeWidth="2" />
          <rect x={x} y="146" width="72" height="14" rx="6" fill={C.panelLight} />
          <rect x={x + 10} y="170" width="52" height="26" rx="4" fill={C.line} />
          <rect x={x + 10} y="204" width="34" height="5" rx="2.5" fill={C.line} />
          <rect x={x + 10} y="215" width="44" height="5" rx="2.5" fill={C.line} />
        </g>
      ))}
      {[['Shared utilities', 92], ['Canary rollouts', 240], ['Versioned packages', 388]].map(([label, cx]) => (
        <g key={label}>
          <rect x={cx - 68} y="252" width="136" height="28" rx="14" fill={C.panelLight} stroke={C.indigo} strokeWidth="1.5" />
          <Text x={cx} y={271} size={12} fill={C.lavenderLight}>{label}</Text>
        </g>
      ))}
    </Frame>
  );
};

// --- Nike CASH: till -> safe -> bank deposit, checked against the registers ---
export const CashDiagram = () => (
  <Frame id="cash" label="Diagram: cash moves from tills to the safe to bank deposits, and each step is checked against what the registers recorded">
    <FlowNode x={34} y={40} w={116} h={100} title="Tills">
      <rect x="62" y="62" width="60" height="30" rx="4" fill="none" stroke={C.lavender} strokeWidth="3" />
      <line x1="62" y1="80" x2="122" y2="80" stroke={C.lavender} strokeWidth="2" />
      <circle cx="92" cy="71" r="4" fill={C.lavender} />
    </FlowNode>
    <FlowNode x={182} y={40} w={116} h={100} title="Safe">
      <rect x="216" y="56" width="48" height="44" rx="5" fill="none" stroke={C.lavender} strokeWidth="3" />
      <circle cx="240" cy="78" r="10" fill="none" stroke={C.lavender} strokeWidth="2.5" />
      <line x1="240" y1="78" x2="246" y2="72" stroke={C.lavender} strokeWidth="2.5" strokeLinecap="round" />
    </FlowNode>
    <FlowNode x={330} y={40} w={116} h={100} title="Bank deposit">
      <polygon points="388,56 418,70 358,70" fill="none" stroke={C.lavender} strokeWidth="3" strokeLinejoin="round" />
      {[366, 382, 398, 412].map((x) => <line key={x} x1={x} y1="74" x2={x} y2="94" stroke={C.lavender} strokeWidth="3" />)}
      <line x1="356" y1="98" x2="420" y2="98" stroke={C.lavender} strokeWidth="3" />
    </FlowNode>
    <Arrow id="cash" x1={152} y1={90} x2={178} y2={90} />
    <Arrow id="cash" x1={300} y1={90} x2={326} y2={90} />
    {/* Checked against the registers */}
    <path d="M 92 140 V 170 H 388 V 140 M 240 140 V 170" stroke={C.lavender} strokeWidth="2" strokeDasharray="4 4" fill="none" />
    <line x1="240" y1="170" x2="240" y2="196" stroke={C.lavender} strokeWidth="2" strokeDasharray="4 4" markerEnd="url(#cash-arrow)" />
    <rect x="150" y="200" width="180" height="60" rx="10" fill={C.panelLight} stroke={C.indigo} strokeWidth="2" />
    <circle cx="178" cy="230" r="12" fill={C.indigo} />
    <path d="M 172 230 l 4 4 l 8 -8" stroke={C.white} strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    <Text x={258} y={226} size={13} fill={C.white}>Checked against</Text>
    <Text x={258} y={244} size={13} fill={C.white}>the registers</Text>
  </Frame>
);

export const DIAGRAMS = {
  retailPlatform: RetailPlatformDiagram,
  sor: SorDiagram,
  platform: PlatformDiagram,
  cash: CashDiagram,
};
