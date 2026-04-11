# Plan de Mejoras del Sitio Web - DuocUC Online

## Resumen Ejecutivo

Este documento presenta un plan estructurado para enriquecer el sitio web educativo utilizando la documentación extensiva creada para:
1. **Analista Programador Computacional (APC)** - 20 meses (10 bimestres)
2. **Ingeniería en Desarrollo de Software (IDS)** - 34 meses (17 bimestres)

---

## Parte 1: Auditoría del Estado Actual

### 1.1 Estructura de Páginas

| Página | Archivo | Descripción Actual | Estado |
|--------|---------|-------------------|--------|
| Inicio | `inicio/index.astro` | Hero principal, ecosystem hexagonal, plan de estudios visual, stats | ✅ Completo |
| Stack Tecnológico | `stack.astro` | TechStack2025 con selector de fuentes (SO/Octoverse/TIOBE), 120+ tecnologías | ✅ Completo |
| Arquitectura | `arquitectura.astro` | DataPipeline (18 modos), ArchitectureSection, ScrumFramework | ✅ Completo |
| Recursos | `recursos.astro` | 16+ herramientas interactivas, AI tools, videos, certificaciones | ✅ Completo |
| Proyectos | `proyectos.astro` | Hub con tabs para estudio y trabajo | ✅ Completo |

### 1.2 Componentes Principales

#### A. Contenido Educativo Core
| Componente | Contenido Actual | Oportunidad de Mejora |
|------------|-----------------|----------------------|
| `PlanEstudiosHero.astro` | 17 bimestres con tooltips de asignaturas | Agregar objetivos de aprendizaje por bimestre |
| `BimestresSection.astro` | Cards con asignaturas y tecnologías | Agregar competencias específicas |
| `LearningRoadmap.astro` | 5 fases genéricas | Alinear con documentación oficial APC |
| `CapstoneProjects.astro` | 9 proyectos por nivel | Expandir con proyectos específicos por asignatura |
| `CodeSnippets.astro` | Python, Java, SQL, JS básicos | Agregar ejemplos de cada asignatura |

#### B. Fundamentos de Ingeniería de Software (En DataPipeline)
| Modo | Contenido Actual | Documentación Disponible |
|------|-----------------|-------------------------|
| OOP | 4 pilares básicos | APC: POO detallado con Java + SOLID |
| Functional | Conceptos básicos | APC: Paradigmas funcionales |
| SOLID | 5 principios | APC/IDS: Ejemplos con código |
| Clean Code | Prácticas generales | APC/IDS: Guía completa Uncle Bob |
| Testing | Pirámide básica | APC: TDD/BDD + IDS: Contract Testing |
| GoF Patterns | Lista de 23 | IDS: Implementaciones detalladas |
| DSA | Conceptos básicos | APC: Big O, estructuras, algoritmos |
| Security | OWASP básico | IDS: OWASP Top 10 detallado |

#### C. Arquitectura y DevOps (ArchitectureSection)
| Patrón | Estado | Oportunidad |
|--------|--------|-------------|
| Microservices | ✅ Diagrama | Agregar comunicación inter-servicio |
| Clean Architecture | ✅ Capas | Agregar ejemplos de código |
| CI/CD Pipeline | ✅ Visualización | Detallar stages específicos |
| Medallion | ✅ Bronze/Silver/Gold | Agregar ejemplos dbt |
| Lakehouse | ✅ Diagrama | Agregar Delta Lake vs Iceberg |
| Hexagonal | ✅ Básico | Expandir Ports & Adapters |
| Event-Driven | ✅ Básico | Agregar Event Sourcing |
| Layered | ✅ N-Tier | Agregar validación por capa |

### 1.3 Herramientas Interactivas (Recursos)

