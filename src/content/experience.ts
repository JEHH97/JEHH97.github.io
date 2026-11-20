import type { BilingualText } from "./projects";

export type ExperienceItem = {
  role: BilingualText;
  employer: string;
  date: BilingualText;
  location?: BilingualText;
  bullets: Readonly<Record<"es" | "en", readonly string[]>>;
};

export const experience: readonly ExperienceItem[] = [
  {
    role: { es: "Ingeniero de software", en: "Software Engineer" },
    employer: "Viasat Inc.",
    date: { es: "Ago 2025 – Actualidad", en: "Aug 2025 – Present" },
    location: { es: "Ciudad del Carmen, MX", en: "Ciudad del Carmen, MX" },
    bullets: {
      es: [
        "Desarrollo y mantengo servicios de producción en Python y herramientas de ingeniería sobre Linux para un ecosistema satelital y de antenas.",
        "Creo entornos de desarrollo, pruebas y simulación basados en Docker, además de pipelines de validación y despliegue con GitHub Actions y GitLab CI.",
        "Migré servicios de ingeniería desde entornos locales a AWS (EC2, S3 y Lambda), con despliegues automatizados en GitHub Actions que redujeron costos de infraestructura y aceleraron las entregas.",
        "Mantengo infraestructura de Pytest y Vitest con más de 60 archivos de pruebas unitarias, integración, contrato, regresión y E2E.",
        "Integro Gemini y Vertex AI mediante REST y desarrollo automatización asistida por IA para pruebas, clasificación y depuración.",
        "Resuelvo incidencias en software, sistemas operativos, contenedores y redes: TCP/IP, UDP, HTTP/S, DNS, DHCP y multicast.",
      ],
      en: [
        "Build and maintain production Python services and engineering tools on Linux for a satellite and antenna ecosystem.",
        "Create Docker-based development, test, and simulation environments, plus validation and deployment pipelines with GitHub Actions and GitLab CI.",
        "Migrated engineering services from local environments to AWS (EC2, S3, and Lambda), with automated GitHub Actions deployments that reduced infrastructure costs and accelerated releases.",
        "Maintain Pytest and Vitest infrastructure with 60+ unit, integration, contract, regression, and E2E test files.",
        "Integrate Gemini and Vertex AI through REST and build AI-assisted automation for testing, classification, and debugging.",
        "Troubleshoot across software, operating systems, containers, and networks: TCP/IP, UDP, HTTP/S, DNS, DHCP, and multicast.",
      ],
    },
  },
  {
    role: { es: "Especialista A en Instrumentación y Sistemas", en: "Instrumentation & Systems Specialist A" },
    employer: "PYPSA (Grupo Planeación y Proyectos)",
    date: { es: "Nov 2024 – May 2025", en: "Nov 2024 – May 2025" },
    bullets: {
      es: ["Especificaciones técnicas, planes de prueba y puesta en marcha, y actividades FAT/SAT para sistemas de control industrial y generación eléctrica."],
      en: ["Prepared technical specifications, test and commissioning plans, and FAT/SAT activities for industrial control and power-generation systems."],
    },
  },
  {
    role: { es: "Especialista Jr. en Instrumentación y Control", en: "Instrumentation & Control Jr. Specialist" },
    employer: "Protexa (Energy Division)",
    date: { es: "Dic 2023 – Oct 2024", en: "Dec 2023 – Oct 2024" },
    bullets: {
      es: ["Integración de sistemas, documentación de ingeniería y validación de modelos BIM/3D con AutoCAD Plant 3D y Navisworks para proyectos offshore y de energía."],
      en: ["Supported systems integration, engineering documentation, and BIM/3D model validation with AutoCAD Plant 3D and Navisworks for offshore and energy projects."],
    },
  },
  {
    role: { es: "Técnico de Electrónica y Sistemas de Red", en: "Electronics & Network Systems Technician" },
    employer: "Multiservicios Técnicos del Sureste",
    date: { es: "Feb 2021 – Feb 2022", en: "Feb 2021 – Feb 2022" },
    bullets: {
      es: ["Diagnóstico de hardware y sistemas operativos y análisis de causa raíz en más de 15 sistemas al día; instalación de cableado de red y racks."],
      en: ["Diagnosed hardware and operating-system issues and traced root causes across 15+ systems daily; installed network cabling and racks."],
    },
  },
];

export const education = {
  degree: { es: "Ingeniería en Mecatrónica", en: "B.S. Mechatronics Engineering" },
  institution: "Universidad Autónoma del Carmen (UNACAR)",
  date: "2015–2023",
  certification: { es: "Auditor Interno de Calidad certificado ISO 9001:2015", en: "ISO 9001:2015 Certified Internal Quality Auditor" },
  languages: {
    es: "Español nativo; inglés profesional (3.er lugar en British English Olympics).",
    en: "Spanish (native); English (professional working proficiency; 3rd place, British English Olympics).",
  },
} as const;
