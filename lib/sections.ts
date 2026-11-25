export const SECTION_IDS = [
  'hero',
  'about',
  'theme',
  'schedule',
  'advisory',
  'fees',
  'patrons',
  'mentors',
  'oc-members',
  'glimpses',
  'venue',
  'register',
  'contact',
  'sponsors',
] as const;

export type SectionId = (typeof SECTION_IDS)[number];

export const NAV_LINKS: { name: string; short: string; href: string; id: SectionId }[] = [
  { name: 'Home', short: 'Home', href: '#hero', id: 'hero' },
  { name: 'About', short: 'About', href: '#about', id: 'about' },
  { name: 'Theme', short: 'Theme', href: '#theme', id: 'theme' },
  { name: 'Agenda', short: 'Agenda', href: '#schedule', id: 'schedule' },
  { name: 'Who Should Attend', short: 'Attend', href: '#advisory', id: 'advisory' },
  { name: 'Conference Fee', short: 'Fee', href: '#fees', id: 'fees' },
  { name: 'Sponsorship', short: 'Sponsorship', href: '#patrons', id: 'patrons' },
  { name: 'Mentors', short: 'Mentors', href: '#mentors', id: 'mentors' },
  { name: 'Organizing Committee', short: 'OC', href: '#oc-members', id: 'oc-members' },
  { name: 'Glimpses', short: 'Glimpses', href: '#glimpses', id: 'glimpses' },
  { name: 'Venue', short: 'Venue', href: '#venue', id: 'venue' },
  { name: 'Sponsors', short: 'Sponsors', href: '#sponsors', id: 'sponsors' },
];

/** Fixed header height — scroll-spy offset (~compact header + buffer) */
export const SCROLL_SPY_OFFSET = 100;
