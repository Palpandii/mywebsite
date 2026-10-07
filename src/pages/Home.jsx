import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import WhatsAppButton from "../components/WhatsAppButton";
import Hero from "../sections/Hero";
import Stats from "../sections/Stats";
import Services from "../sections/Services";
import Projects from "../sections/Projects";
import Pricing from "../sections/Pricing";
import Process from "../sections/Process";
import BusinessSelector from "../sections/BusinessSelector";
import About from "../sections/About";
import Contact from "../sections/Contact";
import { go } from "../utils/scroll";

export default function Home() {
  const [form, setForm] = useState({ name: "", business: "", type: "Business website", message: "" });
  const prefill = (type, message) => { setForm((f) => ({ ...f, type, message })); go("contact"); };
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <Services />
        <Projects />
        <Pricing />
        <Process />
        <BusinessSelector onPick={prefill} />
        <About />
        <Contact form={form} setForm={setForm} />
      </main>
      <Footer />
      <WhatsAppButton />
    </>
  );
}
