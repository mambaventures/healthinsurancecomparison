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
    console.log('📊 GA4 Page View:', path, title || document.title);

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
  } else {
    console.warn('⚠️ gtag not available for page view tracking');
  }
};

// Track custom events
export const trackEvent = (eventName: string, parameters: Record<string, any> = {}) => {
  if (typeof window.gtag === 'function') {
    window.gtag('event', eventName, parameters);
  }
};

// Track conversions (specifically for Google Ads)
export const trackConversion = (conversionId: string, conversionLabel?: string, transactionId?: string) => {
  if (typeof window.gtag === 'function') {
    const conversionData: any = {
      send_to: conversionLabel ? `${conversionId}/${conversionLabel}` : conversionId,
      transaction_id: transactionId || crypto.randomUUID(), // Unique ID for deduplication
      value: 1.0, // You can adjust this value
      currency: 'NZD'
    };

    window.gtag('event', 'conversion', conversionData);
    console.log('🎯 Google Ads conversion fired:', conversionData);

    // Also track as a GA4 event for better visibility
    window.gtag('event', 'generate_lead', {
      currency: 'NZD',
      value: 1.0,
      event_category: 'lead_generation',
      event_label: 'health_insurance_quote'
    });
    console.log('📊 GA4 generate_lead event fired');
  } else {
    console.error('❌ gtag not available for conversion tracking');
  }
};