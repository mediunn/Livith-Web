import { useEffect } from "react";

const APP_STORE_URL =
  "https://apps.apple.com/kr/app/%EB%9D%BC%EC%9D%B4%EB%B9%97/id6745769826";

export function AppStoreRedirectPage() {
  useEffect(() => {
    const userAgent = navigator.userAgent || navigator.vendor;

    const isInAppBrowser = /Instagram|FBAN|FBAV|FB_IAB|Messenger|Threads/i.test(
      userAgent,
    );

    if (isInAppBrowser) {
      window.location.href = `instagram://extbrowser/?url=${encodeURIComponent(
        APP_STORE_URL,
      )}`;

      return;
    }

    window.location.href = APP_STORE_URL;
  }, []);

  return null;
}
