export type Project = {
  id: string;
  name: string;
  category: 'Client' | 'Personal';
  liveUrl: string | null;
  detailUrl?: string;
  format?: 'mobile';
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
    id: '02', name: 'Aura Brand Identity', category: 'Personal', liveUrl: null,
    images: [
      { src: '/assets/projects/project-2-1.webp', alt: 'Lavender flowers beneath a rugged mountain range' },
      { src: '/assets/projects/project-2-2.webp', alt: 'Rows of lavender leading toward purple mountains' },
      { src: '/assets/projects/project-2-3.webp', alt: 'Purple flowers beside a quiet mountain lake' },
    ],
  },
  {
    id: '03', name: 'Solaris Digital', category: 'Client', liveUrl: null,
    images: [
      { src: '/assets/projects/project-3-1.webp', alt: 'Golden flower fields and mountains reflected in a lake' },
      { src: '/assets/projects/project-3-2.webp', alt: 'Sunflower fields stretching toward sunlit mountains' },
      { src: '/assets/projects/project-3-3.webp', alt: 'Sunflowers in warm evening light' },
    ],
  },
];
