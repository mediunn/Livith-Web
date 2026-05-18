import { API_BASE_URL } from "../api/constants";

const isInstagramImage = (url: string): boolean => {
  if (!url) return false;
  return /cdninstagram\.com|instagram\.com/.test(url);
};

export const getImageSrc = (url: string | null | undefined): string => {
  if (!url) return "";

  if (isInstagramImage(url)) {
    return `${API_BASE_URL}/image-proxy?url=${encodeURIComponent(url)}`;
  }

  return url;
};