| Herramienta | Estado | Mejora Potencial |
|-------------|--------|-----------------|
| Gantt Generator | ✅ Funcional | Agregar templates por bimestre |
| SQL Builder | ✅ Funcional | Agregar ejercicios de práctica |
| Password Generator | ✅ Funcional | - |
| Quiz Generator | 100+ preguntas | Expandir con preguntas por asignatura |
| Terminal Demo | 6 sesiones | Agregar comandos por tecnología |

---

## Parte 2: Plan de Mejoras con Documentación APC

### Fuente: `Analista-Programador-Computacional-Guia-Completa.md`

### 2.1 Mejoras Prioritarias (Alta)

#### 2.1.1 Enriquecer `LearningRoadmap.astro`
**Actual**: 5 fases genéricas
**Mejora**: Alinear con las 10 bimestres oficiales

```
Fase 1 (B01-B02): Fundamentos
- Lógica de programación y algoritmos
- Modelamiento de datos (ER, normalización)
- Introducción a POO con Java
- Cloud Computing básico (IaaS/PaaS/SaaS)

Fase 2 (B03-B04): POO y SQL
- POO avanzado (herencia, polimorfismo, interfaces)
- Patrones de diseño básicos
- SQL avanzado (JOINs, subconsultas, vistas)
- DevOps básico (Git, Docker, CI/CD)

Fase 3 (B05-B06): Backend
- PL/SQL y procedimientos almacenados
- Desarrollo Cloud Native
- APIs REST con Spring Boot
- Metodologías ágiles (Scrum, Kanban)

Fase 4 (B07-B08): Arquitectura
- Microservicios y API Gateway
- Arquitectura de software
- Frontend con React/Angular
- Seguridad (autenticación, JWT)

Fase 5 (B09-B10): Especialización
- Frontend avanzado
- Desarrollo móvil (React Native/Flutter)
- Proyecto integrador
- Preparación para el campo laboral
```

#### 2.1.2 Enriquecer `CodeSnippets.astro`
**Agregar ejemplos de la documentación APC**:

| Lenguaje | Snippets a Agregar |
|----------|-------------------|
| Python | Control de flujo, funciones, clases, manejo archivos |
| Java | POO completo (4 pilares), colecciones, excepciones |
| SQL | JOINs, subconsultas, procedimientos, triggers |
| JavaScript | DOM, fetch API, async/await, módulos ES6 |

**Código de ejemplo POO Java** (de la guía APC):
```java
public class Vehiculo {
    private String marca;
    protected int velocidad;

    public void acelerar(int incremento) {
        this.velocidad += incremento;
    }
}

public class Auto extends Vehiculo {
    private int numPuertas;

    @Override
    public void acelerar(int incremento) {
        super.acelerar(incremento * 2);
    }
}
```

#### 2.1.3 Enriquecer `CapstoneProjects.astro`
**Agregar proyectos por asignatura**:

| Bimestre | Proyecto Sugerido | Tecnologías |
|----------|------------------|-------------|
| B01-B02 | Sistema de Gestión de Inventario CLI | Python, JSON, SQLite |
| B03-B04 | CRUD con POO y Base de Datos | Java, PostgreSQL, JDBC |
| B05-B06 | API REST de E-commerce | Spring Boot, JWT, Docker |
| B07-B08 | Microservicios con Gateway | Spring Cloud, Kubernetes |
| B09-B10 | App Móvil Fullstack | React Native, Firebase |

#### 2.1.4 Enriquecer Modos OOP/SOLID en `DataPipeline.astro`
**Agregar contenido de la documentación APC**:

**OOP - 4 Pilares Detallados**:
1. **Encapsulamiento**: Modificadores de acceso, getters/setters, validación
2. **Herencia**: extends, super(), sobrescritura de métodos
3. **Polimorfismo**: Tiempo de compilación (overloading), tiempo de ejecución (overriding)
4. **Abstracción**: Clases abstractas vs interfaces

