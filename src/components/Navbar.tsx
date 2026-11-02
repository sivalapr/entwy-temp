import React, { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  ArrowRight,
  BarChart3,
  Bot,
  Boxes,
  ChevronDown,
  Lightbulb,
  Menu,
  Settings,
  Share2,
  Target,
  X,
} from 'lucide-react';
import { EntwyLogo } from './EntwyLogo';

export const servicesCategories = [
  {
    id: 'strategy',
    title: 'Strategy',
    path: '/services/strategy',
    icon: Target,
    theme: {
      badgeBg: '#f3e8ff',
      badgeBorder: '#d8b4fe',
      badgeText: '#6b21a8',
      badgeIcon: '#7c3aed',
      pillHoverBorder: '#c084fc',
      pillHoverBg: '#faf5ff',
      pillHoverText: '#581c87',
    },
    items: [
      { label: 'Product Strategy', path: '/services/strategy/product-strategy' },
      { label: 'Digital Transformation', path: '/services/strategy/digital-transformation' },
      { label: 'AI Strategy', path: '/services/strategy/ai-strategy' },
      { label: 'Product Consulting', path: '/services/strategy/product-consulting' },
    ],
  },
  {
    id: 'design',
    title: 'Design',
    path: '/services/design',
    icon: Lightbulb,
    theme: {
      badgeBg: '#e0f2fe',
      badgeBorder: '#7dd3fc',
      badgeText: '#0369a1',
      badgeIcon: '#0284c7',
      pillHoverBorder: '#38bdf8',
      pillHoverBg: '#f0f9ff',
      pillHoverText: '#0c4a6e',
    },
    items: [
      { label: 'UX Research', path: '/services/design/ux-research' },
      { label: 'UI/UX Design', path: '/services/design/ui-ux-design' },
      { label: 'Product Design', path: '/services/design/product-design' },
      { label: 'Design Systems', path: '/services/design/design-systems' },
      { label: 'Prototyping', path: '/services/design/prototyping' },
    ],
  },
  {
    id: 'ai',
    title: 'AI',
    path: '/services/ai',
    icon: Bot,
    theme: {
      badgeBg: '#ccfbf1',
      badgeBorder: '#5eead4',
      badgeText: '#0f766e',
      badgeIcon: '#0d9488',
      pillHoverBorder: '#2dd4bf',
      pillHoverBg: '#f0fdfa',
      pillHoverText: '#115e59',
    },
    items: [
      { label: 'AI Solutions', path: '/services/ai/ai-solutions' },
      { label: 'AI Agents', path: '/services/ai/ai-agents' },
      { label: 'AI Automation', path: '/services/ai/ai-automation' },
      { label: 'AI Integration', path: '/services/ai/ai-integration' },
      { label: 'Generative AI / Custom AI Development', path: '/services/ai/generative-ai-custom-development' },
    ],
  },
  {
    id: 'technology',
    title: 'Technology',
    path: '/services/technology',
    icon: Settings,
    theme: {
      badgeBg: '#ffedd5',
      badgeBorder: '#fed7aa',
      badgeText: '#c2410c',
      badgeIcon: '#ea580c',
      pillHoverBorder: '#fb923c',
      pillHoverBg: '#fff7ed',
      pillHoverText: '#9a3412',
    },
    items: [
      { label: 'Web Development', path: '/services/technology/web-development' },
      { label: 'Mobile App Development', path: '/services/technology/mobile-app-development' },
      { label: 'SaaS Development', path: '/services/technology/saas-development' },
      { label: 'API & System Integration', path: '/services/technology/api-system-integration' },
      { label: 'MVP Development', path: '/services/technology/mvp-development' },
    ],
  },
  {
    id: 'marketing',
    title: 'Marketing',
    path: '/services/marketing',
    icon: BarChart3,
    theme: {
      badgeBg: '#fce7f3',
      badgeBorder: '#f472b6',
      badgeText: '#be185d',
      badgeIcon: '#db2777',
      pillHoverBorder: '#f472b6',
      pillHoverBg: '#fdf2f8',
      pillHoverText: '#831843',
    },
    items: [
      { label: 'RevOps', path: '/services/marketing/revops' },
      { label: 'Sales Leaders', path: '/services/marketing/sales-leaders' },
      { label: 'Sales Reps', path: '/services/marketing/sales-reps' },
      { label: 'Marketers', path: '/services/marketing/marketers' },
      { label: 'Developers', path: '/services/marketing/developers' },
    ],
  },
];

