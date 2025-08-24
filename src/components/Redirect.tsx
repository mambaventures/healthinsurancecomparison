import React, { useEffect } from 'react';
import { Navigate } from 'react-router-dom';

interface RedirectProps {
  to: string;
  permanent?: boolean;
}

const Redirect: React.FC<RedirectProps> = ({ to, permanent = true }) => {
  useEffect(() => {
    // Set proper status code for SEO
    if (permanent && window.history && window.history.replaceState) {
      // For permanent redirects, we'd ideally set a 301 status
      // In a SPA, we use Navigate with replace=true
      window.history.replaceState(null, '', to);
    }
  }, [to, permanent]);

  return <Navigate to={to} replace={permanent} />;
};

export default Redirect;