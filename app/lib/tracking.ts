'use client';

type TrackingEvent =
  | 'ViewContent'
  | 'lead_started'
  | 'lead_step_completed'
  | 'qualified_lead'
  | 'Lead'
  | 'CompleteRegistration'
  | 'lead_submitted'
  | 'call_button_clicked'
  | 'thank_you_page_viewed';

type TrackingContent = {
  content_id: string;
  content_type: string;
  content_name: string;
};
type TrackingPayload = Record<
  string,
  string | number | boolean | TrackingContent[] | undefined
>;
type TikTokOptions = {
  eventId?: string;
  tikTokEventName?: string;
  skipTikTok?: boolean;
};

declare global {
  interface Window {
    dataLayer?: TrackingPayload[];
    ttq?: {
      track: (event: string, payload?: TrackingPayload, options?: { event_id?: string }) => void;
      identify: (payload: { email?: string; phone_number?: string; external_id?: string }) => void;
      page: () => void;
    };
    fbq?: (command: string, event: string, payload?: TrackingPayload) => void;
    gtag?: (command: string, event: string, payload?: TrackingPayload) => void;
  }
}

export function createEventId(prefix: string) {
  const randomValue = globalThis.crypto?.randomUUID?.() || Math.random().toString(36).slice(2);
  return `${prefix}_${Date.now()}_${randomValue}`;
}

function getCookieValue(name: string) {
  if (typeof document === 'undefined') return undefined;

  return document.cookie
    .split('; ')
    .find((cookie) => cookie.startsWith(`${name}=`))
    ?.split('=')
    .slice(1)
    .join('=');
}

export function getTikTokAttribution() {
  if (typeof window === 'undefined') return {};

  const url = new URL(window.location.href);

  return {
    ttclid: url.searchParams.get('ttclid') || getCookieValue('ttclid'),
    ttp: getCookieValue('_ttp'),
  };
}

export async function sha256(value: string) {
  const normalizedValue = value.trim().toLowerCase();
  const bytes = new TextEncoder().encode(normalizedValue);
  const hashBuffer = await crypto.subtle.digest('SHA-256', bytes);
  return Array.from(new Uint8Array(hashBuffer))
    .map((byte) => byte.toString(16).padStart(2, '0'))
    .join('');
}

export async function identifyTikTokUser(email: string, phone: string) {
  if (typeof window === 'undefined' || !window.ttq) return;

  const hashedEmail = await sha256(email);
  const hashedPhone = await sha256(phone.replace(/\D/g, ''));
  const hashedExternalId = await sha256(`${email.trim().toLowerCase()}:${phone.replace(/\D/g, '')}`);

  window.ttq.identify({
    email: hashedEmail,
    phone_number: hashedPhone,
    external_id: hashedExternalId,
  });
}

export function getTikTokApplicationPayload(
  contentName = 'Personal Injury Case Evaluation'
): TrackingPayload {
  return {
    content_id: 'personal_injury_case_evaluation',
    content_type: 'product',
    content_name: contentName,
    contents: [
      {
        content_id: 'personal_injury_case_evaluation',
        content_type: 'product',
        content_name: contentName,
      },
    ],
    value: 0,
    currency: 'USD',
  };
}

export function trackEvent(
  event: TrackingEvent,
  payload: TrackingPayload = {},
  options: TikTokOptions = {}
) {
  if (typeof window === 'undefined') return;

  const eventPayload = { event, event_id: options.eventId, ...payload };
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push(eventPayload);

  if (!options.skipTikTok) {
    const tikTokEvent = options.tikTokEventName || event;
    const tikTokOptions = options.eventId ? { event_id: options.eventId } : undefined;
    window.ttq?.track(tikTokEvent, payload, tikTokOptions);
  }

  window.fbq?.('trackCustom', event, payload);
  window.gtag?.('event', event, payload);
}

export async function sendTikTokServerEvent(
  eventName:
    | 'ViewContent'
    | 'qualified_lead'
    | 'Contact'
    | 'ClickButton'
    | 'Lead'
    | 'CompleteRegistration'
    | 'lead_submitted',
  eventId: string,
  payload: TrackingPayload = {}
) {
  try {
    await fetch('/api/tiktok-events', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        eventName,
        eventId,
        payload,
        pageUrl: window.location.href,
        referrer: document.referrer,
        ...getTikTokAttribution(),
      }),
      keepalive: true,
    });
  } catch {
    // Browser events are still recorded if server delivery is unavailable.
  }
}
