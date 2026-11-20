export type SkillGroup = {
  id: string;
  title: { es: string; en: string };
  skills: readonly string[];
};

export const skillGroups: readonly SkillGroup[] = [
  { id: "frontend", title: { es: "Frontend", en: "Frontend" }, skills: ["TypeScript", "JavaScript", "React", "Next.js", "React Native / Expo", "TanStack Query", "Electron", "Tailwind CSS", "Vite", "HTML/CSS"] },
  { id: "backend", title: { es: "Backend", en: "Backend" }, skills: ["Python", "FastAPI", "NestJS", "Go", "Node.js", "Fastify", "Express", "REST APIs", "Pydantic", "Zod", "SQL"] },
  { id: "data", title: { es: "Datos y colas", en: "Data & Queues" }, skills: ["PostgreSQL", "Prisma", "Drizzle", "Redis", "BullMQ"] },
  { id: "cloud", title: { es: "Cloud y DevOps", en: "Cloud & DevOps" }, skills: ["AWS (Lambda, S3, EC2)", "Docker", "GitHub Actions", "GitLab CI", "Prometheus / Grafana", "Linux", "Bash"] },
  { id: "ai-vision", title: { es: "IA y visión computacional", en: "AI & Computer Vision" }, skills: ["Google Gemini", "Vertex AI", "MCP (Model Context Protocol)", "OpenCV", "Tesseract", "NumPy"] },
  { id: "quality", title: { es: "Pruebas y calidad", en: "Testing & Quality" }, skills: ["Pytest", "Vitest", "Jest", "Playwright", "Postman", "Contract / integration / E2E testing", "ISO 9001"] },
  { id: "architecture", title: { es: "Arquitectura", en: "Architecture" }, skills: ["Hexagonal", "Layered", "Typed contracts"] },
];
