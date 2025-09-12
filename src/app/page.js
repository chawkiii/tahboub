// src/app/page.js
// Page: Homepage — aperçu produits (preview) + sections
import Hero from "../components/sections/Hero";
import Section from "../components/sections/Section";
import CategoryCardRotating from "@/components/ui/CategoryCardRotating";
import Link from "next/link";
import { productsPreview } from "../data/products";
import "../styles/cards.css";

export default function Home() {
  return (
    <main>
      <Hero />

      <Section title="Nos produits">
        <p>
          Découvrez une large gamme de produits : voitures, divers engins,
          machines industrielles, matières premières, équipements agricoles et
          bien plus encore.
        </p>

        <ul className="products-grid">
          {productsPreview.map((p, i) => (
            <CategoryCardRotating
              key={i}
              title={p.title}
              description={p.description}
              category={p.category}
              href={p.href}
            />
          ))}
        </ul>

        <div style={{ textAlign: "center", marginTop: 20 }}>
          <Link href="/products" className="cta-link">
            Voir tous les produits
          </Link>
        </div>
      </Section>
    </main>
  );
}
