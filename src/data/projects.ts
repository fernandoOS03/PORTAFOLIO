// Data — Projects
export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  problem: string;
  solution: string;
  stack: string[]; // mdi icon names
  stackLabels: string[];
  images: string[];
  youtubeId?: string;
  github?: string;
  featured: boolean;
  year: string;
}

export const projects: Project[] = [
  {
    id: "ero-genesis",
    title: "ERP - Genesis",
    tagline: "Software para la administración logística de eventos tipo campamento",
    description:
      "Plataforma backend de alta disponibilidad diseñada para la automatización de procesos logísticos, permitiendo el registro, asignación y monitoreo de participantes con tolerancia a fallos.",
    problem:
      "La gestión manual de eventos masivos de IYF, incluyendo la asignación de hospedaje, logística de alimentación y registro de participantes, generaba cuellos de botella operativos y una deficiente experiencia del usuario.",
    solution:
      "Arquitectura modular en capas que centraliza la administración de eventos en una solución web robusta, automatizando la asignación de grupos, habitaciones y recursos, optimizando el flujo de trabajo de los organizadores.",
    stack: ["mdi:language-java", "mdi:leaf", "mdi:aws", "mdi:docker", "mdi:database"],
    stackLabels: ["Java 21", "Spring Boot", "AWS (SES)", "PostgreSQL", "Cloudinary", "React JS", "Tailwind CSS"],
    images: [],
    youtubeId: "",
    github: "https://github.com/fernandoOS03/GENESIS-BACKEND",
    featured: true,
    year: "2026",
  },
  {
    id: "e-commerce-bata",
    title: "E-Commerce Fullstack (Réplica BATA)",
    tagline: "Plataforma de comercio electrónico con arquitectura Headless y escalabilidad empresarial",
    description:
      "Desarrollo de una solución E-commerce completa tipo retail, implementando una arquitectura desacoplada (Headless) que separa un backend transaccional robusto en Spring Boot de un frontend dinámico en React.",
    problem:
      "El planteamiento de este proyecto se realizó con base en la necesidad de poner en práctica lo aprendido en mi instituto.",
    solution:
      "Implementación de una API RESTful con Spring Boot y Spring Data JPA, integrando servicios en la nube para almacenamiento de imágenes (Cloudinary) y seguridad avanzada con JWT. Frontend construido con React y TypeScript, aplicando diseño responsivo con Tailwind CSS. Cabe mencionar que en el frontend se usó IA para completar los plazos de entrega del proyecto.",
    stack: ["mdi:language-java", "mdi:spring", "mdi:react", "mdi:database"],
    stackLabels: ["Java 21", "Spring Boot", "React JS", "TypeScript", "MySQL", "Cloudinary"],
    images: [
      "/assets/img-bata/home-page.png",
      "/assets/img-bata/product-list-user.png",
      "/assets/img-bata/products-detail-user.png",
      "/assets/img-bata/cart-detail-user.png",
      "/assets/img-bata/login.png",
      "/assets/img-bata/register.png",
      "/assets/img-bata/user-profile.png",
      "/assets/img-bata/dashboard-admin.png",
      "/assets/img-bata/products-list-admin.png",
      "/assets/img-bata/create-product.png",
      "/assets/img-bata/edit-product.png",
      "/assets/img-bata/database.png",
      "/assets/img-bata/404.png",
    ],
    youtubeId: "",
    github: "https://github.com/fernandoOS03/BATA",
    featured: true,
    year: "2025",
  },
];
