import { lazy, Suspense, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowDown, ArrowRight, ArrowLeft, ArrowUpRight, Pause, Play, RotateCcw } from 'lucide-react';
import './product-engine-hero.css';

const ProductEngine = lazy(() => import('./ui/entwy-product-engine'));
const services = [
  { name: 'Strategy', short: 'Plan your product', title: 'A clear plan for the right product.', description: 'Find the opportunity, map the workflow, and turn a business challenge into a practical roadmap.', path: 'strategy' },
  { name: 'Design', short: 'Shape the experience', title: 'Complexity, made easy to use.', description: 'Bring the idea into focus with thoughtful interfaces, interactive prototypes, and a connected design system.', path: 'design' },
  { name: 'AI & agents', short: 'Automate tasks', title: 'Intelligence with a job to do.', description: 'Connect your knowledge to useful actions, with purpose-built AI, clear boundaries, and people in control.', path: 'ai' },
  { name: 'Engineering', short: 'Build the software', title: 'Built to work. Ready to grow.', description: 'Bring your product to life with dependable software, connected data, and infrastructure built for everyday use.', path: 'technology' },
  { name: 'Growth & operations', short: 'Improve & scale', title: 'Make every handoff work harder.', description: 'Connect the customer journey, automate repetitive work, and turn day-to-day insights into your next improvement.', path: 'marketing' },
];

export function ProductEngineHero() {
  const [active, setActive] = useState(0);
  const [following, setFollowing] = useState(false);
  const [paused, setPaused] = useState(() => window.matchMedia('(prefers-reduced-motion: reduce)').matches);
  const [resetKey, setResetKey] = useState(0);
  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    const update = () => setPaused(media.matches);
    media.addEventListener('change', update);
    return () => media.removeEventListener('change', update);
  }, []);
  const service = services[active];
  return <section className="product-hero" aria-labelledby="product-hero-title">
    <div className="container product-hero-layout">
      <div className="product-hero-copy">
        <div className="product-hero-intro"><span /> Your product & technology partner</div>
        <h1 id="product-hero-title">Good ideas.<br />Working systems.</h1>
        <p>We build web apps, AI tools, and automated workflows for your business. Our team takes care of the plan, the design, the technology, and what comes next.</p>
        <div className="product-hero-actions">
          <Link className="btn-primary" to="/start-a-project">Start a project <ArrowUpRight size={17} aria-hidden="true" /></Link>
          <a href="#product-capabilities">Explore the possibilities <ArrowDown size={16} aria-hidden="true" /></a>
        </div>
        <p className="product-hero-note">From the first sketch to the systems you use every day.</p>
      </div>
      <div className="product-hero-visual product-connected-showcase">
        <div className="product-showcase-heading"><span>From your first idea to a working product</span><span>One connected team</span></div>
        <Suspense fallback={<div className="product-engine-loading">Preparing your product studio…</div>}>
          <ProductEngine active={active} paused={paused} following={following} resetKey={resetKey} onSelect={setActive} onInspect={(index) => { setFollowing(false); setActive(index); }} />
        </Suspense>
        <div className="product-system-controls">
          <button type="button" aria-pressed={following} onClick={() => { setFollowing(!following); setPaused(false); }}>{following ? 'Stop walkthrough' : 'Follow a project'} <ArrowRight size={14} aria-hidden="true" /></button>
          <span>Drag to explore · Select a service below</span>
        </div>
        <div className="product-showcase-copy" id="product-service-description" aria-live="polite">
          <span>{service.name}</span>
          <h2>{service.title}</h2>
          <p>{service.description}</p>
          <Link to={`/services/${service.path}`}>Explore {service.name.toLowerCase()} <ArrowUpRight size={15} aria-hidden="true" /></Link>
        </div>
        <div className="product-showcase-navigation">
          <button type="button" onClick={() => { setFollowing(false); setActive((active + services.length - 1) % services.length); setResetKey(key => key + 1); }}><ArrowLeft size={16} aria-hidden="true" /> Previous</button>
          <div className="product-showcase-tools">
            <button type="button" onClick={() => setResetKey(key => key + 1)} aria-label="Reset studio view" title="Reset view"><RotateCcw size={14} /></button>
            <button type="button" aria-pressed={paused} onClick={() => setPaused(!paused)} aria-label={paused ? 'Play studio animation' : 'Pause studio animation'} title={paused ? 'Play' : 'Pause'}>{paused ? <Play size={14} /> : <Pause size={14} />}</button>
          </div>
          <button type="button" onClick={() => { setFollowing(false); setActive((active + 1) % services.length); setResetKey(key => key + 1); }}>Next <ArrowRight size={16} aria-hidden="true" /></button>
        </div>
      </div>
    </div>
    <div className="container product-capabilities" id="product-capabilities">
      <div className="product-service-buttons" aria-label="Explore Entwy services">
        {services.map((item, index) => <button type="button" key={item.path} aria-pressed={active === index} aria-controls="product-service-description" onClick={() => { setFollowing(false); setActive(index); setResetKey(key => key + 1); }}><span>{item.short}</span><strong>{item.name}</strong><ArrowUpRight size={18} aria-hidden="true" /></button>)}
      </div>

    </div>
  </section>;
}
