export const metadata = {
  title: 'О нас — АО «КазНИИСА»',
  description: 'Единственный государственный научно-исследовательский и проектный институт в Казахстане, специализирующийся на развитии строительства, включая районы со сложными геологическими условиями и сейсмическими зонами.',
  openGraph: {
    title: 'О нас — АО «КазНИИСА»',
    description: 'Государственный научно-исследовательский и проектный институт строительства и архитектуры',
    locale: 'ru_RU',
    type: 'website',
  },
  alternates: {
    canonical: '/about-us',
    languages: { 'ru': '/about-us', 'kk': '/about-us' },
  },
};

export default function AboutUsLayout({ children }) {
  return children;
}
