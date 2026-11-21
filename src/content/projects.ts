export type Locale = "es" | "en";

export type BilingualText = Readonly<Record<Locale, string>>;

export type CaseStudy = {
  slug: string;
  title: BilingualText;
  summary: BilingualText;
  context: BilingualText;
  role: BilingualText;
  architecture: BilingualText;
  decisions: Readonly<Record<Locale, readonly string[]>>;
  highlights: Readonly<Record<Locale, readonly string[]>>;
  stack: readonly string[];
};

export const caseStudies: readonly CaseStudy[] = [
  {
    slug: "vision-obstruction-analysis",
    title: {
      es: "Servicio de análisis de obstrucción por visión computacional",
      en: "Computer-Vision Sky Obstruction Analysis Service",
    },
    summary: {
      es: "Un servicio de visión que convierte panoramas de instalaciones de antena en métricas geométricas de obstrucción del cielo.",
      en: "A computer-vision service that turns antenna-site panoramas into geometric measurements of sky obstruction.",
    },
    context: {
      es: "En telecomunicaciones satelitales, los técnicos de campo capturan panoramas de 360° de los sitios de antena. El equipo necesitaba estimar cuánto del cielo estaba obstruido y podía afectar la recepción de señal.",
      en: "In satellite telecommunications, field technicians capture 360° panoramas of antenna sites. The team needed to estimate how much of the sky was obstructed and could affect signal reception.",
    },
    role: {
      es: "Diseñé e implementé el microservicio, el pipeline de procesamiento adaptable, la integración opcional de IA, los entornos de prueba y la automatización de despliegue.",
      en: "I designed and implemented the microservice, adaptive processing pipeline, optional AI integrations, test environments, and deployment automation.",
    },
    architecture: {
      es: "La API recibe panoramas y parámetros validados; un pipeline de procesamiento normaliza la imagen, segmenta obstrucciones y calcula porcentajes ponderados por ángulo sólido. Servicios de IA opcionales enriquecen el análisis, y el resultado se almacena y entrega mediante infraestructura en la nube.",
      en: "The API receives panoramas and validated parameters; a processing pipeline normalizes images, segments obstructions, and calculates solid-angle-weighted percentages. Optional AI services enrich the analysis, while cloud infrastructure stores and serves results.",
    },
    decisions: {
      es: [
        "Usar un pipeline adaptable de 13 etapas con detección de bordes Canny adaptativa, Gaussian Mixture Model y segmentación GrabCut.",
        "Ponderar la geometría por ángulo sólido para representar con mayor fidelidad la proyección esférica del cielo.",
        "Añadir guardas independientes de la resolución y mantener la clasificación con Gemini opcional, con reintentos y degradación controlada.",
        "Separar desarrollo, pruebas y despliegue con contenedores Docker y validación automatizada.",
      ],
      en: [
        "Use a 13-stage adaptive pipeline with adaptive Canny edge detection, Gaussian Mixture Model, and GrabCut segmentation.",
        "Weight geometry by solid angle to better reflect the sky's spherical projection.",
        "Add resolution-independent guards and keep Gemini classification optional, with retries and graceful degradation.",
        "Separate development, testing, and deployment with Docker containers and automated validation.",
      ],
    },
    highlights: {
      es: [
        "Desplegado en AWS con contenedores Lambda y servicios S3 y EC2; GitHub Actions automatiza los despliegues.",
        "Suite Pytest de 29 archivos con pruebas unitarias, de integración, contrato y aceptación.",
        "Integraciones opcionales con Gemini en Vertex AI para clasificación y Vertex AI Imagen para generar planos del sitio.",
      ],
      en: [
        "Deployed on AWS with Lambda containers and S3 and EC2 services; GitHub Actions automates deployments.",
        "A 29-file Pytest suite covers unit, integration, contract, and acceptance testing.",
        "Optional Vertex AI integrations use Gemini for classification and Imagen to generate site blueprints.",
      ],
    },
    stack: ["Python", "FastAPI", "OpenCV", "NumPy", "Pydantic", "Pytest", "Docker", "AWS Lambda", "S3", "EC2", "Google Gemini", "Vertex AI", "GitHub Actions"],
  },
  {
    slug: "ai-agent-mcp-server",
    title: {
      es: "Servidor MCP para agentes de IA en operaciones de red",
      en: "MCP Server for AI Agents in Network Operations",
    },
    summary: {
      es: "Una capa de herramientas tipadas y controladas para que agentes de IA consulten y operen servicios de redes internos.",
      en: "A typed, controlled tool layer that lets AI agents query and operate internal network services.",
    },
    context: {
      es: "El objetivo era permitir que agentes de IA consultaran API internas de inventario, gestión de terminales y rendimiento de servicio, con controles adecuados para operaciones sensibles.",
      en: "The goal was to let AI agents query internal inventory, terminal-management, and service-performance APIs, with appropriate safeguards for sensitive operations.",
    },
    role: {
      es: "Construí el servidor MCP y sus herramientas, la validación de contratos, la resolución de identificadores, los controles de seguridad y la cobertura de pruebas.",
      en: "I built the MCP server and its tools, contract validation, identifier resolution, security controls, and test coverage.",
    },
    architecture: {
      es: "El agente se conecta al servidor MCP mediante stdio o HTTP transmisible. Herramientas validadas con Zod coordinan API internas permitidas, enriquecen datos y aplican límites, redacción de secretos y aprobación humana antes de acciones que afectan dispositivos.",
      en: "An agent connects to the MCP server over stdio or Streamable HTTP. Zod-validated tools coordinate allow-listed internal APIs, enrich data, and apply rate limits, secret redaction, and human approval before device-affecting actions.",
    },
    decisions: {
      es: [
        "Publicar 15 herramientas con entradas y salidas validadas para mantener contratos claros entre agente y servicios.",
        "Soportar transporte stdio y HTTP transmisible mediante Fastify.",
        "Restringir operaciones salientes a destinos permitidos y aplicar límites de frecuencia por API.",
        "Exigir aprobación humana antes de acciones que puedan modificar dispositivos y redactar secretos en los registros.",
      ],
      en: [
        "Expose 15 tools with validated inputs and outputs to keep contracts clear between agents and services.",
        "Support stdio and Streamable HTTP transports through Fastify.",
        "Restrict outbound operations to allow-listed destinations and apply per-API rate limits.",
        "Require human approval before actions that can affect devices and redact secrets from logs.",
      ],
    },
    highlights: {
      es: [
        "Resolución de identificadores y enriquecimiento de datos entre API de operaciones.",
        "Alrededor de 38 archivos de pruebas Vitest y documentación amplia de arquitectura y seguridad.",
        "Diseñado con límites explícitos para operaciones de solo lectura y acciones con aprobación.",
      ],
      en: [
        "Identifier resolution and data enrichment across operations APIs.",
        "About 38 Vitest test files and extensive architecture and security documentation.",
        "Designed with explicit boundaries between read operations and approval-gated actions.",
      ],
    },
    stack: ["TypeScript", "Node.js", "MCP SDK", "Fastify", "Zod", "Vitest"],
  },
  {
    slug: "360-camera-field-toolkit",
    title: {
      es: "Toolkit de campo para cámaras 360° (CLI + escritorio)",
      en: "360° Camera Field Toolkit (CLI + Desktop)",
    },
    summary: {
      es: "Herramientas guiadas para preparar cámaras 360° y descargar capturas de forma fiable desde el Wi-Fi de la cámara.",
      en: "Guided tools for preparing 360° cameras and reliably downloading captures over the camera's Wi-Fi.",
    },
    context: {
      es: "Los equipos de levantamiento de campo necesitaban preparar cámaras 360° y descargar capturas de forma confiable, sin depender de conocimientos técnicos.",
      en: "Field surveyors needed to prepare 360° cameras and download captures reliably without requiring technical expertise.",
    },
    role: {
      es: "Desarrollé el núcleo compartido, el cliente para la API de cámara y las aplicaciones de línea de comandos y escritorio, con pruebas y modos de desarrollo sin hardware.",
      en: "I developed the shared core, camera API client, and command-line and desktop applications, with testing and hardware-free development modes.",
    },
    architecture: {
      es: "Un monorepo npm comparte un núcleo de arquitectura hexagonal entre CLI y escritorio. Adaptadores HTTP/JSON aíslan el hardware y la red; la aplicación Electron mantiene el renderizador aislado y usa un puente IPC tipado.",
      en: "An npm-workspaces monorepo shares a hexagonal-architecture core between the CLI and desktop app. HTTP/JSON adapters isolate hardware and networking; the Electron app keeps its renderer isolated and uses a typed IPC bridge.",
    },
    decisions: {
      es: [
        "Compartir lógica de dominio en un núcleo hexagonal y aislar los adaptadores de hardware y red.",
        "Mantener el renderizador de Electron aislado y exponer capacidades mediante IPC tipado.",
        "Guiar la configuración de cámara y reintentar descargas con progreso visible.",
        "Ofrecer un modo simulado sin cámara para desarrollo y demostraciones.",
      ],
      en: [
        "Share domain logic in a hexagonal core and isolate hardware and network adapters.",
        "Keep the Electron renderer isolated and expose capabilities through typed IPC.",
        "Guide camera setup and retry downloads while showing live progress.",
        "Provide a camera-free mock mode for development and demonstrations.",
      ],
    },
    highlights: {
      es: [
        "Ejecutables portátiles para Windows y 32 archivos de pruebas Vitest.",
        "CLI y GUI consumen un cliente HTTP/JSON común para la cámara.",
        "El servicio de soporte se migró a AWS.",
      ],
      en: [
        "Portable Windows executables and 32 Vitest test files.",
        "The CLI and GUI share a common HTTP/JSON camera client.",
        "The supporting service was migrated to AWS.",
      ],
    },
    stack: ["TypeScript", "Node.js", "Electron", "React", "Tailwind CSS", "Vite", "Vitest", "Hexagonal Architecture"],
  },
];

