// src/app/products/page.js
// Page: Liste des produits (catalogue complet)

import Section from "../../components/sections/Section";
import ProductCardRotating from "../../components/ui/ProductCard";
import { products, productsPreview } from "../../data/products";
import "../../styles/cards.css";

export default function ProductsPage() {
  return (
    <main>
      <Section
        id="products"
        title="Catalogue complet"
        subtitle="Découvrez notre sélection de produits par catégories"
      >
        {productsPreview.map((category, index) => {
          // On filtre les produits de cette catégorie (max 12)
          const categoryProducts = products
            .filter((p) => p.category === category.category)
            .slice(0, 12);

          return (
            <section
              key={index}
              id={category.category}
              className="category-section"
            >
              <h2 className="category-title">
                {category.icon} {category.title}
              </h2>
              <p className="category-description">{category.description}</p>

              <ul className="products-grid">
                {categoryProducts.map((product, i) => (
                  <ProductCardRotating
                    key={i}
                    title={product.title}
                    images={product.images} // tableau d’images (tu peux gérer 1 ou plusieurs dans ta Card)
                    description={product.description}
                    category={product.category}
                    href={product.href}
                  />
                ))}
              </ul>
            </section>
          );
        })}
      </Section>
    </main>
  );
}
