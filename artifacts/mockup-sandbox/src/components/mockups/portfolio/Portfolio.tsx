import { useState } from "react";
import {
  ArrowDownToLine,
  ArrowUpRight,
  ChevronRight,
  Download,
  Github,
  Linkedin,
  Mail,
  Menu,
  Terminal,
  X,
} from "lucide-react";

const cvPath = "/__mockup/ShlokNavinPanjabi_CV.pdf";

const sections = [
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
  { id: "education", label: "Education" },
  { id: "volunteering", label: "Volunteering" },
  { id: "contact", label: "Contact" },
];

const experience = [
  {
    dates: "Jun 2026 — Present",
    title: "System Test Summer Intern",
    company: "AccelerComm",
    place: "Southampton Science Park",
    body: "Writing Python test automation from scratch for 5G/LTE systems, controlling Keysight EXG/MXA RF equipment through PyVISA and SCPI.",
  },
  {
    dates: "Aug 2024 — Mar 2025",
    title: "Head of Technology",
    company: "LetUsBloom",
    place: "Remote",
    body: "Managed organisation website architecture, ensuring usability and structural integrity across digital initiatives.",
  },
  {
    dates: "Aug 2024 — Present",
    title: "Web Developer & Designer",
    company: "Freelance",
    place: "Independent",
    body: "Delivered two custom web development projects end-to-end, managing design, implementation and deployment around specific client requirements.",
  },
];

const projects = [
  {
    type: "Object-oriented systems",
    title: "Java Training School Sim",
    body: "A school management simulation designed around clear domain objects and robust file serialization for student and staff data.",
    stack: ["Java", "OOD", "Serialization"],
    tone: "blue",
  },
  {
    type: "Interface / interaction",
    title: "JavaFX Noughts & Crosses",
    body: "A GUI game built with MVC and JavaFX UI binding, keeping game state and the interface in sync through responsive interactions.",
    stack: ["JavaFX", "MVC", "UI binding"],
    tone: "soft",
  },
];

function Tag({ children }: { children: string }) {
  return (
    <span className="portfolio-tag">
      <span className="portfolio-tag-dot" />
      {children}
    </span>
  );
}

function SectionLabel({ children }: { children: string }) {
  return (
    <div className="portfolio-section-label">
      <span>{children}</span>
      <span className="portfolio-label-context">Shlok Panjabi</span>
    </div>
  );
}

