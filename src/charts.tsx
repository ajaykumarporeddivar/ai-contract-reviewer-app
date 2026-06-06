import { cn } from '@/lib/utils'

export function Chart({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <div
      className={cn(
        'bg-white border border-zinc-200 rounded-xl shadow-sm p-4 w-full h-full flex flex-col',
        className
      )}
    >
      {children}
    </div>
  )
}

export function ChartHeader({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <div
      className={cn('flex items-center justify-between mb-4', className)}
    >
      {children}
    </div>
  )
}

export function ChartBody({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <div
      className={cn('flex-1', className)}
    >
      {children}
    </div>
  )
}