import React from "react";
import { steps } from "../data/content";

export default function Process() {
  return (
    <section id="process" className="sec wrap">
      <p className="label">How it works</p>
      <h2>Four steps from first call to live site.</h2>
      <ol className="steps">
        {steps.map(([t, d], i) => <li key={t}><b>{i + 1}</b><h3>{t}</h3><p>{d}</p></li>)}
      </ol>
    </section>
  );
}
