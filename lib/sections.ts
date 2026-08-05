export const SECTION_IDS = [
  'hero',
  'about',
  'theme',
  'schedule',
  'organizing',
  'advisory',
  'patrons',
  'mentors',
  'oc-members',
  'glimpses',
  'venue',
  'register',
] as const;

export type SectionId = (typeof SECTION_IDS)[number];

export const NAV_LINKS: { name: string; href: string; id: SectionId }[] = [
  { name: 'Home', href: '#hero', id: 'hero' },
  { name: 'About', href: '#about', id: 'about' },
  { name: 'Theme', href: '#theme', id: 'theme' },
  { name: 'Schedule', href: '#schedule', id: 'schedule' },
  { name: 'Organizing Committee', href: '#organizing', id: 'organizing' },
  { name: 'Who Should Attend', href: '#advisory', id: 'advisory' },
  { name: 'Sponsorship', href: '#patrons', id: 'patrons' },
  { name: 'Mentors', href: '#mentors', id: 'mentors' },
  { name: 'OC Members', href: '#oc-members', id: 'oc-members' },
  { name: 'Glimpses', href: '#glimpses', id: 'glimpses' },
  { name: 'Venue', href: '#venue', id: 'venue' },
];

/** Fixed header height — scroll-spy offset (~compact header + buffer) */
export const SCROLL_SPY_OFFSET = 120;
