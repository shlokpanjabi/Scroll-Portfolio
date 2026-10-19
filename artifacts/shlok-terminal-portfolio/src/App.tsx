import { useEffect, useMemo, useRef, useState, type ReactNode } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import {
  ArrowDown,
  ArrowUpRight,
  Check,
  ChevronRight,
  Circle,
  Command,
  Download,
  Github,
  Linkedin,
  Mail,
  Power,
  Radio,
  Server,
  Terminal,
  Wifi,
} from 'lucide-react';
import { ErrorBoundary } from '@/components/error-boundary';
import { Toaster } from '@/components/ui/toaster';
import { TooltipProvider } from '@/components/ui/tooltip';
import NotFound from '@/pages/not-found';
import { Route, Switch, useLocation, Router as WouterRouter } from 'wouter';

const queryClient = new QueryClient();
const cvPath = '/ShlokNavinPanjabi_CV.pdf';
const cvFileName = 'ShlokNavinPanjabi_CV.pdf';
const headshotPath = '/shlok-headshot.jpg';
const email = 'shlokpanjabi.work@gmail.com';
const githubUrl = 'https://github.com/shlokpanjabi';
const linkedinUrl = 'https://linkedin.com/in/shlok-panjabi';

type RecordEntry = {
  id: string;
  tab: string;
  dates?: string;
  place?: string;
  title: string;
  org?: string;
  points?: string[];
};

const roles: RecordEntry[] = [
  {
    id: '01',
    tab: 'ACCELERCOMM',
    dates: 'JUL 2026 — SEP 2026',
    place: 'SOUTHAMPTON SCIENCE PARK, UK',
    title: 'System Test Intern',
    org: 'AccelerComm',
    points: [
      'Controlled Keysight MXA, EXG and S46 test equipment with Python, PyVISA and SCPI; configured signals in Keysight Signal Studio and tested against 3GPP standards.',
      'Built an NXP LX2160 device under test from hardware setup through firmware, bootloader, kernel, drivers and networking. It is now used as a spare DUT by the team.',
      'Installed and configured Ubuntu test machines, and independently brought an unfamiliar Keysight instrument into use without an existing playbook.',
    ],
  },
  {
    id: '02',
    tab: 'FREELANCE',
    dates: 'AUG 2024 — JUN 2026',
    place: 'INDEPENDENT',
    title: 'Web Developer & Designer',
    org: 'Freelance',
    points: ['Delivered two custom web development projects, managing design and deployment end to end around each client’s requirements.'],
  },
  {
    id: '03',
    tab: 'LETUSBLOOM',
    dates: 'AUG 2024 — MAR 2025',
    place: 'REMOTE',
    title: 'Head of Technology',
    org: 'LetUsBloom',
    points: ['Managed the organisation’s website architecture, ensuring usability and structural integrity across digital initiatives.'],
  },
];

const education: RecordEntry[] = [
  {
    id: '01',
    tab: 'SOUTHAMPTON',
    dates: 'SEP 2025 — PRESENT · EXPECTED 2029',
    place: 'SOUTHAMPTON, UK',
    title: 'University of Southampton',
    org: 'MEng Computer Science (with Artificial Intelligence)',
    points: [
      'Second year of the integrated master’s degree; expected graduation 2029.',
      'Modules include Algorithmics, Data Management, Computer Systems, Networks & Security, Programming I & II and Applied Mathematics I & II.',
    ],
  },
  {
    id: '02',
    tab: 'ONCAMPUS',
    dates: 'SEP 2024 — MAY 2025',
    place: 'SOUTHAMPTON, UK',
    title: 'ONCAMPUS Southampton',
    org: 'University Foundation Programme',
    points: ['Mathematics A*, Physics A*, Skills for Science A*.'],
  },
];

const community: RecordEntry[] = [
  {
    id: '01',
    tab: 'SOTSEF',
    dates: 'MAR 2026',
    place: 'SOUTHAMPTON, UK',
    title: 'Technical Volunteer',
    org: 'SOTSEF Science & Engineering Family Day',
    points: ['Ran technical demonstrations and supervised electronics construction workshops at an event with around 5,000 visitors.'],
  },
  {
    id: '02',
    tab: 'INDIAN SOCIETY',
    title: 'Head of Events',
    org: 'Indian Society',
  },
];

