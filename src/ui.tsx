import { cn } from '@/lib/utils'

export function Heading({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <h1 className={cn('text-3xl font-bold tracking-tight text-zinc-900', className)}>{children}</h1>
  )
}

export function Subheading({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <h2 className={cn('text-2xl font-bold tracking-tight text-zinc-900', className)}>{children}</h2>
  )
}

export function Text({ children, className }: { children: React.ReactNode; className?: string }) {
  return <p className={cn('text-zinc-600', className)}>{children}</p>
}

export function Button({ children, onClick, className }: { children: React.ReactNode; onClick: () => void; className?: string }) {
  return (
    <button
      className={cn('bg-zinc-900 hover:bg-zinc-700 text-white rounded-lg py-2 px-4', className)}
      onClick={onClick}
    >
      {children}
    </button>
  )
}