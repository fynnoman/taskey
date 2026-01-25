'use client';

import { useReportWebVitals } from 'next/web-vitals';

export function WebVitals() {
  useReportWebVitals((metric) => {
    // Log web vitals in development
    if (process.env.NODE_ENV === 'development') {
      console.log(metric);
    }
    
    // Send to analytics in production (optional)
    // You can send these metrics to your analytics service
    // Example: analytics.track('Web Vitals', metric);
  });

  return null;
}
