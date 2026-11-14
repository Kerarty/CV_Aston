import { cn } from '@/utils/cn'

export function LogoMark({ className, size = 36 }: { className?: string; size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      className={cn('flex-none', className)}
      aria-hidden="true"
    >
      <rect x="0.5" y="0.5" width="39" height="39" rx="3" fill="#0B1422" stroke="#35506F" />
      <path d="M11 12H29L11 28H29" stroke="#478CFF" strokeWidth="2.4" strokeLinecap="square" />
      <circle cx="29" cy="12" r="2" fill="#32D6C5" />
    </svg>
  )
}
