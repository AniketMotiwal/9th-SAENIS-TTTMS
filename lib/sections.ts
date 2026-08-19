export const SECTION_IDS = [
  'hero',
  'about',
  'theme',
  'schedule',
  'advisory',
  'patrons',
  'mentors',
  'oc-members',
  'glimpses',
  'venue',
  'register',
] as const;

export type SectionId = (typeof SECTION_IDS)[number];

export const NAV_LINKS: { name: string; short: string; href: string; id: SectionId }[] = [
  { name: 'Home', short: 'Home', href: '#hero', id: 'hero' },
  { name: 'About', short: 'About', href: '#about', id: 'about' },
  { name: 'Theme', short: 'Theme', href: '#theme', id: 'theme' },
  { name: 'Schedule', short: 'Schedule', href: '#schedule', id: 'schedule' },
  { name: 'Who Should Attend', short: 'Attend', href: '#advisory', id: 'advisory' },
  { name: 'Sponsorship', short: 'Sponsors', href: '#patrons', id: 'patrons' },
  { name: 'Mentors', short: 'Mentors', href: '#mentors', id: 'mentors' },
  { name: 'OC Members', short: 'OC', href: '#oc-members', id: 'oc-members' },
  { name: 'Glimpses', short: 'Glimpses', href: '#glimpses', id: 'glimpses' },
  { name: 'Venue', short: 'Venue', href: '#venue', id: 'venue' },
];

/** Fixed header height — scroll-spy offset (~compact header + buffer) */
export const SCROLL_SPY_OFFSET = 120;
