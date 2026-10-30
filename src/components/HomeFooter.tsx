import React from 'react';
import DitheredFooter, { type FooterColumn } from './ui/dithered-footer';
import { EntwyLogo } from './EntwyLogo';
import { submitNewsletterSubscriber } from '../lib/firebase';

const columns: FooterColumn[] = [
  { title: 'Services', links: [
    { label: 'Strategy & consulting', href: '/services/strategy' },
    { label: 'Design & UX', href: '/services/design' },
    { label: 'AI & automation', href: '/services/ai' },
    { label: 'Cloud engineering', href: '/services/technology' },
    { label: 'API development & integration', href: '/api-development' },
    { label: 'MCP development services', href: '/mcp-development-services' },
    { label: 'Marketing & RevOps', href: '/services/marketing' },
  ] },
  { title: 'Solutions', links: [
    { label: 'Build a product', href: '/solutions/build-a-new-product' },
    { label: 'Build an AI product', href: '/solutions/build-an-ai-product' },
    { label: 'Add AI to your product', href: '/solutions/add-ai-to-your-product' },
    { label: 'Modernise a platform', href: '/solutions/modernise-your-platform' },
    { label: 'Automate workflows', href: '/solutions/automate-business-workflows' },
  ] },
  { title: 'Delivery', links: [
    { label: 'Our work', href: '/work' },
    { label: 'Our process', href: '/process' },
    { label: 'Industries', href: '/industries' },
    { label: 'Insights', href: '/insights' },
  ] },
  { title: 'Company', links: [
    { label: 'About ENTWY', href: '/about' },
    { label: 'Careers', href: '/careers' },
    { label: 'Start a project', href: '/start-a-project' },
    { label: 'info@zuntra.com', href: 'mailto:info@zuntra.com' },
  ] },
];

export function HomeFooter() {
  const handleSubscribe = async (email: string) => {
    await submitNewsletterSubscriber(email, 'Homepage Footer');
  };

  return (
    <DitheredFooter
      brand="ENTWY"
      brandNode={<EntwyLogo height={30} />}
      accent="#533afd"
      tagline="Digital products, AI workflows and business systems. Designed around your needs, built for everyday use."
      columns={columns}
      contact={{ label: 'Discuss your project', href: '/start-a-project' }}
      copyright={`© ${new Date().getFullYear()} ENTWY`}
      legal={[
        { label: 'Privacy', href: '/privacy' },
        { label: 'Terms', href: '/terms' },
      ]}
      status={null}
      onSubscribe={handleSubscribe}
      brandContent={
        <p className="mt-4 text-xs leading-relaxed text-muted-foreground">
          A subsidiary of{' '}
          <a
            href="https://www.zuntra.com/"
            target="_blank"
            rel="noreferrer"
            className="font-medium text-primary underline underline-offset-4"
          >
            Zuntra Digital Pvt Ltd
          </a>
        </p>
      }
    />
  );
}

export default HomeFooter;
