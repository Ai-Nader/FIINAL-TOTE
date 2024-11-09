import React from 'react';
import { Link as RouterLink } from 'react-router-dom';

interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
}

export function Link({ href, children, className = '', ...props }: LinkProps) {
  const baseClasses = 'text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors';
  const combinedClasses = `${baseClasses} ${className}`.trim();

  if (href.startsWith('#')) {
    return (
      <a
        href={href}
        className={combinedClasses}
        onClick={(e) => {
          e.preventDefault();
          const element = document.querySelector(href);
          element?.scrollIntoView({ behavior: 'smooth' });
        }}
        {...props}
      >
        {children}
      </a>
    );
  }

  if (href.startsWith('http') || href.startsWith('tel:') || href.startsWith('mailto:')) {
    return (
      <a href={href} className={combinedClasses} {...props}>
        {children}
      </a>
    );
  }

  return (
    <RouterLink to={href} className={combinedClasses} {...props}>
      {children}
    </RouterLink>
  );
}