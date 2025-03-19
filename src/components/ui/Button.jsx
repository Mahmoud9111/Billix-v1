import { cn } from '@/lib/utils'

export function Button({ className, size = 'default', children, ...props }) {
  return (
    <button
      className={cn(
        'inline-flex items-center justify-center rounded-md font-medium transition-colors',
        'disabled:pointer-events-none disabled:opacity-50',
        {
          'px-4 py-2 text-sm': size === 'default',
          'px-3 py-1 text-sm': size === 'sm',
        },
        className
      )}
      {...props}
    >
      {children}
    </button>
  )
}