**SOLID - Ejemplos Prácticos**:
1. **SRP**: Una clase = Una responsabilidad
2. **OCP**: Abierto para extensión, cerrado para modificación
3. **LSP**: Subtipos sustituibles por tipos base
4. **ISP**: Interfaces específicas mejor que generales
5. **DIP**: Depender de abstracciones, no implementaciones

### 2.2 Mejoras Secundarias (Media)

#### 2.2.1 Enriquecer `FAQSection.astro`
**Agregar preguntas específicas del programa APC**:

1. ¿Cuál es la diferencia entre la modalidad Online y Presencial?
2. ¿Qué tecnologías aprenderé en los primeros 4 bimestres?
3. ¿Cómo funciona la salida intermedia como Programador de Aplicaciones?
4. ¿Qué certificaciones puedo obtener durante la carrera?
5. ¿Cuáles son los requisitos para el Taller de Título?
6. ¿El programa incluye práctica profesional?
7. ¿Qué proyectos construiré para mi portafolio?
8. ¿Cómo es el campo laboral para un Analista Programador?

#### 2.2.2 Enriquecer `QuizGeneratorSection.astro`
**Agregar categorías específicas APC**:

| Categoría | Preguntas Sugeridas |
|-----------|-------------------|
| Fundamentos Python | Variables, control flujo, funciones |
| POO con Java | Clases, herencia, polimorfismo |
| SQL Básico | SELECT, WHERE, JOINs |
| SQL Avanzado | Subconsultas, procedimientos |
| DevOps Básico | Git, Docker, CI/CD |
| Cloud Computing | IaaS, PaaS, SaaS, servicios AWS/Azure |
| Metodologías Ágiles | Scrum, Kanban, roles |
| Frontend Básico | HTML, CSS, JavaScript |

#### 2.2.3 Enriquecer Tooltips de Asignaturas
**En `PlanEstudiosHero.astro`**: Agregar objetivos de aprendizaje y competencias por asignatura

### 2.3 Mejoras Opcionales (Baja)

#### 2.3.1 Nueva Sección: Campo Laboral
**Crear componente `CampoLaboralSection.astro`**:
- Roles: Desarrollador Backend/Frontend/Fullstack
- Salarios promedio en Chile
- Empresas que contratan
- Habilidades más demandadas

#### 2.3.2 Nueva Sección: Certificaciones Recomendadas APC
**Expandir `CertificationsSection.astro`**:
- Oracle Certified Associate (Java)
- AWS Cloud Practitioner
- Docker Certified Associate
- Scrum Foundation (SF)

---

## Parte 3: Plan de Mejoras con Documentación IDS

### Fuente: `Ingenieria-Desarrollo-Software-Guia-Completa.md`

### 3.1 Mejoras Prioritarias (Alta)

#### 3.1.1 Expandir `LearningRoadmap.astro` con Año 3 y 4

```
Año 3 - Ingeniería (B11-B14):
- Desarrollo Fullstack avanzado (I, II, III)
- Bases de datos aplicadas
- Cloud Computing empresarial
- DevOps y automatización
- Desarrollo móvil multiplataforma
- Cloud Native avanzado

Año 4 - Especialización (B15-B17):
- Cloud Native II
- Seguridad y Calidad de Software
- Evaluación y Gestión de Proyectos
- Ética Profesional
- Taller de Título (Ingeniería)
```

#### 3.1.2 Enriquecer `ArchitectureSection.astro`
**Agregar patrones avanzados de la documentación IDS**:

| Patrón | Contenido a Agregar |
|--------|-------------------|
| Clean Architecture | Capas detalladas: Entities, Use Cases, Interface Adapters, Frameworks |
| Hexagonal | Ports (interfaces) + Adapters (implementaciones) |
| DDD | Bounded Contexts, Aggregates, Value Objects, Domain Events |
| Event Sourcing | Event Store, Snapshots, Projections |
| CQRS | Command side vs Query side |

