import { createHash } from 'crypto';

const defaultPixelId = 'D8PNFLBC77U8KI7IIK2G';

type TikTokServerEvent = {
  event:
    | 'ViewContent'
    | 'qualified_lead'
    | 'Contact'
    | 'ClickButton'
    | 'Lead'
    | 'CompleteRegistration'
    | 'lead_submitted';
  eventId: string;
  email?: string;
  phone?: string;
  pageUrl?: string;
  referrer?: string;
  ttclid?: string | null;
  ttp?: string | null;
  userAgent?: string;
  ip?: string | null;
  properties?: Record<string, unknown>;
};

function sha256(value: string) {
  return createHash('sha256').update(value.trim().toLowerCase()).digest('hex');
}

function normalizePhone(phone: string) {
  return phone.replace(/\D/g, '');
}

export async function sendTikTokEvents(events: TikTokServerEvent[]) {
  const accessToken = process.env.TIKTOK_EVENTS_API_ACCESS_TOKEN;
  const pixelId = process.env.TIKTOK_PIXEL_ID || defaultPixelId;
  const testEventCode = process.env.TIKTOK_TEST_EVENT_CODE;

  if (!accessToken) {
    return { skipped: true, reason: 'Missing TIKTOK_EVENTS_API_ACCESS_TOKEN' };
  }

  const response = await fetch('https://business-api.tiktok.com/open_api/v1.3/event/track/', {
    method: 'POST',
    headers: {
      'Access-Token': accessToken,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      event_source: 'web',
      event_source_id: pixelId,
      ...(testEventCode ? { test_event_code: testEventCode } : {}),
      data: events.map((event) => ({
        event: event.event,
        event_time: Math.floor(Date.now() / 1000),
        event_id: event.eventId,
        user: {
          email: event.email ? sha256(event.email) : undefined,
          phone: event.phone ? sha256(normalizePhone(event.phone)) : undefined,
          external_id:
            event.email && event.phone
              ? sha256(`${event.email.trim().toLowerCase()}:${normalizePhone(event.phone)}`)
              : undefined,
          user_agent: event.userAgent,
          ip: event.ip || undefined,
          ttclid: event.ttclid || getTtclidFromUrl(event.pageUrl),
          ttp: event.ttp || undefined,
        },
        page: {
          url: event.pageUrl,
          referrer: event.referrer,
        },
        properties: event.properties || {},
      })),
    }),
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`TikTok Events API failed: ${response.status} ${errorText}`);
  }

  return response.json();
}

function getTtclidFromUrl(pageUrl?: string) {
  if (!pageUrl) return undefined;

  try {
    return new URL(pageUrl).searchParams.get('ttclid') || undefined;
  } catch {
    return undefined;
  }
}
