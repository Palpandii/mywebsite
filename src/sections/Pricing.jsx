import React from "react";
import { ArrowUpRight, Check } from "lucide-react";
import { plans } from "../data/content";
import { go } from "../utils/scroll";

export default function Pricing() {
  return (
    <section id="pricing" className="sec wrap">
      <p className="label">Pricing</p>
      <h2>Pick a starting point. We tailor it to your project.</h2>
      <div className="grid gap-4 md:grid-cols-3">
        {plans.map((p) => (
          <div key={p.n} className={`card ${p.hot ? "ring-1 ring-aurora-gradient" : ""}`}>
            <span className="label">{p.n}{p.hot ? " · most chosen" : ""}</span>
            <div className="text-5xl font-medium tracking-tight text-lavender-phosphor">{p.p}</div>
            <p>{p.d}</p>
            <ul className="grid gap-2 text-liquid-mist">
              {p.f.map((x) => <li key={x} className="flex gap-2 text-sm"><Check size={16} className="mt-0.5 shrink-0" />{x}</li>)}
            </ul>
            <button className="link" onClick={() => go("contact")}>Get a quote <ArrowUpRight size={15} /></button>
          </div>
        ))}
      </div>
    </section>
  );
}
