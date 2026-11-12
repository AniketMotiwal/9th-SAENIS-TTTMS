import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { SITE_URL, SITE_NAME } from '@/lib/site'
import './globals.css'

const inter = Inter({ subsets: ["latin"] });

const title = '9th SAENIS TTTMS International Conference 2026 | Emerging Thermal Technologies | IIT Roorkee'
const description =
  'Join the 9th SAENIS TTTMS (Think Tank for Thermal Management Systems) International Conference 2026, Dec 3–5 at IIT Roorkee, Uttarakhand. Organized by SAE India Northern Section with SAE International — theme: Emerging Thermal Technologies in automotive thermal management, EV battery cooling and HVAC. Register now!'

const keywords = [
  'SAENIS',
  'SAENIS TTTMS',
  'TTTMS 2026',
  '9th SAENIS TTTMS',
  '9th SAENIS TTTMS International Conference 2026',
  'Think Tank for Thermal Management Systems',
  'SAE India Northern Section',
  'SAEINDIA',
  'SAE International',
  'SAE India conference 2026',
  'thermal management conference',
  'thermal management systems conference India',
  'automotive thermal management',
  'automotive thermal management conference',
  'Emerging Thermal Technologies',
  'EV thermal management',
  'electric vehicle battery thermal management',
  'battery cooling',
  'automotive HVAC',
  'mobility engineering conference',
  'automotive engineering conference India',
  'international conference 2026 India',
  'engineering conference December 2026',
  'IIT Roorkee conference',
  'IIT Roorkee conference 2026',
  'conference in Roorkee',
  'Uttarakhand conference 2026',
  'TTTMS conference registration',
]

const ogImage = '/saenis-tttms-logo.jpg'

export const metadata: Metadata = {
  ...(SITE_URL ? { metadataBase: new URL(SITE_URL), alternates: { canonical: '/' } } : {}),
  title,
  description,
  keywords,
  applicationName: SITE_NAME,
  authors: [{ name: 'SAE India Northern Section (SAENIS)', url: 'https://www.saenis.org' }],
  creator: 'SAE India Northern Section',
  publisher: 'SAE India Northern Section',
  category: 'Conference',
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    siteName: SITE_NAME,
    title,
    description,
    ...(SITE_URL ? { url: '/', images: [{ url: ogImage, width: 1024, height: 1024, alt: '9th SAENIS TTTMS 2026 logo' }] } : {}),
  },
  twitter: {
    card: 'summary_large_image',
    title,
    description,
    ...(SITE_URL ? { images: [ogImage] } : {}),
  },
}

export const viewport: Viewport = {
  themeColor: '#000000',
}

const eventJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Event',
  name: SITE_NAME,
  alternateName: 'SAENIS TTTMS 2026',
  description,
  startDate: '2026-12-03',
  endDate: '2026-12-05',
  eventStatus: 'https://schema.org/EventScheduled',
  eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
  ...(SITE_URL ? { url: SITE_URL, image: [`${SITE_URL}${ogImage}`] } : {}),
  location: {
    '@type': 'Place',
    name: 'Indian Institute of Technology Roorkee',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Roorkee',
      addressRegion: 'Uttarakhand',
      postalCode: '247667',
      addressCountry: 'IN',
    },
  },
  organizer: [
    { '@type': 'Organization', name: 'SAE India Northern Section (SAENIS)', url: 'https://www.saenis.org' },
    { '@type': 'Organization', name: 'SAE International', url: 'https://www.sae.org' },
  ],
  offers: {
    '@type': 'Offer',
    url: 'https://saenis.glueup.com/event/9th-saenis-tttms-international-conference-2026-189169/',
    availability: 'https://schema.org/InStock',
  },
  keywords: keywords.join(', '),
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth dark">
      <body className={`${inter.className} font-sans antialiased bg-black text-white overflow-x-hidden`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(eventJsonLd) }}
        />
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
