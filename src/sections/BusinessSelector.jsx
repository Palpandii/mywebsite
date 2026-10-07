import React, { useState } from "react";
import { motion } from "framer-motion";
import { biz } from "../data/content";

export default function BusinessSelector({ onPick }) {
  const [sel, setSel] = useState("Retail / Shop");
  const [type, desc] = biz[sel];
  return (
    <section className="sec wrap">
      <p className="label">Not sure what you need?</p>
      <h2>Pick your business and see where to start.</h2>
      <div className="grid gap-6 lg:grid-cols-2">
        <div className="flex flex-wrap content-start gap-2">
          {Object.keys(biz).map((b) => (
            <button key={b} aria-pressed={sel === b} onClick={() => setSel(b)}
              className={`rounded-md px-5 py-3 text-sm transition ${sel === b ? "bg-aurora-gradient text-liquid-abyss" : "bg-liquid-kelp text-liquid-mist hover:bg-[#03514b]"}`}>{b}</button>
          ))}
        </div>
        <motion.div key={sel} className="card" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.35 }}>
          <span className="label">Recommended for {sel.toLowerCase()}</span>
          <h3>{type}</h3>
          <p>{desc}</p>
          <button className="cta" style={{ marginTop: "auto", alignSelf: "flex-start" }}
            onClick={() => onPick(type, `I run a ${sel.toLowerCase()} business and need a ${type.toLowerCase()}.`)}>
            Get a quote for this
          </button>
        </motion.div>
      </div>
    </section>
  );
}
