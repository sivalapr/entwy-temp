import React from 'react';
import { useNavigate } from 'react-router-dom';
import { HeroRevamped } from '../components/HeroRevamped';
import { ServicesShowcase } from '../components/ServicesShowcase';
import BlockFeature from '../components/ui/block-feature';
import { ExpandableFeaturePanel } from '../components/ExpandableFeaturePanel';
import Timeline from '../components/ui/timeline';
import { InsightsEditorial } from '../components/InsightsEditorial';
import { CtaBandLight } from '../components/CtaBandLight';
import { CaseStudy } from '../types/sitemap';
import '../home.css';

interface HomePageProps {
  onOpenProjectModal?: () => void;
  onSelectCaseStudy?: (cs: CaseStudy) => void;
}

export const HomePage: React.FC<HomePageProps> = () => {
  const navigate = useNavigate();
  const startProject = () => {
    navigate('/start-a-project');
  };

  return (
    <div className="home-page">
      <HeroRevamped />
      <ServicesShowcase onOpenProjectModal={startProject} />
      <BlockFeature />
      <ExpandableFeaturePanel />
      <Timeline
        title="How we build your product"
        periodLabel="Sprint 01 → Production"
        imageUrl="/images/timeline/sprint-01-kickoff.webp"
        imageAlt="Collaborative sprint planning, sticky notes, team discussion, and project kickoff"
        activeColor="var(--color-expo-purple, #4630EB)"
        backgroundColor="var(--color-canvas-soft, #fafafa)"
        textColor="var(--color-ink, #171717)"
        mutedTextColor="var(--color-body, #60646c)"
      />
      <InsightsEditorial />
      <CtaBandLight onOpenProjectModal={startProject} />
    </div>
  );
};

export default HomePage;