export const implementationCategory = {
  id: 'implementation',
  title: 'Implementation',
  path: '/services/implementation',
  icon: Share2,
  theme: {
    badgeBg: '#dbeafe',
    badgeBorder: '#93c5fd',
    badgeText: '#1d4ed8',
    badgeIcon: '#2563eb',
    pillHoverBorder: '#60a5fa',
    pillHoverBg: '#ffffff',
    pillHoverText: '#1e40af',
  },
  items: [
    { label: 'WhatsApp Marketing', path: '/services/implementation/whatsapp-marketing' },
    { label: 'API Integration', path: '/api-development' },
    { label: 'MCP (Model Context Protocol)', path: '/mcp-development-services' },
  ],
};

const navGroups = [
  {
    title: 'Services',
    path: '/services',
    links: [],
  },
  {
    title: 'Solutions',
    path: '/solutions',
    links: [
      ['Build a New Product', '/solutions/build-a-new-product'],
      ['Build an AI Product', '/solutions/build-an-ai-product'],
      ['Add AI to your Product', '/solutions/add-ai-to-your-product'],
      ['Modernise Your Platform', '/solutions/modernise-your-platform'],
      ['Automate Business Workflows', '/solutions/automate-business-workflows'],
    ],
  },
  {
    title: 'Work',
    path: '/work',
    links: [
      ['Case Study 01 — FinTech Recon Engine', '/work/case-study-01'],
      ['Case Study 02 — Healthcare Clinical Ops', '/work/case-study-02'],
      ['Case Study 03 — Logistics Event Bus', '/work/case-study-03'],
    ],
  },
  {
    title: 'Process',
    path: '/process',
    links: [
      ['01. Our Approach', '/process/our-approach'],
      ['02. Discovery & Strategy', '/process/discovery-strategy'],
      ['03. Design & Build', '/process/design-build'],
      ['04. Test & Refine', '/process/test-refine'],
      ['05. Launch & Scale', '/process/launch-scale'],
    ],
  },
  {
    title: 'Industries',
    path: '/industries',
    links: [
      ['Digital Enterprises & Platforms', '/industries/digital-enterprises'],
      ['Education & Learning', '/industries/education-learning'],
      ['Consumer Products & Retail', '/industries/consumer-products'],
      ['Lifestyle, Wellness & Care', '/industries/lifestyle-wellness'],
      ['Healthcare & Pharmaceutical', '/industries/healthcare-pharma'],
      ['Banking & Investment', '/industries/banking-investment'],
      ['Energy & Industrial Supply', '/industries/energy-commodities'],
      ['Supply Chain & Logistics', '/industries/supply-chain-logistics'],
    ],
  },
  {
    title: 'About',
    path: '/about',
    links: [
      ['Our Story', '/about/our-story'],
      ['Our Team', '/about/our-team'],
      ['Our Values', '/about/our-values'],
      ['Careers & Open Roles', '/careers'],
      ['Contact Us', '/start-a-project'],
    ],
  },
  {
    title: 'Insights',
    path: '/insights',
    links: [
      ['AI & Autonomous Agents', '/insights/ai'],
      ['Design Systems', '/insights/design'],
      ['Product Strategy', '/insights/product'],
      ['Cloud Technology', '/insights/technology'],
    ],
  },
];

