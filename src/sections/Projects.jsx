import React from "react";
import { ArrowUpRight } from "lucide-react";
import { projects } from "../data/content";
import { wa } from "../utils/whatsapp";

export default function Projects() {
  return (
    <section id="work" className="sec wrap">
      <p className="label">Selected work</p>
      <h2>Products we have built and shipped.</h2>
      <div className="cards">
        {projects.map((p) => (
          <article className="card" key={p.n}>
            <span className="label">{p.k}</span>
            <h3>{p.n}</h3>
            <div><span className="text-6xl font-medium leading-none tracking-tighter text-lavender-phosphor">{p.big}</span> <span className="label mt-2 block">{p.bl}</span></div>
            <p>{p.d}</p>
            <small>{p.s}</small>
            <div className="mt-auto flex flex-wrap gap-x-6 gap-y-3">
              {p.url && (
                <a className="link !text-platinum" href={p.url} target="_blank" rel="noopener noreferrer">
                  View live site <ArrowUpRight size={15} />
                </a>
              )}
              <button className="link" style={{ marginTop: 0 }} onClick={() => wa(`Hi Leno Tech, I saw ${p.n} and want something similar.`)}>Build something similar <ArrowUpRight size={15} /></button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
