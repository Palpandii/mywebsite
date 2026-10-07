import React from "react";
import { ArrowUpRight } from "lucide-react";
import { services } from "../data/content";
import { wa } from "../utils/whatsapp";

export default function Services() {
  return (
    <section id="services" className="sec wrap">
      <p className="label">What we build</p>
      <h2>Everything your business needs online, built in one place.</h2>
      <div className="rows">
        {services.map((s) => (
          <div className="rowcard" key={s.t}>
            <h3>{s.t}</h3><p>{s.d}</p>
            <button className="arrow" aria-label={`Discuss ${s.t}`} onClick={() => wa(`Hi Leno Tech, I'm interested in ${s.t.toLowerCase()}.`)}><ArrowUpRight size={16} /></button>
          </div>
        ))}
      </div>
    </section>
  );
}
