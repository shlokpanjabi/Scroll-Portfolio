import { useEffect, useMemo, useRef, useState, type ReactNode } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import {
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

const roles = [
  {
    id: '01',
    dates: 'JUN 2026 — NOW',
    title: 'System Test Summer Intern',
    company: 'AccelerComm',
    place: 'Southampton Science Park',
    body: 'Writing Python test automation for 5G/LTE systems, controlling Keysight EXG/MXA RF equipment through PyVISA and SCPI.',
  },
  {
    id: '02',
    dates: 'AUG 2024 — MAR 2025',
    title: 'Head of Technology',
    company: 'LetUsBloom',
    place: 'REMOTE',
    body: 'Managed organisation website architecture, ensuring usability and structural integrity across digital initiatives.',
  },
  {
    id: '03',
    dates: 'AUG 2024 — NOW',
    title: 'Web Developer & Designer',
    company: 'FREELANCE',
    place: 'INDEPENDENT',
    body: 'Delivered custom web projects end-to-end, managing design, implementation and deployment around specific client requirements.',
  },
];

const projects = [
  {
    key: 'PRJ-01',
    type: 'SYSTEMS',
    title: 'Java Training School Sim',
    body: 'A school management simulation designed around clear domain objects and robust file serialization for student and staff data.',
    stack: ['JAVA', 'OOD', 'SERIALIZATION'],
    accent: '#c7ef78',
  },
  {
    key: 'PRJ-02',
    type: 'INTERFACE',
    title: 'JavaFX Noughts & Crosses',
    body: 'A GUI game built with MVC and JavaFX UI binding, keeping game state and the interface in sync through responsive interactions.',
    stack: ['JAVAFX', 'MVC', 'UI BINDING'],
    accent: '#f3ad6d',
  },
];

const commands = ['home', 'experience', 'projects', 'skills', 'education', 'volunteering', 'contact'];
const capabilityRows = [
  ['LANGUAGES', '78%', 'JAVA · PYTHON · C · SQL'],
  ['AI / ML', '56%', 'TENSORFLOW · KERAS · PCA'],
  ['WEB / DESIGN', '68%', 'FIGMA · WIX · HTML/CSS'],
  ['SYSTEMS', '73%', 'UNIX · GIT · PYVISA'],
];

function TerminalPortfolio() {
  const [activeRole, setActiveRole] = useState('01');
  const [projectFilter, setProjectFilter] = useState('ALL');
  const [command, setCommand] = useState('');
  const [commandOpen, setCommandOpen] = useState(false);
  const [message, setMessage] = useState('ready');
  const [systemReady, setSystemReady] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const filteredProjects = useMemo(
    () => projectFilter === 'ALL' ? projects : projects.filter((project) => project.type === projectFilter),
    [projectFilter],
  );

  useEffect(() => {
    const timer = window.setTimeout(() => setSystemReady(true), 280);
    return () => window.clearTimeout(timer);
  }, []);

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

  useEffect(() => {
    document.title = 'Shlok Navin Panjabi — Engineer in progress';
    const description = 'Portfolio of Shlok Navin Panjabi, a Southampton-based MEng Computer Science student building reliable systems and thoughtful interfaces.';
    let tag = document.querySelector('meta[name="description"]');
    if (!tag) {
      tag = document.createElement('meta');
      tag.setAttribute('name', 'description');
      document.head.appendChild(tag);
    }
    tag.setAttribute('content', description);
  }, []);

  const jump = (destination: string) => {
    const target = destination.toLowerCase().trim().replace(/^\/+/, '');
    if (commands.includes(target)) {
      document.getElementById(target)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setMessage(`navigated to /${target}`);
      setCommand('');
      setCommandOpen(false);
    } else if (target === 'help' || !target) {
      setMessage('try /home /experience /projects /skills /education /contact');
    } else {
      setMessage(`command not found: ${destination} — try help`);
    }
  };

  const active = roles.find((role) => role.id === activeRole) ?? roles[0];

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
          <h1>Engineer<br /><em>in progress.</em></h1>
          <p className="tp-hero-copy">Computer science student building reliable systems, considered interfaces and the useful space between the two.</p>
          <div className="tp-prompt"><strong>shlok@portfolio</strong><i>:</i> <span>~$</span> whoami</div>
          <div className="tp-terminal-line">
            <ChevronRight size={14} className="tp-arrow" aria-hidden="true" /><span>try</span>
            <button type="button" onClick={() => setCommandOpen(true)} data-testid="button-help">help</button>
            <span>or press</span>
            <button type="button" onClick={() => setCommandOpen(true)} data-testid="button-command-shortcut">⌘ K</button>
            <span data-testid="text-command-status">{message}</span>
          </div>
        </section>

        <section className="tp-section" id="experience" data-testid="section-experience">
          <div className="tp-section-label"><b>01 / experience</b><span>processes running</span></div>
          <div className="tp-heading"><h2>Things I’ve<br /><em>shipped.</em></h2><p>Roles, experiments and the practical work of making technical ideas hold together.</p></div>
          <div className="tp-role-grid">
            <div className="tp-role-tabs" role="tablist" aria-label="Experience roles">
              {roles.map((role) => (
                <button key={role.id} type="button" role="tab" aria-selected={activeRole === role.id} className={`tp-role-tab ${activeRole === role.id ? 'active' : ''}`} onClick={() => setActiveRole(role.id)} data-testid={`button-role-${role.id}`}>
                  <span>{role.id} // {role.company}</span><ChevronRight size={13} aria-hidden="true" />
                </button>
              ))}
            </div>
            <article className="tp-role-detail" data-testid="card-active-role">
              <div className="tp-meta"><span>{active.dates}</span><span>{active.place}</span></div>
              <h3>{active.title}</h3><span className="tp-company">@ {active.company}</span>
              <p>{active.body}</p>
            </article>
          </div>
        </section>

        <section className="tp-section" id="projects" data-testid="section-projects">
          <div className="tp-section-label"><b>02 / projects</b><span>{filteredProjects.length} artifacts found</span></div>
          <div className="tp-heading"><h2>Small systems.<br /><em>Clear intent.</em></h2><p>A few places where structure, interaction and curiosity met in the same codebase.</p></div>
          <div className="tp-project-toolbar" role="group" aria-label="Filter projects">
            {['ALL', 'SYSTEMS', 'INTERFACE'].map((filter) => (
              <button key={filter} type="button" className={`tp-filter ${projectFilter === filter ? 'active' : ''}`} onClick={() => setProjectFilter(filter)} data-testid={`button-filter-${filter.toLowerCase()}`}>{filter}</button>
            ))}
          </div>
          <div className="tp-projects">
            {filteredProjects.map((project) => (
              <article className="tp-project" key={project.key} data-testid={`card-project-${project.key}`}>
                <div>
                  <div className="tp-project-top"><span>{project.key} · {project.type}</span><ArrowUpRight size={15} style={{ color: project.accent }} aria-hidden="true" /></div>
                  <h3>{project.title}</h3><p>{project.body}</p>
                </div>
                <div className="tp-stack">{project.stack.map((item) => <span key={item}>{item}</span>)}</div>
              </article>
            ))}
          </div>
        </section>

        <section className="tp-section" id="skills" data-testid="section-skills">
          <div className="tp-section-label"><b>03 / system status</b><span>last scan: now</span></div>
          <div className="tp-heading"><h2>What’s in<br /><em>the stack.</em></h2><p>Tools are only useful when they help the thinking stay legible.</p></div>
          <div className="tp-system">
            <div className="tp-console">
              <h3><Server size={13} aria-hidden="true" /> CAPABILITY_LOAD</h3>
              {capabilityRows.map(([name, load, tools]) => (
                <div className="tp-console-row" key={name}><div><b>{name}</b><div className="tp-bar"><i style={{ width: systemReady ? load : '0%' }} /></div></div><span>{tools}</span></div>
              ))}
            </div>
            <div className="tp-matrix">
              <h3><Radio size={13} aria-hidden="true" /> SIGNAL_MATRIX</h3>
              <div className="tp-matrix-grid">
                {[['CURRENT_ROLE', 'SYSTEM TEST'], ['BASE', 'SOUTHAMPTON'], ['LANGUAGE', 'EN / HI / FR'], ['UPTIME', 'MEng · YEAR 1'], ['MODE', 'CURIOUS'], ['STATUS', 'AVAILABLE']].map(([key, value], index) => (
                  <div className="tp-matrix-cell" key={key} data-testid={`status-matrix-${key.toLowerCase()}`}><small>{key}</small><strong className={index === 5 ? 'ok' : ''}>{index === 5 && <Check size={12} aria-hidden="true" />} {value}</strong></div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="tp-section" id="education" data-testid="section-education">
          <div className="tp-section-label"><b>04 / education</b><span>foundations</span></div>
          <div className="tp-heading"><h2>Learning the<br /><em>foundations.</em></h2><p>Formal study gives the questions somewhere rigorous to start.</p></div>
          <div className="tp-role-grid">
            <div className="tp-role-tabs"><div className="tp-role-tab active">2025 — NOW</div><div className="tp-role-tab">2024 — 2025</div></div>
            <article className="tp-role-detail">
              <div className="tp-meta"><span>SEP 2025 — PRESENT</span><span>UNITED KINGDOM</span></div>
              <h3>University of Southampton</h3><span className="tp-company">MEng Computer Science (with Artificial Intelligence)</span>
              <p>Average: 61% — on track for a 2:1. Algorithmics, data management, computer systems, networks &amp; security, programming and applied mathematics.</p>
            </article>
          </div>
        </section>

        <section className="tp-section" id="volunteering" data-testid="section-volunteering">
          <div className="tp-section-label"><b>05 / volunteering</b><span>community signal</span></div>
          <div className="tp-heading"><h2>Useful work,<br /><em>shared freely.</em></h2><p>Technology is more interesting when it helps people participate, connect and make something of their own.</p></div>
          <div className="tp-role-grid">
            <div className="tp-role-tabs"><div className="tp-role-tab active">LETUSBLOOM</div><div className="tp-role-tab">REMOTE</div></div>
            <article className="tp-role-detail">
              <div className="tp-meta"><span>AUG 2024 — MAR 2025</span><span>REMOTE</span></div>
              <h3>Head of Technology</h3><span className="tp-company">@ LetUsBloom</span>
              <p>Managed organisation website architecture, ensuring usability and structural integrity across digital initiatives. A practical contribution to a community-led organisation.</p>
            </article>
          </div>
        </section>

        <section className="tp-contact" id="contact" data-testid="section-contact">
          <div className="tp-section-label"><b>06 / contact</b><span>connection available</span></div>
          <h2>Send a signal.<br /><span>Make it useful.</span></h2>
          <p className="tp-contact-copy">Southampton, UK<br />Open to conversations about software, AI and the work between the two.</p>
          <div className="tp-contact-links">
            <a className="tp-link" href="mailto:shlokpanjabi.work@gmail.com" data-testid="link-email"><span>shlokpanjabi.work@gmail.com</span><Mail size={15} aria-hidden="true" /></a>
            <a className="tp-link" href="https://linkedin.com/in/shlok-panjabi" target="_blank" rel="noreferrer" data-testid="link-linkedin"><span>linkedin.com/in/shlok-panjabi</span><Linkedin size={15} aria-hidden="true" /></a>
            <a className="tp-link" href="https://github.com/shlokpanjabiwork" target="_blank" rel="noreferrer" data-testid="link-github"><span>github.com/shlokpanjabiwork</span><Github size={15} aria-hidden="true" /></a>
            <a className="tp-link" href={cvPath} download="ShlokNavinPanjabi_CV.pdf" data-testid="link-cv"><span>download_cv.pdf</span><Download size={15} aria-hidden="true" /></a>
          </div>
        </section>

        <footer className="tp-footer">
          <small>© 2026 SHLOK NAVIN PANJABI · <Power size={11} aria-hidden="true" /> SESSION CLOSED CLEANLY</small>
          <div className="tp-footer-links"><a href="#home" data-testid="link-top">TOP</a><a href="mailto:shlokpanjabi.work@gmail.com" data-testid="link-footer-email">EMAIL</a></div>
        </footer>
      </div>

      {commandOpen && (
        <div className="tp-command" role="dialog" aria-modal="true" aria-label="Command palette" onClick={(event) => event.target === event.currentTarget && setCommandOpen(false)} data-testid="command-palette">
          <div className="tp-command-box">
            <form onSubmit={(event) => { event.preventDefault(); jump(command); }}>
              <Command size={15} className="tp-arrow" aria-hidden="true" />
              <input ref={inputRef} autoFocus value={command} onChange={(event) => setCommand(event.target.value)} placeholder="type a command: experience" aria-label="Portfolio command" data-testid="input-command" />
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
