// Project calendar. Update at the end of every milestone:
// mark finished tasks with `done: true`, move `status.milestone` forward
// and rewrite `status.summary`.

export const status = {
  updated: '12 Oct 2026',
  milestone: 2,
  summary: 'Elaboration is done. Requirements, use cases, the domain model and the architecture are finished and the architecture has been validated. Next is the MS2 presentation.',
};

export const entries = [
  {
    phase: 'Inception',
    items: [
      { title: 'Project Website', from: '22 Sep', to: '29 Sep', done: true },
      { title: 'GitHub Organization / Repository', from: '22 Sep', to: '29 Sep', done: true },
      { title: 'Project Calendar', from: '22 Sep', to: '29 Sep', done: true },
      { title: 'Communication Plan', from: '22 Sep', to: '29 Sep', done: true },
      { title: 'Context & Problem', from: '22 Sep', to: '29 Sep', done: true },
      { title: 'Goals & Task Planning', from: '22 Sep', to: '29 Sep', done: true },
      { title: 'Expected Results', from: '22 Sep', to: '29 Sep', done: true },
      { title: 'Related Work / State of the Art', from: '22 Sep', to: '29 Sep', done: true },
    ],
  },
  { milestone: 'MS1', title: 'Presentation', from: '29 Sep' },
  {
    phase: 'Elaboration',
    items: [
      { title: 'Requirements Assessment', from: '30 Sep', to: '13 Oct', done: true },
      { title: 'Use Cases', from: '30 Sep', to: '13 Oct', done: true },
      { title: 'System Architecture', from: '30 Sep', to: '13 Oct', done: true },
      { title: 'Data Model Definition', from: '30 Sep', to: '13 Oct', done: true },
      { title: 'Architecture Validation', from: '30 Sep', to: '13 Oct', done: true },
    ],
  },
  { milestone: 'MS2', title: 'Lifecycle Architecture Presentation / Validation', from: '13 Oct', to: '20 Oct' },
  {
    phase: 'Construction',
    items: [
      { title: 'Accessibility Requirements & User Interface Design', from: '14 Oct', to: '03 Nov' },
      { title: 'Interface Prototype & Usability/Accessibility Evaluation', from: '14 Oct', to: '03 Nov' },
    ],
  },
  { milestone: 'MS3', title: 'Digital Accessibility and Usability', from: '03 Nov', to: '10 Nov' },
  {
    phase: 'Construction',
    items: [
      { title: 'Existing LLM Integration', from: '04 Nov', to: '24 Nov' },
      { title: 'Basic Open5GS Knowledge Base & RAG', from: '04 Nov', to: '24 Nov' },
      { title: 'Basic 5G Network Data Model', from: '04 Nov', to: '24 Nov' },
      { title: 'User Intent Processing', from: '04 Nov', to: '24 Nov' },
      { title: 'Basic 5G Deployment Planner', from: '25 Nov', to: '07 Dec' },
      { title: 'Open5GS Configuration Generation', from: '25 Nov', to: '07 Dec' },
      { title: 'Basic Configuration Validation', from: '08 Dec', to: '14 Dec' },
      { title: 'Basic Feedback & Error Handling', from: '08 Dec', to: '14 Dec' },
      { title: 'Minimal API & User Interface', from: '08 Dec', to: '14 Dec' },
      { title: 'Basic Logging', from: '08 Dec', to: '14 Dec' },
      { title: 'MVP Integration & Testing', from: '08 Dec', to: '15 Dec' },
    ],
  },
  { milestone: 'MS4', title: 'MVP Presentation with Supervisors & Peer Evaluation', from: '15 Dec', to: '16 Dec' },
];
