// src/app/about/page.js
"use client";

import Section from "../../components/sections/Section";

export default function AboutPage() {
  return (
    <main>
      <Section title="À propos de TAHBOUB">
        <p>
          Fondée dans les années 90 en Chine par <strong>M. Abbes</strong>, 
          <strong> TAHBOUB </strong> est aujourd’hui un acteur majeur de 
          l’import-export international. Nous accompagnons nos partenaires 
          sur <strong>5 continents</strong> avec une offre flexible et 
          adaptée à tous les marchés.
        </p>
        <p>
          Notre expertise couvre <em>tout ce qui se vend en Chine</em> : 
          machines industrielles, véhicules, matières premières, équipements 
          agricoles et bien plus encore. Nous garantissons à nos clients 
          <strong> qualité, rapidité et solutions sur mesure</strong>.
        </p>
      </Section>

      <Section title="Notre mission">
        <p>
          Faciliter l’accès aux meilleurs produits et machines de Chine, 
          tout en offrant un accompagnement complet : sourcing, 
          logistique, formation et services après-vente.
        </p>
      </Section>

      <Section title="Notre vision">
        <p>
          Devenir le <strong>pont incontournable entre la Chine et le reste 
          du monde</strong>, en connectant les marchés émergents et développés 
          grâce à des solutions d’import-export fiables et innovantes.
        </p>
      </Section>

      <Section title="Notre ambition">
        <p>
          Élargir notre réseau de <strong>partenariats stratégiques</strong> 
          et continuer à innover pour offrir à nos clients un service 
          d’<strong>excellence internationale</strong>.
        </p>
      </Section>

      <Section title="Partenariats">
        <p>
          TAHBOUB collabore avec des <strong>fabricants de premier plan</strong>, 
          des institutions de formation et des partenaires logistiques à travers 
          le monde. (Liste détaillée à venir avec le client).
        </p>
      </Section>
    </main>
  );
}
