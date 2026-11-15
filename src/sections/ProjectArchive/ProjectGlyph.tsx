import type { ProjectGlyph as GlyphType } from '@/data/projects'
import { cn } from '@/utils/cn'

export function ProjectGlyph({ glyph, className }: { glyph: GlyphType; className?: string }) {
  return (
    <svg
      viewBox="0 0 420 240"
      className={cn('h-full w-full', className)}
      aria-hidden="true"
      fill="none"
    >
      <defs>
        <pattern id={`grid-${glyph}`} width="20" height="20" patternUnits="userSpaceOnUse">
          <path d="M20 0H0V20" stroke="#27364B" strokeWidth="0.6" opacity="0.55" />
        </pattern>
        <radialGradient id={`glow-${glyph}`} cx="50%" cy="45%" r="55%">
          <stop offset="0%" stopColor="#478CFF" stopOpacity="0.16" />
          <stop offset="100%" stopColor="#478CFF" stopOpacity="0" />
        </radialGradient>
      </defs>

      <rect width="420" height="240" fill={`url(#grid-${glyph})`} />
      <rect width="420" height="240" fill={`url(#glow-${glyph})`} />

      <g stroke="#27364B" strokeWidth="0.7" opacity="0.8">
        <path d="M0 40H420M0 200H420M40 0V240M380 0V240" />
      </g>

      {glyph === 'factory' ? (
        <g>
          <g stroke="#3D5B7E" strokeWidth="1.2">
            <path d="M78 178V118H142L160 104V178" />
            <path d="M160 178V138H218L236 124V178" />
            <path d="M236 178V148H300V178" />
            <path d="M78 118L96 100H142L160 104" />
            <path d="M160 138L178 120H218L236 124" />
          </g>
          <g stroke="#478CFF" strokeWidth="1.4">
            <path d="M92 178V130H128V178" />
            <path d="M174 178V150H204V178" />
            <path d="M252 178V160H286V178" />
            <path d="M110 108V72H124V100" />
          </g>
          <g fill="#32D6C5">
            <rect x="100" y="138" width="7" height="7" />
            <rect x="116" y="138" width="7" height="7" />
            <rect x="182" y="158" width="6" height="6" />
            <rect x="196" y="158" width="6" height="6" />
            <rect x="262" y="166" width="5" height="5" />
          </g>
          <g stroke="#32D6C5" strokeWidth="0.9" opacity="0.75">
            <path d="M118 70c-7-9 7-14 0-23M127 70c-7-9 7-14 0-23" />
            <path d="M300 148h44M300 154h30M300 160h38" />
          </g>
          <g fill="#8C9AAF" fontFamily="JetBrains Mono, monospace" fontSize="7" letterSpacing="1">
            <text x="78" y="196">PRODUCTION LINE</text>
            <text x="310" y="188">OUTPUT</text>
          </g>
          <circle cx="324" cy="68" r="3" fill="#32D6C5" />
          <circle cx="342" cy="56" r="1.6" fill="#478CFF" />
          <path d="M300 68h12M330 44v-12" stroke="#3D5B7E" strokeWidth="0.8" />
        </g>
      ) : null}

      {glyph === 'runner' ? (
        <g>
          <path d="M128 196L258 54H332L202 196Z" fill="#0D1523" stroke="#3D5B7E" strokeWidth="1.2" />
          <path d="M154 196L270 70H300L184 196Z" fill="none" stroke="#3D5B7E" />
          <path d="M176 196L282 88H294L188 196Z" fill="none" stroke="#3D5B7E" />
          <g stroke="#32D6C5" strokeWidth="1">
            <path d="M154 180h28M176 164h28M198 148h28M220 132h28M242 116h28M264 100h28M286 84h28" />
          </g>
          <g stroke="#478CFF" strokeWidth="1.2">
            <path d="M146 190h62M170 174h62M194 158h62M218 142h62M242 126h62M266 110h62" opacity="0.55" />
          </g>
          <g>
            <rect x="243" y="112" width="22" height="22" fill="#478CFF" />
            <rect x="248" y="117" width="12" height="12" fill="#0D1523" />
            <circle cx="254" cy="123" r="2.5" fill="#32D6C5" />
            <path d="M265 123h18M265 129h11" stroke="#8FBAFF" strokeWidth="1.4" />
          </g>
          <text x="70" y="72" fill="#8C9AAF" fontFamily="JetBrains Mono, monospace" fontSize="7" letterSpacing="1">
            RUN / ITERATION / PUBLISH
          </text>
          <text x="70" y="214" fill="#478CFF" fontFamily="JetBrains Mono, monospace" fontSize="7" letterSpacing="1">
            PROTOTYPE / LIVE
          </text>
          <path d="M70 82V196" stroke="#3D5B7E" strokeWidth="0.8" strokeDasharray="2 5" />
        </g>
      ) : null}

      {glyph === 'systems' ? (
        <g>
          <g stroke="#3D5B7E" strokeWidth="1.2">
            <path d="M128 92h104v74H128z" />
            <path d="M128 110h104M128 138h104M154 92v74" />
          </g>
          <g stroke="#478CFF" strokeWidth="1.4">
            <path d="M146 122l-12 12 12 12M214 122l12 12-12 12M172 152l14-40" />
          </g>
          <g stroke="#32D6C5" strokeWidth="1">
            <ellipse cx="276" cy="118" rx="36" ry="14" />
            <path d="M240 118v34c0 8 16 14 36 14s36-6 36-14v-34" />
            <path d="M240 136c0 8 16 14 36 14s36-6 36-14" />
          </g>
          <g fill="#32D6C5">
            <circle cx="238" cy="66" r="3" />
            <circle cx="322" cy="70" r="2" />
            <rect x="298" y="182" width="5" height="5" />
          </g>
          <g stroke="#3D5B7E" strokeWidth="0.9" strokeDasharray="2 4">
            <path d="M238 70l22 20M322 74l-22 16M246 166l-40 12" />
          </g>
          <text x="70" y="74" fill="#8C9AAF" fontFamily="JetBrains Mono, monospace" fontSize="7" letterSpacing="1">
            LOGIC / DATA / TOOLS
          </text>
          <text x="70" y="212" fill="#8C9AAF" fontFamily="JetBrains Mono, monospace" fontSize="7" letterSpacing="1">
            ACADEMIC WORK
          </text>
        </g>
      ) : null}

      {glyph === 'ads' ? (
        <g>
          <g stroke="#3D5B7E" strokeWidth="1.2">
            <path d="M170 42h80a10 10 0 0 1 10 10v156a10 10 0 0 1-10 10h-80a10 10 0 0 1-10-10V52a10 10 0 0 1 10-10z" />
            <path d="M170 190h80" />
            <circle cx="210" cy="199" r="4" />
          </g>
          <g stroke="#478CFF" strokeWidth="1.4">
            <path d="M196 84l44 26-44 26z" fill="none" />
            <path d="M186 132h48M186 142h30M186 152h40" />
          </g>
          <g stroke="#32D6C5" strokeWidth="0.9" opacity="0.8">
            <path d="M300 60v60M300 60l-24 14M300 60l24 14" />
            <path d="M322 74c8 10 8 22 0 32" />
          </g>
          <g fill="#32D6C5">
            <circle cx="138" cy="72" r="3" />
            <circle cx="330" cy="118" r="2.5" />
          </g>
          <text x="300" y="176" fill="#8C9AAF" fontFamily="JetBrains Mono, monospace" fontSize="7" letterSpacing="1">SINGLE FILE / NO NETWORK</text>
          <text x="70" y="72" fill="#8C9AAF" fontFamily="JetBrains Mono, monospace" fontSize="7" letterSpacing="1">AD SDK / ADAPTERS</text>
          <path d="M70 82v108" stroke="#3D5B7E" strokeWidth="0.8" strokeDasharray="2 5" />
        </g>
      ) : null}

      {glyph === 'pipeline' ? (
        <g>
          <g stroke="#3D5B7E" strokeWidth="1.2">
            <path d="M60 96h70v56H60z" />
            <path d="M160 96h70v56h-70z" />
            <path d="M260 96h70v56h-70z" />
            <path d="M360 96h50v56h-50z" />
          </g>
          <g stroke="#478CFF" strokeWidth="1.2">
            <path d="M136 124h16M146 118l6 6-6 6" />
            <path d="M236 124h16M246 118l6 6-6 6" />
            <path d="M336 124h16M346 118l6 6-6 6" />
          </g>
          <g stroke="#32D6C5" strokeWidth="0.9" opacity="0.8">
            <path d="M70 108h50M70 116h34" />
            <path d="M270 108h50M270 116h40" />
          </g>
          <g fill="#32D6C5">
            <rect x="70" y="138" width="6" height="6" />
            <rect x="270" y="138" width="6" height="6" />
            <circle cx="385" cy="112" r="3" />
          </g>
          <g fill="#8C9AAF" fontFamily="JetBrains Mono, monospace" fontSize="7" letterSpacing="1">
            <text x="60" y="172">REQUIREMENTS</text>
            <text x="160" y="172">CONCEPT</text>
            <text x="260" y="172">PROTOTYPE</text>
            <text x="360" y="172">RELEASE</text>
          </g>
          <path d="M60 186h350" stroke="#3D5B7E" strokeWidth="0.8" strokeDasharray="2 5" />
          <g fill="#478CFF" fontFamily="JetBrains Mono, monospace" fontSize="7" letterSpacing="1">
            <text x="60" y="202">× 18 ITERATIONS / 01 REPEATABLE PROCESS</text>
          </g>
        </g>
      ) : null}

      {glyph === 'sites' ? (
        <g>
          <g stroke="#3D5B7E" strokeWidth="1.2">
            <path d="M60 60h180v120H60z" />
            <path d="M60 82h180" />
            <circle cx="72" cy="71" r="3" />
            <circle cx="82" cy="71" r="3" />
            <path d="M92 71h60" />
          </g>
          <g stroke="#478CFF" strokeWidth="1.2">
            <path d="M70 94h160M70 112h100M70 128h130" opacity="0.85" />
            <path d="M170 96h60v44h-60z" fill="none" />
          </g>
          <g stroke="#3D5B7E" strokeWidth="1.2">
            <path d="M240 100h120v92H240z" fill="#0D1523" />
            <path d="M240 118h120" />
            <circle cx="252" cy="109" r="2.6" />
          </g>
          <g stroke="#32D6C5" strokeWidth="0.9" opacity="0.85">
            <path d="M252 130h96M252 142h70M252 154h84" />
          </g>
          <g fill="#32D6C5">
            <circle cx="360" cy="88" r="2.6" />
            <rect x="84" y="164" width="5" height="5" />
          </g>
          <g fill="#8C9AAF" fontFamily="JetBrains Mono, monospace" fontSize="7" letterSpacing="1">
            <text x="60" y="212">CLIENT BRIEF → REQUIREMENTS → PROTOTYPE</text>
          </g>
          <text x="300" y="60" fill="#8C9AAF" fontFamily="JetBrains Mono, monospace" fontSize="7" letterSpacing="1">FEEDBACK LOOP</text>
          <path d="M300 66v14" stroke="#3D5B7E" strokeWidth="0.8" strokeDasharray="2 4" />
        </g>
      ) : null}

      {glyph === 'bot' ? (
        <g>
          <g stroke="#3D5B7E" strokeWidth="1.2">
            <path d="M60 70h160a12 12 0 0 1 12 12v36a12 12 0 0 1-12 12h-96l-24 20v-20h-40a12 12 0 0 1-12-12V82a12 12 0 0 1 12-12z" />
            <path d="M210 168h150a12 12 0 0 1 12 12v28a12 12 0 0 1-12 12h-120l-20 16v-16h-10a12 12 0 0 1-12-12v-28a12 12 0 0 1 12-12z" />
          </g>
          <g stroke="#478CFF" strokeWidth="1.2">
            <path d="M76 92h120M76 106h84" />
          </g>
          <g stroke="#32D6C5" strokeWidth="1">
            <path d="M240 190h100M240 202h76" />
            <path d="M330 190l6 6-12 8" />
          </g>
          <g fill="#32D6C5">
            <circle cx="196" cy="60" r="3" />
            <circle cx="86" cy="126" r="2.4" />
          </g>
          <g fill="#478CFF" fontFamily="JetBrains Mono, monospace" fontSize="7" letterSpacing="1">
            <text x="60" y="226">QUESTION → ANSWER → CHECK → TOPIC</text>
          </g>
          <g stroke="#3D5B7E" strokeWidth="0.8" strokeDasharray="2 4">
            <path d="M150 54v14M232 60v96" />
          </g>
          <text x="60" y="60" fill="#8C9AAF" fontFamily="JetBrains Mono, monospace" fontSize="7" letterSpacing="1">PYTHON / TG BOT API</text>
        </g>
      ) : null}

      <g stroke="#478CFF" strokeWidth="1" opacity="0.8">
        <path d="M18 18h16M18 18v16M402 18h-16M402 18v16M18 222h16M18 222v-16M402 222h-16M402 222v-16" />
      </g>
    </svg>
  )
}
