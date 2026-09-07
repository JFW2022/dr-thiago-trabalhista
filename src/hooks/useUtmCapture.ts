import { useEffect, useState } from 'react';

export interface TrackingData {
  utm_source?: string;
  utm_medium?: string;
  utm_campaign?: string;
  utm_term?: string;
  utm_content?: string;
  gclid?: string;
  fbclid?: string;
  referrer?: string;
  campaign_url?: string;
}

const STORAGE_KEY = 'dr_thiago_trabalhista_utm_tracking';

export const useUtmCapture = () => {
  const [tracking, setTracking] = useState<TrackingData>({});

  useEffect(() => {
    try {
      const saved = sessionStorage.getItem(STORAGE_KEY);
      let data: TrackingData = saved ? JSON.parse(saved) : {};

      const params = new URLSearchParams(window.location.search);
      const urlSource = params.get('utm_source');
      const urlMedium = params.get('utm_medium');
      const urlCampaign = params.get('utm_campaign');
      const urlTerm = params.get('utm_term');
      const urlContent = params.get('utm_content');
      const urlGclid = params.get('gclid');
      const urlFbclid = params.get('fbclid');

      if (urlSource || urlMedium || urlCampaign || urlTerm || urlContent || urlGclid || urlFbclid) {
        data = {
          ...data,
          ...(urlSource && { utm_source: urlSource }),
          ...(urlMedium && { utm_medium: urlMedium }),
          ...(urlCampaign && { utm_campaign: urlCampaign }),
          ...(urlTerm && { utm_term: urlTerm }),
          ...(urlContent && { utm_content: urlContent }),
          ...(urlGclid && { gclid: urlGclid }),
          ...(urlFbclid && { fbclid: urlFbclid }),
          campaign_url: window.location.href
        };
      } else if (!data.campaign_url && typeof window !== 'undefined') {
        data.campaign_url = window.location.href;
      }

      if (!data.referrer && typeof document !== 'undefined' && document.referrer && !document.referrer.includes(window.location.hostname)) {
        data.referrer = document.referrer;
      }

      sessionStorage.setItem(STORAGE_KEY, JSON.stringify(data));
      setTracking(data);
    } catch {
      // ignore
    }
  }, []);

  return tracking;
};