type Project = {
  key: string;
  type: 'SIDE PROJECT' | 'TEAM';
  date: string;
  title: string;
  context: string;
  body: string;
  points: string[];
  stack: string[];
  links: { label: string; href: string; text: string }[];
  accent: string;
};

const projects: Project[] = [
  {
    key: 'PRJ-01',
    type: 'SIDE PROJECT',
    date: 'SEP 2026',
    title: 'ForexMatch',
    context: 'Side project · Agents for Humans hackathon (not submitted)',
    body: 'An AI agent that helps Indian students studying abroad compare forex cards, without letting the model decide the numbers.',
    points: [
      'A deterministic Python engine calculates fees and ranking across 16 cards from 7 providers.',
      'The LLM handles conversation and tool inputs only, not fee calculation or ranking. Cards with unknown fees are ranked at worst case.',
      'Backed by 170+ backend tests.',
    ],
    stack: ['PYTHON', 'STRANDS AGENTS', 'AMAZON BEDROCK', 'FASTAPI', 'POSTGRESQL', 'NEXT.JS / TYPESCRIPT'],
    links: [
      { label: 'Code', href: 'https://github.com/shlokpanjabi/forexmatch', text: 'github.com/shlokpanjabi/forexmatch' },
      { label: 'Demo', href: 'https://forexmatch.vercel.app', text: 'forexmatch.vercel.app' },
    ],
    accent: '#c7ef78',
  },
  {
    key: 'PRJ-02',
    type: 'TEAM',
    date: 'OCT 2026',
    title: 'Payment Shield',
    context: 'IBM Z Datathon 2026 · Team Databaes (6 people)',
    body: 'Team-built real-time detection of authorised push payment (APP) scams, designed so that each flag can be explained.',
    points: [
      'Gradient boosting model (scikit-learn) combined with explainable rules.',
      'Team’s project evaluation: 97.0% recall and 92.4% precision, with sub-millisecond scoring per transaction. These are evaluation results, not real-world guarantees.',
      'Served with FastAPI on IBM LinuxONE (s390x), with a SQLite audit log of every decision.',
    ],
    stack: ['SCIKIT-LEARN', 'FASTAPI', 'IBM LINUXONE', 'SQLITE'],
    links: [],
    accent: '#f3ad6d',
  },
  {
    key: 'PRJ-03',
    type: 'TEAM',
    date: 'AUG 2026',
    title: 'LaunchPilot',
    context: 'HackOnVibe · online team event',
    body: 'An AI marketing agent: give it an App Store or Google Play URL and it analyses the app, then drafts a launch campaign.',
    points: [
      'Analyses the app’s positioning, target audience, SWOT and user reviews.',
      'Generates a multichannel campaign: Discord post, email, social copy, landing page and QR code.',
      'Includes launch and click analytics, on a Next.js frontend.',
    ],
    stack: ['NEXT.JS'],
    links: [{ label: 'Demo', href: 'https://launchpilot-ten.vercel.app', text: 'launchpilot-ten.vercel.app' }],
    accent: '#78d1bb',
  },
];

const projectFilters = ['ALL', 'SIDE PROJECT', 'TEAM'];
const commands = ['home', 'projects', 'experience', 'skills', 'education', 'community', 'contact'];
const commandAliases: Record<string, string> = { volunteering: 'community' };
const skillGroups = [
  ['LANGUAGES', 'PYTHON · JAVA · TYPESCRIPT'],
  ['BACKEND / WEB', 'FASTAPI · NEXT.JS · POSTGRESQL · SQLITE'],
  ['AI', 'SCIKIT-LEARN / GRADIENT BOOSTING · STRANDS AGENTS · AMAZON BEDROCK'],
  ['SYSTEMS / TEST', 'LINUX · EMBEDDED LINUX BRING-UP · PYVISA · SCPI · 3GPP STANDARDS'],
  ['DESIGN', 'FIGMA'],
];
const signalMatrix = [
  { key: 'DEGREE', value: 'MEng CS + AI' },
  { key: 'UPTIME', value: 'MEng · YEAR 2' },
  { key: 'GRADUATING', value: '2029' },
  { key: 'BASE', value: 'SOUTHAMPTON' },
  { key: 'LANGUAGE', value: 'EN / HI / FR' },
  { key: 'SEEKING', value: 'SUMMER 2027', ok: true },
];