export const Navbar: React.FC = () => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navRef = useRef<HTMLElement>(null);
  const mobileToggleRef = useRef<HTMLButtonElement>(null);
  const drawerRef = useRef<HTMLElement>(null);
  const closeTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const cancelDropdownClose = () => {
    if (closeTimerRef.current !== null) clearTimeout(closeTimerRef.current);
    closeTimerRef.current = null;
  };
  const openDropdown = (title: string) => {
    cancelDropdownClose();
    setActiveDropdown(title);
  };
  const scheduleDropdownClose = (title: string) => {
    cancelDropdownClose();
    closeTimerRef.current = setTimeout(() => {
      setActiveDropdown(current => current === title ? null : current);
      closeTimerRef.current = null;
    }, 180);
  };
  useEffect(() => () => cancelDropdownClose(), []);


  useEffect(() => {
    if (!mobileMenuOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    drawerRef.current?.querySelector<HTMLButtonElement>('button')?.focus();
    return () => {
      document.body.style.overflow = previousOverflow;
      mobileToggleRef.current?.focus();
    };
  }, [mobileMenuOpen]);

  // Close all dropdowns on route change
  useEffect(() => {
    setActiveDropdown(null);
    setMobileMenuOpen(false);
    cancelDropdownClose();
  }, [location.pathname]);

  // Click outside listener to close dropdowns
  useEffect(() => {
    const handlePointerDown = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        cancelDropdownClose();
        setActiveDropdown(null);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        navRef.current?.querySelector<HTMLButtonElement>('.nav-button[aria-expanded="true"]')?.focus();
        cancelDropdownClose();
        setActiveDropdown(null);
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handlePointerDown);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('mousedown', handlePointerDown);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const toggleDropdown = (title: string) => {
    cancelDropdownClose();
    setActiveDropdown((prev) => (prev === title ? null : title));
  };

  const closeMenus = () => {
    cancelDropdownClose();
    setActiveDropdown(null);
    setMobileMenuOpen(false);
  };

  return (
    <header className="top-nav" ref={navRef}>
      <div className="container top-nav-inner">
        <Link to="/" className="brand-logo" aria-label="ENTWY Home" onClick={closeMenus} style={{ display: 'inline-flex', alignItems: 'center' }}>
          <EntwyLogo height={30} />
        </Link>

        {/* Desktop Nav - Only ONE active dropdown at a time */}
        <nav className="desktop-nav" aria-label="Main navigation">
          {navGroups.map((group) => {
            const isOpen = activeDropdown === group.title;

            if (group.title === 'Services') {
              return (
                <div
                  className="nav-dropdown"
                  key={group.title}
                  onMouseEnter={() => openDropdown(group.title)}
                  onMouseLeave={() => scheduleDropdownClose(group.title)}
                  onFocus={cancelDropdownClose}
                  onBlur={(event) => {
                    if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
                      cancelDropdownClose();
                      setActiveDropdown((current) => (current === group.title ? null : current));
                    }
                  }}
                >
                  <button
                    type="button"
                    className={`nav-button ${isOpen ? 'active' : ''}`}
                    onClick={(event) => {
                      if (event.detail === 0) toggleDropdown(group.title);
                      else openDropdown(group.title);
                    }}
                    aria-expanded={isOpen}
                    aria-controls="nav-panel-services"
                  >
                    <span>{group.title}</span>
                    <ChevronDown
                      size={13}
                      className="dropdown-caret"
                      style={{
                        transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                        transition: 'transform 0.15s ease',
                      }}
                    />
                  </button>

                  {isOpen && (
                    <div className="nav-dropdown-panel nav-services-panel" id="nav-panel-services">
                      <Link to="/services" onClick={closeMenus} className="dropdown-link-item dropdown-link-header">
                        <span>Services Overview</span>
                        <ArrowRight size={13} />
                      </Link>
                      <div className="dropdown-divider" />
                      <div className="services-panel-grid">
                        {[...servicesCategories, implementationCategory].map((cat) => (
                          <div key={cat.id} className="services-panel-group">
                            <Link to={cat.path} onClick={closeMenus} className="services-panel-category">
                              {cat.title}
                            </Link>
                            {cat.items.map((item) => (
                              <Link
                                key={item.path}
                                to={item.path}
                                onClick={closeMenus}
                                className="dropdown-link-item services-panel-item"
                              >
                                <span>{item.label}</span>
                                <ArrowRight size={13} className="link-arrow" />
                              </Link>
                            ))}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            }

            return (
              <div
                className="nav-dropdown"
                key={group.title}
                onMouseEnter={() => openDropdown(group.title)}
                onMouseLeave={() => scheduleDropdownClose(group.title)}
                onFocus={cancelDropdownClose}
                onBlur={(event) => {
                  if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
                    cancelDropdownClose();
                    setActiveDropdown(current => current === group.title ? null : current);
                  }
                }}
              >
                <button
                  type="button"
                  className={`nav-button ${isOpen ? 'active' : ''}`}
                  onClick={(event) => {
                    // Hover has already opened the panel before a mouse click arrives.
                    if (event.detail === 0) toggleDropdown(group.title);
                    else openDropdown(group.title);
                  }}
                  aria-expanded={isOpen}
                  aria-controls={`nav-panel-${group.title.toLowerCase()}`}
                >
                  <span>{group.title}</span>
                  <ChevronDown
                    size={13}
                    className="dropdown-caret"
                    style={{
                      transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                      transition: 'transform 0.15s ease',
                    }}
                  />
                </button>

                {isOpen && (
                  <div className="nav-dropdown-panel" id={`nav-panel-${group.title.toLowerCase()}`}>
                    <Link
                      to={group.path}
                      onClick={closeMenus}
                      className="dropdown-link-item dropdown-link-header"
                    >
                      <span>{group.title} Overview</span>
                      <ArrowRight size={13} />
                    </Link>
                    <div className="dropdown-divider" />
                    {group.links.map(([label, path]) => (
                      <Link
                        key={path}
                        to={path}
                        onClick={closeMenus}
                        className="dropdown-link-item"
                      >
                        <span>{label}</span>
                        <ArrowRight size={13} className="link-arrow" />
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </nav>

        <div className="nav-right" style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <Link 
            to="/start-a-project" 
            className="nav-contact-link hidden sm:inline-flex"
            style={{ fontSize: '14px', fontWeight: 500, color: '#0d253d', textDecoration: 'none' }}
          >
            Contact sales
          </Link>
          <Link to="/start-a-project" className="btn-primary nav-cta-btn" onClick={closeMenus}>
            <span className="nav-cta-text">Start now</span>
            <span className="nav-cta-short">Start</span>
            <ArrowRight size={14} />
          </Link>
          <button
            type="button"
            ref={mobileToggleRef}
            className="mobile-toggle-btn"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? 'Close navigation' : 'Open navigation'}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-navigation"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer (Only visible on screens < 900px) */}
      {mobileMenuOpen && (
        <div className="mobile-drawer-overlay" onClick={closeMenus}>
          <nav
            id="mobile-navigation"
            ref={drawerRef}
            role="dialog"
            aria-modal="true"
            className="mobile-drawer-content"
            aria-label="Mobile navigation"
            onClick={(e) => e.stopPropagation()}
            onKeyDown={(event) => {
              if (event.key !== 'Tab') return;
              const controls = Array.from(event.currentTarget.querySelectorAll<HTMLElement>('a[href], button:not([disabled])'));
              const first = controls[0];
              const last = controls[controls.length - 1];
              if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last?.focus(); }
              if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first?.focus(); }
            }}
          >
            <div className="mobile-drawer-header">
              <EntwyLogo height={28} />
              <button
                className="mobile-close-btn"
                onClick={closeMenus}
                aria-label="Close menu"
              >
                <X size={20} />
              </button>
            </div>

            <div className="mobile-drawer-body">
              {navGroups.map((group) => {
                if (group.title === 'Services') {
                  return (
                    <div key={group.title} className="mobile-nav-section mobile-services-section">
                      <Link
                        to={group.path}
                        onClick={closeMenus}
                        className="mobile-section-title"
                      >
                        <span>{group.title} Overview</span>
                        <ArrowRight size={14} />
                      </Link>
                      <div className="mobile-services-pillars">
                        {servicesCategories.map((cat) => {
                          const Icon = cat.icon;
                          return (
                            <div key={cat.id} className="mobile-category-block">
                              <Link
                                to={cat.path}
                                onClick={closeMenus}
                                className="mobile-category-badge"
                                style={{
                                  backgroundColor: cat.theme.badgeBg,
                                  borderColor: cat.theme.badgeBorder,
                                  color: cat.theme.badgeText,
                                }}
                              >
                                <Icon size={13} style={{ color: cat.theme.badgeIcon }} />
                                <span>{cat.title}</span>
                              </Link>
                              <div className="mobile-category-links">
                                {cat.items.map((item) => (
                                  <Link
                                    key={item.path}
                                    to={item.path}
                                    onClick={closeMenus}
                                    className="mobile-sublink"
                                  >
                                    {item.label}
                                  </Link>
                                ))}
                              </div>
                            </div>
                          );
                        })}

                        <div className="mobile-category-block">
                          <Link
                            to={implementationCategory.path}
                            onClick={closeMenus}
                            className="mobile-category-badge"
                            style={{
                              backgroundColor: implementationCategory.theme.badgeBg,
                              borderColor: implementationCategory.theme.badgeBorder,
                              color: implementationCategory.theme.badgeText,
                            }}
                          >
                            <Share2 size={13} style={{ color: implementationCategory.theme.badgeIcon }} />
                            <span>{implementationCategory.title}</span>
                          </Link>
                          <div className="mobile-category-links">
                            {implementationCategory.items.map((item) => (
                              <Link
                                key={item.path}
                                to={item.path}
                                onClick={closeMenus}
                                className="mobile-sublink"
                              >
                                {item.label}
                              </Link>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                }

                return (
                  <div key={group.title} className="mobile-nav-section">
                    <Link
                      to={group.path}
                      onClick={closeMenus}
                      className="mobile-section-title"
                    >
                      <span>{group.title}</span>
                      <ArrowRight size={14} />
                    </Link>
                    <div className="mobile-section-links">
                      {group.links.map(([label, path]) => (
                        <Link
                          key={path}
                          to={path}
                          onClick={closeMenus}
                          className="mobile-sublink"
                        >
                          {label}
                        </Link>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mobile-drawer-footer">
              <Link
                to="/start-a-project"
                className="btn-primary"
                onClick={closeMenus}
                style={{ width: '100%', justifyContent: 'center' }}
              >
                Start a project <ArrowRight size={15} />
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
