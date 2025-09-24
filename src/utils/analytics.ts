// Google Analytics 4 tracking utilities
declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    dataLayer: any[];
  }
}

// Track page views for SPA navigation
export const trackPageView = (path: string, title?: string) => {
  if (typeof window.gtag === 'function') {
    window.gtag('config', 'G-4TBS1X7D0T', {
      page_path: path,
      page_title: title || document.title,
    });

    // Also track for Google Ads
    window.gtag('config', 'AW-17324751968', {
      page_path: path,
    });

    // Also track for Google Tag
    window.gtag('config', 'GT-5R8NKT7B', {
      page_path: path,
    });
  }
};

// Track custom events
export const trackEvent = (eventName: string, parameters: Record<string, any> = {}) => {
  if (typeof window.gtag === 'function') {
    window.gtag('event', eventName, parameters);
  }
};

// Track conversions (specifically for Google Ads)
export const trackConversion = (conversionId: string, conversionLabel?: string) => {
  if (typeof window.gtag === 'function') {
    const conversionData: any = {
      send_to: conversionId
    };

    if (conversionLabel) {
      conversionData.send_to = `${conversionId}/${conversionLabel}`;
    }

    window.gtag('event', 'conversion', conversionData);
    console.log('Firing Google Ads conversion event:', conversionData);
  }
};