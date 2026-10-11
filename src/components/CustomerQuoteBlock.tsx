import React from 'react';
import { ArrowRight, Quote } from 'lucide-react';
import { Link } from 'react-router-dom';

export interface CustomerQuoteBlockProps { quote?: string; attribution?: string; role?: string; }

export function CustomerQuoteBlock({
  quote = 'The strongest automation does more than move faster. It makes every decision visible, every action recoverable, and every team more confident in the system.',
  attribution = 'ENTWY delivery principle',
  role = 'Responsible automation by design',
}: CustomerQuoteBlockProps) {
  return <section className="customer-quote-section" aria-labelledby="customer-quote-title"><div className="container"><div className="customer-quote-grid">
    <div><Quote size={28} aria-hidden="true" /><blockquote id="customer-quote-title">“{quote}”</blockquote><p><strong>{attribution}</strong><span>{role}</span></p><Link to="/work" className="text-link">Explore customer stories <ArrowRight size={15} /></Link></div>
    <div className="quote-art" aria-hidden="true"><span>ENTWY</span><small>Systems that earn trust</small></div>
  </div></div></section>;
}
