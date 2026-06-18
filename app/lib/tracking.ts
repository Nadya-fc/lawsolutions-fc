'use client';

type TrackingEvent =
  | 'lead_started'
  | 'lead_step_completed'
  | 'qualified_lead'
  | 'lead_submitted'
  | 'call_button_clicked'
  | 'thank_you_page_viewed';

type TrackingPayload = Record<string, string | number | boolean | undefined>;

declare global {
  interface Window {
    dataLayer?: TrackingPayload[];
    ttq?: {
      track: (event: string, payload?: TrackingPayload) => void;
    };
    fbq?: (command: string, event: string, payload?: TrackingPayload) => void;
    gtag?: (command: string, event: string, payload?: TrackingPayload) => void;
  }
}

export function trackEvent(event: TrackingEvent, payload: TrackingPayload = {}) {
  if (typeof window === 'undefined') return;

  const eventPayload = { event, ...payload };
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push(eventPayload);

  window.ttq?.track(event, payload);
  window.fbq?.('trackCustom', event, payload);
  window.gtag?.('event', event, payload);
}

