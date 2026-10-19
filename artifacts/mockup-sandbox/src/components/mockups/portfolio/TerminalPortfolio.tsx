import { useEffect, useMemo, useRef, useState } from "react";
import { ArrowUpRight, Check, ChevronRight, Circle, Command, Download, Github, Linkedin, Mail, Power, Radio, Server, Terminal, Wifi } from "lucide-react";

const cvPath = "/__mockup/ShlokNavinPanjabi_CV.pdf";

const roles = [
  { id: "01", dates: "JUN 2026 — NOW", title: "System Test Summer Intern", company: "AccelerComm", place: "Southampton Science Park", body: "Writing Python test automation for 5G/LTE systems, controlling Keysight EXG/MXA RF equipment through PyVISA and SCPI." },
  { id: "02", dates: "AUG 2024 — MAR 2025", title: "Head of Technology", company: "LetUsBloom", place: "REMOTE", body: "Managed organisation website architecture, ensuring usability and structural integrity across digital initiatives." },
  { id: "03", dates: "AUG 2024 — NOW", title: "Web Developer & Designer", company: "FREELANCE", place: "INDEPENDENT", body: "Delivered custom web projects end-to-end, managing design, implementation and deployment around specific client requirements." },
];

const projects = [
  { key: "PRJ-01", type: "SYSTEMS", title: "Java Training School Sim", body: "A school management simulation designed around clear domain objects and robust file serialization for student and staff data.", stack: ["JAVA", "OOD", "SERIALIZATION"], accent: "#c7ef78" },
  { key: "PRJ-02", type: "INTERFACE", title: "JavaFX Noughts & Crosses", body: "A GUI game built with MVC and JavaFX UI binding, keeping game state and the interface in sync through responsive interactions.", stack: ["JAVAFX", "MVC", "UI BINDING"], accent: "#f3ad6d" },
];

const commands = ["home", "experience", "projects", "skills", "education", "contact"];

