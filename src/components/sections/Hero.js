// src/components/Hero.js
"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { heroSlides } from "../../data/hero";
import "../../styles/hero.css";

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleScroll = () => setOffsetY(window.scrollY * 0.5);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="hero">
      <div
        className="hero-bg"
        style={{ transform: `translateY(${offsetY}px)` }}
      >
        <Image
          src={heroSlides[current].image}
          alt={heroSlides[current].title}
          fill
          priority
          sizes="100vw"
          style={{ objectFit: "cover" }}
        />
      </div>
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
