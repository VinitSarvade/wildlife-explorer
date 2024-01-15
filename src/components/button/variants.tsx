import { cva } from 'class-variance-authority';

export const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default: 'bg-wild-400 text-white hover:bg-wild-700/90',
        destructive: 'bg-red-500 text-white hover:bg-red-500/90',
        secondary: 'bg-wild-200 text-wild-900 hover:bg-wild-400/80 ',
        ghost: 'hover:bg-wild-200 hover:text-wild-900 ',
        outline:
          'border border-wild-700 bg-wild-50 hover:bg-wild-100 hover:text-wild-900 ',
        link: 'text-wild-900 underline-offset-4 hover:underline ',
      },
      size: {
        default: 'h-10 px-4 py-2',
        sm: 'h-9 rounded-md px-3',
        lg: 'h-11 rounded-md px-8',
        icon: 'h-10 w-10',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
);
