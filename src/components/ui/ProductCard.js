// src/components/ui/ProductCard.js

"use client";

export default function ProductCard({ title, description, images = [], href = "#" }) {
  return (
    <li className="product-card">
      <a href={href}>
        {images.length > 0 && (
          <img 
            src={images[0]} 
            alt={title} 
            className="product-image" 
          />
        )}
        <div className="product-info">
          <h3>{title}</h3>
          <p>{description}</p>
          <button className="card-btn">Voir plus</button>
        </div>
      </a>
    </li>
  );
}
