export type CategoryType = 'All' | 'Beauty' | 'Tech' | 'Food' | 'Family' | 'Testimonial' | 'CGI';

export interface VideoItem {
  id: string;
  title: string;
  brand: string;
  category: 'Beauty' | 'Tech' | 'Food' | 'Family' | 'Testimonial' | 'CGI';
  thumbnailUrl: string;
  videoUrl: string;
  duration: string;
  aspectRatio: '9:16' | '1:1' | '16:9';
  hookHeadline: string;
  description: string;
  metrics?: {
    hookRate?: string;
    ctr?: string;
    roas?: string;
  };
  tags: string[];
}

export interface ServiceItem {
  id: string;
  number: string;
  title: string;
  oneLiner: string;
  description: string;
  deliverables: string[];
  turnaround: string;
  badge: string;
  iconName: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}
