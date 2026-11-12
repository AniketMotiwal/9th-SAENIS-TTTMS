// Live website URL — set NEXT_PUBLIC_SITE_URL at build time, e.g.
//   NEXT_PUBLIC_SITE_URL=https://your-domain.com npm run build
// Used for canonical URL, sitemap.xml, robots.txt and Open Graph tags.
export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || 'https://ttms.iitr.ac.in').replace(/\/+$/, '')

export const SITE_NAME = '9th SAENIS TTTMS International Conference 2026'
