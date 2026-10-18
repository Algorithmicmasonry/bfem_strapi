import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Media from the CMS comes back as "/uploads/..." when it is stored on the CMS
// server; turn that into a full address. Full addresses are left alone.
export function cmsUrl(url?: string | null) {
  if (!url) return ""
  if (/^https?:\/\//.test(url)) return url
  return `${process.env.NEXT_PUBLIC_STRAPI_API_URL ?? ""}${url}`
}
