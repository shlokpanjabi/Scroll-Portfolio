import { useEffect, useState } from "react";
import {
  ArrowUpRight,
  Linkedin,
  Mail,
  Menu,
  Minus,
  Terminal,
  X,
} from "lucide-react";

const experience = [
  {
    dates: "Jun 2026 — Present",
    title: "System Test Summer Intern",
    company: "AccelerComm",
    place: "Southampton Science Park",
    body: "Python test automation for 5G/LTE systems, working with Keysight EXG/MXA RF equipment via PyVISA and SCPI.",
    number: "01",
  },
  {
    dates: "Aug 2024 — Mar 2025",
    title: "Head of Technology",
    company: "LetUsBloom",
    place: "Remote",
    body: "Shaped the organisation website architecture, usability and structural integrity — making the platform clearer to navigate and easier to trust.",
    number: "02",
  },
  {
    dates: "Aug 2024 — Present",
    title: "Web Developer & Designer",
    company: "Freelance",
    place: "Independent",
    body: "Two custom web development projects taken end-to-end, from early design decisions through to deployment.",
    number: "03",
  },
];

const projects = [
  {
    number: "01",
    type: "Object-oriented systems",
    title: "Java Training School Sim",
    body: "A school management simulation designed around clear domain objects and resilient file serialization for student and staff data.",
    stack: ["Java", "OOD", "Serialization"],
    tone: "violet",
  },
  {
    number: "02",
    type: "Interface / interaction",
    title: "JavaFX Noughts & Crosses",
    body: "A GUI game with UI binding and a clean MVC split, keeping game rules, presentation and interaction in their own lanes.",
    stack: ["JavaFX", "MVC", "UI binding"],
    tone: "mint",
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

function SectionLabel({ index, children }: { index: string; children: string }) {
  return (
    <div className="portfolio-section-label">
      <span>{index}</span>
      <span className="portfolio-label-line" />
      <span>{children}</span>
    </div>
  );
}

function Portfolio() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [time, setTime] = useState("");

  useEffect(() => {
    const update = () =>
      setTime(
        new Intl.DateTimeFormat("en-GB", {
          timeZone: "Europe/London",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: false,
        }).format(new Date()),
      );
    update();
    const timer = window.setInterval(update, 1000);
    return () => window.clearInterval(timer);
  }, []);

  const closeMenu = () => setMenuOpen(false);

  return (
    <main className="portfolio-shell">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Mono:wght@400;500&family=Manrope:wght@400;500;600;700;800&display=swap');
        .portfolio-shell { --ink:#e7e8e4; --muted:#929993; --faint:#58615d; --line:#29312e; --panel:#111715; --bg:#0a0e0d; --acid:#c5f275; --lilac:#b5a8ff; background:var(--bg); color:var(--ink); font-family:'Manrope',sans-serif; min-height:100dvh; overflow:hidden; }
        .portfolio-shell * { box-sizing:border-box; }
        .portfolio-shell a { color:inherit; text-decoration:none; }
        .portfolio-shell .mono { font-family:'DM Mono',monospace; }
        .portfolio-nav { align-items:center; display:flex; height:84px; justify-content:space-between; margin:auto; max-width:1240px; padding:0 32px; position:relative; z-index:10; }
        .portfolio-mark { align-items:center; display:flex; font-family:'DM Mono',monospace; font-size:12px; letter-spacing:.08em; gap:11px; }
        .portfolio-mark i { background:var(--acid); border-radius:50%; display:block; height:7px; width:7px; }
        .portfolio-navlinks { display:flex; gap:30px; }
        .portfolio-navlinks a { color:var(--muted); font-size:12px; transition:color .25s ease; }
        .portfolio-navlinks a:hover { color:var(--acid); }
        .portfolio-menu { background:none; border:1px solid var(--line); color:var(--ink); display:none; padding:9px; }
        .portfolio-hero { margin:auto; max-width:1240px; min-height:660px; padding:120px 32px 105px; position:relative; }
        .portfolio-hero:before { background:radial-gradient(circle at 70% 42%, rgba(181,168,255,.12), transparent 24%); content:''; inset:0; pointer-events:none; position:absolute; }
        .portfolio-kicker { align-items:center; color:var(--acid); display:flex; font-family:'DM Mono',monospace; font-size:11px; gap:10px; letter-spacing:.08em; margin-bottom:30px; text-transform:uppercase; }
        .portfolio-kicker span { background:var(--acid); height:1px; width:38px; }
        .portfolio-hero h1 { font-size:clamp(56px,9.2vw,132px); font-weight:500; letter-spacing:-.09em; line-height:.91; margin:0; max-width:980px; position:relative; }
        .portfolio-hero h1 em { color:var(--lilac); font-style:normal; }
        .portfolio-hero-bottom { align-items:flex-end; display:flex; justify-content:space-between; margin-top:62px; position:relative; }
        .portfolio-intro { color:var(--muted); font-size:16px; line-height:1.65; max-width:430px; }
        .portfolio-intro strong { color:var(--ink); font-weight:600; }
        .portfolio-hero-actions { display:flex; gap:12px; }
        .portfolio-button { align-items:center; border:1px solid var(--line); display:inline-flex; font-family:'DM Mono',monospace; font-size:11px; gap:10px; padding:14px 17px; transition:background .25s ease,border-color .25s ease,color .25s ease,transform .25s ease; }
        .portfolio-button:hover { border-color:var(--acid); color:var(--acid); transform:translateY(-3px); }
        .portfolio-button.primary { background:var(--acid); border-color:var(--acid); color:#0b100d; }
        .portfolio-button.primary:hover { background:#d6fb92; color:#0b100d; }
        .portfolio-coordinates { bottom:34px; color:var(--faint); display:flex; font-family:'DM Mono',monospace; font-size:10px; gap:20px; position:absolute; right:32px; }
        .portfolio-grid { border-top:1px solid var(--line); display:grid; grid-template-columns:repeat(12,1fr); margin:auto; max-width:1240px; }
        .portfolio-grid > section { grid-column:1/-1; padding:100px 32px; }
        .portfolio-section-label { align-items:center; color:var(--muted); display:flex; font-family:'DM Mono',monospace; font-size:10px; gap:12px; letter-spacing:.08em; text-transform:uppercase; }
        .portfolio-section-label > span:first-child { color:var(--acid); }
        .portfolio-label-line { background:var(--line); height:1px; width:40px; }
        .portfolio-section-head { align-items:flex-end; display:flex; justify-content:space-between; margin:44px 0 58px; }
        .portfolio-section-head h2 { font-size:clamp(34px,5vw,70px); font-weight:500; letter-spacing:-.065em; line-height:.98; margin:0; }
        .portfolio-section-head p { color:var(--muted); font-size:14px; line-height:1.6; margin:0 0 3px; max-width:260px; }
        .portfolio-experience { margin-left:16.66%; max-width:860px; }
        .portfolio-role { border-top:1px solid var(--line); display:grid; gap:25px; grid-template-columns:120px 1fr 18px; padding:27px 0 30px; transition:padding .25s ease; }
        .portfolio-role:hover { padding-left:12px; }
        .portfolio-role-date { color:var(--faint); font-family:'DM Mono',monospace; font-size:10px; line-height:1.5; padding-top:5px; }
        .portfolio-role h3 { font-size:20px; font-weight:600; letter-spacing:-.035em; margin:0 0 7px; }
        .portfolio-company { color:var(--lilac); font-family:'DM Mono',monospace; font-size:11px; }
        .portfolio-place { color:var(--faint); margin-left:10px; }
        .portfolio-role p { color:var(--muted); font-size:13px; line-height:1.65; margin:17px 0 0; max-width:590px; }
        .portfolio-role-number { color:var(--faint); font-family:'DM Mono',monospace; font-size:10px; text-align:right; }
        .portfolio-projects-section { background:#0d1210; }
        .portfolio-projects { display:grid; gap:18px; grid-template-columns:1.1fr .9fr; margin-left:16.66%; max-width:940px; }
        .portfolio-project { border:1px solid var(--line); min-height:350px; overflow:hidden; padding:26px; position:relative; transition:border-color .3s ease,transform .3s ease; }
        .portfolio-project:hover { border-color:#64716a; transform:translateY(-6px); }
        .portfolio-project:after { border:1px solid rgba(197,242,117,.12); content:''; height:160px; position:absolute; right:-64px; top:-48px; transform:rotate(35deg); width:240px; }
        .portfolio-project.violet:after { border-color:rgba(181,168,255,.18); }
        .portfolio-project-top { display:flex; justify-content:space-between; }
        .portfolio-project-number { color:var(--acid); font-family:'DM Mono',monospace; font-size:11px; }
        .portfolio-project-type { color:var(--faint); font-family:'DM Mono',monospace; font-size:10px; text-transform:uppercase; }
        .portfolio-project h3 { font-size:clamp(25px,3vw,39px); font-weight:500; letter-spacing:-.065em; line-height:1; margin:105px 0 17px; max-width:310px; }
        .portfolio-project p { color:var(--muted); font-size:13px; line-height:1.65; max-width:360px; }
        .portfolio-tags { display:flex; flex-wrap:wrap; gap:8px; margin-top:23px; }
        .portfolio-tag { align-items:center; border:1px solid var(--line); color:var(--muted); display:inline-flex; font-family:'DM Mono',monospace; font-size:10px; gap:7px; padding:7px 9px; }
        .portfolio-tag-dot { background:var(--acid); height:4px; width:4px; }
        .portfolio-project.violet .portfolio-tag-dot { background:var(--lilac); }
        .portfolio-coming { align-items:center; background:linear-gradient(135deg,#171a25,#101311); border:1px dashed #41483f; display:flex; flex-direction:column; justify-content:center; min-height:350px; padding:28px; text-align:center; }
        .portfolio-coming-icon { border:1px solid #545d57; color:var(--acid); font-family:'DM Mono',monospace; font-size:13px; margin-bottom:25px; padding:15px; }
        .portfolio-coming h3 { font-size:23px; font-weight:500; letter-spacing:-.04em; margin:0 0 12px; }
        .portfolio-coming p { color:var(--muted); font-size:12px; line-height:1.6; max-width:230px; }
        .portfolio-skill-layout { display:grid; grid-template-columns:1fr 2fr; margin-left:16.66%; max-width:940px; }
        .portfolio-skill-intro { color:var(--muted); font-size:14px; line-height:1.7; max-width:250px; }
        .portfolio-skill-groups { border-top:1px solid var(--line); }
        .portfolio-skill-group { border-bottom:1px solid var(--line); display:grid; grid-template-columns:170px 1fr; padding:24px 0; }
        .portfolio-skill-group h3 { color:var(--lilac); font-family:'DM Mono',monospace; font-size:11px; font-weight:400; margin:0; }
        .portfolio-skill-list { display:flex; flex-wrap:wrap; gap:8px 24px; }
        .portfolio-skill-list span { font-size:16px; letter-spacing:-.025em; }
        .portfolio-contact { background:var(--acid); color:#0a0e0d; }
        .portfolio-contact .portfolio-section-label, .portfolio-contact .portfolio-section-label > span:first-child { color:#314126; }
        .portfolio-contact .portfolio-label-line { background:rgba(49,65,38,.32); }
        .portfolio-contact-layout { align-items:flex-end; display:flex; justify-content:space-between; margin-top:55px; }
        .portfolio-contact h2 { font-size:clamp(42px,7vw,96px); font-weight:500; letter-spacing:-.085em; line-height:.9; margin:0; max-width:660px; }
        .portfolio-contact h2 span { color:#667b45; }
        .portfolio-contact-copy { font-family:'DM Mono',monospace; font-size:11px; line-height:1.7; max-width:220px; }
        .portfolio-contact-links { display:flex; flex-direction:column; gap:10px; margin-top:55px; }
        .portfolio-contact-link { align-items:center; border-bottom:1px solid rgba(10,14,13,.28); display:flex; font-family:'DM Mono',monospace; font-size:12px; justify-content:space-between; padding:13px 0; transition:padding .25s ease; }
        .portfolio-contact-link:hover { padding-left:10px; padding-right:10px; }
        .portfolio-footer { align-items:center; display:flex; justify-content:space-between; margin:auto; max-width:1240px; padding:25px 32px 38px; }
        .portfolio-footer small { color:var(--faint); font-family:'DM Mono',monospace; font-size:10px; }
        .portfolio-footer-links { display:flex; gap:20px; }
        .portfolio-footer-links a { color:var(--muted); font-family:'DM Mono',monospace; font-size:10px; }
        .portfolio-disabled { color:#56634d!important; cursor:not-allowed; }
        .portfolio-status { align-items:center; color:var(--muted); display:flex; font-family:'DM Mono',monospace; font-size:10px; gap:8px; }
        .portfolio-status i { background:var(--acid); border-radius:50%; height:6px; width:6px; }
        @media (max-width:700px) {
          .portfolio-nav { height:70px; padding:0 20px; }
          .portfolio-navlinks { background:#111715; border:1px solid var(--line); display:none; flex-direction:column; gap:0; left:20px; padding:7px; position:absolute; right:20px; top:62px; }
          .portfolio-navlinks.open { display:flex; }
          .portfolio-navlinks a { padding:12px; }
          .portfolio-menu { display:block; }
          .portfolio-hero { min-height:650px; padding:85px 20px 80px; }
          .portfolio-hero h1 { font-size:clamp(50px,15vw,80px); }
          .portfolio-hero-bottom, .portfolio-section-head, .portfolio-contact-layout { align-items:flex-start; flex-direction:column; gap:34px; }
          .portfolio-intro { font-size:14px; }
          .portfolio-hero-actions { flex-wrap:wrap; }
          .portfolio-coordinates { bottom:25px; left:20px; right:auto; }
          .portfolio-grid > section { padding:72px 20px; }
          .portfolio-section-head { margin:35px 0 40px; }
          .portfolio-experience, .portfolio-projects, .portfolio-skill-layout { margin-left:0; }
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
          .portfolio-contact h2 { font-size:clamp(50px,14vw,76px); }
          .portfolio-footer { align-items:flex-start; flex-direction:column; gap:20px; padding:25px 20px 35px; }
        }
      `}</style>

      <header className="portfolio-nav">
        <a className="portfolio-mark" href="#top" aria-label="Back to top">
          <i /> SNP / 26
        </a>
        <nav className={`portfolio-navlinks ${menuOpen ? "open" : ""}`} aria-label="Main navigation">
          <a href="#experience" onClick={closeMenu}>Experience</a>
          <a href="#projects" onClick={closeMenu}>Projects</a>
          <a href="#skills" onClick={closeMenu}>Skills</a>
          <a href="#contact" onClick={closeMenu}>Contact</a>
        </nav>
        <button className="portfolio-menu" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? "Close navigation" : "Open navigation"}>
          {menuOpen ? <X size={16} /> : <Menu size={16} />}
        </button>
      </header>

      <div id="top" className="portfolio-hero">
        <div className="portfolio-kicker"><span /> Available for thoughtful problems</div>
        <h1>Building a way<br />to make sense of<br /><em>complex things.</em></h1>
        <div className="portfolio-hero-bottom">
          <p className="portfolio-intro">I’m <strong>Shlok Navin Panjabi</strong>, a first-year MEng Computer Science (Artificial Intelligence) student at the University of Southampton. I like learning by shipping — then looking closely at what happened.</p>
          <div className="portfolio-hero-actions">
            <a className="portfolio-button primary" href="#projects">View selected work <ArrowUpRight size={14} /></a>
            <span className="portfolio-button portfolio-disabled" aria-disabled="true">CV — coming soon <Minus size={14} /></span>
            <a className="portfolio-button" href="#contact">Get in touch <Mail size={14} /></a>
          </div>
        </div>
        <div className="portfolio-coordinates"><span>50.9375° N</span><span>1.3960° W</span><span className="portfolio-status"><i /> {time || "00:00:00"} BST</span></div>
      </div>

      <div className="portfolio-grid">
        <section id="experience">
          <SectionLabel index="01" children="Experience" />
          <div className="portfolio-section-head">
            <h2>A record of<br /><em style={{ color: "var(--lilac)", fontStyle: "normal" }}>following through.</em></h2>
            <p>Small teams, real constraints, useful outcomes. The work is still early; the standard is not.</p>
          </div>
          <div className="portfolio-experience">
            {experience.map((role) => (
              <article className="portfolio-role" key={role.number}>
                <div className="portfolio-role-date">{role.dates}</div>
                <div><h3>{role.title}</h3><span className="portfolio-company">{role.company}</span><span className="portfolio-place">{role.place}</span><p>{role.body}</p></div>
                <div className="portfolio-role-number">{role.number}</div>
              </article>
            ))}
          </div>
        </section>

        <section id="projects" className="portfolio-projects-section">
          <SectionLabel index="02" children="Selected projects" />
          <div className="portfolio-section-head">
            <h2>Things I’ve<br /><em style={{ color: "var(--acid)", fontStyle: "normal" }}>made to learn.</em></h2>
            <p>Projects are where abstractions meet edge cases. Each one left the codebase clearer than it found it.</p>
          </div>
          <div className="portfolio-projects">
            {projects.map((project) => (
              <article className={`portfolio-project ${project.tone}`} key={project.number}>
                <div className="portfolio-project-top"><span className="portfolio-project-number">{project.number}</span><span className="portfolio-project-type">{project.type}</span></div>
                <h3>{project.title}</h3><p>{project.body}</p>
                <div className="portfolio-tags">{project.stack.map((item) => <Tag key={item}>{item}</Tag>)}</div>
              </article>
            ))}
            <article className="portfolio-coming">
              <div className="portfolio-coming-icon"><Terminal size={18} /></div>
              <h3>Project in progress</h3>
              <p>Something new is taking shape. The interesting part is still happening between the commits.</p>
              <span className="mono" style={{ color: "var(--faint)", fontSize: 10, marginTop: 18 }}>COMING SOON / 03</span>
            </article>
          </div>
        </section>

        <section id="skills">
          <SectionLabel index="03" children="Toolkit" />
          <div className="portfolio-section-head">
            <h2>Curious by<br /><em style={{ color: "var(--lilac)", fontStyle: "normal" }}>default.</em></h2>
            <p>Languages and tools are means, not identity. I reach for what makes the problem legible.</p>
          </div>
          <div className="portfolio-skill-layout">
            <p className="portfolio-skill-intro">Currently learning how systems behave — from a Java object model to a radio-frequency test bench.</p>
            <div className="portfolio-skill-groups">
              {[
                ["Languages", ["Java", "Python", "C", "SQL"]],
                ["AI & ML", ["TensorFlow", "Keras", "PCA"]],
                ["Web & Design", ["Figma", "Wix", "HTML/CSS"]],
                ["Systems", ["Unix/Linux", "Git", "PyVISA"]],
              ].map(([title, items]) => <div className="portfolio-skill-group" key={title as string}><h3>{title as string}</h3><div className="portfolio-skill-list">{(items as string[]).map((item) => <span key={item}>{item}</span>)}</div></div>)}
            </div>
          </div>
        </section>

        <section id="contact" className="portfolio-contact">
          <SectionLabel index="04" children="Contact" />
          <div className="portfolio-contact-layout">
            <h2>Let’s make<br /><span>something useful.</span></h2>
            <p className="portfolio-contact-copy">Southampton, UK<br />Open to conversations about software, AI and the work between the two.</p>
          </div>
          <div className="portfolio-contact-links">
            <a className="portfolio-contact-link" href="mailto:shlokpanjabi.work@gmail.com"><span>shlokpanjabi.work@gmail.com</span><Mail size={16} /></a>
            <a className="portfolio-contact-link" href="https://linkedin.com/in/shlok-panjabi" target="_blank" rel="noreferrer"><span>linkedin.com/in/shlok-panjabi</span><Linkedin size={16} /></a>
            <span className="portfolio-contact-link portfolio-disabled" aria-disabled="true"><span>CV — coming soon</span><Minus size={16} /></span>
          </div>
        </section>
      </div>

      <footer className="portfolio-footer">
        <small>© 2026 Shlok Navin Panjabi</small>
        <div className="portfolio-footer-links">
          <a href="mailto:shlokpanjabi.work@gmail.com">Email</a>
          <a href="https://linkedin.com/in/shlok-panjabi" target="_blank" rel="noreferrer">LinkedIn</a>
          <span className="portfolio-disabled">GitHub — soon</span>
          <span className="portfolio-disabled">CV — soon</span>
        </div>
      </footer>
    </main>
  );
}

export { Portfolio };
export default Portfolio;