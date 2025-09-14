// src/components/ui/CategoryCardRotating.js
"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { productImages } from "@/data/products";

export default function CategoryCardRotating({
  title,
  description,
  category,
  href = "/products",
}) {
  const images = productImages[category] || [];
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (images.length > 0) {
      const initial = Math.floor(Math.random() * images.length);
      setCurrent(initial);
    }
  }, [images]);

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
          >
            <Image
              src={src}
              alt={title}
              fill
              sizes="(max-width: 768px) 100vw, 300px"
              quality={70}
              priority={i === current}
              style={{ objectFit: "cover" }}
            />
          </div>
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
