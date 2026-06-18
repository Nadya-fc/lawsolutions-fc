'use client';

import React, { useEffect, useRef } from 'react';
import Script from 'next/script';
import { usePathname } from 'next/navigation';
import {
  createEventId,
  getTikTokApplicationPayload,
  getTikTokAttribution,
  sendTikTokServerEvent,
  trackEvent,
} from '../lib/tracking';

const tikTokPixelId = 'D8PNFLBC77U8KI7IIK2G';

export default function TikTokPixel() {
  const pathname = usePathname();
  const hasSkippedInitialPageView = useRef(false);

  useEffect(() => {
    const isInitialPageView = !hasSkippedInitialPageView.current;
    const eventId = createEventId('view_content');
    const payload = {
      ...getTikTokApplicationPayload(
        pathname === '/gracias' ? 'Thank You Page' : 'Personal Injury Case Evaluation Page'
      ),
      ...getTikTokAttribution(),
    };

    if (isInitialPageView) {
      hasSkippedInitialPageView.current = true;
    } else {
      window.ttq?.page();
    }

    trackEvent('ViewContent', payload, { eventId });
    sendTikTokServerEvent('ViewContent', eventId, payload);
  }, [pathname]);

  return (
    <Script id="tiktok-pixel" strategy="afterInteractive">
      {`
        !function (w, d, t) {
          w.TiktokAnalyticsObject=t;var ttq=w[t]=w[t]||[];
          ttq.methods=["page","track","identify","instances","debug","on","off","once","ready","alias","group","enableCookie","disableCookie","holdConsent","revokeConsent","grantConsent"];
          ttq.setAndDefer=function(t,e){t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}};
          for(var i=0;i<ttq.methods.length;i++)ttq.setAndDefer(ttq,ttq.methods[i]);
          ttq.instance=function(t){for(var e=ttq._i[t]||[],n=0;n<ttq.methods.length;n++)ttq.setAndDefer(e,ttq.methods[n]);return e};
          ttq.load=function(e,n){var r="https://analytics.tiktok.com/i18n/pixel/events.js",o=n&&n.partner;
          ttq._i=ttq._i||{},ttq._i[e]=[],ttq._i[e]._u=r,ttq._t=ttq._t||{},ttq._t[e]=+new Date,ttq._o=ttq._o||{},ttq._o[e]=n||{};
          n=document.createElement("script");n.type="text/javascript",n.async=!0,n.src=r+"?sdkid="+e+"&lib="+t;
          e=document.getElementsByTagName("script")[0];e.parentNode.insertBefore(n,e)};
          ttq.load('${tikTokPixelId}');
          ttq.page();
        }(window, document, 'ttq');
      `}
    </Script>
  );
}