**Diagrama Clean Architecture**:
```
┌─────────────────────────────────────────────┐
│              Frameworks & Drivers           │
│  (Web, UI, DB, External Interfaces)         │
├─────────────────────────────────────────────┤
│            Interface Adapters               │
│  (Controllers, Gateways, Presenters)        │
├─────────────────────────────────────────────┤
│            Application Business             │
│  (Use Cases / Application Services)         │
├─────────────────────────────────────────────┤
│              Enterprise Business            │
│  (Entities / Domain Models)                 │
└─────────────────────────────────────────────┘
```

#### 3.1.3 Expandir `DataPipeline.astro` - Modos Avanzados
**Agregar contenido de IDS**:

**Design Patterns (GoF) Detallados**:
- **Creacionales**: Factory, Abstract Factory, Builder, Singleton, Prototype
- **Estructurales**: Adapter, Bridge, Composite, Decorator, Facade, Proxy
- **Comportamiento**: Strategy, Observer, Command, Chain of Responsibility, State

**Testing Avanzado**:
- Contract Testing (Pact)
- Mutation Testing
- Property-Based Testing
- Performance Testing (k6)
- Chaos Engineering

**Security Avanzado**:
- OWASP Top 10 2024 detallado
- Autenticación OAuth 2.0 / OIDC
- Zero Trust Architecture
- API Security (rate limiting, input validation)

#### 3.1.4 Nueva Sección: Data Engineering
**Crear/Expandir contenido de ingeniería de datos**:

- ETL vs ELT
- Data Lakes vs Data Warehouses vs Lakehouses
- Apache Spark para procesamiento
- Apache Airflow para orquestación
- dbt para transformaciones SQL
- Delta Lake / Apache Iceberg
- Data Quality (Great Expectations)
- Data Observability (Monte Carlo)

### 3.2 Mejoras Secundarias (Media)

#### 3.2.1 Expandir `CapstoneProjects.astro`
**Agregar proyectos nivel Ingeniería (B11-B17)**:

| Nivel | Proyecto | Tecnologías |
|-------|----------|-------------|
| Expert | Sistema de Microservicios E2E | Spring Cloud, K8s, Istio |
| Expert | Data Pipeline con Lakehouse | Airflow, Spark, Delta Lake |
| Expert | Plataforma SaaS Multi-tenant | Next.js, NestJS, AWS |
| Expert | App Móvil con Backend Serverless | Flutter, AWS Lambda, DynamoDB |
| Master | Sistema con Event Sourcing | Axon, Kafka, PostgreSQL |

#### 3.2.2 Enriquecer `QuizGeneratorSection.astro`
**Agregar categorías avanzadas IDS**:

| Categoría | Preguntas |
|-----------|-----------|
| Arquitectura de Software | Clean, Hexagonal, DDD |
| Microservicios | Patrones, comunicación, resiliencia |
| DevOps Avanzado | Kubernetes, Terraform, GitOps |
| Cloud Native | Serverless, containers, service mesh |
| Data Engineering | ETL, Spark, Airflow, dbt |
| Seguridad Avanzada | OWASP, OAuth, Zero Trust |
| Gestión de Proyectos | PMI, estimación, métricas |

#### 3.2.3 Nueva Sección: AI/ML para Desarrolladores
**Crear componente `AIMLSection.astro`**:

- LangChain para aplicaciones con LLMs
- RAG (Retrieval Augmented Generation)
- Embeddings y búsqueda semántica
- OpenAI API / Anthropic API
- Prompting efectivo

### 3.3 Mejoras Opcionales (Baja)

#### 3.3.1 Nueva Sección: Gestión de Proyectos
**Crear `ProjectManagementSection.astro`**:
- Estimación de software
- Métricas de desarrollo
- Technical debt management
- Code review best practices
- Sprint planning y retrospectivas

#### 3.3.2 Expandir Certificaciones Nivel Ingeniero
- AWS Solutions Architect Professional
- Kubernetes CKA/CKAD
- Terraform Associate
- Snowflake SnowPro Core
- Databricks Data Engineer

