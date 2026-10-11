import React, { useState } from 'react';
import { Check, ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';

export interface WorkflowStage {
  id: string;
  label: string;
  description: string;
  detail: string;
  signals: string[];
}

const defaultStages: WorkflowStage[] = [
  { id: 'deterministic', label: 'Deterministic', description: 'Fixed rules execute the same way every time.', detail: 'Best for stable, high-volume processes where accuracy, speed, and auditability matter most.', signals: ['Typed inputs', 'Predictable outputs', 'Complete audit trail'] },
  { id: 'assisted', label: 'Deterministic + AI', description: 'AI handles one bounded task inside a governed workflow.', detail: 'Use AI for classification, extraction, or summarization while deterministic steps control execution.', signals: ['Bounded reasoning', 'Schema validation', 'Human escalation'] },
  { id: 'agent', label: 'Deterministic + agent', description: 'An agent coordinates approved tools for multi-step work.', detail: 'The agent plans within explicit permissions, then hands validated actions to reliable system workflows.', signals: ['Approved toolset', 'Policy gates', 'Recoverable actions'] },
  { id: 'agentic', label: 'Fully agentic', description: 'Agents adapt plans across tools with review at key moments.', detail: 'Reserve higher autonomy for work with strong observability, reversible actions, and clear ownership.', signals: ['Adaptive planning', 'Continuous evaluation', 'Operator control'] },
];

export function WorkflowSpectrum({ stages = defaultStages }: { stages?: WorkflowStage[] }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = stages[activeIndex];
  const select = (index: number) => setActiveIndex(Math.max(0, Math.min(stages.length - 1, index)));

  return (
    <section className="section-pad workflow-spectrum" aria-labelledby="workflow-spectrum-title">
      <div className="container">
        <div className="spectrum-heading">

          <h2 id="workflow-spectrum-title" className="display-lg">Choose the right level of intelligence for every workflow.</h2>
          <p className="body-lg">Move from fixed execution to agentic work without giving up governance, visibility, or control.</p>
        </div>

        <div className="spectrum-controls" aria-label="Workflow autonomy stages">
          <button type="button" className="spectrum-arrow" onClick={() => select(activeIndex - 1)} disabled={activeIndex === 0} aria-label="Previous stage"><ChevronLeft size={18} /></button>
          <div className="spectrum-track" aria-hidden="true"><span style={{ width: `${(activeIndex / Math.max(stages.length - 1, 1)) * 100}%` }} /></div>
          <button type="button" className="spectrum-arrow" onClick={() => select(activeIndex + 1)} disabled={activeIndex === stages.length - 1} aria-label="Next stage"><ChevronRight size={18} /></button>
        </div>

        <div className="spectrum-tabs" role="tablist" aria-label="Select an automation stage">
          {stages.map((stage, index) => (
            <button key={stage.id} id={`spectrum-tab-${stage.id}`} type="button" role="tab" aria-selected={index === activeIndex} aria-controls="spectrum-detail" tabIndex={index === activeIndex ? 0 : -1} className={`spectrum-tab${index === activeIndex ? ' active' : ''}`} onClick={() => select(index)} onKeyDown={(event) => {
              if (event.key === 'ArrowRight') { event.preventDefault(); select((activeIndex + 1) % stages.length); }
              if (event.key === 'ArrowLeft') { event.preventDefault(); select((activeIndex - 1 + stages.length) % stages.length); }
            }}>
              <strong>{stage.label}</strong><span>{stage.description}</span>
            </button>
          ))}
        </div>

        <div id="spectrum-detail" role="tabpanel" aria-labelledby={`spectrum-tab-${active.id}`} className="spectrum-detail">
          <div><span className="step-num">0{activeIndex + 1}</span><h3 className="display-md">{active.label}</h3><p>{active.detail}</p></div>
          <ul>{active.signals.map((signal) => <li key={signal}><Check size={16} /> {signal}</li>)}</ul>
        </div>
      </div>
    </section>
  );
}
