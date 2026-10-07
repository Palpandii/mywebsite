import React from "react";
import { Send } from "lucide-react";
import { EMAIL } from "../data/content";
import { wa } from "../utils/whatsapp";

const TYPES = ["Business website", "Online store", "Custom web app", "AI feature", "Not sure yet"];

export default function Contact({ form, setForm }) {
  const up = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const submit = (e) => {
    e.preventDefault();
    wa(`Hi Leno Tech, I want to start a project.\nName: ${form.name}\nBusiness: ${form.business}\nType: ${form.type}\nDetails: ${form.message}`);
  };
  return (
    <section id="contact" className="sec wrap contact">
      <div>
        <p className="label">Contact</p>
        <h2>Tell us what you want to build.</h2>
        <p className="lead">Fill in the form and it opens in WhatsApp, ready to send, or start a chat directly. You can also write to {EMAIL}.</p>
        <button className="cta" onClick={() => wa("Hi Leno Tech, I want to discuss a project.")}>Chat on WhatsApp</button>
      </div>
      <form className="card form" onSubmit={submit}>
        <label>Your name<input required name="name" value={form.name} onChange={up} placeholder="Name" /></label>
        <label>Business name<input required name="business" value={form.business} onChange={up} placeholder="Business" /></label>
        <label>What do you need?
          <select name="type" value={form.type} onChange={up}>{TYPES.map((t) => <option key={t}>{t}</option>)}</select>
        </label>
        <label>Project details<textarea required rows="4" name="message" value={form.message} onChange={up} placeholder="What should it do?" /></label>
        <button className="cta full" type="submit">Send on WhatsApp <Send size={16} /></button>
      </form>
    </section>
  );
}
