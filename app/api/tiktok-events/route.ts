import { NextResponse } from 'next/server';
import { sendTikTokEvents } from '../../lib/tiktokEventsServer';

const allowedEvents = new Set([
  'ViewContent',
  'qualified_lead',
  'Contact',
  'ClickButton',
  'Lead',
  'CompleteRegistration',
  'lead_submitted',
]);

export async function POST(request: Request) {
  try {
    const { eventName, eventId, payload, pageUrl, referrer, ttclid, ttp } = await request.json();

    if (!allowedEvents.has(eventName) || !eventId) {
      return NextResponse.json({ error: 'Invalid TikTok event request' }, { status: 400 });
    }

    await sendTikTokEvents([
      {
        event: eventName,
        eventId,
        pageUrl,
        referrer,
        ttclid,
        ttp,
        userAgent: request.headers.get('user-agent') || undefined,
        ip:
          request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ||
          request.headers.get('x-real-ip'),
        properties: payload || {},
      },
    ]);

    return NextResponse.json({ message: 'TikTok event sent' }, { status: 200 });
  } catch (error) {
    console.error('TikTok Events API error:', error);
    return NextResponse.json(
      { error: 'TikTok event delivery failed' },
      { status: 500 }
    );
  }
}