---

## Parte 4: Roadmap de Implementación

### Fase 1: Mejoras APC (Semana 1-2)

| # | Tarea | Prioridad | Componente |
|---|-------|-----------|------------|
| 1 | Actualizar LearningRoadmap con 10 bimestres | Alta | LearningRoadmap.astro |
| 2 | Agregar snippets de código POO Java | Alta | CodeSnippets.astro |
| 3 | Enriquecer modo OOP en DataPipeline | Alta | DataPipeline.astro |
| 4 | Enriquecer modo SOLID en DataPipeline | Alta | DataPipeline.astro |
| 5 | Agregar proyectos por bimestre B01-B10 | Alta | CapstoneProjects.astro |
| 6 | Expandir FAQ con preguntas APC | Media | FAQSection.astro |
| 7 | Agregar quizzes APC | Media | QuizGeneratorSection.astro |

### Fase 2: Mejoras IDS (Semana 3-4)

| # | Tarea | Prioridad | Componente |
|---|-------|-----------|------------|
| 1 | Expandir LearningRoadmap B11-B17 | Alta | LearningRoadmap.astro |
| 2 | Agregar Clean/Hexagonal Architecture | Alta | ArchitectureSection.astro |
| 3 | Agregar DDD/Event Sourcing/CQRS | Alta | ArchitectureSection.astro |
| 4 | Expandir Design Patterns (GoF) | Alta | DataPipeline.astro |
| 5 | Agregar Testing Avanzado | Alta | DataPipeline.astro |
| 6 | Agregar proyectos B11-B17 | Alta | CapstoneProjects.astro |
| 7 | Agregar quizzes IDS | Media | QuizGeneratorSection.astro |
| 8 | Expandir certificaciones nivel ingeniero | Media | CertificationsSection.astro |

### Fase 3: Nuevas Secciones (Semana 5+)

| # | Tarea | Prioridad | Nuevo Componente |
|---|-------|-----------|-----------------|
| 1 | Crear sección Campo Laboral | Baja | CampoLaboralSection.astro |
| 2 | Crear sección AI/ML para Developers | Baja | AIMLSection.astro |
| 3 | Crear sección Gestión de Proyectos | Baja | ProjectManagementSection.astro |

---

## Parte 5: Métricas de Éxito

### Contenido Educativo
- [ ] 100% de asignaturas con tooltips enriquecidos
- [ ] 50+ snippets de código por lenguaje
- [ ] 200+ preguntas de quiz
- [ ] 20+ proyectos capstone documentados

### Arquitectura y Patrones
- [ ] 10+ patrones de arquitectura documentados
- [ ] 23 patrones GoF con ejemplos
- [ ] 5+ arquitecturas de datos visualizadas

### Interactividad
- [ ] Templates de Gantt por bimestre
- [ ] Ejercicios SQL por dificultad
- [ ] Quizzes por asignatura

---

## Anexo: Referencias de Documentación

### Documentación APC
- Archivo: `resources/documentos/Analista-Programador-Computacional-Guia-Completa.md`
- Secciones clave:
  - POO con Java (4 pilares + SOLID)
  - Bases de Datos SQL
  - Desarrollo Frontend
  - Desarrollo Backend
  - Cloud Computing
  - Metodologías Ágiles
  - Testing

### Documentación IDS
- Archivo: `resources/documentos/Ingenieria-Desarrollo-Software-Guia-Completa.md`
- Secciones clave:
  - Arquitectura de Software (Clean, Hexagonal, DDD)
  - Patrones de Diseño (23 GoF)
  - Microservicios
  - DevOps Avanzado
  - Data Engineering
  - AI/ML
  - Seguridad Avanzada
  - Gestión de Proyectos

---

*Documento generado para el proyecto DuocUC Online - Escuela de Informática*
*Modalidad: 100% Online*
