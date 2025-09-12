// src/data/products.js
// Updated dataset (images grouped heuristically from /public/products).
// NOTE: certaines titles/descriptions sont indicatives / à confirmer — ajuste selon tes modèles exacts.

export const productImages = {
  cars: [
    "/products/cars/carjet01.jpeg",
    "/products/cars/carjet02.jpeg",
    "/products/cars/carjet03.jpeg",
    "/products/cars/carjet04.jpeg",
    "/products/cars/carjet05.jpeg",
    "/products/cars/carjet06.jpeg",
    "/products/cars/carjet07.jpeg",
    "/products/cars/carjet08.jpeg",
    "/products/cars/carjet09.jpeg",
    "/products/cars/carjet10.jpeg",
    "/products/cars/carjet11.jpeg",
    "/products/cars/carjet12.jpeg",
    "/products/cars/carjet13.jpeg",
    "/products/cars/carjet14.jpeg",
    "/products/cars/carjet15.jpeg",
    "/products/cars/carjet16.jpeg",
    "/products/cars/carjet17.jpeg",
    "/products/cars/carjet18.jpeg",
    "/products/cars/carjet19.jpeg",
    "/products/cars/carjet20.jpeg",
    "/products/cars/carjet21.jpeg",
    "/products/cars/carjet22.jpeg",
    "/products/cars/carjet23.jpeg",
    "/products/cars/carjet29.jpeg",
    "/products/cars/carjet33.jpeg",
    "/products/cars/carjet34.jpeg",
    "/products/cars/carjet81.jpeg",
    "/products/cars/carp200801.jpeg",
    "/products/cars/carp200802.jpeg",
    "/products/cars/carp200803.jpeg",
    "/products/cars/carp200804.jpeg",
    "/products/cars/carp200805.jpeg",
    "/products/cars/carp200806.jpeg",
    "/products/cars/carp200807.jpeg",
    "/products/cars/carsko01.jpeg",
    "/products/cars/carsko02.jpeg",
    "/products/cars/carsko03.jpeg",
    "/products/cars/carsko04.jpeg",
    "/products/cars/carsko05.jpeg",
    "/products/cars/carsko06.jpeg",
    "/products/cars/carsko07.jpeg",
    "/products/cars/carsko08.jpeg",
    "/products/cars/carsko09.jpeg",
    "/products/cars/carsko10.jpeg",
    "/products/cars/carsko11.jpeg",
    "/products/cars/carsko71.jpeg",
    "/products/cars/carsko88.jpeg",
    "/products/cars/carw05.jpeg",
    "/products/cars/carw10.jpeg",
    "/products/cars/carw100.jpeg",
    "/products/cars/carw101.jpeg",
    "/products/cars/carw105.jpeg",
    "/products/cars/carw11.jpeg",
    "/products/cars/carw12.jpeg",
    "/products/cars/carw15.jpeg",
    "/products/cars/carw46.jpeg",
    "/products/cars/carw49.jpeg",
    "/products/cars/carw51.jpeg",
    "/products/cars/carw52.jpeg",
    "/products/cars/carw53.jpeg",
    "/products/cars/carw56.jpeg",
    "/products/cars/carw57.jpeg",
    "/products/cars/carw59.jpeg",
    "/products/cars/carw61.jpeg",
    "/products/cars/carw63.jpeg",
    "/products/cars/carw64.jpeg",
    "/products/cars/carw70.jpeg",
    "/products/cars/carw79.jpeg",
    "/products/cars/carw83.jpeg",
    "/products/cars/carw84.jpeg",
    "/products/cars/carw90.jpeg",
    "/products/cars/carw98.jpeg",
    "/products/cars/carw99.jpeg",
    "/products/cars/carwg01.jpeg",
    "/products/cars/carwg02.jpeg",
    "/products/cars/carwg03.jpeg",
    "/products/cars/carwg04.jpeg",
    "/products/cars/carwg05.jpeg",
    "/products/cars/carwp01.jpeg",
    "/products/cars/carwp02.jpeg",
    "/products/cars/carwp03.jpeg"
  ],
  engins: [
    "/products/engins/engin01.jpeg",
    "/products/engins/engin02.jpeg",
    "/products/engins/engin03.jpeg",
    "/products/engins/engin04.jpeg",
    "/products/engins/engin05.jpeg",
    "/products/engins/engin06.jpeg",
    "/products/engins/engin07.jpeg",
    "/products/engins/engin08.jpeg",
    "/products/engins/engin09.jpeg",
    "/products/engins/engin10.jpeg",
    "/products/engins/engin11.jpeg",
    "/products/engins/engin12.jpeg",
    "/products/engins/engin13.jpeg"
  ],
  machines: [
    "/products/machines/machine01.jpg",
    "/products/machines/machine02.png",
    "/products/machines/machine03.png"
  ],
  raw: ["/products/raw/raw01.jpg", "/products/raw/raw02.jpg"],
  agri: [
    "/products/agri/agri01.jpg",
    "/products/agri/agri02.jpg",
    "/products/agri/agri03.jpg",
    "/products/agri/agri04.jpg",
    "/products/agri/agri05.jpg",
    "/products/agri/agri06.jpg",
    "/products/agri/agri07.jpg",
  ],
  services: ["/services/ser01.png", "/services/ser02.jpg"]
};

