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
  'register',
] as const;

export type SectionId = (typeof SECTION_IDS)[number];

export const NAV_LINKS: { name: string; href: string; id: SectionId }[] = [
  { name: 'Home', href: '#hero', id: 'hero' },
  { name: 'About', href: '#about', id: 'about' },
  { name: 'Theme', href: '#theme', id: 'theme' },
  { name: 'Schedule', href: '#schedule', id: 'schedule' },
  { name: 'Organizing Committee', href: '#organizing', id: 'organizing' },
  { name: 'Advisory Board', href: '#advisory', id: 'advisory' },
  { name: 'Patrons', href: '#patrons', id: 'patrons' },
  { name: 'Mentors', href: '#mentors', id: 'mentors' },
  { name: 'OC Members', href: '#oc-members', id: 'oc-members' },
];

/** Fixed header height — scroll-spy offset */
export const SCROLL_SPY_OFFSET = 150;
