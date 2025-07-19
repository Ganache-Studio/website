import { clsx } from 'clsx';

export const Title = ({ children, className = '' }: { children: React.ReactNode; className?: string }) => {
  return <h3 className={clsx('text-xl md:text-2xl lg:text-5xl', className)}>{children}</h3>;
};