function RecordTabs({ label, idPrefix, entries, orgPrefix = '@ ' }: { label: string; idPrefix: string; entries: RecordEntry[]; orgPrefix?: string }) {
  const [activeId, setActiveId] = useState(entries[0].id);
  const active = entries.find((entry) => entry.id === activeId) ?? entries[0];

  return (
    <div className="tp-role-grid">
      <div className="tp-role-tabs" role="tablist" aria-label={label}>
        {entries.map((entry) => (
          <button key={entry.id} id={`${idPrefix}-tab-${entry.id}`} type="button" role="tab" aria-selected={active.id === entry.id} aria-controls={`${idPrefix}-panel`} className={`tp-role-tab ${active.id === entry.id ? 'active' : ''}`} onClick={() => setActiveId(entry.id)} data-testid={`button-${idPrefix}-${entry.id}`}>
            <span>{entry.id} // {entry.tab}</span><ChevronRight size={13} aria-hidden="true" />
          </button>
        ))}
      </div>
      <article className="tp-role-detail" id={`${idPrefix}-panel`} role="tabpanel" aria-labelledby={`${idPrefix}-tab-${active.id}`} data-testid={`card-active-${idPrefix}`}>
        {(active.dates || active.place) && <div className="tp-meta"><span>{active.dates}</span><span>{active.place}</span></div>}
        <h3>{active.title}</h3>{active.org && <span className="tp-company">{orgPrefix}{active.org}</span>}
        {active.points && <ul className="tp-points">{active.points.map((point) => <li key={point}>{point}</li>)}</ul>}
      </article>
    </div>
  );
}

