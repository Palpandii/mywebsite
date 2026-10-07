import React from "react";
import { motion } from "framer-motion";
import Sphere from "../components/Sphere";
import { go } from "../utils/scroll";

export default function Hero() {
  return (
    <section id="home" className="hero">
      <Sphere />
      <motion.div className="wrap hero-in" initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: "easeOut" }}>
        <p className="label">Leno Tech · Tamil Nadu, India</p>
        <h1>Websites and software that make your business look and run better.</h1>
        <p className="lead">We design and build premium websites, online stores and custom business systems, from the screen your customers see to the database behind it.</p>
        <div className="row">
          <button className="cta" onClick={() => go("contact")}>Start a project</button>
          <button className="ghost" onClick={() => go("work")}>See our work</button>
        </div>
      </motion.div>
    </section>
  );
}
