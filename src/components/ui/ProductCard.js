// src/components/ui/ProductCard.js
export default function ProductCard({ title, images = [], description, href }) {
  const mainImage = images[0] || "/placeholder.jpg";

  return (
    <li className="product-card">
      <div className="card-image">
        <img src={mainImage} alt={title} loading="lazy" />
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
