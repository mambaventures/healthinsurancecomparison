import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { BreadcrumbItem } from '../types';

const generateBreadcrumbs = (pathname: string): BreadcrumbItem[] => {
  // Skip breadcrumbs for certain paths
  const excludedPaths = ['/adv-1'];
  if (excludedPaths.includes(pathname)) {
    return [];
  }

  const paths = pathname.split('/').filter(Boolean);
  return paths.map((path, index) => {
    const url = `/${paths.slice(0, index + 1).join('/')}`;
    const label = path
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
    return { path: url, label };
  });
};

const Breadcrumbs: React.FC = () => {
  const location = useLocation();
  const breadcrumbs = generateBreadcrumbs(location.pathname);

  if (breadcrumbs.length === 0) return null;

  return (
    <nav className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 py-2 sm:py-4">
      <ol className="flex items-center space-x-1 sm:space-x-2 text-xs sm:text-sm text-gray-600 overflow-x-auto">
        <li>
          <Link to="/" className="hover:text-blue-600">Home</Link>
        </li>
        {breadcrumbs.map((crumb, index) => (
          <React.Fragment key={crumb.path}>
            <ChevronRight className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />
            <li>
              {index === breadcrumbs.length - 1 ? (
                <span className="text-gray-900 whitespace-nowrap">{crumb.label}</span>
              ) : (
                <Link to={crumb.path} className="hover:text-blue-600 whitespace-nowrap">
                  {crumb.label}
                </Link>
              )}
            </li>
          </React.Fragment>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;