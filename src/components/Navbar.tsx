import React, { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ArrowRight, ChevronDown, Menu, X } from 'lucide-react';
import { EntwyLogo } from './EntwyLogo';

const navGroups = [
  {
    title: 'Services',
    path: '/services',
    links: [
      ['Strategy & Consulting', '/services/strategy'],
      ['Design & UX Systems', '/services/design'],
      ['AI Solutions & Autonomous Agents', '/services/ai'],
      ['Technology & Cloud Engineering', '/services/technology'],
      ['RevOps & Developer Workflows', '/services/marketing'],
    ],
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
              {navGroups.map((group) => (
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
              ))}
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
