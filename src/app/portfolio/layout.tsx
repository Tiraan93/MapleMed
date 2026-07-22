import '../../../portfolio/app/globals.css';

export const metadata = {
  title: 'Portfolio | MapleMed',
  description: 'Portfolio management system',
};

export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