function Portfolio() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <main className="portfolio-shell">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Mono:wght@400;500&family=Manrope:wght@400;500;600;700;800&display=swap');
        .portfolio-shell { --ink:#f2eee6; --muted:#9a9b9b; --faint:#5e6669; --line:#293136; --panel:#11171b; --bg:#0a0d0f; --blue:#71b7ff; --blue-deep:#1e5c93; --blue-soft:#b9dbff; background:var(--bg); color:var(--ink); font-family:'Manrope',sans-serif; min-height:100dvh; overflow-x:hidden; }
        .portfolio-shell * { box-sizing:border-box; }
        .portfolio-shell a { color:inherit; text-decoration:none; }
        .portfolio-shell .mono { font-family:'DM Mono',monospace; }
        .portfolio-nav { align-items:center; display:flex; height:84px; justify-content:space-between; margin:auto; max-width:1240px; padding:0 32px; position:relative; z-index:10; }
        .portfolio-mark { color:var(--ink); display:flex; font-size:13px; font-weight:600; letter-spacing:-.025em; }
        .portfolio-navlinks { display:flex; gap:27px; }
        .portfolio-navlinks a { color:var(--muted); font-size:12px; transition:color .25s ease; }
        .portfolio-navlinks a:hover { color:var(--blue); }
        .portfolio-menu { background:none; border:1px solid var(--line); color:var(--ink); display:none; padding:9px; }
        .portfolio-hero { margin:auto; max-width:1240px; min-height:720px; padding:138px 32px 110px; position:relative; }
        .portfolio-hero:before { background:radial-gradient(circle at 73% 35%, rgba(113,183,255,.14), transparent 27%); content:''; inset:0; pointer-events:none; position:absolute; }
        .portfolio-hero-context { color:var(--blue-soft); font-size:15px; line-height:1.5; margin:0 0 42px; max-width:360px; position:relative; }
        .portfolio-hero-context:before { background:var(--blue); content:''; display:inline-block; height:1px; margin:0 12px 5px 0; width:24px; }
        .portfolio-hero-layout { align-items:end; display:grid; gap:8%; grid-template-columns:1.35fr .65fr; position:relative; }
        .portfolio-hero h1 { font-size:clamp(56px,8.6vw,124px); font-weight:500; letter-spacing:-.09em; line-height:.9; margin:0; max-width:850px; position:relative; }
        .portfolio-hero h1 em { color:var(--blue); font-style:normal; }
        .portfolio-hero-side { border-left:1px solid var(--line); padding:0 0 4px 28px; }
        .portfolio-hero-side-label { color:var(--faint); font-family:'DM Mono',monospace; font-size:10px; letter-spacing:.05em; margin:0 0 18px; text-transform:uppercase; }
        .portfolio-hero-bottom { align-items:flex-start; display:flex; flex-direction:column; gap:28px; margin:0; position:relative; }
        .portfolio-intro { color:var(--muted); font-size:16px; line-height:1.65; max-width:455px; }
        .portfolio-intro strong { color:var(--ink); font-weight:600; }
        .portfolio-hero-actions { display:flex; flex-wrap:wrap; gap:12px; justify-content:flex-end; }
        .portfolio-button { align-items:center; border:1px solid var(--line); display:inline-flex; font-family:'DM Mono',monospace; font-size:11px; gap:10px; padding:14px 17px; transition:background .25s ease,border-color .25s ease,color .25s ease,transform .25s ease; }
        .portfolio-button:hover { border-color:var(--blue); color:var(--blue); transform:translateY(-3px); }
        .portfolio-button.primary { background:var(--blue); border-color:var(--blue); color:#071018; }
        .portfolio-button.primary:hover { background:#a0d0ff; color:#071018; }
        .portfolio-grid { border-top:1px solid var(--line); display:grid; grid-template-columns:repeat(12,1fr); margin:auto; max-width:1240px; }
        .portfolio-grid > section { grid-column:1/-1; padding:104px 32px; }
        .portfolio-section-label { align-items:center; border-top:1px solid var(--line); color:var(--muted); display:flex; font-size:12px; justify-content:space-between; letter-spacing:.015em; padding-top:14px; }
        .portfolio-label-context { color:var(--faint); font-family:'DM Mono',monospace; font-size:9px; letter-spacing:.06em; text-transform:uppercase; }
        .portfolio-section-head { align-items:flex-end; display:flex; justify-content:space-between; margin:44px 0 58px; }
        .portfolio-section-head h2 { font-size:clamp(34px,5vw,70px); font-weight:500; letter-spacing:-.065em; line-height:.98; margin:0; }
        .portfolio-section-head h2 em { color:var(--blue); font-style:normal; }
        .portfolio-section-head p { color:var(--muted); font-size:14px; line-height:1.6; margin:0 0 3px; max-width:270px; }
        .portfolio-experience { margin-left:16.66%; max-width:860px; }
        .portfolio-role { border-top:1px solid var(--line); display:grid; gap:25px; grid-template-columns:120px 1fr 18px; padding:27px 0 30px; transition:padding .25s ease; }
        .portfolio-role:hover { padding-left:12px; }
        .portfolio-role-date { color:var(--faint); font-family:'DM Mono',monospace; font-size:10px; line-height:1.5; padding-top:5px; }
        .portfolio-role h3 { font-size:20px; font-weight:600; letter-spacing:-.035em; margin:0 0 7px; }
        .portfolio-company { color:var(--blue-soft); font-family:'DM Mono',monospace; font-size:11px; }
        .portfolio-place { color:var(--faint); margin-left:10px; }
        .portfolio-role p { color:var(--muted); font-size:13px; line-height:1.65; margin:17px 0 0; max-width:590px; }
        .portfolio-role-arrow { color:var(--faint); transition:color .25s ease,transform .25s ease; }
        .portfolio-role:hover .portfolio-role-arrow { color:var(--blue); transform:translateX(4px); }
        .portfolio-stats { border-top:1px solid var(--line); display:grid; gap:24px; grid-template-columns:repeat(4,1fr); padding-top:28px; }
        .portfolio-stat { display:flex; flex-direction:column; gap:9px; min-width:0; }
        .portfolio-stat strong { color:var(--ink); font-size:clamp(28px,3.2vw,46px); font-weight:600; letter-spacing:-.065em; line-height:1; }
        .portfolio-stat span { color:var(--muted); font-family:'DM Mono',monospace; font-size:10px; line-height:1.4; }
        .portfolio-projects-section { background:#0d1216; }
        .portfolio-projects { display:grid; gap:18px; grid-template-columns:1.1fr .9fr; margin-left:16.66%; max-width:940px; }
        .portfolio-project { border:1px solid var(--line); min-height:350px; overflow:hidden; padding:26px; position:relative; transition:border-color .3s ease,transform .3s ease; }
        .portfolio-project:hover { border-color:#5d84a8; transform:translateY(-6px); }
        .portfolio-project:after { border:1px solid rgba(113,183,255,.18); content:''; height:160px; position:absolute; right:-64px; top:-48px; transform:rotate(35deg); width:240px; }
        .portfolio-project.soft:after { border-color:rgba(185,219,255,.2); }
        .portfolio-project-top { display:flex; justify-content:space-between; }
        .portfolio-project-status { color:var(--blue); font-family:'DM Mono',monospace; font-size:10px; text-transform:uppercase; }
        .portfolio-project-type { color:var(--faint); font-family:'DM Mono',monospace; font-size:10px; text-transform:uppercase; }
        .portfolio-project h3 { font-size:clamp(25px,3vw,39px); font-weight:500; letter-spacing:-.065em; line-height:1; margin:105px 0 17px; max-width:310px; }
        .portfolio-project p { color:var(--muted); font-size:13px; line-height:1.65; max-width:360px; }
        .portfolio-tags { display:flex; flex-wrap:wrap; gap:8px; margin-top:23px; }
        .portfolio-tag { align-items:center; border:1px solid var(--line); color:var(--muted); display:inline-flex; font-family:'DM Mono',monospace; font-size:10px; gap:7px; padding:7px 9px; }
        .portfolio-tag-dot { background:var(--blue); height:4px; width:4px; }
        .portfolio-coming { align-items:center; background:linear-gradient(135deg,#121c25,#101417); border:1px dashed #506170; display:flex; flex-direction:column; justify-content:center; min-height:350px; padding:28px; text-align:center; }
        .portfolio-coming-icon { border:1px solid #5a7389; color:var(--blue); font-family:'DM Mono',monospace; font-size:13px; margin-bottom:25px; padding:15px; }
        .portfolio-coming h3 { font-size:23px; font-weight:500; letter-spacing:-.04em; margin:0 0 12px; }
        .portfolio-coming p { color:var(--muted); font-size:12px; line-height:1.6; max-width:230px; }
        .portfolio-skill-layout { display:grid; grid-template-columns:1fr 2fr; margin-left:16.66%; max-width:940px; }
        .portfolio-skill-intro { color:var(--muted); font-size:14px; line-height:1.7; max-width:250px; }
        .portfolio-skill-groups { border-top:1px solid var(--line); }
        .portfolio-skill-group { border-bottom:1px solid var(--line); display:grid; grid-template-columns:170px 1fr; padding:24px 0; }
        .portfolio-skill-group h3 { color:var(--blue-soft); font-family:'DM Mono',monospace; font-size:11px; font-weight:400; margin:0; }
        .portfolio-skill-list { display:flex; flex-wrap:wrap; gap:8px 24px; }
        .portfolio-skill-list span { font-size:16px; letter-spacing:-.025em; }
        .portfolio-education-list { display:grid; gap:0; margin-left:16.66%; max-width:940px; }
        .portfolio-education-item { border-top:1px solid var(--line); display:grid; gap:25px; grid-template-columns:180px 1fr; padding:27px 0 30px; }
        .portfolio-education-date { color:var(--faint); font-family:'DM Mono',monospace; font-size:10px; line-height:1.5; padding-top:5px; }
        .portfolio-education-item h3 { font-size:20px; font-weight:600; letter-spacing:-.035em; margin:0 0 7px; }
        .portfolio-education-item p { color:var(--muted); font-size:13px; line-height:1.65; margin:14px 0 0; max-width:650px; }
        .portfolio-education-meta { color:var(--blue-soft); font-family:'DM Mono',monospace; font-size:11px; }
        .portfolio-volunteer { background:#0d1216; }
        .portfolio-volunteer-card { border:1px solid var(--line); display:grid; gap:30px; grid-template-columns:180px 1fr; margin-left:16.66%; max-width:940px; padding:28px; }
        .portfolio-volunteer-date { color:var(--blue); font-family:'DM Mono',monospace; font-size:10px; line-height:1.5; }
        .portfolio-volunteer-card h3 { font-size:24px; font-weight:500; letter-spacing:-.04em; margin:0 0 7px; }
        .portfolio-volunteer-card p { color:var(--muted); font-size:13px; line-height:1.65; margin:14px 0 0; max-width:600px; }
        .portfolio-contact { background:var(--blue); color:#071018; }
        .portfolio-contact .portfolio-section-label { color:#16334a; }
        .portfolio-contact .portfolio-label-line { background:#16334a; }
        .portfolio-contact-layout { align-items:flex-end; display:flex; justify-content:space-between; margin-top:55px; }
        .portfolio-contact h2 { font-size:clamp(42px,7vw,96px); font-weight:500; letter-spacing:-.085em; line-height:.9; margin:0; max-width:660px; }
        .portfolio-contact h2 span { color:#315b80; }
        .portfolio-contact-copy { font-family:'DM Mono',monospace; font-size:11px; line-height:1.7; max-width:220px; }
        .portfolio-contact-links { display:flex; flex-direction:column; gap:10px; margin-top:55px; }
        .portfolio-contact-link { align-items:center; border-bottom:1px solid rgba(7,16,24,.28); display:flex; font-family:'DM Mono',monospace; font-size:12px; justify-content:space-between; padding:13px 0; transition:padding .25s ease; }
        .portfolio-contact-link:hover { padding-left:10px; padding-right:10px; }
        .portfolio-footer { align-items:center; display:flex; justify-content:space-between; margin:auto; max-width:1240px; padding:25px 32px 38px; }
        .portfolio-footer small { color:var(--faint); font-family:'DM Mono',monospace; font-size:10px; }
        .portfolio-footer-links { display:flex; gap:20px; }
        .portfolio-footer-links a { color:var(--muted); font-family:'DM Mono',monospace; font-size:10px; }
        .portfolio-footer-links a:hover { color:var(--blue); }
        @media (max-width:700px) {
          .portfolio-nav { height:70px; padding:0 20px; }
          .portfolio-navlinks { background:#11171b; border:1px solid var(--line); display:none; flex-direction:column; gap:0; left:20px; padding:7px; position:absolute; right:20px; top:62px; }
          .portfolio-navlinks.open { display:flex; }
          .portfolio-navlinks a { padding:12px; }
          .portfolio-menu { display:block; }
          .portfolio-hero { min-height:700px; padding:92px 20px 82px; }
          .portfolio-hero-context { font-size:13px; margin-bottom:34px; }
          .portfolio-hero-layout { display:flex; flex-direction:column; gap:48px; }
          .portfolio-hero h1 { font-size:clamp(50px,15vw,80px); }
          .portfolio-hero-side { border-left:0; border-top:1px solid var(--line); padding:24px 0 0; }
          .portfolio-hero-bottom, .portfolio-section-head, .portfolio-contact-layout { align-items:flex-start; flex-direction:column; gap:34px; }
          .portfolio-intro { font-size:14px; }
          .portfolio-hero-actions { justify-content:flex-start; }
          .portfolio-stats { gap:28px 18px; grid-template-columns:repeat(2,1fr); }
          .portfolio-grid > section { padding:72px 20px; }
          .portfolio-section-head { margin:35px 0 40px; }
          .portfolio-experience, .portfolio-projects, .portfolio-skill-layout, .portfolio-education-list, .portfolio-volunteer-card { margin-left:0; }
          .portfolio-role { gap:8px; grid-template-columns:1fr 18px; }
          .portfolio-role-date { grid-column:1/-1; }
          .portfolio-role h3 { font-size:18px; }
          .portfolio-place { display:block; margin:5px 0 0; }
          .portfolio-projects { grid-template-columns:1fr; }
          .portfolio-project { min-height:325px; }
          .portfolio-project h3 { margin-top:85px; }
          .portfolio-skill-layout { display:block; }
          .portfolio-skill-intro { margin-bottom:36px; }
          .portfolio-skill-group { gap:20px; grid-template-columns:1fr; }
          .portfolio-skill-list span { font-size:15px; }
          .portfolio-education-item, .portfolio-volunteer-card { display:block; }
          .portfolio-education-date, .portfolio-volunteer-date { margin-bottom:18px; }
          .portfolio-contact h2 { font-size:clamp(50px,14vw,76px); }
          .portfolio-footer { align-items:flex-start; flex-direction:column; gap:20px; padding:25px 20px 35px; }
          .portfolio-footer-links { flex-wrap:wrap; gap:14px 20px; }
        }
      `}</style>

      <header className="portfolio-nav">
        <a className="portfolio-mark" href="#top" aria-label="Back to top">
          Shlok Navin Panjabi
        </a>
        <nav className={`portfolio-navlinks ${menuOpen ? "open" : ""}`} aria-label="Main navigation">
          {sections.map((section) => (
            <a href={`#${section.id}`} key={section.id} onClick={closeMenu}>{section.label}</a>
          ))}
          <a href="https://github.com/shlokpanjabiwork" target="_blank" rel="noreferrer" onClick={closeMenu}>GitHub</a>
        </nav>
        <button className="portfolio-menu" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? "Close navigation" : "Open navigation"}>
          {menuOpen ? <X size={16} /> : <Menu size={16} />}
        </button>
      </header>

      <div id="top" className="portfolio-hero">
        <p className="portfolio-hero-context">A first-year computer science student exploring software engineering and AI.</p>
        <div className="portfolio-hero-layout">
          <h1>I build <em>software</em><br />to understand<br />what <em>matters.</em></h1>
          <div className="portfolio-hero-side">
            <p className="portfolio-hero-side-label">Southampton, UK / 2026</p>
            <div className="portfolio-hero-bottom">
              <p className="portfolio-intro">I’m <strong>Shlok Navin Panjabi</strong>, a first-year MEng Computer Science (Artificial Intelligence) student at the University of Southampton. I’m drawn to the space where careful engineering turns difficult ideas into useful software.</p>
              <div className="portfolio-hero-actions">
                <a className="portfolio-button primary" href="#projects">View selected work <ArrowUpRight size={14} /></a>
                <a className="portfolio-button" href={cvPath} download="ShlokNavinPanjabi_CV.pdf">Download CV <Download size={14} /></a>
                <a className="portfolio-button" href="#contact">Get in touch <Mail size={14} /></a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="portfolio-grid">
        <section aria-label="Highlights">
          <div className="portfolio-stats">
            {[
              ["2:1", "Year 1 result"],
              ["09 weeks", "AccelerComm internship"],
              ["03", "Core languages"],
              ["7.5", "IELTS overall"],
            ].map(([value, label]) => (
              <div className="portfolio-stat" key={label}>
                <strong>{value}</strong>
                <span>{label}</span>
              </div>
            ))}
          </div>
        </section>

        <section id="experience">
          <SectionLabel>Experience</SectionLabel>
          <div className="portfolio-section-head">
            <h2>A record of<br /><em>following through.</em></h2>
            <p>Small teams, real constraints, useful outcomes. The work is still early; the standard is not.</p>
          </div>
          <div className="portfolio-experience">
            {experience.map((role) => (
              <article className="portfolio-role" key={role.title}>
                <div className="portfolio-role-date">{role.dates}</div>
                <div><h3>{role.title}</h3><span className="portfolio-company">{role.company}</span><span className="portfolio-place">{role.place}</span><p>{role.body}</p></div>
                <ChevronRight className="portfolio-role-arrow" size={16} />
              </article>
            ))}
          </div>
        </section>

        <section id="projects" className="portfolio-projects-section">
          <SectionLabel>Selected projects</SectionLabel>
          <div className="portfolio-section-head">
            <h2>Things I’ve<br /><em>made to learn.</em></h2>
            <p>Projects are where abstractions meet edge cases. Each one left the codebase clearer than it found it.</p>
          </div>
          <div className="portfolio-projects">
            {projects.map((project) => (
              <article className={`portfolio-project ${project.tone}`} key={project.title}>
                <div className="portfolio-project-top"><span className="portfolio-project-status">Shipped</span><span className="portfolio-project-type">{project.type}</span></div>
                <h3>{project.title}</h3><p>{project.body}</p>
                <div className="portfolio-tags">{project.stack.map((item) => <Tag key={item}>{item}</Tag>)}</div>
              </article>
            ))}
            <article className="portfolio-coming">
              <div className="portfolio-coming-icon"><Terminal size={18} /></div>
              <h3>Project in progress</h3>
              <p>Something new is taking shape. The interesting part is still happening between the commits.</p>
              <span className="mono" style={{ color: "var(--faint)", fontSize: 10, marginTop: 18 }}>MORE SOON</span>
            </article>
          </div>
        </section>

        <section id="skills">
          <SectionLabel>Toolkit</SectionLabel>
          <div className="portfolio-section-head">
            <h2>Curious by<br /><em>default.</em></h2>
            <p>Languages and tools are means, not identity. I reach for what makes the problem legible.</p>
          </div>
          <div className="portfolio-skill-layout">
            <p className="portfolio-skill-intro">Currently learning how systems behave — from a Java object model to a radio-frequency test bench, and from relational data to machine learning workflows.</p>
            <div className="portfolio-skill-groups">
              {[
                ["Languages", ["Java", "Python", "C", "SQL"]],
                ["AI & ML", ["TensorFlow", "Keras", "PCA"]],
                ["Web & Design", ["Figma", "Wix", "HTML/CSS"]],
                ["Systems", ["Unix/Linux", "Git", "PyVISA"]],
                ["Communication", ["English · IELTS 7.5", "Hindi", "French"]],
              ].map(([title, items]) => <div className="portfolio-skill-group" key={title as string}><h3>{title as string}</h3><div className="portfolio-skill-list">{(items as string[]).map((item) => <span key={item}>{item}</span>)}</div></div>)}
            </div>
          </div>
        </section>

        <section id="education">
          <SectionLabel>Education</SectionLabel>
          <div className="portfolio-section-head">
            <h2>Learning the<br /><em>foundations.</em></h2>
            <p>Formal study gives the questions somewhere rigorous to start.</p>
          </div>
          <div className="portfolio-education-list">
            <article className="portfolio-education-item">
              <div className="portfolio-education-date">Sep 2025 — Present</div>
              <div><h3>University of Southampton</h3><span className="portfolio-education-meta">MEng Computer Science (with Artificial Intelligence)</span><p>Average: 61% — on track for a 2:1. Core modules include Algorithmics, Data Management (SQL/Relational), Computer Systems, Networks & Security, Programming I & II, and Applied Mathematics I & II.</p></div>
            </article>
            <article className="portfolio-education-item">
              <div className="portfolio-education-date">Sep 2024 — May 2025</div>
              <div><h3>ONCAMPUS Southampton</h3><span className="portfolio-education-meta">University Foundation Programme</span><p>Mathematics (A*), Physics (A*), and Skills for Science (A*).</p></div>
            </article>
          </div>
        </section>

        <section id="volunteering" className="portfolio-volunteer">
          <SectionLabel>Volunteering</SectionLabel>
          <div className="portfolio-section-head">
            <h2>Making technical<br /><em>things accessible.</em></h2>
            <p>Good engineering also means helping more people feel welcome around it.</p>
          </div>
          <article className="portfolio-volunteer-card">
            <div className="portfolio-volunteer-date">14 MAR 2026<br />SOUTHAMPTON, UK</div>
            <div><h3>SOTSEF Science & Engineering Family Day</h3><span className="portfolio-education-meta">Technical Volunteer</span><p>Facilitated technical demonstrations and supervised electronic construction workshops for 5,000 visitors, contributing to a high event satisfaction rating.</p></div>
          </article>
        </section>

        <section id="contact" className="portfolio-contact">
          <SectionLabel>Contact</SectionLabel>
          <div className="portfolio-contact-layout">
            <h2>Let’s make<br /><span>something useful.</span></h2>
            <p className="portfolio-contact-copy">Southampton, UK<br />Open to conversations about software, AI and the work between the two.</p>
          </div>
          <div className="portfolio-contact-links">
            <a className="portfolio-contact-link" href="mailto:shlokpanjabi.work@gmail.com"><span>shlokpanjabi.work@gmail.com</span><Mail size={16} /></a>
            <a className="portfolio-contact-link" href="https://linkedin.com/in/shlok-panjabi" target="_blank" rel="noreferrer"><span>linkedin.com/in/shlok-panjabi</span><Linkedin size={16} /></a>
            <a className="portfolio-contact-link" href="https://github.com/shlokpanjabiwork" target="_blank" rel="noreferrer"><span>github.com/shlokpanjabiwork</span><Github size={16} /></a>
            <a className="portfolio-contact-link" href={cvPath} download="ShlokNavinPanjabi_CV.pdf"><span>Download CV</span><ArrowDownToLine size={16} /></a>
          </div>
        </section>
      </div>

      <footer className="portfolio-footer">
        <small>© 2026 Shlok Navin Panjabi</small>
        <div className="portfolio-footer-links">
          <a href="mailto:shlokpanjabi.work@gmail.com">Email</a>
          <a href="https://linkedin.com/in/shlok-panjabi" target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="https://github.com/shlokpanjabiwork" target="_blank" rel="noreferrer">GitHub</a>
          <a href={cvPath} download="ShlokNavinPanjabi_CV.pdf">CV</a>
        </div>
      </footer>
    </main>
  );
}

export { Portfolio };
export default Portfolio;