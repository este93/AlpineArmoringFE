import { ReactNode } from 'react';
import styles from './Button.module.scss';
import Link from 'next/link';

interface ButtonProps {
  desktopOnly?: boolean;
  animate?: boolean;
  fadeInScale?: boolean;
  icon?: boolean;
  href?: string;
  className?: string;
  children?: ReactNode;
}

const Button = ({
  desktopOnly,
  animate,
  fadeInScale,
  icon,
  href,
  className,
  children,
}: ButtonProps) => {
  const classNames = className
    ?.split(' ')
    .map((name) => styles[name])
    .join(' ');
  return (
    <Link href={href} className={`${styles.button_wrap}`}>
      <div
        className={`
          ${styles.button} 
          ${classNames} 
          ${desktopOnly ? 'desktop-only' : ''} 
          ${fadeInScale ? 'fade-in-scale' : ''} 
          ${animate ? 'animate' : ''}`}
      >
        {children}
        {icon ? <span></span> : null}
      </div>
    </Link>
  );
};

export default Button;