function TerminalPortfolio() {
  const [activeRole, setActiveRole] = useState("01");
  const [projectFilter, setProjectFilter] = useState("ALL");
  const [command, setCommand] = useState("");
  const [commandOpen, setCommandOpen] = useState(false);
  const [message, setMessage] = useState("ready");
  const inputRef = useRef<HTMLInputElement>(null);

  const filteredProjects = useMemo(
    () => projectFilter === "ALL" ? projects : projects.filter((project) => project.type === projectFilter),
    [projectFilter],
  );

  const jump = (destination: string) => {
    const target = destination.toLowerCase().replace("/", "");
    if (commands.includes(target)) {
      document.getElementById(target)?.scrollIntoView({ behavior: "smooth" });
      setMessage(`navigated to /${target}`);
      setCommand("");
      setCommandOpen(false);
    } else {
      setMessage(`command not found: ${destination || " "} — try help`);
    }
  };

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        setCommandOpen(true);
        setTimeout(() => inputRef.current?.focus(), 20);
      }
      if (event.key === "Escape") setCommandOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <main className="tp-shell">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Mono:wght@400;500&family=Space+Grotesk:wght@500;600;700&display=swap');
        .tp-shell{--bg:#0e1515;--panel:#131d1c;--panel2:#182522;--ink:#dce9d3;--muted:#80978e;--line:#293a34;--lime:#c7ef78;--amber:#f3ad6d;--teal:#78d1bb;background:var(--bg);color:var(--ink);font-family:'DM Mono',ui-monospace,monospace;min-height:100dvh;overflow:hidden;position:relative}
        .tp-shell:before{content:"";position:fixed;inset:0;pointer-events:none;opacity:.035;background-image:linear-gradient(rgba(255,255,255,.6) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.6) 1px,transparent 1px);background-size:38px 38px}
        .tp-shell *{box-sizing:border-box}.tp-wrap{max-width:1240px;margin:auto;padding:24px 34px 52px;position:relative}
        .tp-topbar{border:1px solid var(--line);background:rgba(19,29,28,.8);display:flex;align-items:center;justify-content:space-between;padding:11px 14px;margin-bottom:18px;font-size:11px;letter-spacing:.08em}
        .tp-brand{display:flex;align-items:center;gap:10px;color:var(--lime);font-weight:500}.tp-brand b{color:var(--ink);font-weight:400}.tp-status{display:flex;gap:18px;color:var(--muted)}.tp-status span{display:flex;align-items:center;gap:5px}.tp-dot{color:var(--lime);font-size:13px}
        .tp-hero{border:1px solid var(--line);background:linear-gradient(135deg,#162421,#111a19 60%);padding:52px clamp(22px,6vw,78px) 48px;min-height:470px;position:relative;display:flex;flex-direction:column;justify-content:center}
        .tp-kicker{color:var(--lime);font-size:11px;letter-spacing:.16em;margin:0 0 28px}.tp-kicker span{color:var(--muted)}.tp-hero h1{font-family:'Space Grotesk',sans-serif;font-size:clamp(47px,9vw,112px);line-height:.87;letter-spacing:-.075em;margin:0;max-width:850px;font-weight:600}.tp-hero h1 em{color:var(--lime);font-style:normal}.tp-hero-copy{max-width:520px;margin:34px 0 0 3px;color:#9caf9f;line-height:1.7;font-size:13px}.tp-prompt{color:var(--lime);margin-top:32px;font-size:12px}.tp-prompt i{color:var(--muted);font-style:normal}
        .tp-terminal-line{border-top:1px solid var(--line);margin-top:22px;padding-top:14px;display:flex;gap:10px;align-items:center;color:var(--muted);font-size:12px}.tp-terminal-line strong{color:var(--amber);font-weight:400}.tp-terminal-line button{font:inherit;border:0;background:none;color:var(--ink);padding:0;cursor:pointer;text-decoration:underline;text-decoration-color:var(--line);text-underline-offset:4px}
        .tp-section{padding:72px 0 0}.tp-section-label{display:flex;justify-content:space-between;border-bottom:1px solid var(--line);padding-bottom:11px;color:var(--muted);font-size:10px;letter-spacing:.12em;text-transform:uppercase}.tp-section-label b{color:var(--lime);font-weight:400}.tp-heading{display:grid;grid-template-columns:1.2fr .8fr;gap:30px;padding:32px 0 28px}.tp-heading h2{font-family:'Space Grotesk',sans-serif;font-size:clamp(34px,5vw,65px);letter-spacing:-.06em;line-height:.94;margin:0;font-weight:600}.tp-heading h2 em{color:var(--amber);font-style:normal}.tp-heading p{color:var(--muted);font-size:12px;line-height:1.8;max-width:300px;margin:6px 0}
        .tp-role-grid{display:grid;grid-template-columns:230px 1fr;border-top:1px solid var(--line)}.tp-role-tabs{border-right:1px solid var(--line)}.tp-role-tab{cursor:pointer;width:100%;text-align:left;background:none;color:var(--muted);border:0;border-bottom:1px solid var(--line);padding:17px 16px;font:inherit;font-size:11px;display:flex;justify-content:space-between}.tp-role-tab:hover,.tp-role-tab.active{background:var(--panel2);color:var(--lime)}.tp-role-detail{padding:28px 32px;background:rgba(19,29,28,.45)}.tp-meta{display:flex;justify-content:space-between;color:var(--muted);font-size:10px;letter-spacing:.08em}.tp-role-detail h3{font-family:'Space Grotesk';font-size:27px;letter-spacing:-.045em;margin:28px 0 5px}.tp-company{color:var(--amber);font-size:12px}.tp-role-detail p{max-width:610px;color:#9caf9f;font-size:13px;line-height:1.8;margin:28px 0 0}
        .tp-project-toolbar{display:flex;gap:8px;margin:2px 0 20px}.tp-filter{font:inherit;font-size:10px;color:var(--muted);border:1px solid var(--line);background:transparent;padding:8px 11px;cursor:pointer}.tp-filter.active,.tp-filter:hover{color:var(--bg);background:var(--lime);border-color:var(--lime)}.tp-projects{display:grid;grid-template-columns:1fr 1fr;gap:14px}.tp-project{border:1px solid var(--line);background:var(--panel);padding:24px;min-height:265px;display:flex;flex-direction:column;justify-content:space-between}.tp-project:hover{border-color:#557261;transform:translateY(-3px);transition:transform .2s ease}.tp-project-top{display:flex;justify-content:space-between;color:var(--muted);font-size:10px}.tp-project h3{font-family:'Space Grotesk';font-size:25px;letter-spacing:-.045em;margin:24px 0 12px}.tp-project p{color:#92a89c;font-size:12px;line-height:1.7;max-width:420px}.tp-stack{display:flex;gap:6px;flex-wrap:wrap;margin-top:20px}.tp-stack span{border:1px solid var(--line);padding:5px 7px;color:var(--muted);font-size:9px}.tp-arrow{color:var(--lime)}
        .tp-system{display:grid;grid-template-columns:1fr 1.4fr;gap:14px}.tp-console,.tp-matrix{border:1px solid var(--line);background:var(--panel);padding:22px}.tp-console h3,.tp-matrix h3{font-size:11px;font-weight:400;color:var(--lime);margin:0 0 20px;letter-spacing:.12em}.tp-console-row{display:flex;justify-content:space-between;border-top:1px solid var(--line);padding:13px 0;color:var(--muted);font-size:11px}.tp-console-row b{color:var(--ink);font-weight:400}.tp-bar{height:4px;background:#283a32;margin-top:8px}.tp-bar i{display:block;height:100%;background:var(--teal)}.tp-matrix-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:1px;background:var(--line)}.tp-matrix-cell{background:var(--panel);padding:15px 12px;min-height:84px}.tp-matrix-cell small{color:var(--muted);font-size:9px}.tp-matrix-cell strong{display:block;color:var(--ink);font-size:14px;font-weight:400;margin-top:12px}.tp-matrix-cell strong.ok{color:var(--lime)}
        .tp-contact{border:1px solid var(--line);margin-top:86px;padding:32px clamp(22px,6vw,78px);background:#17221f}.tp-contact h2{font-family:'Space Grotesk';font-size:clamp(40px,7vw,82px);line-height:.88;letter-spacing:-.07em;margin:18px 0 32px}.tp-contact h2 span{color:var(--lime)}.tp-contact-copy{font-size:12px;color:var(--muted);line-height:1.8}.tp-contact-links{display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-top:35px}.tp-link{display:flex;justify-content:space-between;align-items:center;border-top:1px solid var(--line);padding:14px 0;color:var(--ink);font-size:11px;text-decoration:none}.tp-link:hover{color:var(--lime)}.tp-footer{display:flex;justify-content:space-between;color:var(--muted);font-size:10px;padding-top:28px}.tp-footer a{color:var(--muted);text-decoration:none;margin-left:18px}.tp-footer a:hover{color:var(--lime)}
        .tp-command{position:fixed;inset:0;background:rgba(6,11,11,.75);z-index:10;display:grid;place-items:start center;padding-top:15vh}.tp-command-box{width:min(590px,calc(100% - 32px));background:#172421;border:1px solid var(--lime);box-shadow:0 18px 80px rgba(0,0,0,.5);padding:18px}.tp-command-box form{display:flex;gap:9px;align-items:center;border-bottom:1px solid var(--line);padding-bottom:14px}.tp-command-box input{background:none;border:0;outline:0;color:var(--ink);font:inherit;font-size:13px;width:100%}.tp-command-box input::placeholder{color:#668077}.tp-command-help{display:flex;gap:8px;flex-wrap:wrap;padding-top:16px}.tp-command-help button{font:inherit;font-size:10px;background:var(--panel);border:1px solid var(--line);color:var(--muted);padding:8px;cursor:pointer}.tp-command-help button:hover{color:var(--lime);border-color:var(--lime)}
        @media(max-width:700px){.tp-wrap{padding:14px 15px 36px}.tp-status span:not(:first-child){display:none}.tp-hero{min-height:445px;padding:35px 21px}.tp-heading{display:block}.tp-heading p{margin-top:20px}.tp-role-grid,.tp-system{grid-template-columns:1fr}.tp-role-tabs{border-right:0}.tp-role-detail{padding:24px 18px}.tp-projects{grid-template-columns:1fr}.tp-contact{margin-top:56px;padding:25px 21px}.tp-contact-links{grid-template-columns:1fr}.tp-footer{display:block;line-height:2.2}.tp-footer-links a{margin-left:0;margin-right:16px}}
      `}</style>
      <div className="tp-wrap">
        <header className="tp-topbar">
          <div className="tp-brand"><Terminal size={14} /><span>shlok@portfolio</span><b>:~$</b></div>
          <div className="tp-status"><span><Circle className="tp-dot" size={8} fill="currentColor" /> ONLINE</span><span><Wifi size={12} /> SOUTHAMPTON, UK</span><span>v2.026</span></div>
        </header>

        <section className="tp-hero" id="home">
          <p className="tp-kicker">/usr/local/about <span>· interactive profile</span></p>
          <h1>Engineer<br /><em>in progress.</em></h1>
          <p className="tp-hero-copy">Computer science student building reliable systems, considered interfaces and the useful space between the two.</p>
          <div className="tp-prompt"><strong>shlok@portfolio</strong><i>:</i> <span>~$</span> whoami</div>
          <div className="tp-terminal-line"><ChevronRight size={14} className="tp-arrow" /><span>try</span><button onClick={() => setCommandOpen(true)}>help</button><span>or press</span><button onClick={() => setCommandOpen(true)}>⌘ K</button><span>{message}</span></div>
        </section>

        <section className="tp-section" id="experience">
          <div className="tp-section-label"><b>01 / experience</b><span>processes running</span></div>
          <div className="tp-heading"><h2>Things I’ve<br /><em>shipped.</em></h2><p>Roles, experiments and the practical work of making technical ideas hold together.</p></div>
          <div className="tp-role-grid">
            <div className="tp-role-tabs">{roles.map((role) => <button key={role.id} className={`tp-role-tab ${activeRole === role.id ? "active" : ""}`} onClick={() => setActiveRole(role.id)}><span>{role.id} // {role.company}</span><ChevronRight size={13} /></button>)}</div>
            <article className="tp-role-detail">{(() => { const role = roles.find((item) => item.id === activeRole) || roles[0]; return <><div className="tp-meta"><span>{role.dates}</span><span>{role.place}</span></div><h3>{role.title}</h3><span className="tp-company">@ {role.company}</span><p>{role.body}</p></>; })()}</article>
          </div>
        </section>

        <section className="tp-section" id="projects">
          <div className="tp-section-label"><b>02 / projects</b><span>2 artifacts found</span></div>
          <div className="tp-heading"><h2>Small systems.<br /><em>Clear intent.</em></h2><p>A few places where structure, interaction and curiosity met in the same codebase.</p></div>
          <div className="tp-project-toolbar">{["ALL", "SYSTEMS", "INTERFACE"].map((filter) => <button key={filter} className={`tp-filter ${projectFilter === filter ? "active" : ""}`} onClick={() => setProjectFilter(filter)}>{filter}</button>)}</div>
          <div className="tp-projects">{filteredProjects.map((project) => <article className="tp-project" key={project.key}><div><div className="tp-project-top"><span>{project.key} · {project.type}</span><ArrowUpRight size={15} style={{ color: project.accent }} /><h3>{project.title}</h3><p>{project.body}</p></div></div><div className="tp-stack">{project.stack.map((item) => <span key={item}>{item}</span>)}</div></article>)}</div>
        </section>

        <section className="tp-section" id="skills">
          <div className="tp-section-label"><b>03 / system status</b><span>last scan: now</span></div>
          <div className="tp-heading"><h2>What’s in<br /><em>the stack.</em></h2><p>Tools are only useful when they help the thinking stay legible.</p></div>
          <div className="tp-system"><div className="tp-console"><h3><Server size={13} /> CAPABILITY_LOAD</h3>{[["LANGUAGES","78%","JAVA · PYTHON · C · SQL"],["AI / ML","56%","TENSORFLOW · KERAS · PCA"],["WEB / DESIGN","68%","FIGMA · WIX · HTML/CSS"],["SYSTEMS","73%","UNIX · GIT · PYVISA"]].map(([name, load, tools]) => <div className="tp-console-row" key={name}><div><b>{name}</b><div className="tp-bar"><i style={{ width: load }} /></div></div><span>{tools}</span></div>)}</div><div className="tp-matrix"><h3><Radio size={13} /> SIGNAL_MATRIX</h3><div className="tp-matrix-grid">{[["CURRENT_ROLE","SYSTEM TEST"],["BASE","SOUTHAMPTON"],["LANGUAGE","EN / HI / FR"],["UPTIME","MEng · YEAR 1"],["MODE","CURIOUS"],["STATUS","AVAILABLE"]].map(([key, value], index) => <div className="tp-matrix-cell" key={key}><small>{key}</small><strong className={index === 5 ? "ok" : ""}>{index === 5 && <Check size={12} />} {value}</strong></div>)}</div></div></div>
        </section>

        <section className="tp-section" id="education"><div className="tp-section-label"><b>04 / education</b><span>foundations</span></div><div className="tp-heading"><h2>Learning the<br /><em>foundations.</em></h2><p>Formal study gives the questions somewhere rigorous to start.</p></div><div className="tp-role-grid"><div className="tp-role-tabs"><div className="tp-role-tab active">2025 — NOW</div><div className="tp-role-tab">2024 — 2025</div></div><article className="tp-role-detail"><div className="tp-meta"><span>SEP 2025 — PRESENT</span><span>UNITED KINGDOM</span></div><h3>University of Southampton</h3><span className="tp-company">MEng Computer Science (with Artificial Intelligence)</span><p>Average: 61% — on track for a 2:1. Algorithmics, data management, computer systems, networks & security, programming and applied mathematics.</p></article></div></section>

        <section className="tp-contact" id="contact"><div className="tp-section-label"><b>05 / contact</b><span>connection available</span></div><h2>Send a signal.<br /><span>Make it useful.</span></h2><p className="tp-contact-copy">Southampton, UK<br />Open to conversations about software, AI and the work between the two.</p><div className="tp-contact-links"><a className="tp-link" href="mailto:shlokpanjabi.work@gmail.com"><span>shlokpanjabi.work@gmail.com</span><Mail size={15} /></a><a className="tp-link" href="https://linkedin.com/in/shlok-panjabi" target="_blank" rel="noreferrer"><span>linkedin.com/in/shlok-panjabi</span><Linkedin size={15} /></a><a className="tp-link" href="https://github.com/shlokpanjabiwork" target="_blank" rel="noreferrer"><span>github.com/shlokpanjabiwork</span><Github size={15} /></a><a className="tp-link" href={cvPath} download="ShlokNavinPanjabi_CV.pdf"><span>download_cv.pdf</span><Download size={15} /></a></div></section>
        <footer className="tp-footer"><small>© 2026 SHLOK NAVIN PANJABI · <Power size={11} /> SESSION CLOSED CLEANLY</small><div className="tp-footer-links"><a href="#home">TOP</a><a href="mailto:shlokpanjabi.work@gmail.com">EMAIL</a></div></footer>
      </div>
      {commandOpen && <div className="tp-command" onClick={(event) => event.target === event.currentTarget && setCommandOpen(false)}><div className="tp-command-box"><form onSubmit={(event) => { event.preventDefault(); jump(command); }}><Command size={15} className="tp-arrow" /><input ref={inputRef} autoFocus value={command} onChange={(event) => setCommand(event.target.value)} placeholder="type a command: experience" /><span style={{ color: "var(--muted)", fontSize: 11 }}>ESC</span></form><div className="tp-command-help">{commands.map((item) => <button type="button" key={item} onClick={() => jump(item)}>/{item}</button>)}</div></div></div>}
    </main>
  );
}

export { TerminalPortfolio };
export default TerminalPortfolio;