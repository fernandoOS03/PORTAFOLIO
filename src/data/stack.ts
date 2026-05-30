// Data — Tech Stack

export interface TechItem {
  icon: string;
  name: string;
  level: "pro" | "dev"; // pro = Experiencia Profesional, dev = En Desarrollo
}

export interface StackCategory {
  name: string;
  items: TechItem[];
}

export const stack: StackCategory[] = [
  {
    name: "Backend",
    items: [
      { icon: "mdi:language-java", name: "Java", level: "pro" },
      { icon: "mdi:nodejs", name: "Node.js", level: "pro" },
      { icon: "mdi:leaf", name: "Spring Boot", level: "pro" },
      { icon: "mdi:server", name: "Express", level: "dev" },
    ],
  },
  {
    name: "IA & Automatización",
    items: [
      { icon: "mdi:test-tube", name: "Playwright", level: "pro" },
      { icon: "mdi:robot-outline", name: "Selenium", level: "pro" },
      { icon: "mdi:brain", name: "LLM Integration", level: "pro" },
      { icon: "mdi:head-cog-outline", name: "Prompt Engineering", level: "pro" },
    ],
  },
  {
    name: "Infra & Cloud",
    items: [
      { icon: "mdi:aws", name: "AWS", level: "dev" },
      { icon: "mdi:docker", name: "Docker", level: "dev" },
      { icon: "mdi:rabbit", name: "RabbitMQ", level: "pro" },
      { icon: "mdi:kubernetes", name: "Kubernetes", level: "dev" },
    ],
  },
  {
    name: "Bases de Datos",
    items: [
      { icon: "mdi:database", name: "MySQL", level: "pro" },
      { icon: "mdi:elephant", name: "PostgreSQL", level: "pro" },
      { icon: "mdi:database-sync", name: "Redis", level: "dev" },
      { icon: "mdi:leaf-circle-outline", name: "MongoDB", level: "dev" },
    ],
  },
];
