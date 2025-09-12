// src/components/Hero.js

"use client";

import { useState, useEffect } from "react";
import { heroSlides } from "../../data/hero";
import "../../styles/hero.css";

export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      className="hero"
      style={{ backgroundImage: `url(${heroSlides[current].image})` }}
    >
      <div className="hero-content">
        <h1>{heroSlides[current].title}</h1>
        <p>{heroSlides[current].text}</p>

        <div className="hero-dots">
          {heroSlides.map((slide, index) => (
            <span
              key={slide.id}
              className={index === current ? "dot active" : "dot"}
              onClick={() => setCurrent(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