// --- Liste des produits détaillés (groupés, prêt à l'emploi pour /products) ---
export const products = [
  // --- Cars (grouped by filename patterns) ---
  {
    title: "Jetour X70",
    images: [
      "/products/cars/carjet01.jpeg",
      "/products/cars/carjet02.jpeg",
      "/products/cars/carjet03.jpeg",
      "/products/cars/carjet04.jpeg",
      "/products/cars/carjet05.jpeg",
      "/products/cars/carjet06.jpeg",
      "/products/cars/carjet07.jpeg",
      "/products/cars/carjet08.jpeg",
      "/products/cars/carjet09.jpeg",
      "/products/cars/carjet10.jpeg",
      "/products/cars/carjet11.jpeg",
      "/products/cars/carjet12.jpeg",
      "/products/cars/carjet13.jpeg",
      "/products/cars/carjet14.jpeg",
      "/products/cars/carjet15.jpeg",
      "/products/cars/carjet16.jpeg",
      "/products/cars/carjet17.jpeg",
      "/products/cars/carjet18.jpeg",
      "/products/cars/carjet19.jpeg",
      "/products/cars/carjet20.jpeg",
      "/products/cars/carjet21.jpeg",
      "/products/cars/carjet22.jpeg",
      "/products/cars/carjet23.jpeg",
      "/products/cars/carjet29.jpeg",
      "/products/cars/carjet33.jpeg",
      "/products/cars/carjet34.jpeg",
      "/products/cars/carjet81.jpeg"
    ],
    description: "SUV chinois (images Jetour regroupées). Vérifier modèle exact si besoin.",
    category: "cars",
    href: "/products/cars/jetour-x70"
  },
  {
    title: "Peugeot 2008",
    images: [
      "/products/cars/carp200801.jpeg",
      "/products/cars/carp200802.jpeg",
      "/products/cars/carp200803.jpeg",
      "/products/cars/carp200804.jpeg",
      "/products/cars/carp200805.jpeg",
      "/products/cars/carp200806.jpeg",
      "/products/cars/carp200807.jpeg"
    ],
    description: "Peugeot 2008 — série d'images groupées (vérifier si toutes appartiennent au même modèle).",
    category: "cars",
    href: "/products/cars/peugeot-2008"
  },
  {
    title: "Volkswagen T-Roc",
    images: ["/products/cars/carw05.jpeg", "/products/cars/carw10.jpeg"],
    description: "T-Roc — aperçu rapide (images principales).",
    category: "cars",
    href: "/products/cars/volkswagen-t-roc"
  },
  {
    title: "Volkswagen — autres modèles (à confirmer)",
    images: [
      // reste des fichiers carw*
      "/products/cars/carw100.jpeg",
      "/products/cars/carw101.jpeg",
      "/products/cars/carw105.jpeg",
      "/products/cars/carw11.jpeg",
      "/products/cars/carw12.jpeg",
      "/products/cars/carw15.jpeg",
      "/products/cars/carw46.jpeg",
      "/products/cars/carw49.jpeg",
      "/products/cars/carw51.jpeg",
      "/products/cars/carw52.jpeg",
      "/products/cars/carw53.jpeg",
      "/products/cars/carw56.jpeg",
      "/products/cars/carw57.jpeg",
      "/products/cars/carw59.jpeg",
      "/products/cars/carw61.jpeg",
      "/products/cars/carw63.jpeg",
      "/products/cars/carw64.jpeg",
      "/products/cars/carw70.jpeg",
      "/products/cars/carw79.jpeg",
      "/products/cars/carw83.jpeg",
      "/products/cars/carw84.jpeg",
      "/products/cars/carw90.jpeg",
      "/products/cars/carw98.jpeg",
      "/products/cars/carw99.jpeg",
      "/products/cars/carwg01.jpeg",
      "/products/cars/carwg02.jpeg",
      "/products/cars/carwg03.jpeg",
      "/products/cars/carwg04.jpeg",
      "/products/cars/carwg05.jpeg",
      "/products/cars/carwp01.jpeg",
      "/products/cars/carwp02.jpeg",
      "/products/cars/carwp03.jpeg"
    ],
    description:
      "Regroupement d'images Volkswagen (noms wg / wp / w / autres). Modèles à identifier précisément si besoin.",
    category: "cars",
    href: "/products/cars/volkswagen-others"
  },
  {
    title: "Golf 8",
    images: ["/products/cars/carsko01.jpeg", "/products/cars/carsko02.jpeg"],
    description: "Compacte allemande (exemples d'images).",
    category: "cars",
    href: "/products/cars/golf-8"
  },
  {
    title: "Skoda / autres (à confirmer)",
    images: [
      "/products/cars/carsko03.jpeg",
      "/products/cars/carsko04.jpeg",
      "/products/cars/carsko05.jpeg",
      "/products/cars/carsko06.jpeg",
      "/products/cars/carsko07.jpeg",
      "/products/cars/carsko08.jpeg",
      "/products/cars/carsko09.jpeg",
      "/products/cars/carsko10.jpeg",
      "/products/cars/carsko11.jpeg",
      "/products/cars/carsko71.jpeg",
      "/products/cars/carsko88.jpeg"
    ],
    description: "Images supplémentaires (prefix carsko). Vérifier attribution marque/modèle.",
    category: "cars",
    href: "/products/cars/skoda-others"
  },

  // --- Engins (conservés / 2 exemples, complète selon besoin) ---
  {
    title: "Mini-pelle hydraulique",
    images: ["/products/engins/engin01.jpeg"],
    description: "Engin polyvalent pour le BTP et les petits chantiers.",
    category: "engins",
    href: "/products/engins/mini-pelle"
  },
  {
    title: "Chargeuse sur pneus",
    images: ["/products/engins/engin02.jpeg"],
    description: "Machine robuste pour le transport et le terrassement.",
    category: "engins",
    href: "/products/engins/chargeuse"
  },

  // (tu peux ajouter ici d'autres engins en réutilisant engin03..13)

  // --- Machines ---
  {
    title: "Ligne de production textile",
    images: ["/products/machines/machine01.jpg"],
    description: "Solution clé-en-main pour la confection et l’assemblage textile.",
    category: "machines",
    href: "/products/machines/textile"
  },
  {
    title: "Presse hydraulique",
    images: ["/products/machines/machine02.png"],
    description: "Machine de précision pour l’emboutissage et la découpe.",
    category: "machines",
    href: "/products/machines/presse"
  },

  // --- Matières premières ---
  {
    title: "Acier laminé",
    images: ["/products/raw/raw01.jpg"],
    description: "Matériau robuste pour construction et industrie lourde.",
    category: "raw",
    href: "/products/raw/acier"
  },
  {
    title: "Plastique granulé",
    images: ["/products/raw/raw02.jpg"],
    description: "Matière première pour l’injection et l’extrusion.",
    category: "raw",
    href: "/products/raw/plastique"
  },

  // --- Agriculture ---
  {
    title: "Serre multichapelle",
    images: ["/products/agri/agri01.jpg"],
    description: "Serre moderne pour cultures maraîchères et florales.",
    category: "agri",
    href: "/products/agri/serre"
  },
  {
    title: "Système d’irrigation goutte-à-goutte",
    images: ["/products/agri/agri02.jpg"],
    description: "Solution économe en eau pour une irrigation efficace.",
    category: "agri",
    href: "/products/agri/irrigation"
  },

  // --- Services ---
  {
    title: "Transit & Douane",
    images: ["/services/ser01.png"],
    description: "Prise en charge complète des formalités douanières.",
    category: "services",
    href: "/products/services/transit"
  },
  {
    title: "Logistique internationale",
    images: ["/services/ser02.jpg"],
    description: "Transport maritime, aérien et terrestre avec suivi.",
    category: "services",
    href: "/products/services/logistique"
  }
];

// --- Les previews utilisés sur la homepage ---
export const productsPreview = [
  {
    title: "Véhicules",
    icon: "🚗",
    description: "Voitures neuves ou d'occasion.",
    category: "cars",
    href: "/products#cars"
  },
  {
    title: "Engins de chantier",
    icon: "🚜",
    description: "Camions, mini-pelles et engins de chantier ou de transport.",
    category: "engins",
    href: "/products#engins"
  },
  {
    title: "Machines industrielles",
    icon: "⚙️",
    description: "Lignes de production, presses, convoyeurs, solutions clé-en-main.",
    category: "machines",
    href: "/products#machines"
  },
  {
    title: "Matières premières",
    icon: "📦",
    description: "Acier, plastique, textiles et autres matériaux industriels.",
    category: "raw",
    href: "/products#raw"
  },
  {
    title: "Équipements agricoles",
    icon: "🌱",
    description: "Serres, systèmes d'irrigation et matériels agricoles.",
    category: "agri",
    href: "/products#agri"
  },
  {
    title: "Services à l’export",
    icon: "🚢",
    description: "Transit, douane, logistique et accompagnement export.",
    category: "services",
    href: "/products#services"
  }
];
