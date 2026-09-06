export type Project = {
  id: string;
  name: string;
  category: 'Client' | 'Personal';
  liveUrl: string | null;
  detailUrl?: string;
  format?: 'mobile' | 'website';
  images: { src: string; alt: string }[];
};

export const projects: Project[] = [
  {
    id: '01', name: 'Sanal Mobile App', category: 'Client', liveUrl: null, detailUrl: '/projects/sanal-mobile-app', format: 'mobile',
    images: [
      { src: '/assets/projects/sanal-mobile/recommendations.png', alt: 'Sanal conversational shopping recommendations screen' },
      { src: '/assets/projects/sanal-mobile/checkout.png', alt: 'Sanal order summary and checkout screen' },
      { src: '/assets/projects/sanal-mobile/home.png', alt: 'Sanal mobile app conversational home screen' },
    ],
  },
  {
    id: '02', name: '99 Names of Allah', category: 'Personal', liveUrl: null, detailUrl: '/projects/99-names-of-allah', format: 'mobile',
    images: [
      { src: '/assets/projects/asma-allah/daily-name.webp', alt: 'Daily Name of Allah learning screen' },
      { src: '/assets/projects/asma-allah/name-detail.webp', alt: 'Meaning and evidence for one of the Names of Allah' },
      { src: '/assets/projects/asma-allah/all-names.webp', alt: 'Searchable list of the 99 Names of Allah' },
    ],
  },
  {
    id: '03', name: 'Juz Agency Website', category: 'Client', liveUrl: null, detailUrl: '/projects/juz-agency-website', format: 'website',
    images: [
      { src: '/assets/projects/juz-agency/hero.webp', alt: 'Juz Agency Arabic website hero' },
      { src: '/assets/projects/juz-agency/media-work.webp', alt: 'Juz Agency media work showcase' },
      { src: '/assets/projects/juz-agency/projects.webp', alt: 'Juz Agency project portfolio' },
    ],
  },
  {
    id: '04', name: 'SPL CX Employee Event', category: 'Client', liveUrl: null, detailUrl: '/projects/spl-cx-employee-event', format: 'website',
    images: [
      { src: '/assets/projects/spl-event/event-hub.webp', alt: 'SPL World Customer Experience Day activity hub' },
      { src: '/assets/projects/spl-event/service-quiz.webp', alt: 'Interactive SPL service knowledge question' },
      { src: '/assets/projects/spl-event/spot-difference.webp', alt: 'SPL spot the difference employee game' },
    ],
  },
  {
    id: '05', name: 'Sanal Company Website', category: 'Client', liveUrl: null, detailUrl: '/projects/sanal-company-website', format: 'website',
    images: [
      { src: '/assets/projects/sanal-website/hero.webp', alt: 'Sanal Arabic company website hero' },
      { src: '/assets/projects/sanal-website/platform.webp', alt: 'Sanal AI commerce execution layer overview' },
      { src: '/assets/projects/sanal-website/sectors.webp', alt: 'Business sectors supported by Sanal' },
    ],
  },
  {
    id: '06', name: 'Traoubi Saudi Landing Page', category: 'Client', liveUrl: null, detailUrl: '/projects/traoubi-saudi-landing-page', format: 'website',
    images: [
      { src: '/assets/projects/traoubi/hero.webp', alt: 'Traoubi Saudi Arabic product landing page hero' },
      { src: '/assets/projects/traoubi/flavors.webp', alt: 'Traoubi flavor and product showcase' },
      { src: '/assets/projects/traoubi/packages.webp', alt: 'Traoubi package selection and shopping interface' },
    ],
  },
  {
    id: '07', name: 'Sharh AI Learning Platform', category: 'Personal', liveUrl: null, detailUrl: '/projects/sharh-ai-learning-platform', format: 'website',
    images: [
      { src: '/assets/projects/sharh-ai/hero.webp', alt: 'Sharh AI Arabic learning platform landing page' },
      { src: '/assets/projects/sharh-ai/upload.webp', alt: 'PDF upload flow in Sharh AI' },
      { src: '/assets/projects/sharh-ai/progress.webp', alt: 'Learning progress analytics in Sharh AI' },
    ],
  },
];
