import React, { useEffect, useMemo, useRef, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { careersSectionsData } from '../data/sitemapData';
import { detailedJobOpenings, CAREER_DEPARTMENTS, JobOpening } from '../data/careersData';
import { CareersEditorialHero } from '../components/CareersEditorialHero';
import { CareerApplyModal } from '../components/CareerApplyModal';
import { 
  ArrowRight, 
  Briefcase, 
  GraduationCap, 
  HeartHandshake, 
  Sparkles, 
  UserCheck, 
  ChevronRight,
  Laptop,
  BookOpen,
  DollarSign,
  Plane,
  MapPin,
  Search,
  X,
  CheckCircle,
  Building,
  Tag,
  Layers,
  Award
} from 'lucide-react';

const comprehensiveBenefits = [
  {
    icon: Laptop,
    title: 'Modern Engineering Workstation',
    desc: 'High-performance machines, access to cloud computing clusters, AI developer tools, and modern productivity tooling from day one.',
  },
  {
    icon: DollarSign,
    title: 'Competitive Internship Stipend',
    desc: 'Structured monthly remuneration and completion performance incentives for every selected intern in Chennai.',
  },
  {
    icon: Award,
    title: 'PPO & Full-Time Conversion',
    desc: 'High-performing interns are actively considered for pre-placement offers (PPOs) and full-time associate engineer/designer/specialist roles.',
  },
  {
    icon: Layers,
    title: 'Live Production Software',
    desc: 'Work on real production codebases, AI agent systems, SaaS platforms, and enterprise digital solutions—no dummy demo tasks.',
  },
  {
    icon: BookOpen,
    title: '1-on-1 Senior Mentorship',
    desc: 'Paired directly with lead architects, principal designers, and department leads for weekly design reviews and code audits.',
  },
  {
    icon: HeartHandshake,
    title: 'Collaborative Studio Culture',
    desc: 'Vibrant, high-agency team environment at our Chennai office with hackathons, team lunches, and cross-functional learning.',
  },
];

const hiringSteps = [
  {
    step: 'Stage 01',
    name: 'Application & Portfolio Review',
    timeline: 'Day 1–3',
    desc: 'Our department leads review your academic profile, GitHub repositories, Figma portfolios, or writing samples against role requirements.',
  },
  {
    step: 'Stage 02',
    name: 'Practical Skill Discussion & Assignment',
    timeline: 'Day 4–6',
    desc: 'A hands-on, collaborative conversation or practical take-home task evaluating your problem-solving ability, fundamentals, and curiosity.',
  },
  {
    step: 'Stage 03',
    name: 'Team Sync & Internship Offer',
    timeline: 'Within 48 Hours',
    desc: 'A brief cultural alignment sync followed by an official internship offer letter, onboarding roadmap, and mentorship schedule.',
  },
];

const candidateFaqs = [
  {
    q: 'Where is the internship located?',
    a: 'All 36 internship opportunities are based in Chennai, Tamil Nadu. Interns collaborate closely with our engineering, design, AI, and growth teams at our Chennai studio.',
  },
  {
    q: 'Who is eligible to apply for these internships?',
    a: 'We welcome students currently pursuing Bachelor’s or Master’s degrees, recent graduates, or self-taught builders with demonstrable projects, portfolios, or repositories.',
  },
  {
    q: 'What is the duration of the internship?',
    a: 'Standard internships run for 3 to 6 months. Flexible scheduling is available to accommodate academic coursework, semester exams, or final-year projects.',
  },
  {
    q: 'Are high-performing interns offered full-time roles?',
    a: 'Yes! Our internship program is our primary pipeline for hiring associate developers, designers, AI practitioners, and growth managers into full-time careers at ENTWY.',
  },
];

export const CareersPage: React.FC = () => {
  const { section } = useParams<{ section?: string }>();
  const [life, openRoles, internships, hiring] = careersSectionsData;
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});
  
  // Interaction & Filter states
  const [expandedJob, setExpandedJob] = useState<string | null>(null);
  const [selectedDept, setSelectedDept] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Application Modal state
  const [applyModalOpen, setApplyModalOpen] = useState(false);
  const [selectedRoleForApply, setSelectedRoleForApply] = useState<{ title: string; dept: string }>({
    title: '',
    dept: 'Marketing & Growth'
  });

  const handleOpenApply = (title: string, dept: string = 'General') => {
    setSelectedRoleForApply({ title, dept });
    setApplyModalOpen(true);
  };

  useEffect(() => {
    if (section && sectionRefs.current[section]) {
      sectionRefs.current[section]?.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }, [section]);

  const toggleJob = (title: string) => {
    setExpandedJob(expandedJob === title ? null : title);
  };

  // Filtered job openings
  const filteredRoles = useMemo(() => {
    return detailedJobOpenings.filter((job) => {
      const matchesDept = selectedDept === 'all' || job.departmentCategory === selectedDept;
      if (!matchesDept) return false;

      if (!searchQuery.trim()) return true;

      const q = searchQuery.toLowerCase();
      const inTitle = job.title.toLowerCase().includes(q);
      const inDept = job.department.toLowerCase().includes(q);
      const inSummary = job.summary.toLowerCase().includes(q);
      const inStack = job.stack.some(s => s.toLowerCase().includes(q));
      const inReqs = job.requirements.some(r => r.toLowerCase().includes(q));

      return inTitle || inDept || inSummary || inStack || inReqs;
    });
  }, [selectedDept, searchQuery]);

  // Group filtered roles by department
  const groupedRoles = useMemo(() => {
    const groups: { [key: string]: { deptName: string; deptCode: string; roles: JobOpening[] } } = {};

    CAREER_DEPARTMENTS.forEach(d => {
      groups[d.id] = { deptName: d.name, deptCode: d.code, roles: [] };
    });

    filteredRoles.forEach(role => {
      if (groups[role.departmentCategory]) {
        groups[role.departmentCategory].roles.push(role);
      }
    });

    return Object.entries(groups).filter(([_, data]) => data.roles.length > 0);
  }, [filteredRoles]);

  return (
    <div className="page-shell">
      <div className="container">
        {/* Breadcrumb if sub-route */}
        {section && (
          <nav aria-label="Breadcrumb" style={{ marginBottom: 24, display: 'flex', alignItems: 'center', gap: 8, fontSize: '13px', color: 'var(--color-muted)' }}>
            <Link to="/" style={{ color: 'var(--color-muted)', textDecoration: 'none' }}>Home</Link>
            <ChevronRight size={13} />
            <Link to="/careers" style={{ color: 'var(--color-muted)', textDecoration: 'none' }}>Careers</Link>
            <ChevronRight size={13} />
            <span style={{ color: 'var(--color-ink)', fontWeight: 600 }}>
              {careersSectionsData.find(s => s.id === section)?.title || section}
            </span>
          </nav>
        )}

        {/* Hero04: Editorial Careers Introduction */}
        <CareersEditorialHero />

        {/* Highlight Banner: Location & Opportunity Type */}
        <div 
          style={{ 
            backgroundColor: '#ffffff',
            border: '1px solid var(--color-hairline)',
            borderRadius: 'var(--radius-lg)',
            padding: '20px 24px',
            marginBottom: '36px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '16px',
            boxShadow: '0 2px 8px rgba(13, 37, 61, 0.03)'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px', flexWrap: 'wrap' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '14px', color: 'var(--color-ink)', fontWeight: 600 }}>
              <MapPin size={16} color="var(--color-primary)" />
              <span>Location: Chennai, Tamil Nadu</span>
            </div>
            <span style={{ color: 'var(--color-muted)' }}>·</span>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '14px', color: 'var(--color-ink)', fontWeight: 600 }}>
              <Briefcase size={16} color="var(--color-primary)" />
              <span>Opportunity Type: Internship</span>
            </div>
            <span style={{ color: 'var(--color-muted)' }}>·</span>
            <span style={{ fontSize: '13.5px', color: 'var(--color-body)' }}>
              36 Dedicated Positions Across 9 Departments
            </span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span className="step-type-badge badge-trigger" style={{ backgroundColor: 'rgba(83, 58, 253, 0.08)', color: 'var(--color-primary)', border: '1px solid rgba(83, 58, 253, 0.2)' }}>
              Applications Open for 2026 Batch
            </span>
          </div>
        </div>

        {/* Career Section Quick Tabs */}
        <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', marginBottom: 44 }}>
          {careersSectionsData.map((sec) => {
            const isSelected = section === sec.id;
            return (
              <Link
                key={sec.id}
                to={`/careers/${sec.id}`}
                style={{
                  padding: '8px 18px',
                  borderRadius: 'var(--radius-pill)',
                  border: isSelected ? '1px solid var(--color-primary)' : '1px solid var(--color-hairline-strong)',
                  backgroundColor: isSelected ? 'var(--color-primary)' : 'var(--color-canvas-soft)',
                  color: isSelected ? '#ffffff' : 'var(--color-ink)',
                  textDecoration: 'none',
                  fontSize: '13.5px',
                  fontWeight: 600,
                  transition: 'all 0.15s ease'
                }}
              >
                {sec.title}
              </Link>
            );
          })}
        </div>

        {/* 1. Life at ENTWY */}
        <section
          id="life-at-entwy"
          ref={(el) => { sectionRefs.current['life-at-entwy'] = el; }}
          style={{
            backgroundColor: '#ffffff',
            border: section === 'life-at-entwy' ? '1px solid var(--color-primary)' : '1px solid var(--color-hairline)',
            borderRadius: 'var(--radius-xl)',
            padding: '40px',
            marginBottom: '48px',
            boxShadow: section === 'life-at-entwy' ? '0 12px 32px rgba(83, 58, 253, 0.08)' : '0 2px 8px rgba(13, 37, 61, 0.03)',
            transition: 'border-color 0.2s ease, box-shadow 0.2s ease',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '14px' }}>
            <Sparkles size={20} color="var(--color-primary)" />
            <h2 className="title-lg" style={{ color: 'var(--color-ink)', margin: 0 }}>
              {life.title}
            </h2>
          </div>
          <p style={{ fontSize: '16px', color: 'var(--color-body)', lineHeight: 1.6, maxWidth: '820px', marginBottom: '28px', fontWeight: 300 }}>
            {life.desc} We believe in small, autonomous strike teams with high individual agency. You will work on real production software, collaborate directly with founders and senior enterprise partners, and enjoy deep, uninterrupted focus time.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))', gap: '20px' }}>
            {comprehensiveBenefits.map((b) => {
              const BIcon = b.icon;
              return (
                <div key={b.title} style={{ backgroundColor: 'var(--color-canvas-soft)', padding: '20px', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-hairline)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                    <div style={{ width: '32px', height: '32px', borderRadius: 'var(--radius-sm)', backgroundColor: '#ffffff', color: 'var(--color-primary)', display: 'grid', placeItems: 'center', border: '1px solid var(--color-hairline)' }}>
                      <BIcon size={16} />
                    </div>
                    <span style={{ fontSize: '15px', fontWeight: 600, color: 'var(--color-ink)' }}>{b.title}</span>
                  </div>
                  <p style={{ fontSize: '13.5px', color: 'var(--color-body)', lineHeight: 1.55, margin: 0, fontWeight: 300 }}>
                    {b.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        {/* 2. Open Positions (36 Department-wise Internship Opportunities) */}
        <section
          id="open-positions"
          ref={(el) => { sectionRefs.current['open-positions'] = el; }}
          style={{
            backgroundColor: '#ffffff',
            border: section === 'open-positions' ? '1px solid var(--color-primary)' : '1px solid var(--color-hairline)',
            borderRadius: 'var(--radius-xl)',
            padding: '40px',
            marginBottom: '48px',
            boxShadow: section === 'open-positions' ? '0 12px 32px rgba(83, 58, 253, 0.08)' : '0 2px 8px rgba(13, 37, 61, 0.03)',
            transition: 'border-color 0.2s ease, box-shadow 0.2s ease',
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px', flexWrap: 'wrap', gap: '16px' }}>
            <div>
              <h2 className="title-lg" style={{ color: 'var(--color-ink)', marginBottom: '4px' }}>
                Department-wise Internship Opportunities
              </h2>
              <p style={{ fontSize: '15px', color: 'var(--color-body)', fontWeight: 300, margin: 0 }}>
                Chennai, Tamil Nadu · Full-Time / Structured Internships with PPO Potential
              </p>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span className="step-type-badge badge-trigger">
                {filteredRoles.length} Opportunities Available
              </span>
            </div>
          </div>

          {/* Search Bar & Quick Filters */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginBottom: '28px' }}>
            <div style={{ position: 'relative' }}>
              <Search 
                size={17} 
                style={{ position: 'absolute', left: 16, top: '50%', transform: 'translateY(-50%)', color: 'var(--color-muted)' }} 
              />
              <input
                type="text"
                placeholder="Search by role title, department, or tech stack (e.g. React, SEO, AI, Figma, SQL)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                style={{
                  width: '100%',
                  padding: '12px 42px 12px 44px',
                  borderRadius: 'var(--radius-md)',
                  border: '1px solid var(--color-hairline-strong)',
                  backgroundColor: 'var(--color-canvas-soft)',
                  fontSize: '14px',
                  color: 'var(--color-ink)',
                  outline: 'none',
                  boxSizing: 'border-box'
                }}
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  style={{
                    position: 'absolute',
                    right: 12,
                    top: '50%',
                    transform: 'translateY(-50%)',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    color: 'var(--color-muted)'
                  }}
                  aria-label="Clear search"
                >
                  <X size={16} />
                </button>
              )}
            </div>

            {/* Department Filter Tabs */}
            <div style={{ display: 'flex', gap: '8px', overflowX: 'auto', paddingBottom: '6px', scrollbarWidth: 'thin' }}>
              <button
                onClick={() => setSelectedDept('all')}
                style={{
                  padding: '6px 14px',
                  borderRadius: 'var(--radius-pill)',
                  border: selectedDept === 'all' ? '1px solid var(--color-primary)' : '1px solid var(--color-hairline)',
                  backgroundColor: selectedDept === 'all' ? 'var(--color-primary)' : '#ffffff',
                  color: selectedDept === 'all' ? '#ffffff' : 'var(--color-ink)',
                  fontSize: '12.5px',
                  fontWeight: 600,
                  cursor: 'pointer',
                  whiteSpace: 'nowrap',
                  transition: 'all 0.15s ease'
                }}
              >
                All Departments (36)
              </button>
              {CAREER_DEPARTMENTS.map((dept) => {
                const isActive = selectedDept === dept.id;
                return (
                  <button
                    key={dept.id}
                    onClick={() => setSelectedDept(dept.id)}
                    style={{
                      padding: '6px 14px',
                      borderRadius: 'var(--radius-pill)',
                      border: isActive ? '1px solid var(--color-primary)' : '1px solid var(--color-hairline)',
                      backgroundColor: isActive ? 'var(--color-primary)' : '#ffffff',
                      color: isActive ? '#ffffff' : 'var(--color-ink)',
                      fontSize: '12.5px',
                      fontWeight: 600,
                      cursor: 'pointer',
                      whiteSpace: 'nowrap',
                      transition: 'all 0.15s ease'
                    }}
                  >
                    {dept.name} ({dept.count})
                  </button>
                );
              })}
            </div>
          </div>

          {/* Grouped Roles Container */}
          {groupedRoles.length === 0 ? (
            <div style={{ padding: '48px 24px', textAlign: 'center', backgroundColor: 'var(--color-canvas-soft)', borderRadius: 'var(--radius-lg)', border: '1px solid var(--color-hairline)' }}>
              <Briefcase size={36} color="var(--color-muted)" style={{ margin: '0 auto 12px' }} />
              <div style={{ fontSize: '16px', fontWeight: 600, color: 'var(--color-ink)', marginBottom: '4px' }}>
                No internship opportunities match your criteria
              </div>
              <p style={{ fontSize: '13.5px', color: 'var(--color-muted)', margin: '0 0 16px' }}>
                Try adjusting your search query or department filter.
              </p>
              <button
                onClick={() => { setSelectedDept('all'); setSearchQuery(''); }}
                style={{
                  padding: '8px 16px',
                  borderRadius: 'var(--radius-pill)',
                  border: '1px solid var(--color-hairline-strong)',
                  backgroundColor: '#ffffff',
                  fontSize: '13px',
                  fontWeight: 600,
                  cursor: 'pointer'
                }}
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '36px' }}>
              {groupedRoles.map(([deptId, deptData]) => (
                <div key={deptId} style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                  {/* Department Subheader */}
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid var(--color-hairline)', paddingBottom: '10px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <Building size={17} color="var(--color-primary)" />
                      <h3 style={{ fontSize: '17px', fontWeight: 700, color: 'var(--color-ink)', margin: 0 }}>
                        {deptData.deptName}
                      </h3>
                    </div>
                    <span style={{ fontSize: '12px', fontFamily: 'var(--font-mono)', color: 'var(--color-muted)', fontWeight: 600 }}>
                      {deptData.roles.length} {deptData.roles.length === 1 ? 'Role' : 'Roles'}
                    </span>
                  </div>

                  {/* Role Cards in Department */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
                    {deptData.roles.map((role) => {
                      const isExpanded = expandedJob === role.title;
                      return (
                        <div
                          key={role.id}
                          style={{
                            backgroundColor: 'var(--color-canvas-soft)',
                            border: isExpanded ? '1px solid var(--color-primary)' : '1px solid var(--color-hairline)',
                            borderRadius: 'var(--radius-lg)',
                            overflow: 'hidden',
                            transition: 'border-color 0.2s ease, box-shadow 0.2s ease',
                          }}
                        >
                          <div
                            style={{
                              padding: '22px 26px',
                              display: 'flex',
                              justifyContent: 'space-between',
                              alignItems: 'center',
                              flexWrap: 'wrap',
                              gap: '16px',
                            }}
                          >
                            <div style={{ maxWidth: '640px' }}>
                              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px', flexWrap: 'wrap' }}>
                                <h4 style={{ fontSize: '17px', fontWeight: 600, color: 'var(--color-ink)', margin: 0 }}>
                                  {role.title}
                                </h4>
                                <span style={{ fontSize: '11px', fontFamily: 'var(--font-mono)', backgroundColor: '#ffffff', border: '1px solid var(--color-hairline)', padding: '2px 8px', borderRadius: 'var(--radius-pill)', color: 'var(--color-primary)', fontWeight: 600 }}>
                                  {role.department}
                                </span>
                              </div>
                              <div style={{ display: 'flex', gap: '14px', fontSize: '12.5px', color: 'var(--color-muted)', fontFamily: 'var(--font-mono)', flexWrap: 'wrap' }}>
                                <span>{role.location}</span>
                                <span>·</span>
                                <span>{role.type}</span>
                                <span>·</span>
                                <span style={{ color: 'var(--color-primary)', fontWeight: 600 }}>{role.comp}</span>
                              </div>
                            </div>

                            <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                              <button
                                onClick={() => toggleJob(role.title)}
                                style={{
                                  background: '#ffffff',
                                  border: '1px solid var(--color-hairline-strong)',
                                  borderRadius: 'var(--radius-pill)',
                                  padding: '7px 15px',
                                  fontSize: '13px',
                                  fontWeight: 600,
                                  color: 'var(--color-ink)',
                                  cursor: 'pointer',
                                  transition: 'background-color 0.15s ease'
                                }}
                              >
                                {isExpanded ? 'Hide Details' : 'View Scope'}
                              </button>
                              <button
                                onClick={() => handleOpenApply(role.title, role.department)}
                                className="btn-primary"
                                style={{ padding: '7px 16px', fontSize: '13px', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '6px' }}
                              >
                                <span>Apply</span>
                                <ArrowRight size={14} />
                              </button>
                            </div>
                          </div>

                          {isExpanded && (
                            <div style={{ padding: '0 26px 22px 26px', borderTop: '1px solid var(--color-hairline)', backgroundColor: '#ffffff' }}>
                              <p style={{ fontSize: '14.5px', color: 'var(--color-body)', lineHeight: 1.6, margin: '18px 0 16px 0', fontWeight: 400 }}>
                                {role.summary}
                              </p>

                              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: '22px', marginBottom: '18px' }}>
                                <div style={{ backgroundColor: 'var(--color-canvas-soft)', padding: '16px', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-hairline)' }}>
                                  <div style={{ fontSize: '12px', fontWeight: 700, color: 'var(--color-ink)', textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: '10px' }}>
                                    What You Will Own
                                  </div>
                                  <ul style={{ margin: 0, paddingLeft: '18px', fontSize: '13px', color: 'var(--color-body)', lineHeight: 1.6 }}>
                                    {role.responsibilities.map((r, i) => (
                                      <li key={i} style={{ marginBottom: '6px' }}>{r}</li>
                                    ))}
                                  </ul>
                                </div>

                                <div style={{ backgroundColor: 'var(--color-canvas-soft)', padding: '16px', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-hairline)' }}>
                                  <div style={{ fontSize: '12px', fontWeight: 700, color: 'var(--color-ink)', textTransform: 'uppercase', letterSpacing: '0.04em', marginBottom: '10px' }}>
                                    What We Look For
                                  </div>
                                  <ul style={{ margin: 0, paddingLeft: '18px', fontSize: '13px', color: 'var(--color-body)', lineHeight: 1.6 }}>
                                    {role.requirements.map((req, i) => (
                                      <li key={i} style={{ marginBottom: '6px' }}>{req}</li>
                                    ))}
                                  </ul>
                                </div>
                              </div>

                              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px', borderTop: '1px solid var(--color-hairline)', paddingTop: '14px' }}>
                                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
                                  <span style={{ fontSize: '12px', fontWeight: 600, color: 'var(--color-muted)', display: 'flex', alignItems: 'center', gap: '4px' }}>
                                    <Tag size={13} /> Tech Focus:
                                  </span>
                                  {role.stack.map((t) => (
                                    <span key={t} style={{ fontSize: '12px', fontFamily: 'var(--font-mono)', backgroundColor: 'var(--color-canvas-soft)', border: '1px solid var(--color-hairline)', padding: '2px 8px', borderRadius: 'var(--radius-pill)', color: 'var(--color-ink-mid)' }}>
                                      {t}
                                    </span>
                                  ))}
                                </div>

                                <button
                                  onClick={() => handleOpenApply(role.title, role.department)}
                                  className="btn-primary"
                                  style={{ padding: '6px 14px', fontSize: '12.5px', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '6px' }}
                                >
                                  <span>Apply for {role.title}</span>
                                  <ArrowRight size={13} />
                                </button>
                              </div>
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>

        {/* 3 & 4. Internships & Hiring Process Side-by-Side */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 360px), 1fr))', gap: '28px', marginBottom: '56px' }}>
          {/* Internships */}
          <div
            id="internships"
            ref={(el) => { sectionRefs.current['internships'] = el; }}
            style={{
              backgroundColor: '#ffffff',
              border: section === 'internships' ? '1px solid var(--color-primary)' : '1px solid var(--color-hairline)',
              borderRadius: 'var(--radius-xl)',
              padding: '36px',
              boxShadow: section === 'internships' ? '0 12px 32px rgba(83, 58, 253, 0.08)' : '0 2px 8px rgba(13, 37, 61, 0.03)',
            }}
          >
            <div style={{ width: 40, height: 40, borderRadius: 'var(--radius-sm)', backgroundColor: '#fff', border: '1px solid var(--color-hairline)', display: 'grid', placeItems: 'center', color: 'var(--color-primary)', marginBottom: '18px' }}>
              <GraduationCap size={20} />
            </div>
            <h3 className="title-md" style={{ color: 'var(--color-ink)', marginBottom: '12px' }}>
              {internships.title}
            </h3>
            <p style={{ fontSize: '14.5px', color: 'var(--color-body)', lineHeight: 1.6, marginBottom: '24px', fontWeight: 300 }}>
              {internships.desc} Every intern is paired with senior technical mentors and specialists in our Chennai studio, contributing directly to real client platforms, generative AI tooling, and operational frameworks.
            </p>
            <button
              onClick={() => handleOpenApply('General Internship Application', 'General')}
              className="dropdown-link-item"
              style={{ color: 'var(--color-primary)', fontWeight: 600, padding: 0, background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left', display: 'inline-flex', alignItems: 'center', gap: '6px' }}
            >
              <span>Submit General Internship Application &rarr;</span>
            </button>
          </div>

          {/* Hiring Process */}
          <div
            id="hiring-process"
            ref={(el) => { sectionRefs.current['hiring-process'] = el; }}
            style={{
              backgroundColor: '#ffffff',
              border: section === 'hiring-process' ? '1px solid var(--color-primary)' : '1px solid var(--color-hairline)',
              borderRadius: 'var(--radius-xl)',
              padding: '36px',
              boxShadow: section === 'hiring-process' ? '0 12px 32px rgba(83, 58, 253, 0.08)' : '0 2px 8px rgba(13, 37, 61, 0.03)',
            }}
          >
            <div style={{ width: 40, height: 40, borderRadius: 'var(--radius-sm)', backgroundColor: '#fff', border: '1px solid var(--color-hairline)', display: 'grid', placeItems: 'center', color: 'var(--color-primary)', marginBottom: '18px' }}>
              <UserCheck size={20} />
            </div>
            <h3 className="title-md" style={{ color: 'var(--color-ink)', marginBottom: '12px' }}>
              {hiring.title}
            </h3>
            <p style={{ fontSize: '14.5px', color: 'var(--color-body)', lineHeight: 1.6, marginBottom: '20px', fontWeight: 300 }}>
              {hiring.desc}
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {hiringSteps.map((st) => (
                <div key={st.step} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                  <span style={{ fontSize: '12px', fontFamily: 'var(--font-mono)', color: 'var(--color-primary)', fontWeight: 700, minWidth: '60px' }}>
                    {st.step}
                  </span>
                  <div>
                    <div style={{ fontSize: '13.5px', fontWeight: 600, color: 'var(--color-ink)' }}>{st.name}</div>
                    <div style={{ fontSize: '12.5px', color: 'var(--color-muted)' }}>{st.desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Candidate FAQ */}
        <section
          style={{
            backgroundColor: '#ffffff',
            border: '1px solid var(--color-hairline)',
            borderRadius: 'var(--radius-xl)',
            padding: '40px',
            marginBottom: '56px',
          }}
        >
          <h2 className="title-lg" style={{ color: 'var(--color-ink)', marginBottom: '20px' }}>
            Frequently Asked Questions by Candidates
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))', gap: '20px' }}>
            {candidateFaqs.map((faq) => (
              <div key={faq.q} style={{ backgroundColor: 'var(--color-canvas-soft)', padding: '20px', borderRadius: 'var(--radius-md)', border: '1px solid var(--color-hairline)' }}>
                <div style={{ fontSize: '15px', fontWeight: 600, color: 'var(--color-ink)', marginBottom: '8px' }}>
                  {faq.q}
                </div>
                <p style={{ fontSize: '13.5px', color: 'var(--color-body)', lineHeight: 1.6, margin: 0, fontWeight: 300 }}>
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Bottom CTA Band */}
        <div 
          className="cta-wave-banner"
          style={{ 
            marginTop: '36px', 
            padding: '52px', 
            textAlign: 'center', 
          }}
        >
          <h2 className="display-md" style={{ color: '#ffffff', marginBottom: '14px', fontWeight: 300 }}>
            Don't see a role that matches your profile?
          </h2>
          <p style={{ color: '#cad5e2', fontSize: '16px', maxWidth: '640px', margin: '0 auto 28px', lineHeight: 1.6, fontWeight: 300 }}>
            We always welcome motivated students, graduates, and builders across engineering, AI, design, marketing, and operations. Send us your profile and let's explore together.
          </p>
          <button
            onClick={() => handleOpenApply('General Internship Application', 'General')}
            className="btn-secondary-on-dark"
            style={{ padding: '13px 26px', border: 'none', cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: '8px' }}
          >
            <span>Send Open Internship Application</span>
            <ArrowRight size={15} />
          </button>
        </div>
      </div>

      {/* Interactive Career Apply Modal */}
      <CareerApplyModal
        isOpen={applyModalOpen}
        onClose={() => setApplyModalOpen(false)}
        roleTitle={selectedRoleForApply.title}
        department={selectedRoleForApply.dept}
      />
    </div>
  );
};

export default CareersPage;
