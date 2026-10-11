import React from 'react';
import { ArrowRight, BarChart3, Headphones, Megaphone, Settings2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const teams = [
  { name: 'Operations', icon: Settings2, task: 'Route exceptions, approvals, and SLA escalations', accent: '#533afd' },
  { name: 'Revenue', icon: BarChart3, task: 'Enrich enterprise accounts and sync bi-directional ERPs', accent: '#00d4ff' },
  { name: 'Customer', icon: Headphones, task: 'Triage priority tickets with live telemetry context', accent: '#7952ff' },
  { name: 'Marketing', icon: Megaphone, task: 'Coordinate multi-channel campaigns and analytics attribution', accent: '#ea2261' },
];

export function TeamWorkspaceCards() {
  return (
    <section className="section-pad team-workspace-section" aria-labelledby="team-workspace-title">
      <div className="container team-workspace-grid">
        <div>
          <h2 id="team-workspace-title" className="display-lg">
            Less busywork.<br />
            More room for your team.
          </h2>
          <p className="body-md" style={{ marginTop: '16px', marginBottom: '28px' }}>
            Give each team workflows that fit the way they work, with shared permissions, connected data, and a verifiable record of every single autonomous action.
          </p>
          <Link to="/solutions/automate-business-workflows" className="btn-secondary">
            <span>Explore team workflows</span>
            <ArrowRight size={15} aria-hidden="true" />
          </Link>
        </div>
        <div className="team-texture">
          <div className="team-card-stack">
            {teams.map((team) => {
              const Icon = team.icon;
              return (
                <article 
                  className="team-mini-card" 
                  key={team.name} 
                  style={{ '--team-accent': team.accent } as React.CSSProperties}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--color-ink)' }}>
                    <div 
                      style={{ 
                        width: 30, 
                        height: 30, 
                        borderRadius: 'var(--radius-sm)', 
                        backgroundColor: 'var(--color-canvas-soft)', 
                        border: '1px solid var(--color-hairline)', 
                        display: 'grid', 
                        placeItems: 'center', 
                        color: team.accent 
                      }}
                    >
                      <Icon size={16} aria-hidden="true" />
                    </div>
                    <strong style={{ fontSize: '15px' }}>{team.name}</strong>
                  </div>
                  <p>{team.task}</p>
                  <span>
                    <span 
                      style={{ 
                        width: 6, 
                        height: 6, 
                        borderRadius: '50%', 
                        backgroundColor: '#00d924', 
                        display: 'inline-block' 
                      }} 
                      aria-hidden="true" 
                    />
                    Governed workspace
                  </span>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default TeamWorkspaceCards;
