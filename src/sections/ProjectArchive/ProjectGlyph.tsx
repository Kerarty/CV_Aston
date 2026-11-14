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

      <g stroke="#478CFF" strokeWidth="1" opacity="0.8">
        <path d="M18 18h16M18 18v16M402 18h-16M402 18v16M18 222h16M18 222v-16M402 222h-16M402 222v-16" />
      </g>
    </svg>
  )
}
