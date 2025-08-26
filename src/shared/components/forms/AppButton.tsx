import { Button } from '@/components/ui/button';
import Link from 'next/link';
import clsx from 'clsx';
import React from 'react';
import { cn } from '@/lib/utils';

export type AppButtonVariant =
  | 'primary'
  | 'primaryOutlined'
  | 'secondary'
  | 'secondaryOutlined'
  | 'linkPrimary'
  | 'linkSecondary'
  | 'destructive'
  | 'destructiveOutlined'
  | 'ghostPrimary'
  | 'default';

interface AppButtonProps {
  className?: string;
  children?: React.ReactNode;
  variant?: AppButtonVariant;
  size?: 'large';
  href?: string;
  [key: string]: any;
}

const variantClasses: Record<AppButtonVariant, string> = {
  primary: 'bg-primary text-primary-foreground border-none',
  primaryOutlined: 'border border-primary text-primary bg-transparent',
  secondary: 'bg-secondary text-black border-none',
  secondaryOutlined: 'border border-secondary text-secondary bg-transparent',
  linkPrimary: 'text-primary underline bg-transparent border-none !p-0',
  linkSecondary: 'text-secondary underline bg-transparent border-none p-0',
  destructive: 'bg-destructive text-white border-none',
  destructiveOutlined: 'border border-destructive text-destructive bg-transparent',
  ghostPrimary: ' px-4 bg-transparent text-paragraph/70  hover:bg-primary hover:text-foreground',
  default: 'bg-secondary text-background border border-background',
};

export const AppButton: React.FC<AppButtonProps> = (props) => {
  const { className, children, variant = 'primary', size, href, ...rest } = props;

  const sizeClasses = size === 'large' ? 'p-6 text-lg' : '';
  const classes = clsx(
    'rounded-none cursor-pointer flex items-center gap-1',
    variantClasses[variant],
    sizeClasses,
    className
  );

  if (href) {
    return (
      <Link href={href} className={cn(classes, 'py-3')} {...rest}>
        {children}
      </Link>
    );
  }

  return (
    <Button className={classes} {...rest}>
      {children}
    </Button>
  );
};
