import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { AgentTrace, type TraceSpan } from './ui/agent-trace';

type WorkflowStep = TraceSpan & { explanation: string };
const examples = [
  {
    id: 'enquiries', name: 'Sales enquiries', outcome: 'A qualified enquiry, ready for your team.',
    description: 'Connect your contact form to your CRM so your team can spend less time sorting enquiries and more time talking to customers.',
    steps: [
      ['Receive enquiry', 'Form received', 'Capture the customer’s request from your website, with their contact details and consent.'],
      ['Read the request', 'Needs identified', 'Identify the service they need and summarise their requirements. Flag missing details instead of guessing.'],
      ['Check your CRM', 'Record matched', 'Check for an existing customer record to avoid creating duplicates.'],
      ['Route to the team', 'Owner suggested', 'Suggest the right person based on your services, territories and assignment rules.'],
      ['Prepare a reply', 'Draft prepared', 'Draft a response using your approved information. A team member reviews it before anything is sent.'],
      ['Queue for review', 'Ready for review', 'Give the assigned person the enquiry, summary and draft together. Your team decides what happens next.'],
    ],
  },
  {
    id: 'documents', name: 'Invoice review', outcome: 'An invoice checked and queued for approval.',
    description: 'Turn incoming documents into structured records, while keeping exceptions and payment approval with your finance team.',
    steps: [
      ['Receive invoice', 'File received', 'Bring an invoice from your approved inbox or upload flow into one review queue.'],
      ['Extract the details', 'Fields extracted', 'Read supplier, line items, totals and due date. Flag low-confidence fields for a person to check.'],
      ['Match the order', 'Order checked', 'Compare the invoice with the purchase order in your business system.'],
      ['Check exceptions', 'Checks recorded', 'Check for duplicates and mismatched amounts against your own review rules.'],
      ['Prepare a summary', 'Summary prepared', 'Show the original document alongside extracted fields and any differences.'],
      ['Queue for approval', 'Awaiting approval', 'Send the record to your finance team for a decision. The workflow does not authorise or release a payment.'],
    ],
  },
  {
    id: 'support', name: 'Support requests', outcome: 'A support request with context and a suggested reply.',
    description: 'Connect your help desk and knowledge base to prepare useful responses, with a clear handoff when a person needs to decide.',
    steps: [
      ['Receive request', 'Ticket received', 'Capture the customer’s question from your existing help desk.'],
      ['Understand the issue', 'Topic identified', 'Identify the issue and urgency, and flag requests that need specialist attention.'],
      ['Find relevant guidance', 'Sources found', 'Search your approved knowledge base for current instructions and relevant policies.'],
      ['Draft a response', 'Draft prepared', 'Prepare a suggested reply grounded in those sources, without inventing an answer when guidance is missing.'],
      ['Check the handoff', 'Owner identified', 'Route sensitive or uncertain requests to the appropriate team member.'],
      ['Queue for review', 'Ready for review', 'Present the sources and draft to your support team. They review and send the response through the help desk.'],
    ],
  },
];

export function AgentTraceSection() {
  const [active, setActive] = useState(0);
  const [selectedId, setSelectedId] = useState('step-0');
  const example = examples[active];
  // Illustrative playback positions, not measured processing times or a live integration.
  const steps = React.useMemo<WorkflowStep[]>(() => example.steps.map(([label, detail, explanation], i) => ({
    id: `step-${i}`, label, detail, explanation,
    start: i * 1600, end: (i + 1) * 1600,
    kind: i === 1 || i === 4 ? 'model' : 'tool',
  })), [example]);
  const selected = steps.find(step => step.id === selectedId) ?? steps[0];

  return (
    <section className="home-agent-section" aria-labelledby="agent-trace-heading">
      <div className="home-agent-inner">
        <div className="home-agent-intro">
          <h2 id="agent-trace-heading">Less manual work. More room to grow.</h2>
          <p>We build AI workflows around your business, connecting the tools you already use and keeping your team in control of the decisions.</p>
        </div>
        <div className="home-workflow-choices" role="group" aria-label="Choose a workflow example">
          {examples.map((item, index) => <button key={item.id} type="button" aria-pressed={active === index}
            onClick={() => { setActive(index); setSelectedId('step-0'); }}>{item.name}</button>)}
        </div>
        <div className="home-workflow-summary">
          <h3>{example.outcome}</h3>
          <p>{example.description}</p>
        </div>
        <div className="home-agent-example">
          <span>Illustrative workflow</span><span>6 steps · Human review</span>
        </div>
        <AgentTrace key={example.id} spans={steps} duration={9600} runId={example.name}
          autoPlay={false} loop={false} defaultTime={9600} labelWidth={210} rowHeight={44}
          showTokens={false} showRuler={false} presentation="workflow"
          onSpanSelect={step => setSelectedId(step.id)} />
        <div className="home-agent-detail home-workflow-detail" aria-live="polite" aria-atomic="true">
          <strong>{selected.label}</strong><span>{selected.explanation}</span>
        </div>
        <p className="home-workflow-note">Select a step for details, or play through the example. Playback is illustrative; timing and integrations depend on your project.</p>
        <div className="home-agent-links">
          <Link to="/start-a-project">Discuss your workflow <ArrowRight size={16} aria-hidden="true" /></Link>
          <Link to="/services/ai">Explore our AI services <ArrowRight size={16} aria-hidden="true" /></Link>
        </div>
      </div>
    </section>
  );
}
