import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import { go } from "../utils/scroll";

const LINKS = ["services", "work", "pricing", "process", "about"];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const jump = (id) => { go(id); setOpen(false); };
  return (
    <header className="nav">
      <div className="wrap nav-in">
        <button className="logo" onClick={() => jump("home")} aria-label="Leno Tech home"><i />Leno Tech</button>
        <nav className={`links ${open ? "open" : ""}`}>
          {LINKS.map((x) => <button key={x} onClick={() => jump(x)}>{x}</button>)}
          <button className="cta small" onClick={() => jump("contact")}>Start a project</button>
        </nav>
        <button className="burger" aria-label="Toggle menu" aria-expanded={open} onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
      </div>
    </header>
  );
}
