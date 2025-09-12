// src/components/ui/CategoryCardRotating.js
"use client";

import { useState, useEffect } from "react";
import { productImages } from "@/data/products";

export default function CategoryCardRotating({
  title,
  description,
  category,
  href = "/products",
}) {
  const images = productImages[category] || [];
  const [current, setCurrent] = useState(0);

  // au montage → choisir un index random stable côté client
  useEffect(() => {
    if (images.length > 0) {
      const initial = Math.floor(Math.random() * images.length);
      setCurrent(initial);
    }
  }, [images]);

  // rotation toutes les 10s
  useEffect(() => {
    if (images.length <= 1) return;

    const id = setInterval(() => {
      setCurrent((prev) => {
        let next = prev;
        while (next === prev) {
          next = Math.floor(Math.random() * images.length);
        }
        return next;
      });
    }, 10000);

    return () => clearInterval(id);
  }, [images]);

  // placeholder si pas d'image
  if (!images.length) {
    return (
      <li className="product-card">
        
          <div className="card-image" />
          <div className="card-body">
            <h3 className="card-title">{title}</h3>
            <p className="card-desc">{description}</p>
          <a href={href}>
            <span className="card-button">Découvrir</span>
          </a>
          </div>
        
      </li>
    );
  }

  return (
    <li className="product-card">
      
        <div className="card-image">
          {images.map((src, i) => (
            <div
              key={src}
              className={`card-img ${i === current ? "active" : ""}`}
              style={{
                backgroundImage: `url(${src})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
              aria-hidden={i === current ? "false" : "true"}
            />
          ))}
        </div>

        <div className="card-body">
          <h3 className="card-title">{title}</h3>
          <p className="card-desc">{description}</p>
          <a href={href}>
          <span className="card-button">Découvrir</span>
          </a>
        </div>
      
    </li>
  );
}