function TerminalPortfolio() {
  const [projectFilter, setProjectFilter] = useState('ALL');
  const [command, setCommand] = useState('');
  const [commandOpen, setCommandOpen] = useState(false);
  const [message, setMessage] = useState('ready');
  const inputRef = useRef<HTMLInputElement>(null);

  const filteredProjects = useMemo(
    () => projectFilter === 'ALL' ? projects : projects.filter((project) => project.type === projectFilter),
    [projectFilter],
  );

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'k') {
        event.preventDefault();
        setCommandOpen(true);
        window.setTimeout(() => inputRef.current?.focus(), 20);
      }
      if (event.key === 'Escape') setCommandOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  const jump = (destination: string) => {
    const typed = destination.toLowerCase().trim().replace(/^\/+/, '');
    const target = commandAliases[typed] ?? typed;
    if (commands.includes(target)) {
      document.getElementById(target)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setMessage(`navigated to /${target}`);
      setCommand('');
      setCommandOpen(false);
    } else if (target === 'help' || !target) {
      setMessage('try /projects /experience /skills /education /community /contact');
    } else {
      setMessage(`command not found: ${destination} — try help`);
    }
  };

  return (
    <main className="tp-shell">
      <div className="tp-wrap">
        <header className="tp-topbar" data-testid="status-topbar">
          <div className="tp-brand"><Terminal size={14} aria-hidden="true" /><span>shlok@portfolio</span><b>:~$</b></div>
          <div className="tp-status">
            <span data-testid="status-online"><Circle className="tp-dot" size={8} fill="currentColor" aria-hidden="true" /> ONLINE</span>
            <span><Wifi size={12} aria-hidden="true" /> SOUTHAMPTON, UK</span>
            <span>v2.026</span>
          </div>
        </header>

        <section className="tp-hero" id="home" data-testid="section-home">
          <p className="tp-kicker">/usr/local/about <span>· interactive profile</span></p>
          <div className="tp-hero-head">
            <img className="tp-avatar" src={headshotPath} alt="Shlok Panjabi, smiling, wearing a light grey t-shirt" width={600} height={600} decoding="async" data-testid="img-headshot" />
            <h1><span className="tp-hero-name">Shlok Navin Panjabi</span><span className="tp-hero-title">Engineer<br /><em>in progress.</em></span></h1>
          </div>
          <p className="tp-hero-copy">Second-year MEng Computer Science (AI) student at Southampton. I build AI-powered products and testable systems, with system test and hardware bring-up experience at AccelerComm.</p>
          <p className="tp-hero-target" data-testid="text-internship-target">Seeking summer 2027 software engineering and AI internships.</p>
          <div className="tp-hero-actions">
            <a className="tp-btn primary" href="#projects" data-testid="link-hero-projects"><ArrowDown size={13} aria-hidden="true" />View projects</a>
            <a className="tp-btn" href={cvPath} download={cvFileName} data-testid="link-hero-cv"><Download size={13} aria-hidden="true" />Download CV</a>
            <a className="tp-btn" href={githubUrl} target="_blank" rel="noreferrer" data-testid="link-hero-github"><Github size={13} aria-hidden="true" />GitHub</a>
          </div>
          <div className="tp-prompt"><strong>shlok@portfolio</strong><i>:</i> <span>~$</span> whoami</div>
          <div className="tp-terminal-line">
            <ChevronRight size={14} className="tp-arrow" aria-hidden="true" /><span>try</span>
            <button type="button" onClick={() => setCommandOpen(true)} data-testid="button-help">help</button>
            <span>or press</span>
            <button type="button" onClick={() => setCommandOpen(true)} data-testid="button-command-shortcut">⌘ K</button>
            <span data-testid="text-command-status">{message}</span>
          </div>
        </section>

        <section className="tp-section" id="projects" data-testid="section-projects">
          <div className="tp-section-label"><b>01 / selected projects</b><span>{filteredProjects.length} artifacts found</span></div>
          <div className="tp-heading"><h2>Selected<br /><em>projects.</em></h2><p>Recent AI builds: one side project and two team events. Team results are labelled as team results.</p></div>
          <div className="tp-project-toolbar" role="group" aria-label="Filter projects">
            {projectFilters.map((filter) => (
              <button key={filter} type="button" aria-pressed={projectFilter === filter} className={`tp-filter ${projectFilter === filter ? 'active' : ''}`} onClick={() => setProjectFilter(filter)} data-testid={`button-filter-${filter.toLowerCase().replace(' ', '-')}`}>{filter}</button>
            ))}
          </div>
          <div className="tp-projects">
            {filteredProjects.map((project) => (
              <article className="tp-project" key={project.key} data-testid={`card-project-${project.key}`}>
                <div>
                  <div className="tp-project-top"><span>{project.key} · {project.date}</span><span style={{ color: project.accent }}>{project.type}</span></div>
                  <h3>{project.title}</h3>
                  <p className="tp-project-context">{project.context}</p>
                  <p>{project.body}</p>
                  <ul className="tp-points">{project.points.map((point) => <li key={point}>{point}</li>)}</ul>
                </div>
                <div>
                  <div className="tp-stack">{project.stack.map((item) => <span key={item}>{item}</span>)}</div>
                  {project.links.length > 0 && (
                    <div className="tp-project-links">
                      {project.links.map((link) => (
                        <a key={link.href} href={link.href} target="_blank" rel="noreferrer" aria-label={`${project.title} ${link.label.toLowerCase()}: ${link.text} (opens in a new tab)`} data-testid={`link-${project.key}-${link.label.toLowerCase()}`}>
                          <b>{link.label}</b><span>{link.text}</span><ArrowUpRight size={13} style={{ color: project.accent }} aria-hidden="true" />
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="tp-section" id="experience" data-testid="section-experience">
          <div className="tp-section-label"><b>02 / experience</b><span>processes exited 0</span></div>
          <div className="tp-heading"><h2>Experience<em>.</em></h2><p>Industry system test work, freelance web delivery and a technical lead role.</p></div>
          <RecordTabs label="Experience roles" idPrefix="role" entries={roles} />
        </section>

        <section className="tp-section" id="skills" data-testid="section-skills">
          <div className="tp-section-label"><b>03 / technical skills</b><span>stack loaded</span></div>
          <div className="tp-heading"><h2>Technical<br /><em>skills.</em></h2><p>Tools I have used in the projects and roles on this page.</p></div>
          <div className="tp-system">
            <div className="tp-console">
              <h3><Server size={13} aria-hidden="true" /> SKILL_GROUPS</h3>
              {skillGroups.map(([name, tools]) => (
                <div className="tp-console-row" key={name}><b>{name}</b><span>{tools}</span></div>
              ))}
            </div>
            <div className="tp-matrix">
              <h3><Radio size={13} aria-hidden="true" /> SIGNAL_MATRIX</h3>
              <div className="tp-matrix-grid">
                {signalMatrix.map(({ key, value, ok }) => (
                  <div className="tp-matrix-cell" key={key} data-testid={`status-matrix-${key.toLowerCase()}`}><small>{key}</small><strong className={ok ? 'ok' : ''}>{ok && <Check size={12} aria-hidden="true" />} {value}</strong></div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="tp-section" id="education" data-testid="section-education">
          <div className="tp-section-label"><b>04 / education</b><span>foundations</span></div>
          <div className="tp-heading"><h2>Education<em>.</em></h2><p>An integrated MEng in Computer Science with AI, after a foundation year in Southampton.</p></div>
          <RecordTabs label="Education" idPrefix="education" entries={education} orgPrefix="" />
        </section>

        <section className="tp-section" id="community" data-testid="section-community">
          <div className="tp-section-label"><b>05 / community</b><span>community signal</span></div>
          <div className="tp-heading"><h2>Community<em>.</em></h2><p>Technical outreach and student society work.</p></div>
          <RecordTabs label="Community roles" idPrefix="community" entries={community} />
        </section>

        <section className="tp-contact" id="contact" data-testid="section-contact">
          <div className="tp-section-label"><b>06 / contact</b><span>connection available</span></div>
          <h2>Send a signal.<br /><span>Make it useful.</span></h2>
          <p className="tp-contact-copy">Southampton, UK<br />I’m looking for summer 2027 software engineering and AI internships and would welcome a conversation. Email is the quickest way to reach me.</p>
          <div className="tp-contact-links">
            <a className="tp-link" href={`mailto:${email}`} data-testid="link-email"><span>{email}</span><Mail size={15} aria-hidden="true" /></a>
            <a className="tp-link" href={linkedinUrl} target="_blank" rel="noreferrer" data-testid="link-linkedin"><span>linkedin.com/in/shlok-panjabi</span><Linkedin size={15} aria-hidden="true" /></a>
            <a className="tp-link" href={githubUrl} target="_blank" rel="noreferrer" data-testid="link-github"><span>github.com/shlokpanjabi</span><Github size={15} aria-hidden="true" /></a>
            <a className="tp-link" href={cvPath} download={cvFileName} data-testid="link-cv"><span>Download CV</span><Download size={15} aria-hidden="true" /></a>
          </div>
        </section>

        <footer className="tp-footer">
          <small>© 2026 SHLOK NAVIN PANJABI · <Power size={11} aria-hidden="true" /> SESSION CLOSED CLEANLY</small>
          <div className="tp-footer-links"><a href="#home" data-testid="link-top">TOP</a><a href={`mailto:${email}`} data-testid="link-footer-email">EMAIL</a></div>
        </footer>
      </div>

      {commandOpen && (
        <div className="tp-command" role="dialog" aria-modal="true" aria-label="Command palette" onClick={(event) => event.target === event.currentTarget && setCommandOpen(false)} data-testid="command-palette">
          <div className="tp-command-box">
            <form onSubmit={(event) => { event.preventDefault(); jump(command); }}>
              <Command size={15} className="tp-arrow" aria-hidden="true" />
              <input ref={inputRef} autoFocus value={command} onChange={(event) => setCommand(event.target.value)} placeholder="type a command: projects" aria-label="Portfolio command" data-testid="input-command" />
              <span style={{ color: 'var(--terminal-muted)', fontSize: 11 }}>ESC</span>
            </form>
            <div className="tp-command-help">
              {commands.map((item) => <button type="button" key={item} onClick={() => jump(item)} data-testid={`button-command-${item}`}>/{item}</button>)}
            </div>
          </div>
        </div>
      )}
    </main>
  );
}

function Router() {
  return (
    <RoutedErrorBoundary>
      <Switch>
        <Route path="/" component={TerminalPortfolio} />
        <Route component={NotFound} />
      </Switch>
    </RoutedErrorBoundary>
  );
}

function RoutedErrorBoundary({ children }: { children: ReactNode }) {
  const [location] = useLocation();
  return <ErrorBoundary resetKey={location}>{children}</ErrorBoundary>;
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, '')}>
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
