// src/data/products.js

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
  raw: [
    "/products/raw/raw01.jpg",
    "/products/raw/raw02.jpg",
    "/products/raw/raw03.jpg",
    "/products/raw/raw04.jpg",
  ],
  agri: [
    "/products/agri/agri01.jpg",
    "/products/agri/agri02.jpg",
    "/products/agri/agri03.jpg",
    "/products/agri/agri04.jpg",
    "/products/agri/agri05.jpg",
    "/products/agri/agri06.jpg",
    "/products/agri/agri07.jpg",
  ],
  services: [
    "/services/ser01.png",
    "/services/ser02.jpg",
    "/services/ser03.jpg"
  ]
};

// --- Liste des produits détaillés (groupés, prêt à l'emploi pour /products) ---
export const products = [
  // --- Cars ---
  {
    title: "Jetour",
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
    description: "SUV Jetour : une gamme moderne alliant confort, performance et design, parfaitement adaptée aux marchés internationaux.",
    category: "cars",
    href: "/products/cars/jetour"
  },
  {
    title: "Peugeot",
    images: [
      "/products/cars/carp200801.jpeg",
      "/products/cars/carp200802.jpeg",
      "/products/cars/carp200803.jpeg",
      "/products/cars/carp200804.jpeg",
      "/products/cars/carp200805.jpeg",
      "/products/cars/carp200806.jpeg",
      "/products/cars/carp200807.jpeg"
    ],
    description: "Véhicules Peugeot : robustesse, élégance et innovation pour des besoins variés.",
    category: "cars",
    href: "/products/cars/peugeot"
  },
  {
    title: "Volkswagen",
    images: [
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
      "/products/cars/carwp03.jpeg",
      "/products/cars/carw05.jpeg",
      "/products/cars/carw10.jpeg",
      "/products/cars/carsko01.jpeg",
      "/products/cars/carsko02.jpeg"
    ],
    description: "Volkswagen : modèles fiables et polyvalents, reconnus mondialement pour leur performance et durabilité.",
    category: "cars",
    href: "/products/cars/volkswagen"
  },
  {
    title: "Skoda",
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
    description: "Skoda : véhicules économiques et modernes, conçus pour répondre aux exigences du marché global.",
    category: "cars",
    href: "/products/cars/skoda"
  },

  // --- Engins ---
  {
    title: "Mini-pelle hydraulique",
    images: [
      "/products/engins/engin01.jpeg",
      "/products/engins/engin03.jpeg",
      "/products/engins/engin04.jpeg",
      "/products/engins/engin05.jpeg",
      "/products/engins/engin06.jpeg",
      "/products/engins/engin07.jpeg",
    ],
    description: "Mini-pelles robustes et maniables, idéales pour les travaux de terrassement et de construction.",
    category: "engins",
    href: "/products/engins/mini-pelle"
  },
  {
    title: "Chargeuse sur pneus",
    images: [
      "/products/engins/engin08.jpeg",
      "/products/engins/engin09.jpeg",
      "/products/engins/engin10.jpeg",
      "/products/engins/engin11.jpeg",
      "/products/engins/engin12.jpeg",
      "/products/engins/engin13.jpeg"
    ],
    description: "Chargeuses puissantes, conçues pour le transport de matériaux et les grands chantiers.",
    category: "engins",
    href: "/products/engins/chargeuse"
  },

  // --- Machines ---
  {
    title: "Ligne de production textile",
    images: ["/products/machines/machine01.jpg"],
    description: "Lignes complètes pour la confection textile, adaptées aux industries de grande échelle.",
    category: "machines",
    href: "/products/machines/textile"
  },
  {
    title: "Presse hydraulique",
    images: ["/products/machines/machine02.png"],
    description: "Presse haute performance pour emboutissage, formage et découpe industrielle.",
    category: "machines",
    href: "/products/machines/presse"
  },
  {
    title: "Convoyeur industriel",
    images: ["/products/machines/machine03.png"],
    description: "Convoyeurs modulaires pour le transport automatisé de produits et matières.",
    category: "machines",
    href: "/products/machines/convoyeur"
  },

  // --- Matières premières ---
  {
    title: "Acier laminé",
    images: ["/products/raw/raw01.jpg"],
    description: "Acier de haute qualité, essentiel pour la construction et l’industrie lourde.",
    category: "raw",
    href: "/products/raw/acier"
  },
  {
    title: "Plastique granulé",
    images: ["/products/raw/raw02.jpg"],
    description: "Granulés plastiques pour injection et extrusion, utilisés dans divers secteurs industriels.",
    category: "raw",
    href: "/products/raw/plastique"
  },
  {
    title: "Textiles en rouleaux",
    images: ["/products/raw/raw03.jpg"],
    description: "Rouleaux textiles variés pour l’habillement, la décoration et l’industrie.",
    category: "raw",
    href: "/products/raw/textiles"
  },
  {
    title: "Matériaux composites",
    images: ["/products/raw/raw04.jpg"],
    description: "Matériaux avancés, légers et résistants, pour aéronautique et automobile.",
    category: "raw",
    href: "/products/raw/composites"
  },

  // --- Agriculture ---
  {
    title: "Tracteurs agricoles",
    images: [
      "/products/agri/agri01.jpg",
      "/products/agri/agri02.jpg",
      "/products/agri/agri03.jpg",
      "/products/agri/agri04.jpg",
    ],
    description: "Tracteurs modernes et fiables, adaptés aux travaux agricoles intensifs.",
    category: "agri",
    href: "/products/agri/tracteurs"
  },
  {
    title: "Système hydroponique",
    images: ["/products/agri/agri06.jpg", "/products/agri/agri07.jpg"],
    description: "Systèmes hydroponiques innovants, permettant une culture économe en eau et en espace.",
    category: "agri",
    href: "/products/agri/hydroponique"
  },
  {
    title: "Serre agricole",
    images: ["/products/agri/agri05.jpg"],
    description: "Serres intelligentes et modulaires pour la production agricole moderne.",
    category: "agri",
    href: "/products/agri/serres"
  },

  // --- Services ---
  {
    title: "Transit & Douane",
    images: ["/services/ser01.png"],
    description: "Gestion complète des formalités douanières et du transit international.",
    category: "services",
    href: "/products/services/transit"
  },
  {
    title: "Logistique internationale",
    images: ["/services/ser02.jpg"],
    description: "Solutions de transport maritime, aérien et terrestre avec suivi intégré.",
    category: "services",
    href: "/products/services/logistique"
  },
  {
    title: "Accompagnement export",
    images: ["/services/ser03.jpg"],
    description: "Conseil et support pour réussir vos projets à l’international.",
    category: "services",
    href: "/products/services/accompagnement"
  }
];

// --- Previews pour la homepage ---
export const productsPreview = [
  {
    title: "Véhicules",
    description: "Large gamme de voitures neuves et d’occasion pour différents marchés.",
    category: "cars",
    href: "/products#cars"
  },
  {
    title: "Engins de chantier",
    description: "Mini-pelles, chargeuses et engins robustes pour le BTP et l’industrie.",
    category: "engins",
    href: "/products#engins"
  },
  {
    title: "Machines industrielles",
    description: "Lignes de production, presses, convoyeurs et solutions clé-en-main.",
    category: "machines",
    href: "/products#machines"
  },
  {
    title: "Matières premières",
    description: "Acier, plastique, textiles et matériaux composites de qualité.",
    category: "raw",
    href: "/products#raw"
  },
  {
    title: "Équipements agricoles",
    description: "Tracteurs, serres modernes et systèmes hydroponiques innovants.",
    category: "agri",
    href: "/products#agri"
  },
  {
    title: "Services à l’export",
    description: "Transit, douane, logistique et accompagnement commercial.",
    category: "services",
    href: "/products#services"
  }
];
