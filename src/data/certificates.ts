export interface Certificate {
  id: string;
  title: string;
  issuer: string;
  date: string;
  link?: string;
}

export const certificates: Certificate[] = [
  {
    id: '1',
    title: 'Full Stack Web Developer Certificate',
    issuer: 'Dicoding',
    date: '2023',
  },
  {
    id: '2',
    title: 'AWS Certified Cloud Practitioner',
    issuer: 'Amazon Web Services',
    date: '2024',
  }
];