export type PublicProject = {
  slug: string;
  title: BilingualText;
  description: BilingualText;
  stack: readonly string[];
  repoUrl: string;
  // Lead: paste each deployed HTTPS URL into its project's demoUrl below; keep these blank until then.
  demoUrl: string;
  demoKind?: "live" | "api" | "npm";
  demoNote?: BilingualText;
  image?: {
    src: string;
    width: number;
    height: number;
    alt: BilingualText;
    kind?: "screenshot" | "diagram";
  };
  detail: {
    problem: BilingualText;
    features: Readonly<Record<Locale, readonly string[]>>;
    architecture: readonly Readonly<Record<Locale, Readonly<{ title: string; description: string }>>>[];
    decisions: Readonly<Record<Locale, readonly string[]>>;
    quality: Readonly<Record<Locale, readonly string[]>>;
    localRun: BilingualText;
  };
};

export const publicProjects: readonly PublicProject[] = [
  {
    slug: "flowboard",
    title: { es: "Flowboard: tablero Kanban colaborativo en tiempo real", en: "Flowboard: Realtime Collaborative Kanban" },
    description: {
      es: "Tablero Kanban para equipos pequeños con actualizaciones en vivo por WebSocket, presencia de usuarios y roles por tablero. Sesiones con Argon2 y JWT con rotación de refresh tokens; pruebas E2E con Playwright.",
      en: "Kanban board for small teams with live WebSocket updates, user presence, and per-board roles. Argon2 sessions with rotating JWT refresh tokens and Playwright end-to-end tests.",
    },
    stack: ["Next.js", "Fastify", "WebSockets", "PostgreSQL", "Drizzle", "Zod", "dnd-kit", "Playwright"],
    repoUrl: "https://github.com/JEHH97/flowboard",
    demoUrl: "",
    demoKind: "live",
    demoNote: { es: "Puede tardar ~50 s en despertar", en: "May take ~50 s to wake up" },
    image: {
      src: "/projects/flowboard.webp",
      width: 1200,
      height: 675,
      alt: { es: "Tablero Kanban de Flowboard en tema claro", en: "Flowboard Kanban board in light theme" },
    },
    detail: {
      problem: {
        es: "Los equipos pequeños necesitan mantener visible el trabajo del proyecto sin añadir procesos innecesarios, y colaborar sin perder de vista permisos, persistencia y actualizaciones en vivo.",
        en: "Small teams need to keep project work visible without adding process overhead, while collaborating without losing sight of permissions, persistence, and live updates.",
      },
      features: {
        es: ["Tableros colaborativos con actualizaciones en tiempo real y presencia.", "Roles por tablero que la API verifica en lecturas, cambios, invitaciones y conexiones socket.", "Orden persistente de tarjetas con posiciones fraccionarias y ayuda de reequilibrio.", "Sesiones con cookies de acceso y refresh tokens revocables con rotación."],
        en: ["Collaborative boards with realtime updates and user presence.", "Per-board roles checked by the API on reads, mutations, invitations, and socket joins.", "Persistent card ordering with fractional positions and a rebalance helper.", "Cookie-based access sessions and revocable refresh tokens with rotation."],
      },
      architecture: [
        { es: { title: "Aplicación web", description: "Next.js App Router entrega la interfaz y usa contratos Zod compartidos." }, en: { title: "Web app", description: "Next.js App Router serves the interface and uses shared Zod contracts." } },
        { es: { title: "API y tiempo real", description: "Fastify expone REST y WebSockets; valida permisos antes de unir sockets a una sala." }, en: { title: "API and realtime", description: "Fastify exposes REST and WebSockets, validating membership before joining a socket room." } },
        { es: { title: "Persistencia", description: "Drizzle ORM y migraciones SQL guardan tableros, tarjetas y sesiones en PostgreSQL." }, en: { title: "Persistence", description: "Drizzle ORM and SQL migrations store boards, cards, and sessions in PostgreSQL." } },
      ],
      decisions: {
        es: ["Mantener los contratos de solicitud compartidos entre navegador y servidor mediante Zod.", "Usar orden numérico fraccionario para mover una tarjeta sin reescribir todas las posiciones vecinas.", "Guardar refresh sessions revocables con hash y usar cookies HttpOnly; las cookies de producción requieren TLS."],
        en: ["Share Zod request contracts between browser and server.", "Use fractional numeric ordering to move a card without rewriting every neighboring position.", "Store revocable, hashed refresh sessions and use HttpOnly cookies; production cookies require TLS."],
      },
      quality: {
        es: ["npm run check ejecuta análisis de contenido, ESLint, TypeScript, pruebas unitarias y de integración de base de datos, y builds de producción; las pruebas de dominio tienen umbrales de cobertura.", "Vitest usa cobertura V8 y Playwright cubre flujos de navegador. El README documenta una prueba E2E colaborativa con dos contextos."],
        en: ["npm run check runs the content scan, ESLint, TypeScript, unit and database integration tests, and production builds; domain tests have coverage thresholds.", "Vitest uses V8 coverage and Playwright covers browser flows. The README documents a collaborative E2E flow using two browser contexts."],
      },
      localRun: { es: "docker compose up --build", en: "docker compose up --build" },
    },
  },
  {
    slug: "mcp-mx-economy",
    title: { es: "mcp-mx-economy: servidor MCP de indicadores económicos de México", en: "mcp-mx-economy: Mexican Economic Indicators MCP Server" },
    description: {
      es: "Servidor MCP que da a agentes de IA indicadores de Banxico (SIE) e INEGI mediante 8 herramientas tipadas con Zod. Soporta stdio y Streamable HTTP, con caché en memoria, pacing de peticiones y reintentos con backoff; los datos no disponibles se devuelven como null, nunca se inventan.",
      en: "MCP server that gives AI agents Banxico (SIE) and INEGI economic indicators through 8 Zod-typed tools. Supports stdio and Streamable HTTP, with in-memory caching, request pacing, and exponential-backoff retries. Unavailable observations are returned as null, never invented.",
    },
    stack: ["TypeScript", "Node.js", "MCP SDK", "Zod", "Banxico SIE", "INEGI API", "Vitest"],
    repoUrl: "https://github.com/JEHH97/mcp-mx-economy",
    demoUrl: "",
    demoKind: "npm",
    image: {
      src: "/projects/mcp-mx-economy.webp",
      width: 1200,
      height: 675,
      alt: { es: "Diagrama del servidor MCP que conecta agentes con Banxico e INEGI", en: "Architecture diagram of the MCP server connecting agents to Banxico and INEGI" },
      kind: "diagram",
    },
    detail: {
      problem: {
        es: "Los indicadores económicos oficiales están distribuidos entre portales y API. Un asistente necesita consultar series de Banxico e INEGI y conservar las fechas y valores de origen, sin inventar observaciones ausentes.",
        en: "Official economic indicators are spread across portals and APIs. An assistant needs to query Banxico and INEGI series while preserving source dates and values, without inventing missing observations.",
      },
      features: {
        es: ["Ocho herramientas MCP tipadas para tipos de cambio, tasas, inflación, UDIS y series de Banxico e INEGI.", "Consultas de valores recientes, rangos históricos y comparación de indicadores.", "Caché en memoria de un minuto para respuestas exitosas, pacing de solicitudes y reintentos acotados.", "Valores no disponibles se representan como null, conservando el periodo de observación de INEGI."],
        en: ["Eight typed MCP tools for exchange rates, interest rates, inflation, UDIS, and Banxico and INEGI series.", "Queries for latest values, historical ranges, and indicator comparisons.", "One-minute in-memory cache for successful responses, request pacing, and bounded retries.", "Unavailable values are represented as null, and INEGI observation periods are retained."],
      },
      architecture: [
        { es: { title: "Cliente de agente", description: "Clientes MCP se conectan por stdio o transporte HTTP transmisible." }, en: { title: "Agent client", description: "MCP clients connect over stdio or Streamable HTTP transport." } },
        { es: { title: "Herramientas MCP", description: "Contratos de entrada y salida validados con Zod exponen ocho operaciones de indicadores." }, en: { title: "MCP tools", description: "Zod-validated input and output contracts expose eight indicator operations." } },
        { es: { title: "Servicio y proveedores", description: "La capa de servicio coordina caché, pacing, reintentos y clientes independientes de Banxico e INEGI." }, en: { title: "Service and providers", description: "The service layer coordinates caching, pacing, retries, and independent Banxico and INEGI clients." } },
      ],
      decisions: {
        es: ["Separar clientes por proveedor detrás de una capa de servicio para poder probar cálculos y API de manera independiente.", "Mantener caché de proceso con TTL corto, explícitamente no persistente.", "Reintentar fallas transitorias y limitación del proveedor, pero no solicitudes inválidas ni errores de cliente."],
        en: ["Separate provider clients behind a service layer so calculations and APIs can be tested independently.", "Keep a short-lived process-local cache that intentionally does not persist data.", "Retry transient failures and provider throttling, but not invalid requests or provider client errors."],
      },
      quality: {
        es: ["npm run check ejecuta ESLint, Prettier, TypeScript, Vitest con umbrales de cobertura para lógica de dominio, build y escaneo de contenido.", "Las pruebas usan respuestas HTTP de fixtures y un transporte MCP en memoria; no requieren tokens ni llamadas a servicios públicos.", "El README incluye controles de calidad repetibles en GitHub Actions."],
        en: ["npm run check runs ESLint, Prettier, TypeScript, Vitest with domain-logic coverage thresholds, a build, and a content scan.", "Tests use fixture HTTP responses and an in-memory MCP transport; they require no tokens or calls to public services.", "The README lists repeatable quality checks in GitHub Actions."],
      },
      localRun: { es: "npm install && npm run build && npm start", en: "npm install && npm run build && npm start" },
    },
  },
  {
    slug: "docscan-api",
    title: { es: "DocScan API: escáner de documentos y OCR asíncrono", en: "DocScan API: Async Document Scanner & OCR" },
    description: {
      es: "API que recibe fotos de documentos, corrige la perspectiva con OpenCV y extrae texto con Tesseract en un worker independiente. Responde 202 de inmediato, encola trabajos en Redis/RQ, guarda artefactos en almacenamiento compatible con S3 y publica un contrato OpenAPI versionado.",
      en: "API that accepts document photos, corrects perspective with OpenCV, and extracts text with Tesseract in a separate worker. Returns 202 immediately, queues jobs on Redis/RQ, stores artifacts in S3-compatible storage, and publishes a versioned OpenAPI contract.",
    },
    stack: ["Python", "FastAPI", "Redis / RQ", "OpenCV", "Tesseract", "S3", "Pydantic", "Docker", "pytest"],
    repoUrl: "https://github.com/JEHH97/docscan-api",
    demoUrl: "",
    demoKind: "api",
    demoNote: { es: "Puede tardar ~50 s en despertar", en: "May take ~50 s to wake up" },
    image: {
      src: "/projects/docscan-api.webp",
      width: 1200,
      height: 747,
      alt: {
        es: "Foto real de un recibo y página escaneada en alta resolución con texto OCR al 89% de confianza",
        en: "Real receipt photo and high-resolution scanned page with OCR text at 89% confidence",
      },
    },
    detail: {
      problem: {
        es: "Los clientes móviles no deberían mantener abierta una petición HTTP mientras se limpia una imagen grande y se ejecuta OCR. La API acepta el archivo, devuelve un identificador de trabajo y expone estado y resultados con un contrato versionado.",
        en: "Mobile clients should not have to hold an HTTP request open while a large image is cleaned up and OCR runs. The API accepts the file, returns a job identifier, and exposes status and results through a versioned contract.",
      },
      features: {
        es: ["Carga multipart de JPEG, PNG o WebP con respuesta 202 Accepted y enlaces al trabajo.", "Detección de página y corrección de perspectiva con OpenCV; Tesseract realiza OCR en un worker separado.", "Estados de trabajo y resultados estructurados con texto, confianza, cajas de palabras y tiempos por etapa.", "Adaptadores de almacenamiento local y compatible con S3; Docker Compose usa MinIO."],
        en: ["Multipart JPEG, PNG, or WebP uploads return 202 Accepted with job links.", "OpenCV detects pages and corrects perspective; Tesseract runs OCR in a separate worker.", "Job states and structured results include text, confidence, word boxes, and per-stage timings.", "Local and S3-compatible storage adapters; Docker Compose uses MinIO."],
      },
      architecture: [
        { es: { title: "Cliente móvil", description: "Envía la imagen como multipart y consulta estado o descarga el resultado." }, en: { title: "Mobile client", description: "Submits an image as multipart and polls status or downloads the result." } },
        { es: { title: "API y cola", description: "FastAPI valida la carga, guarda el trabajo en Redis/RQ y responde inmediatamente." }, en: { title: "API and queue", description: "FastAPI validates the upload, queues work in Redis/RQ, and responds immediately." } },
        { es: { title: "Worker de OCR", description: "El worker procesa artefactos con OpenCV y Tesseract y actualiza el estado del trabajo." }, en: { title: "OCR worker", description: "The worker processes artifacts with OpenCV and Tesseract and updates job state." } },
        { es: { title: "Almacenamiento", description: "El almacenamiento mantiene la imagen de origen y los artefactos corregidos." }, en: { title: "Storage", description: "Storage holds the source image and corrected artifacts." } },
      ],
      decisions: {
        es: ["Separar OCR del ciclo de solicitud HTTP y persistir los estados del trabajo en Redis con TTL configurable.", "Mantener esquemas públicos estables y tipados para estado, texto y metadatos de OCR.", "Separar API, cola y almacenamiento, con adaptadores locales y compatibles con S3.", "Validar URLs de callback al enviar y entregar; desactivar redirecciones."],
        en: ["Separate OCR from the HTTP request lifecycle and persist job state in Redis with a configurable TTL.", "Keep stable, typed public schemas for status, text, and OCR metadata.", "Separate API, queue, and storage, with local and S3-compatible adapters.", "Validate callback URLs at submission and delivery time; disable redirects."],
      },
      quality: {
        es: ["make check ejecuta Ruff, mypy estricto, pytest con un piso de cobertura del 70% para dominio y pipeline de imágenes, y un guardia de contenido.", "Las pruebas del pipeline usan páginas sintéticas rotadas; las pruebas de OCR usan mocks para resultados deterministas y Tesseract para palabras de muestra impresas.", "La prueba de integración de API completa un trabajo con Redis en memoria."],
        en: ["make check runs Ruff, strict mypy, pytest with a 70% coverage floor for the domain and image pipeline, and a repository-content guard.", "Pipeline tests use synthetic rotated pages; OCR tests use mocks for deterministic results and Tesseract for printed sample words.", "The API integration test completes a job against an in-memory Redis instance."],
      },
      localRun: { es: "docker compose up --build", en: "docker compose up --build" },
    },
  },
  {
    slug: "docscan-mobile",
    title: { es: "DocScan Mobile: escáner de documentos con Expo", en: "DocScan Mobile: Document Scanner App with Expo" },
    description: {
      es: "App React Native (Expo) para capturar o importar documentos desde cámara o galería y leer el texto extraído por docscan-api. Sondeo de estado con backoff, historial offline, modo demo sin servidor y validación de respuestas con Zod.",
      en: "React Native (Expo) app that captures or imports documents from camera or gallery and reads the text extracted by docscan-api. Status polling with backoff, offline history, a no-server demo mode, and Zod-validated API responses.",
    },
    stack: ["React Native", "Expo", "TypeScript", "TanStack Query", "Zod", "Jest"],
    repoUrl: "https://github.com/JEHH97/docscan-mobile",
    demoUrl: "",
    demoKind: "live",
    image: {
      src: "/projects/docscan-mobile.webp",
      width: 430,
      height: 920,
      alt: { es: "Pantalla de resultado de DocScan Mobile con el texto extraído y el nivel de confianza", en: "DocScan Mobile result screen showing extracted text and confidence score" },
    },
    detail: {
      problem: {
        es: "Digitalizar notas y formularios con una foto puede requerir volver a escribir el contenido, y el historial debería seguir disponible cuando el dispositivo está sin conexión.",
        en: "Digitizing notes and forms from a photo can require retyping the content, and scan history should remain available when the device is offline.",
      },
      features: {
        es: ["Captura desde cámara o importación desde la galería.", "Envío al servicio de escaneo y sondeo del estado con backoff exponencial acotado.", "Historial de resultados e imágenes guardado en el dispositivo para consulta sin red.", "Modo de muestra sin servidor que recorre el flujo de trabajo y genera OCR ficticio."],
        en: ["Capture with the camera or import from the gallery.", "Submit to the scan service and poll status with bounded exponential backoff.", "Store results and image references on-device so history is available offline.", "Server-free sample mode that walks through the job flow and produces fictional OCR output."],
      },
      architecture: [
        { es: { title: "Aplicación Expo", description: "React Native captura una imagen o importa una desde la galería." }, en: { title: "Expo app", description: "React Native captures an image or imports one from the gallery." } },
        { es: { title: "API de escaneo", description: "La app envía multipart al contrato versionado de docscan-api y consulta el trabajo." }, en: { title: "Scan API", description: "The app submits multipart data to the versioned docscan-api contract and polls the job." } },
        { es: { title: "Resultados locales", description: "La app presenta OCR validado y conserva historial en AsyncStorage." }, en: { title: "Local results", description: "The app presents validated OCR output and keeps history in AsyncStorage." } },
        { es: { title: "Modo de muestra", description: "Un cliente simulado ofrece el mismo formato de resultado sin servidor." }, en: { title: "Sample mode", description: "A sample client provides the same result shape without a server." } },
      ],
      decisions: {
        es: ["Modelar el ciclo asíncrono de trabajo y detener el sondeo al completar o fallar.", "Validar respuestas correctas y errores de API en el adaptador; reintentar fallas de red y servidor transitorias.", "Guardar resultados completados y referencias de imagen en el dispositivo.", "Solicitar acceso a cámara y galería de forma opcional, con controles accesibles."],
        en: ["Model the asynchronous job lifecycle and stop polling when a job completes or fails.", "Validate successful and error API responses in the adapter; retry transient network and server errors.", "Store completed results and image references on-device.", "Request camera and gallery access only when needed, with accessible controls."],
      },
      quality: {
        es: ["npm run check ejecuta lint, formato, chequeo estricto de tipos, Jest con umbrales de cobertura y escaneo de contenido.", "La cobertura incluye validación y mapeo de errores de API, cliente de muestra, sondeo, historial local y renderizado de pantallas.", "CI ejecuta el mismo comando después de push o pull request."],
        en: ["npm run check runs lint, formatting validation, strict type checking, Jest with coverage thresholds, and a content scan.", "Coverage includes API validation and error mapping, the sample client, polling, local history, and screen rendering.", "CI runs the same command after a push or pull request."],
      },
      localRun: { es: "npm ci && npx expo start", en: "npm ci && npx expo start" },
    },
  },
  {
    slug: "checkout-service",
    title: { es: "Checkout Service: pedidos y pagos con NestJS", en: "Checkout Service: Orders & Payments with NestJS" },
    description: {
      es: "Microservicio de pedidos y pagos con idempotencia por Idempotency-Key, outbox transaccional, inventario sin sobreventa y webhooks firmados de Stripe (modo prueba) encolados con BullMQ.",
      en: "Orders and payments microservice with Idempotency-Key replay, a transactional outbox, overselling-safe inventory, and signed Stripe test-mode webhooks queued with BullMQ.",
    },
    stack: ["NestJS", "TypeScript", "PostgreSQL", "Prisma", "Redis", "BullMQ", "Stripe", "Jest"],
    repoUrl: "https://github.com/JEHH97/checkout-service",
    demoUrl: "",
    demoKind: "api",
    demoNote: { es: "Puede tardar ~50 s en despertar", en: "May take ~50 s to wake up" },
    image: {
      src: "/projects/checkout-service.webp",
      width: 1200,
      height: 675,
      alt: { es: "Diagrama de Checkout Service con API, outbox, cola y worker de pedidos", en: "Checkout Service diagram with API, outbox, queue, and order worker" },
      kind: "diagram",
    },
    detail: {
      problem: {
        es: "Los reintentos de una solicitud pueden duplicar pedidos, los webhooks de pago pueden repetirse y varias compras pueden competir por la última unidad. El servicio hace explícitos estos casos y evita acoplar inventario, persistencia y proveedor de pago.",
        en: "Request retries can duplicate orders, payment webhooks can be repeated, and buyers can compete for the last unit. The service makes these cases explicit without coupling inventory, persistence, and payment-provider behavior.",
      },
      features: {
        es: ["API NestJS de pedidos y pagos con documentación Swagger/OpenAPI.", "Repetición idempotente de solicitudes con Idempotency-Key y conflicto si cambia el payload.", "Inventario reservado mediante transacciones serializables y actualización con control de versión.", "Webhooks firmados de Stripe en modo de prueba con eventos aceptados encolados para procesamiento reintentable."],
        en: ["NestJS orders and payments API with Swagger/OpenAPI documentation.", "Idempotency-Key request replay, with a conflict when the payload changes.", "Inventory reservations use serializable transactions and version-checked updates.", "Signed Stripe test-mode webhooks queue accepted events for retryable processing."],
      },
      architecture: [
        { es: { title: "Cliente y API", description: "La API NestJS valida solicitudes y coordina pedidos, autenticación y pagos." }, en: { title: "Client and API", description: "The NestJS API validates requests and coordinates orders, authentication, and payments." } },
        { es: { title: "Persistencia", description: "PostgreSQL y Prisma guardan pedidos y eventos outbox en una transacción." }, en: { title: "Persistence", description: "PostgreSQL and Prisma store orders and outbox events in a transaction." } },
        { es: { title: "Cola y worker", description: "Redis y BullMQ transportan eventos confirmados a un worker de procesamiento." }, en: { title: "Queue and worker", description: "Redis and BullMQ carry committed events to a processing worker." } },
        { es: { title: "Proveedor de pagos", description: "Los webhooks firmados de Stripe se validan antes de guardar y encolar eventos." }, en: { title: "Payment provider", description: "Signed Stripe webhooks are verified before events are stored and queued." } },
      ],
      decisions: {
        es: ["Persistir huella canónica y respuesta asociada a la clave de idempotencia para reproducir reintentos idénticos.", "Escribir el cambio de pedido y el evento outbox en la misma transacción para evitar una doble escritura entre base de datos y broker.", "Reservar inventario dentro de una transacción serializable con actualización condicional versionada.", "Verificar la firma del webhook antes de persistirlo y usar identificadores de evento únicos."],
        en: ["Persist a canonical request fingerprint and response for each idempotency key so identical retries can replay.", "Write the order change and outbox event in the same transaction to avoid a database/broker dual-write gap.", "Reserve inventory inside a serializable transaction with a version-checked conditional update.", "Verify webhook signatures before persistence and use unique event identifiers."],
      },
      quality: {
        es: ["npm run check ejecuta lint, verificación de formato, TypeScript, cobertura unitaria con umbral de dominio del 70%, build y escáner de contenido.", "Incluye pruebas de integración de base de datos y Redis cuando los servicios están configurados, y un flujo de checkout con Supertest.", "Las pruebas usan un adaptador de pago falso; no llaman a Stripe."],
        en: ["npm run check runs lint, formatting verification, TypeScript, unit coverage with a 70% domain threshold, a build, and a content scanner.", "It includes database and Redis integration smoke checks when services are configured, plus a Supertest checkout flow.", "Tests use a fake payment adapter and make no Stripe calls."],
      },
      localRun: { es: "docker compose up --build", en: "docker compose up --build" },
    },
  },
  {
    slug: "go-shortener",
    title: { es: "Go Shortener: acortador de URLs en Go", en: "Go Shortener: URL Shortener in Go" },
    description: {
      es: "Acortador de URLs con redirecciones en caché (Redis), límite de tasa por ventana deslizante con script Lua, analítica de clics asíncrona por lotes y protección SSRF. Incluye métricas de Prometheus y un dashboard de Grafana en Compose.",
      en: "URL shortener with Redis-cached redirects, sliding-window rate limiting via a Lua script, asynchronous batched click analytics, and SSRF protection. Ships Prometheus metrics and a Grafana dashboard in Compose.",
    },
    stack: ["Go", "chi", "PostgreSQL", "Redis", "Prometheus", "Grafana", "Docker"],
    repoUrl: "https://github.com/JEHH97/go-shortener",
    demoUrl: "",
    demoKind: "live",
    demoNote: { es: "Puede tardar ~50 s en despertar", en: "May take ~50 s to wake up" },
    image: {
      src: "/projects/go-shortener.webp",
      width: 1200,
      height: 963,
      alt: { es: "Interfaz de Go Shortener para crear enlaces cortos y consultar estadísticas de clics", en: "Go Shortener interface for creating short links and viewing click statistics" },
    },
    detail: {
      problem: {
        es: "Los enlaces largos son difíciles de compartir y los equipos pueden necesitar métricas agregadas de redirección sin poner el trabajo analítico en la ruta crítica.",
        en: "Long links are awkward to share, and teams may need aggregate redirect activity without putting analytics work on the critical path.",
      },
      features: {
        es: ["API JSON y UI web embebida para crear enlaces cortos y consultar estadísticas agregadas.", "Redirecciones con caché Redis y escrituras de analítica por lotes en segundo plano.", "Límite de tasa por IP con ventana deslizante y script Lua atómico.", "Métricas Prometheus y dashboard de Grafana provisionado en Compose."],
        en: ["JSON API and embedded web UI for creating short links and viewing aggregate statistics.", "Redirects use Redis caching while analytics writes are batched asynchronously.", "Per-IP sliding-window rate limiting uses an atomic Lua script.", "Prometheus metrics and a Grafana dashboard are provisioned in Compose."],
      },
      architecture: [
        { es: { title: "Cliente y API Go", description: "El cliente usa la API HTTP o la UI embebida para crear y resolver enlaces." }, en: { title: "Client and Go API", description: "Clients use the HTTP API or embedded UI to create and resolve links." } },
        { es: { title: "Validación y cache", description: "La política de URL valida destinos; Redis almacena destinos y controla solicitudes." }, en: { title: "Validation and cache", description: "URL policy validates destinations; Redis stores destinations and limits requests." } },
        { es: { title: "Persistencia y analítica", description: "PostgreSQL guarda enlaces y agregados; un worker procesa eventos de clic en lotes." }, en: { title: "Persistence and analytics", description: "PostgreSQL stores links and aggregates; a worker batches click events." } },
        { es: { title: "Observabilidad", description: "Prometheus recolecta métricas que presenta el dashboard de Grafana." }, en: { title: "Observability", description: "Prometheus collects metrics surfaced in the Grafana dashboard." } },
      ],
      decisions: {
        es: ["Encolar eventos compactos de clic en un canal acotado y procesarlos por lotes fuera de la respuesta de redirección.", "Usar Lua en Redis para evaluar de forma atómica el límite de tasa de ventana deslizante entre instancias.", "Validar destinos HTTP(S), limitar longitud y rechazar direcciones privadas, locales o no globales.", "No guardar direcciones IP con los eventos de clic; agregar referer, familia de navegador y país cuando está disponible."],
        en: ["Queue compact click events in a bounded channel and batch them outside the redirect response path.", "Use Redis Lua to evaluate the sliding-window rate limit atomically across instances.", "Validate HTTP(S) destinations, cap URL length, and reject private, local, or non-global addresses.", "Do not store IP addresses with click events; aggregate referer, browser family, and country when available."],
      },
      quality: {
        es: ["make check ejecuta formato, vet, lint, pruebas, benchmark y escaneo de términos restringidos.", "Las pruebas unitarias de internal/domain tienen cobertura mínima de 70%.", "Las pruebas de integración opcionales se omiten si no están configuradas la base de datos y Redis; el benchmark de redirección es in-process, no una medición de red de extremo a extremo."],
        en: ["make check runs formatting, vet, lint, tests, a benchmark, and a restricted-content scan.", "Unit tests for internal/domain enforce at least 70% coverage.", "Optional integration tests skip unless PostgreSQL and Redis are configured; the redirect benchmark is in-process, not an end-to-end network measurement."],
      },
      localRun: { es: "docker compose up --build", en: "docker compose up --build" },
    },
  },
];

export const otherProjects = [
  {
    title: { es: "API REST modular de gestión de usuarios", en: "Modular User Management REST API" },
    description: {
      es: "API con capas de controladores, servicios y rutas, validación estricta de datos y errores estructurados. Incluye colecciones Postman con contratos para CRUD, casos límite y entradas inválidas.",
      en: "A layered API with controllers, services, and routing, strict payload validation, and structured errors. Includes Postman contract collections for CRUD, edge cases, and invalid input.",
    },
    stack: ["TypeScript", "Node.js", "Express", "Postman"],
  },
  {
    title: { es: "Control de exoesqueleto y procesamiento de sensores (académico)", en: "Exoskeleton Control & Sensor Signal Processing (academic)" },
    description: {
      es: "Lógica de control, adquisición multisensor y procesamiento de señales en tiempo real; presentado en un encuentro universitario de ciencia y tecnología.",
      en: "Control logic, multi-sensor acquisition, and real-time signal processing; presented at a university science and technology encounter.",
    },
    stack: ["C++", "Python", "MATLAB/Simulink"],
  },
] as const;

export const allProjects = [...publicProjects, ...caseStudies] as const;
